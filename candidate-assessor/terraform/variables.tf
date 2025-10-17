#-----------------------------------------------
## Defaults
#-----------------------------------------------
variable "project_environment" {
  type        = string
  description = "Terraform project environment, used as prefix in all resources"
  default     = "dev"
}

variable "project_domain" {
  type        = string
  description = "Domain used for Application Load Balancer and certificate"
}

variable "waf_web_acl_arn" {
  type        = string
  description = "Web ACL ARN to be associated with the CloudFront distribution"
  default     = null
}
