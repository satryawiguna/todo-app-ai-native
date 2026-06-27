'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '@/services/api';
import type { ApiResponse, CreateTodoInput, Todo } from '@/types/todo';

async function createTodo(input: CreateTodoInput): Promise<Todo> {
  const { data } = await api.post<ApiResponse<Todo>>('/todos', input);
  return data.data;
}

export function useCreateTodo() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });
}
