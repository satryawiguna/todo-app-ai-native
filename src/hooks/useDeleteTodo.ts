'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '@/services/api';
import type { Todo } from '@/types/todo';

async function deleteTodo(id: string): Promise<void> {
  await api.delete(`/todos/${id}`);
}

export function useDeleteTodo() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTodo,
    // Optimistic update — hapus dari cache segera, rollback jika error
    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: ['todos'] });
      const previousTodos = queryClient.getQueryData(['todos']);
      return { previousTodos, id };
    },
    onError: (_err, _id, context) => {
      // Rollback ke data sebelumnya
      if (context?.previousTodos) {
        queryClient.setQueryData(['todos'], context.previousTodos);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });
}
