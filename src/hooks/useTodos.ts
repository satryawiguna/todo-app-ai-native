'use client';

import { useQuery } from '@tanstack/react-query';
import { api } from '@/services/api';
import { useTodoFilterStore } from '@/stores/todoFilterStore';
import type { PaginatedResponse, Todo } from '@/types/todo';

async function fetchTodos(params: Record<string, any>): Promise<PaginatedResponse<Todo>> {
  const queryParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== '') {
      queryParams.set(key, String(value));
    }
  });
  const { data } = await api.get(`/todos?${queryParams.toString()}`);
  return data;
}

export function useTodos() {
  const { page, limit, status, priority, search, sort, order } = useTodoFilterStore();

  return useQuery({
    queryKey: ['todos', { page, limit, status, priority, search, sort, order }],
    queryFn: () => fetchTodos({ page, limit, status, priority, search, sort, order }),
    placeholderData: (prev) => prev,
  });
}
