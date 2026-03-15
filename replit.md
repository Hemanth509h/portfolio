# Workspace

## Overview

npm workspace monorepo. Contains the Developer Portfolio web app and its backend API server.

## Stack

- **Monorepo tool**: npm workspaces
- **Node.js version**: 24
- **Package manager**: npm
- **Frontend**: React + Vite (JavaScript / JSX)
- **Backend**: Express 5 (TypeScript)

## Structure

```text
artifacts-monorepo/
├── artifacts/              # Deployable applications
│   ├── portfolio/          # React portfolio site (JSX)
│   └── api-server/         # Express API server (TypeScript)
├── pnpm-workspace.yaml     # pnpm workspace config (retained for workflow runner)
├── package.json            # Root package (npm workspaces)
├── package-lock.json       # npm lockfile
└── tsconfig.base.json      # Shared TS base config
```

## Artifacts

### `artifacts/portfolio` (`@workspace/portfolio`)

Pure JavaScript React + Vite portfolio site. No TypeScript — all source files are `.jsx` / `.js`.

- Entry: `index.html` → `src/main.jsx`
- Pages: `src/pages/`
- Components: `src/components/`
- Sections: `src/components/sections/` (Hero, About, Skills, Projects, GitHubProjects, Experience, Contact)
- Dev: `npm run dev -w @workspace/portfolio`
- Config: `vite.config.js`
- GitHub username placeholder: `GITHUB_USERNAME = "octocat"` in `src/components/sections/GitHubProjects.jsx`

### `artifacts/api-server` (`@workspace/api-server`)

Express 5 API server (TypeScript). Serves routes under `/api`.

- Entry: `src/index.ts`
- Routes: `src/routes/`
- Dev: `npm run dev -w @workspace/api-server`

## Package Management

Install all dependencies from root:

```bash
npm install
```

Add a dependency to a specific workspace:

```bash
npm install <pkg> -w @workspace/portfolio
```

## Notes

- All `catalog:` pnpm-specific version references have been replaced with real semver versions.
- `pnpm-workspace.yaml` is retained because the platform's internal workflow runner uses pnpm commands.
- `package-lock.json` is the authoritative lockfile for npm installs.
