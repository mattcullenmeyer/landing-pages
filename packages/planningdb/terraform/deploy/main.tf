module "deploy" {
  source           = "../resources"
  domain_name      = "planningdb.com"
  hosted_zone_name = "planningdb.com"
  name             = "planningdb"
}
