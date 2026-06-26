# GitHub Copilot Instructions — Todo Frontend

## Project
Todo App frontend. Next.js 14 App Router, TypeScript, Tailwind CSS, shadcn/ui.
Solo developer + occasional collaborator. Target: production deployment di Vercel.

## Tech Stack
- Framework: Next.js 14 (App Router)
- Language: TypeScript (strict mode)
- Styling: Tailwind CSS + shadcn/ui
- State: Zustand (global), TanStack Query v5 (server state)
- HTTP Client: Axios dengan interceptor untuk JWT
- Form: React Hook Form + Zod
- Testing: Vitest + React Testing Library + Playwright (e2e)

## Shared Context
Untuk business rules, API contracts, dan standards, lihat: `../todo-shared-ai-native/`
Folder tersebut adalah source of truth lintas-repo.

## Code Style
- Gunakan functional component + hooks, tidak ada class component
- Semua file komponen menggunakan `.tsx`, utility menggunakan `.ts`
- Named export untuk komponen, default export hanya untuk page
- Props interface selalu didefinisikan eksplisit, tidak menggunakan `any`
- Path alias: `@/` untuk `src/`

## Component Rules
- Komponen UI murni di `src/components/ui/` (dari shadcn, jangan dimodifikasi langsung)
- Komponen domain di `src/components/` (contoh: TaskCard, TaskForm)
- Setiap komponen yang kompleks wajib punya file test
- Gunakan `cn()` dari `lib/utils` untuk conditional className

## Folder Structure
```
src/
├── app/              # Next.js App Router pages & layouts
├── components/       # Reusable components
│   └── ui/           # shadcn/ui base components
├── features/         # Feature-based modules (task, auth)
│   └── [feature]/
│       ├── components/
│       ├── hooks/
│       ├── stores/
│       └── types/
├── lib/              # Utilities, axios instance, zod schemas
├── services/         # API call functions
└── types/            # Global TypeScript types
```

## API Integration
- Base URL dari `NEXT_PUBLIC_API_URL` environment variable
- Semua API call melalui service functions di `src/services/`
- Error handling menggunakan format RFC 7807 dari backend
- JWT disimpan di memory (access token) dan httpOnly cookie (refresh token)

## Do NOT
- Jangan gunakan `any` type
- Jangan fetch langsung di dalam komponen, gunakan custom hook atau service
- Jangan hardcode API URL
- Jangan gunakan `localStorage` untuk menyimpan token
- Jangan skip validasi form
- Jangan modifikasi file di `src/components/ui/` secara langsung
