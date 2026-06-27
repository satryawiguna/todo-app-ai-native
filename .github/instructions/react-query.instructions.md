---
description: "Gunakan saat menulis custom hook React Query. Mencakup query key, mutasi, optimistic update, dan cache invalidation."
applyTo:
  - "src/hooks/**"
---

# React Query Instructions

## Query Keys Convention
- Array: `["resource", params]` — e.g., `["todos", { page, status }]`
- Detail: `["resource", id]` — e.g., `["todo", "uuid"]`
- Konsisten di seluruh aplikasi

## Query Patterns
- Gunakan `useQuery` untuk GET requests
- `staleTime: 30s` — data dianggap fresh selama 30 detik
- `placeholderData: (prev) => prev` — tampilkan data lama saat fetching baru

## Mutation Patterns
- Gunakan `useMutation` untuk POST, PUT, DELETE
- `onSuccess`: invalidate queries terkait
- `onError`: tampilkan error toast ke user
- Optimistic update untuk DELETE:
  - `onMutate`: cancel queries → simpan data lama → hapus dari cache
  - `onError`: rollback ke data lama
  - `onSettled`: invalidate untuk sinkronisasi

## File Structure
- Satu file hook per resource + operasi
- Nama file: `useTodos.ts`, `useCreateTodo.ts`
- Export nama fungsi sesuai file
