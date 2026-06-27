'use client';

import Link from 'next/link';
import type { Todo } from '@/types/todo';
import { getPriorityColor, getPriorityLabel, getStatusLabel, formatDate } from '@/lib/utils';
import { useDeleteTodo } from '@/hooks/useDeleteTodo';
import { useUpdateTodo } from '@/hooks/useUpdateTodo';
import { useUIStore } from '@/stores/todoFilterStore';

interface TodoCardProps {
  todo: Todo;
}

export function TodoCard({ todo }: TodoCardProps) {
  const deleteMutation = useDeleteTodo();
  const updateMutation = useUpdateTodo();
  const openDeleteDialog = useUIStore((s) => s.openDeleteDialog);

  const handleToggleStatus = () => {
    const newStatus = todo.status === 'active' ? 'completed' : 'active';
    updateMutation.mutate({ id: todo.id, status: newStatus });
  };

  return (
    <div className={`bg-white rounded-lg border p-4 transition ${todo.status === 'completed' ? 'opacity-60 border-gray-200' : 'border-gray-200 hover:border-blue-300'}`}>
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          checked={todo.status === 'completed'}
          onChange={handleToggleStatus}
          className="mt-1 h-5 w-5 rounded border-gray-300 text-blue-600 cursor-pointer"
        />
        <div className="flex-1 min-w-0">
          <Link href={`/todos/${todo.id}`} className="hover:text-blue-600">
            <h3 className={`font-medium ${todo.status === 'completed' ? 'line-through text-gray-400' : 'text-gray-900'}`}>
              {todo.title}
            </h3>
          </Link>
          {todo.description && (
            <p className="text-sm text-gray-500 mt-1 truncate">{todo.description}</p>
          )}
          <div className="flex items-center gap-2 mt-2 flex-wrap">
            <span className={`text-xs px-2 py-0.5 rounded-full ${getPriorityColor(todo.priority)}`}>
              {getPriorityLabel(todo.priority)}
            </span>
            <span className="text-xs text-gray-400">{getStatusLabel(todo.status)}</span>
            <span className="text-xs text-gray-400">• {formatDate(todo.createdAt)}</span>
          </div>
        </div>
        <div className="flex gap-1">
          <Link
            href={`/todos/${todo.id}/edit`}
            className={`text-xs px-2 py-1 rounded hover:bg-gray-100 ${todo.status === 'completed' ? 'text-gray-300 cursor-not-allowed pointer-events-none' : 'text-gray-600'}`}
          >
            Edit
          </Link>
          <button
            onClick={() => openDeleteDialog(todo.id)}
            className="text-xs px-2 py-1 rounded text-red-600 hover:bg-red-50"
            disabled={deleteMutation.isPending}
          >
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
}
