---
applyTo: "src/services/**,src/features/**/hooks/use*Query*,src/features/**/hooks/use*Mutation*"
---

# API & Data Fetching Instructions

## Service Functions
Semua API call ditulis sebagai pure async function di `src/services/`:

```ts
// src/services/task.service.ts
import { apiClient } from '@/lib/api-client'
import type { Task, CreateTaskDto, TasksResponse } from '@/types/task'

export const taskService = {
  getAll: (params?: TaskQueryParams) =>
    apiClient.get<TasksResponse>('/tasks', { params }),

  getById: (id: string) =>
    apiClient.get<Task>(`/tasks/${id}`),

  create: (data: CreateTaskDto) =>
    apiClient.post<Task>('/tasks', data),

  update: (id: string, data: Partial<Task>) =>
    apiClient.patch<Task>(`/tasks/${id}`, data),

  delete: (id: string) =>
    apiClient.delete(`/tasks/${id}`),

  updateStatus: (id: string, status: TaskStatus) =>
    apiClient.patch<Task>(`/tasks/${id}/status`, { status }),
}
```

## TanStack Query Hooks
```ts
// src/features/task/hooks/useTasksQuery.ts
import { useQuery } from '@tanstack/react-query'
import { taskService } from '@/services/task.service'

export const TASKS_QUERY_KEY = ['tasks'] as const

export const useTasksQuery = (params?: TaskQueryParams) => {
  return useQuery({
    queryKey: [...TASKS_QUERY_KEY, params],
    queryFn: () => taskService.getAll(params),
  })
}
```

## Error Handling
- Backend mengembalikan format RFC 7807
- Tangani error global di axios interceptor (`src/lib/api-client.ts`)
- Tampilkan pesan error ke user via toast (shadcn/ui Sonner)
- Jangan tangkap error di tiap komponen secara manual kecuali ada penanganan khusus

## Auth Flow
- Access token disimpan di memory (Zustand store), bukan localStorage
- Refresh token disimpan di httpOnly cookie (dihandle oleh backend)
- Axios interceptor otomatis attach Bearer token dari store
- Jika 401, interceptor trigger refresh token flow
