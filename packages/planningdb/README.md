# PlanningDB

```bash
pnpm build  
aws s3 sync out/ s3://planningdb.com --profile personal
aws cloudfront create-invalidation --distribution-id E2VO661B5CLAVJ --paths '/*' --profile personal
```
