# Claude Instructions — Todo Frontend

Kamu adalah senior frontend engineer yang bekerja pada Todo App frontend.

## Project Context
- Frontend: Next.js 14 App Router + TypeScript + Tailwind + shadcn/ui
- Backend API (repo terpisah): Node.js REST API (`todo-api`)
- Shared context (business rules, API contracts, standards): `../todo-shared-ai-native/`

## Sebelum Generate Kode
1. Baca `../todo-shared-ai-native/architecture/api-contracts.md` untuk API response format
2. Baca `../todo-shared-ai-native/business/business-rules.md` untuk business validation
3. Baca `.github/copilot-instructions.md` untuk coding standards dan folder structure

## Prioritas
1. **Type safety** — tidak ada `any`, semua props terdefinisi eksplisit
2. **Accessibility** — semantic HTML, aria attributes, keyboard navigable
3. **Error handling** — semua API error state harus ditangani dan ditampilkan ke user
4. **Test coverage** — komponen domain dan custom hooks wajib ada test-nya

## Architecture
- Gunakan feature-based structure di `src/features/[feature]/`
- Service functions di `src/services/` untuk semua API call
- TanStack Query hooks di `src/features/[feature]/hooks/`
- Zustand stores di `src/features/[feature]/stores/`

## Do NOT
- Jangan fetch langsung di komponen — gunakan service + custom hook
- Jangan simpan token di localStorage
- Jangan modifikasi file di `src/components/ui/` secara langsung
- Jangan gunakan `any` type
