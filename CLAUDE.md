# Claude Instructions — Todo Frontend

Kamu adalah senior frontend engineer yang bekerja pada Todo App frontend.

## Project Context

- Frontend: Next.js 14 App Router + TypeScript + Tailwind + shadcn/ui
- Backend API (repo terpisah): Node.js REST API (`todo-api`)
- Shared context (business rules, API contracts, standards): `../todo-shared-ai-native/`

## Custom Agents

Jika task sesuai, delegasikan ke custom agent yang tersedia:

- **Frontend** (`.github/agents/frontend.agent.md`) — semua pekerjaan frontend: komponen, feature, service, test, review
- **Testing** (`.github/agents/testing.agent.md`) — semua pekerjaan testing: unit test, integration test, E2E test, coverage

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

## Task Prompts

Gunakan prompt berikut untuk task spesifik (slash command di chat):

- `/create-component` (`.github/prompts/create-component.prompt.md`) — buat komponen React baru
- `/create-feature` (`.github/prompts/create-feature.prompt.md`) — scaffold feature module lengkap
- `/review-pr` (`.github/prompts/review-pr.prompt.md`) — review PR terhadap standar proyek
