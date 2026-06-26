# Agent Instructions — Todo Frontend

## Project Overview
Todo App frontend. Next.js 14 App Router + TypeScript + Tailwind CSS + shadcn/ui.
Solo developer + occasional collaborator.

## Key Files to Read First (Urutan Prioritas)
1. `.github/copilot-instructions.md` — coding standards, folder structure, rules
2. `../todo-shared-ai-native/architecture/api-contracts.md` — API response format
3. `../todo-shared-ai-native/business/business-rules.md` — business rules & validasi
4. `src/lib/api-client.ts` — axios instance dan interceptor setup
5. `src/types/` — global TypeScript types

## Task Guides
| Task | Panduan |
|------|---------|
| Buat komponen baru | `.github/prompts/create-component.prompt.md` |
| Buat feature baru | `.github/prompts/create-feature.prompt.md` |
| Review PR | `.github/prompts/review-pr.prompt.md` |
| Tambah API call | `.github/instructions/api.instructions.md` |
| Tulis test | `.github/instructions/testing.instructions.md` |

## Folder Structure Quick Reference
```
src/
├── app/          → Next.js pages & layouts (App Router)
├── components/   → Shared components
│   └── ui/       → shadcn/ui (JANGAN dimodifikasi)
├── features/     → Feature modules (task, auth)
├── lib/          → Utilities, api-client, zod schemas
├── services/     → API call functions
└── types/        → Global TypeScript types
```

## Never Do
- Jangan modifikasi file di `src/components/ui/`
- Jangan gunakan `any` type
- Jangan hardcode URL, API key, atau credential apapun
- Jangan fetch API langsung di dalam komponen
- Jangan simpan sensitive data di localStorage
