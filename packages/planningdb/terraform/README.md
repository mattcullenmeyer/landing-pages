# Terraform Readme

## Create Route 53 hosted zone

You need to first create a hosted zone manually  

### AWS Console

- Route 53 >> Create hosted zone
- Domain name: planningdb.com
- Type: Public hosted zone
- Create hosted zone

### Namecheap

- Domain list >> select domain
- Nameservers >> Custom DNS >> add 4 namservers (NS) records from AWS Route 53 hosted zone

## Helpful commands

`terraform version`  
`brew install tfenv`  
`tfenv list`  
`tfenv install latest`  
`tfenv use <version>`

`aws configure list-profiles` # list profiles  
`aws configure list --profile {profile_name}` # print configuration info of name profile  
`aws configure --profile {profile_name}` # configure a new profile  

`cd terraform/deploy`  
`terraform init`  
`terraform fmt`  
`terraform validate`  
`terraform plan -out=tfplan`  
`terraform apply tfplan`
