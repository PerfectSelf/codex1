#-----------------------------------------------
## ACM
#-----------------------------------------------
data "aws_route53_zone" "main" {
  name         = var.project_domain
  private_zone = false
}

module "acm_cdn" {
  source  = "terraform-aws-modules/acm/aws"
  version = "6.1.0"

  wait_for_validation = true

  domain_name               = "www.${data.aws_route53_zone.main.name}"
  subject_alternative_names = [data.aws_route53_zone.main.name]
  validation_method         = "DNS"
  zone_id                   = data.aws_route53_zone.main.zone_id
}

#-----------------------------------------------
# CDN with CloudFront and S3
#-----------------------------------------------
data "aws_cloudfront_cache_policy" "caching_optimized" {
  name = "Managed-CachingOptimized"
}

module "app" {
  source  = "cloudposse/cloudfront-s3-cdn/aws"
  version = "1.0.1"

  allow_ssl_requests_only               = true
  cloudfront_access_log_include_cookies = false
  cloudfront_access_logging_enabled     = true
  compress                              = true
  dns_alias_enabled                     = true

  acm_certificate_arn          = module.acm_cdn.acm_certificate_arn
  aliases                      = ["www.${var.project_domain}"]
  cloudfront_access_log_prefix = "cloudfront-logs/"
  default_root_object          = "index.html"
  name                         = "centsight"
  parent_zone_name             = var.project_domain
  stage                        = var.project_environment
  web_acl_id                   = var.waf_web_acl_arn
  origin_access_type           = "origin_access_control"

  # CloudFront Behavior and Origin settings
  cache_policy_id = data.aws_cloudfront_cache_policy.caching_optimized.id
  allowed_methods = ["GET", "HEAD", "OPTIONS"]
  cached_methods  = ["GET", "HEAD"]

  custom_error_response = [
    {
      error_code            = 403
      response_code         = 200
      response_page_path    = "/index.html"
      error_caching_min_ttl = 0
    },
    {
      error_code            = 404
      response_code         = 200
      response_page_path    = "/index.html"
      error_caching_min_ttl = 0
    }
  ]
}

#-----------------------------------------------
## CDN Redirect from non-www to www
#-----------------------------------------------
#---------------------------------
### S3 bucket
#---------------------------------

module "s3_redirect" {
  source  = "terraform-aws-modules/s3-bucket/aws"
  version = "5.7.0"

  bucket        = "${var.project_environment}-centsight-redirect"
  force_destroy = true

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true

  versioning = {
    enabled = false
  }

  control_object_ownership = true
  object_ownership         = "BucketOwnerEnforced"

  website = {
    redirect_all_requests_to = {
      host_name = "www.${var.project_domain}"
      protocol  = "https"
    }
  }
}

#---------------------------------
### CloudFront distribution
#---------------------------------

module "cdn_redirect" {
  source  = "terraform-aws-modules/cloudfront/aws"
  version = "5.0.0"

  aliases             = [var.project_domain]
  comment             = "Redirection from ${var.project_domain} to www.${var.project_domain}"
  enabled             = true
  is_ipv6_enabled     = true
  http_version        = "http2and3"
  price_class         = "PriceClass_100"
  retain_on_delete    = false
  wait_for_deployment = true

  viewer_certificate = {
    acm_certificate_arn            = module.acm_cdn.acm_certificate_arn
    cloudfront_default_certificate = false
    minimum_protocol_version       = "TLSv1.2_2021"
    ssl_support_method             = "sni-only"
  }

  origin = {
    s3 = {
      domain_name         = module.s3_redirect.s3_bucket_website_endpoint
      origin_id           = module.s3_redirect.s3_bucket_id
      connection_attempts = 3
      connection_timeout  = 10
      custom_origin_config = {
        http_port                = 80
        https_port               = 443
        origin_protocol_policy   = "http-only"
        origin_ssl_protocols     = ["TLSv1", "TLSv1.1", "TLSv1.2"]
        origin_keepalive_timeout = 5
        origin_read_timeout      = 30
      }
    }
  }

  default_cache_behavior = {
    allowed_methods        = ["GET", "HEAD"]
    cached_methods         = ["GET", "HEAD"]
    target_origin_id       = module.s3_redirect.s3_bucket_id
    viewer_protocol_policy = "redirect-to-https"
    compress               = true
    use_forwarded_values   = true
    query_string           = false
  }

  geo_restriction = {
    restriction_type = "none"
  }
}

#-----------------------
#### Route53 record
#-----------------------
module "route53_redirect" {
  source  = "terraform-aws-modules/route53/aws"
  version = "6.1.0"

  create_zone = false

  name = data.aws_route53_zone.main.name

  records = {
    cloudfront_redirect_ipv4 = {
      full_name = data.aws_route53_zone.main.name
      type      = "A"
      alias = {
        name    = module.cdn_redirect.cloudfront_distribution_domain_name
        zone_id = module.cdn_redirect.cloudfront_distribution_hosted_zone_id
      }
    }
    cloudfront_redirect_ipv6 = {
      full_name = data.aws_route53_zone.main.name
      type      = "AAAA"
      alias = {
        name    = module.cdn_redirect.cloudfront_distribution_domain_name
        zone_id = module.cdn_redirect.cloudfront_distribution_hosted_zone_id
      }
    }
  }
}
