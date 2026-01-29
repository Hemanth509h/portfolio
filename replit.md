# DevPortfolio

## Overview

A modern developer portfolio website built with React, Express, and PostgreSQL. The application features a public-facing portfolio page showcasing skills, projects, and a contact form, along with a protected admin dashboard for content management.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight alternative to React Router)
- **State Management**: TanStack Query for server state
- **Styling**: Tailwind CSS with CSS variables for theming
- **UI Components**: shadcn/ui component library (Radix UI primitives)
- **Animations**: Framer Motion for page transitions and scroll effects
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Framework**: Express 5 on Node.js
- **API Design**: RESTful endpoints under `/api/*`
- **Authentication**: Passport.js with local strategy, session-based auth
- **Session Storage**: PostgreSQL-backed sessions via connect-pg-simple

### Data Layer
- **Database**: PostgreSQL
- **ORM**: Drizzle ORM with drizzle-zod for schema validation
- **Schema Location**: `shared/schema.ts` (shared between client and server)
- **Migrations**: Drizzle Kit with `db:push` command

### Build System
- **Frontend Bundler**: Vite with React plugin
- **Backend Bundler**: esbuild for production builds
- **Development**: tsx for running TypeScript directly
- **Output**: Combined build outputs to `dist/` directory

### Project Structure
```
├── client/           # Frontend React application
│   └── src/
│       ├── components/   # React components including shadcn/ui
│       ├── hooks/        # Custom React hooks
│       ├── lib/          # Utility functions
│       └── pages/        # Route pages
├── server/           # Backend Express application
│   ├── routes.ts     # API route definitions
│   ├── storage.ts    # Database access layer
│   └── auth.ts       # Authentication setup
├── shared/           # Shared code between client/server
│   ├── schema.ts     # Drizzle database schema
│   └── routes.ts     # API contract definitions
└── migrations/       # Database migrations
```

### Key Design Patterns
- **Shared Schema**: Database types and validation schemas are shared between frontend and backend
- **Type-Safe API**: API contracts defined in `shared/routes.ts` with Zod schemas
- **Component Library**: Uses shadcn/ui with customizable Tailwind-based components
- **Dark Mode Default**: Application defaults to dark theme with CSS variables

## External Dependencies

### Database
- **PostgreSQL**: Primary database, connection via `DATABASE_URL` environment variable
- **Session Store**: PostgreSQL-backed session storage for authentication

### Key NPM Packages
- `drizzle-orm` / `drizzle-kit`: Database ORM and migration tooling
- `@tanstack/react-query`: Server state management
- `passport` / `passport-local`: Authentication
- `express-session` / `connect-pg-simple`: Session management
- `zod` / `drizzle-zod`: Runtime validation
- `framer-motion`: Animations
- Radix UI primitives: Accessible UI components

### Environment Variables Required
- `DATABASE_URL`: PostgreSQL connection string
- `SESSION_SECRET`: Secret for session encryption (defaults to temp value in development)