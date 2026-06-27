'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import type { CreateTodoInput, UpdateTodoInput, Todo } from '@/types/todo';
import { createTodoSchema, updateTodoSchema } from '@/lib/validators';

interface TodoFormProps {
  initialData?: Todo;
  onSubmit: (data: CreateTodoInput | UpdateTodoInput) => Promise<void>;
  isSubmitting: boolean;
}

export function TodoForm({ initialData, onSubmit, isSubmitting }: TodoFormProps) {
  const router = useRouter();
  const [title, setTitle] = useState(initialData?.title || '');
  const [description, setDescription] = useState(initialData?.description || '');
  const [priority, setPriority] = useState(initialData?.priority || 'medium');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const formData = { title, description: description || undefined, priority: priority as any };
    const schema = initialData ? updateTodoSchema : createTodoSchema;
    const result = schema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as string;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    try {
      await onSubmit(result.data as any);
      router.push('/');
    } catch {
      setErrors({ form: 'Gagal menyimpan todo. Silakan coba lagi.' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg border border-gray-200 p-6 max-w-lg">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Judul <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          maxLength={200}
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.title ? 'border-red-300' : 'border-gray-300'}`}
          placeholder="Apa yang harus dikerjakan?"
        />
        {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
        <p className="text-gray-400 text-xs mt-1">{title.length}/200 karakter</p>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          maxLength={1000}
          rows={3}
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.description ? 'border-red-300' : 'border-gray-300'}`}
          placeholder="Tambahkan deskripsi (opsional)"
        />
        {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">Prioritas</label>
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="low">Rendah</option>
          <option value="medium">Sedang</option>
          <option value="high">Tinggi</option>
        </select>
      </div>

      {errors.form && <p className="text-red-500 text-sm mb-4">{errors.form}</p>}

      <div className="flex gap-3">
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium"
        >
          {isSubmitting ? 'Menyimpan...' : initialData ? 'Simpan Perubahan' : 'Buat Todo'}
        </button>
        <button
          type="button"
          onClick={() => router.back()}
          className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 text-sm"
        >
          Batal
        </button>
      </div>
    </form>
  );
}
