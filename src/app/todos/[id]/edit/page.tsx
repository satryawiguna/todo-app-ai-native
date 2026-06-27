'use client';

import { use } from 'react';
import { useTodo } from '@/hooks/useTodo';
import { useUpdateTodo } from '@/hooks/useUpdateTodo';
import { TodoForm } from '@/components/todos/TodoForm';
import { TodoSkeleton } from '@/components/todos/TodoSkeleton';
import type { UpdateTodoInput } from '@/types/todo';

export default function EditTodoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { data: todo, isLoading } = useTodo(id);
  const updateMutation = useUpdateTodo();

  if (isLoading) return <TodoSkeleton />;

  if (!todo) {
    return <p className="text-gray-400">Todo tidak ditemukan.</p>;
  }

  if (todo.status === 'completed') {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400 text-lg mb-2">Todo sudah selesai</p>
        <p className="text-sm text-gray-400">Todo yang sudah selesai tidak dapat diubah.</p>
      </div>
    );
  }

  const handleSubmit = async (data: UpdateTodoInput) => {
    await updateMutation.mutateAsync({ id, ...data });
  };

  return (
    <div className="max-w-lg">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Edit Todo</h1>
      <TodoForm initialData={todo} onSubmit={handleSubmit} isSubmitting={updateMutation.isPending} />
    </div>
  );
}
