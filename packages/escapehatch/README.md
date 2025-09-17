# Escapehatch

```bash
pnpm build
aws s3 sync out/ s3://escapehatch.tech --profile personal
aws cloudfront create-invalidation --distribution-id E341140MCJNRK6 --paths '/*' --profile personal
```
