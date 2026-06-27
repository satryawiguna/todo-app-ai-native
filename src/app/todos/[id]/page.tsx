'use client';

import { use } from 'react';
import Link from 'next/link';
import { useTodo } from '@/hooks/useTodo';
import { useUpdateTodo } from '@/hooks/useUpdateTodo';
import { getPriorityColor, getPriorityLabel, getStatusLabel, formatDateTime } from '@/lib/utils';
import { TodoSkeleton } from '@/components/todos/TodoSkeleton';

export default function TodoDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { data: todo, isLoading, isError } = useTodo(id);
  const updateMutation = useUpdateTodo();

  if (isLoading) return <TodoSkeleton />;

  if (isError || !todo) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400 text-lg mb-2">Todo tidak ditemukan</p>
        <Link href="/" className="text-blue-600 hover:underline text-sm">← Kembali ke daftar</Link>
      </div>
    );
  }

  const handleToggleStatus = () => {
    const newStatus = todo.status === 'active' ? 'completed' : 'active';
    updateMutation.mutate({ id: todo.id, status: newStatus });
  };

  return (
    <div className="max-w-2xl">
      <Link href="/" className="text-sm text-blue-600 hover:underline mb-4 inline-block">← Kembali ke daftar</Link>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-start gap-4 mb-4">
          <input
            type="checkbox"
            checked={todo.status === 'completed'}
            onChange={handleToggleStatus}
            className="mt-1 h-5 w-5 rounded border-gray-300 text-blue-600 cursor-pointer"
          />
          <div>
            <h1 className={`text-xl font-bold ${todo.status === 'completed' ? 'line-through text-gray-400' : 'text-gray-900'}`}>
              {todo.title}
            </h1>
            <div className="flex gap-2 mt-2">
              <span className={`text-xs px-2 py-0.5 rounded-full ${getPriorityColor(todo.priority)}`}>
                {getPriorityLabel(todo.priority)}
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                {getStatusLabel(todo.status)}
              </span>
            </div>
          </div>
        </div>

        {todo.description ? (
          <div className="border-t pt-4 mt-4">
            <h3 className="text-sm font-medium text-gray-700 mb-1">Deskripsi</h3>
            <p className="text-gray-600 whitespace-pre-wrap">{todo.description}</p>
          </div>
        ) : (
          <p className="text-gray-400 text-sm italic">Tidak ada deskripsi</p>
        )}

        <div className="border-t pt-4 mt-4 grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-500">Dibuat:</span>
            <p className="text-gray-700">{formatDateTime(todo.createdAt)}</p>
          </div>
          <div>
            <span className="text-gray-500">Diubah:</span>
            <p className="text-gray-700">{formatDateTime(todo.updatedAt)}</p>
          </div>
        </div>

        <div className="border-t pt-4 mt-4 flex gap-3">
          <Link
            href={`/todos/${todo.id}/edit`}
            className={`px-4 py-2 text-sm rounded-md ${todo.status === 'completed' ? 'bg-gray-100 text-gray-400 cursor-not-allowed pointer-events-none' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
          >
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
}
