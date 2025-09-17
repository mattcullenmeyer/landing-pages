# Terraform Readme

## Create Route 53 hosted zone

You need to first create a hosted zone manually

### AWS Console

- Route 53 >> Create hosted zone
- Domain name: eg, planningdb.com
- Type: Public hosted zone
- Create hosted zone

### Namecheap

- Domain list >> select domain
- Nameservers >> Custom DNS >> add 4 namservers (NS) records from AWS Route 53 hosted zone
- There's a tiny green checkmark in the Nameservers section you'll need to click to save

## Helpful commands

`terraform version`  
`brew install tfenv`  
`tfenv list`  
`tfenv install latest`  
`tfenv use <version>`

`aws configure list-profiles` # list profiles  
`aws configure list --profile {profile_name}` # print configuration info of name profile  
`aws configure --profile {profile_name}` # configure a new profile

`terraform init`  
`terraform fmt`  
`terraform validate`  
`terraform plan -out=tfplan`  
`terraform apply tfplan`

You may need to invalidate Cloudfront for certain changes to take effect
