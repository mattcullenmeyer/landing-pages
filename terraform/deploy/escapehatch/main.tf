module "deploy" {
  source           = "../../resources"
  domain_name      = "escapehatch.tech"
  hosted_zone_name = "escapehatch.tech"
  name             = "escapehatch"
}
