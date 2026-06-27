'use client';

import { useCreateTodo } from '@/hooks/useCreateTodo';
import { TodoForm } from '@/components/todos/TodoForm';
import type { CreateTodoInput } from '@/types/todo';

export default function CreateTodoPage() {
  const createMutation = useCreateTodo();

  const handleSubmit = async (data: CreateTodoInput) => {
    await createMutation.mutateAsync(data as CreateTodoInput);
  };

  return (
    <div className="max-w-lg">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Buat Todo Baru</h1>
      <TodoForm onSubmit={handleSubmit} isSubmitting={createMutation.isPending} />
    </div>
  );
}
