sync:
	yarn export
	aws s3 --profile elipse sync ./out/ s3://ailalia-web-website-root-042a92e --delete
	aws cloudfront --profile elipse create-invalidation --distribution-id E1D6MDKZXADNJF --paths "/*"

sync-sb:
	yarn build-storybook
	aws s3 --profile elipse sync ./storybook-static/ s3://ailalia-sb-website-root-07a528e --delete
	aws cloudfront --profile elipse create-invalidation --distribution-id E2UJ3FS6E303EH --paths "/*"
