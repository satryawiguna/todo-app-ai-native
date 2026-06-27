'use client';

import { TodoCard } from './TodoCard';
import { TodoSkeleton } from './TodoSkeleton';
import { useTodos } from '@/hooks/useTodos';
import { useTodoFilterStore } from '@/stores/todoFilterStore';

export function TodoList() {
  const { data, isLoading, isError, error } = useTodos();
  const { page, setPage } = useTodoFilterStore();

  if (isLoading) return <TodoSkeleton />;

  if (isError) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600 mb-2">Gagal memuat todo</p>
        <p className="text-sm text-gray-500">{(error as any)?.message || 'Coba lagi nanti'}</p>
      </div>
    );
  }

  const todos = data?.data || [];
  const meta = data?.meta;

  if (todos.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400 text-lg mb-2">📭 Belum ada todo</p>
        <p className="text-sm text-gray-400">Buat todo pertama Anda!</p>
      </div>
    );
  }

  return (
    <div>
      <div className="space-y-3">
        {todos.map((todo) => (
          <TodoCard key={todo.id} todo={todo} />
        ))}
      </div>

      {/* Paginasi */}
      {meta && meta.totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-6">
          <button
            onClick={() => setPage(page - 1)}
            disabled={page <= 1}
            className="px-3 py-1 text-sm rounded border disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
          >
            ← Sebelumnya
          </button>
          <span className="text-sm text-gray-600">
            Halaman {meta.page} dari {meta.totalPages} ({meta.total} todo)
          </span>
          <button
            onClick={() => setPage(page + 1)}
            disabled={page >= meta.totalPages}
            className="px-3 py-1 text-sm rounded border disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
          >
            Berikutnya →
          </button>
        </div>
      )}
    </div>
  );
}
