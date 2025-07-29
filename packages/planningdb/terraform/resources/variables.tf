variable "hosted_zone_name" {
  type        = string
  description = "Name of hosted zone (eg zendog.site)"
}

variable "domain_name" {
  type        = string
  description = "Exact domain or subdomain for routing and SSL (eg api.zendog.site)"
}
