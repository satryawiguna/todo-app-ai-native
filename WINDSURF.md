# Windsurf Instructions — Todo Frontend

## Project
Todo App frontend: Next.js 14 App Router + TypeScript + Tailwind CSS + shadcn/ui.
Solo developer + occasional collaborator. Deployment target: Vercel.

## Cascade AI — Baca File Ini Terlebih Dahulu
Sebelum generate atau modifikasi kode apapun, baca file berikut:
1. `.github/copilot-instructions.md` — semua coding rules dan folder structure
2. `../todo-shared-ai-native/architecture/api-contracts.md` — API contracts
3. `../todo-shared-ai-native/business/business-rules.md` — business rules

## Key Rules (Ringkasan)
- Next.js App Router — tidak ada `pages/` directory
- TypeScript strict — tidak ada `any`
- Tailwind + `cn()` untuk styling
- Feature-based folder structure di `src/features/`
- Service functions di `src/services/` untuk semua API call
- TanStack Query untuk server state, Zustand untuk client state
- Token auth: access token di memory, refresh token di httpOnly cookie

## Shared Context
Business rules, API contracts, dan standards lintas-repo ada di:
`../todo-shared-ai-native/`
