import { create } from 'zustand';
import type { TodoStatus, TodoPriority } from '@/types/todo';

interface TodoFilterState {
  page: number;
  limit: number;
  status: TodoStatus | undefined;
  priority: TodoPriority | undefined;
  search: string;
  sort: 'createdAt' | 'updatedAt' | 'title' | 'priority';
  order: 'ASC' | 'DESC';

  setPage: (page: number) => void;
  setLimit: (limit: number) => void;
  setStatus: (status: TodoStatus | undefined) => void;
  setPriority: (priority: TodoPriority | undefined) => void;
  setSearch: (search: string) => void;
  setSort: (sort: 'createdAt' | 'updatedAt' | 'title' | 'priority') => void;
  setOrder: (order: 'ASC' | 'DESC') => void;
  resetFilters: () => void;
}

export const useTodoFilterStore = create<TodoFilterState>((set) => ({
  page: 1,
  limit: 10,
  status: undefined,
  priority: undefined,
  search: '',
  sort: 'createdAt',
  order: 'DESC',

  setPage: (page) => set({ page }),
  setLimit: (limit) => set({ limit, page: 1 }),
  setStatus: (status) => set({ status, page: 1 }),
  setPriority: (priority) => set({ priority, page: 1 }),
  setSearch: (search) => set({ search, page: 1 }),
  setSort: (sort) => set({ sort }),
  setOrder: (order) => set({ order }),
  resetFilters: () => set({
    page: 1,
    status: undefined,
    priority: undefined,
    search: '',
    sort: 'createdAt',
    order: 'DESC',
  }),
}));

interface UIState {
  isDeleteDialogOpen: boolean;
  todoToDelete: string | null;
  openDeleteDialog: (id: string) => void;
  closeDeleteDialog: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  isDeleteDialogOpen: false,
  todoToDelete: null,
  openDeleteDialog: (id) => set({ isDeleteDialogOpen: true, todoToDelete: id }),
  closeDeleteDialog: () => set({ isDeleteDialogOpen: false, todoToDelete: null }),
}));
