# Todo App — Frontend Next.js 15

## Pengetahuan Domain
Sebelum mengimplementasikan fitur apa pun, baca basis pengetahuan bersama:
→ `../todo-shared-ai-native-orchestration/`
  - `product/` untuk kebutuhan dan kriteria acceptance
  - `architecture/api-contracts.md` untuk bentuk API (sumber kebenaran tipe)
  - `standards/` untuk konvensi coding

## Konvensi Next.js 15
- App Router dengan Server Components secara default
- Tambahkan "use client" HANYA saat menggunakan hooks, state, atau event handler
- Server Components untuk fetching data; Client Components untuk interaktivitas

## Pola React Query
- Query keys: ["todos", filters], ["todo", id]
- Mutasi menginvalidasi query terkait saat berhasil
- Optimistic update untuk delete (hapus dari cache, rollback jika error)
- `staleTime: 30s` untuk stale-while-revalidate

## Pola Zustand
- Satu store per concern (todoFilterStore, uiStore)
- Gunakan selector untuk menghindari re-render tidak perlu
- Filter state di-drive oleh URL search params

## Struktur Komponen
- Nama file PascalCase sesuai nama komponen
- Tipe spesifik komponen diletakkan di file yang sama
- Ekstrak primitif UI yang dapat digunakan kembali ke components/ui/

## Validasi Form
- Gunakan Zod schema (lib/validators.ts)
- Validasi di frontend SEBELUM mengirim ke API
- Tampilkan error per field, bukan generic

## Testing
- Komponen: React Testing Library — render + screen queries
- Hook: renderHook dari @testing-library/react
- E2E: Playwright — happy path + error cases
- Mock API dengan MSW — handler harus cocok dengan api-contracts.md
