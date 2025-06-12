# mandamcneal.com

This is the source code for my personal portfolio site, built with Next.js 15 App Router and deployed on Vercel. It uses SCSS Modules for styling and pulls content from a Contentful via GraphQL.

- Uses graphql-codegen to generate typed GraphQL queries from schema and documents
- Configured for Vercel Speed Insights and Analytics
- Site is auto-deployed on Vercel when commits to `main` or `develop` are made and when content is published or unpublished in Contentful via a webhook.

## Requirements

- Node v22.x
- yarn v4.9.2

## Installation

1. Copy .env.example, rename it to .env, fill in necessary values.
2. `yarn install` to install dependencies.
3. `yarn graphql-codegen:generate` to run graphql codegen.

## Scripts

```bash
yarn dev # Start local dev server
yarn build # Build for production
yarn start # Start production server
yarn lint # Run ESLint
yarn type-check # Run TypeScript type checker
yarn graphql-codegen:generate # Generate typed GraphQL queries
yarn graphql-codegen:watch # Watch mode for codegen
```

## Running the Site

Run `yarn dev` and open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
