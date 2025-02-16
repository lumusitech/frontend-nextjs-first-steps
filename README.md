# First steps with Nextjs

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Config Eslint and Prettier with Google code styles - Use in all projects

1. Install dependencies

   ```bash
   pnpm i -D eslint-config-google eslint-plugin-prettier prettier eslint-config-prettier
   ```

2. Configuración de ESLint `eslint.config.mjs`

   ```typescript
   import { FlatCompat } from '@eslint/eslintrc';

   import { dirname } from 'path';
   import { fileURLToPath } from 'url';

   const __filename = fileURLToPath(import.meta.url);
   const__dirname = dirname(__filename);

   const compat = new FlatCompat({
     baseDirectory: __dirname,
   });

   const eslintConfig = [
     ...compat.extends(
       'next/core-web-vitals',
       'next/typescript',
       'google', // Google code styles
       'plugin:prettier/recommended' // recommended prettier
     ),
     ,
     {
       rules: {
         // ESLint custom rules here (if needed)
       },
     },
   ];

   export default eslintConfig;
   ```

3. Prettier config `.prettierrc.json`

   ```json
   {
     "semi": true,
     "trailingComma": "es5",
     "tabWidth": 2,
     "singleQuote": true,
     "printWidth": 80,
     "bracketSpacing": true
   }
   ```

4. Add `.prettierignore` (optional)

   ```txt
    node_modules
    .next
    .vscode
    dist
   ```

5. Vs Code integration

   ```json
   "editor.defaultFormatter": "esbenp.prettier-vscode",
   "editor.formatOnSave": true
   ```

6. Add Scripts to `package.json`

   ```json
   "scripts": {
     "format": "prettier --write .",
     "lint": "next lint",
     "lint:fix": "next lint --fix"
   }
   ```

## UI

Icons used - [Octicons](https://www.npmjs.com/package/@primer/octicons-react). To find the names of the available icons, please visit this [link](https://primer.style/foundations/icons)

## Docker

Docker is used for testing the performance of the application running on a server

The recommended Dockerfile from Next.js is available [here](https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile)

Add the standalone option to `next.config.ts` when deploying with Docker

```typescript
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
};

export default nextConfig;
```

**Note:** The default Next.js Dockerfile does not work correctly with pnpm. Consequently, npm is the preferred package manager for performance tests within this project's Docker setup.
