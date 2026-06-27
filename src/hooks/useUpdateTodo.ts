'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '@/services/api';
import type { ApiResponse, Todo, UpdateTodoInput } from '@/types/todo';

async function updateTodo({ id, ...input }: { id: string } & UpdateTodoInput): Promise<Todo> {
  const { data } = await api.put<ApiResponse<Todo>>(`/todos/${id}`, input);
  return data.data;
}

export function useUpdateTodo() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateTodo,
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
      queryClient.invalidateQueries({ queryKey: ['todo', variables.id] });
    },
  });
}
