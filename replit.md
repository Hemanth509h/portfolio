# Workspace

## Overview

pnpm workspace monorepo. Contains the Developer Portfolio web app and its backend API server.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **Frontend**: React + Vite (JavaScript / JSX)
- **Backend**: Express 5 (TypeScript)

## Structure

```text
artifacts-monorepo/
├── artifacts/              # Deployable applications
│   ├── portfolio/          # React portfolio site (JSX)
│   └── api-server/         # Express API server (TypeScript)
├── pnpm-workspace.yaml     # pnpm workspace config
├── tsconfig.base.json      # Shared TS base config
└── package.json            # Root package
```

## Artifacts

### `artifacts/portfolio` (`@workspace/portfolio`)

Pure JavaScript React + Vite portfolio site. No TypeScript — all source files are `.jsx` / `.js`.

- Entry: `index.html` → `src/main.jsx`
- Pages: `src/pages/`
- Components: `src/components/`
- Sections: `src/components/sections/` (Hero, About, Skills, Projects, GitHubProjects, Experience, Contact)
- Dev: `pnpm --filter @workspace/portfolio run dev`
- Config: `vite.config.js`

### `artifacts/api-server` (`@workspace/api-server`)

Express 5 API server (TypeScript). Serves routes under `/api`.

- Entry: `src/index.ts`
- Routes: `src/routes/`
- Dev: `pnpm --filter @workspace/api-server run dev`
