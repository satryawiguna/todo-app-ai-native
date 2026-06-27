'use client';

import { useQuery } from '@tanstack/react-query';
import { api } from '@/services/api';
import type { ApiResponse, Todo } from '@/types/todo';

async function fetchTodo(id: string): Promise<Todo> {
  const { data } = await api.get<ApiResponse<Todo>>(`/todos/${id}`);
  return data.data;
}

export function useTodo(id: string) {
  return useQuery({
    queryKey: ['todo', id],
    queryFn: () => fetchTodo(id),
    enabled: !!id,
  });
}
