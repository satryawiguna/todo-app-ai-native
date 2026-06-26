# Todo App — Frontend

Todo App frontend built with Next.js 14 App Router, TypeScript, Tailwind CSS, and shadcn/ui.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS + shadcn/ui
- **State**: Zustand (global), TanStack Query v5 (server state)
- **HTTP Client**: Axios dengan interceptor untuk JWT
- **Form**: React Hook Form + Zod
- **Testing**: Vitest + React Testing Library + Playwright (e2e)

## Shared Context
Business rules, API contracts, dan standards ada di repo terpisah:
`todo-shared-ai-native` — single source of truth lintas-repo.

## AI Context Files
- `.github/copilot-instructions.md` — GitHub Copilot instructions
- `.github/instructions/` — Scoped instructions per file type
- `.github/prompts/` — Reusable prompt files
- `CLAUDE.md` — Claude instructions
- `AGENTS.md` — Agent instructions (Cursor, Windsurf, dll)
- `WINDSURF.md` — Windsurf Cascade instructions
- `.cursor/rules/` — Cursor IDE rules
