# Integrasi API

Frontend berkomunikasi dengan backend melalui REST API.

## Axios Client

`src/services/api.ts` — instance Axios dengan:
- Base URL dari `NEXT_PUBLIC_API_URL`
- Timeout 10 detik
- Response interceptor untuk normalisasi error

## Kontrak API

Semua tipe frontend di `src/types/todo.ts` MENCERMINKAN kontrak di:
→ `../todo-shared-ai-native-orchestration/architecture/api-contracts.md`

Jika ada ketidaksesuaian antara tipe frontend dan respons API, kontrak adalah sumber kebenaran.

## Pattern per Operasi

| Operasi | Hook | Pattern |
|---|---|---|
| GET list | `useTodos` | useQuery + placeholderData |
| GET detail | `useTodo` | useQuery + enabled: !!id |
| POST create | `useCreateTodo` | useMutation + invalidate ["todos"] |
| PUT update | `useUpdateTodo` | useMutation + invalidate ["todos", "todo"] |
| DELETE | `useDeleteTodo` | useMutation + optimistic update |

## Error Handling

- **Axios interceptor** menangkap semua error jaringan
- **React Query** `onError` untuk handling spesifik per mutasi
- **Zod validation** mencegah request tidak valid dikirim
- **Error boundaries** untuk error yang tidak tertangani
