'use client';

import { useTodoFilterStore } from '@/stores/todoFilterStore';

export function TodoFilter() {
  const { status, priority, search, sort, order, setStatus, setPriority, setSearch, setSort, setOrder, resetFilters } =
    useTodoFilterStore();

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
      <div className="flex flex-wrap gap-3 items-end">
        {/* Search */}
        <div className="flex-1 min-w-[200px]">
          <label className="block text-xs text-gray-500 mb-1">Cari</label>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cari judul todo..."
            className="w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Status Filter */}
        <div>
          <label className="block text-xs text-gray-500 mb-1">Status</label>
          <select
            value={status || ''}
            onChange={(e) => setStatus((e.target.value as any) || undefined)}
            className="px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Semua</option>
            <option value="active">Aktif</option>
            <option value="completed">Selesai</option>
          </select>
        </div>

        {/* Priority Filter */}
        <div>
          <label className="block text-xs text-gray-500 mb-1">Prioritas</label>
          <select
            value={priority || ''}
            onChange={(e) => setPriority((e.target.value as any) || undefined)}
            className="px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Semua</option>
            <option value="high">Tinggi</option>
            <option value="medium">Sedang</option>
            <option value="low">Rendah</option>
          </select>
        </div>

        {/* Sort */}
        <div>
          <label className="block text-xs text-gray-500 mb-1">Urutkan</label>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as any)}
            className="px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="createdAt">Tanggal Dibuat</option>
            <option value="updatedAt">Terakhir Diubah</option>
            <option value="title">Judul</option>
            <option value="priority">Prioritas</option>
          </select>
        </div>

        {/* Order */}
        <div>
          <label className="block text-xs text-gray-500 mb-1">Arah</label>
          <select
            value={order}
            onChange={(e) => setOrder(e.target.value as any)}
            className="px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="DESC">Terbaru</option>
            <option value="ASC">Terlama</option>
          </select>
        </div>

        {/* Reset */}
        <button
          onClick={resetFilters}
          className="px-3 py-2 text-sm text-gray-600 border rounded-md hover:bg-gray-50"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
