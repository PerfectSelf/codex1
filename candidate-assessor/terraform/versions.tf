#-----------------------------------------------
## Terraform
#-----------------------------------------------
terraform {
  required_version = "~> 1.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 6.0"
    }
    local = {
      source  = "hashicorp/local"
      version = "~> 2.0"
    }
    archive = {
      source  = "hashicorp/archive"
      version = "~> 2.0"
    }
    random = {
      source  = "hashicorp/random"
      version = "~> 3.0"
    }
  }
  backend "s3" {
    encrypt = "true"
    region  = "eu-central-1"
  }
}

#-----------------------------------------------
## Providers
#-----------------------------------------------
provider "aws" {
  default_tags {
    tags = {
      Project     = "fifthrow"
      App         = "5r-landingpage-cent-sight"
      ManagedBy   = "Terraform"
      Environment = var.project_environment
    }
  }
}
