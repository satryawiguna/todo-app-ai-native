// Tipe frontend — MENCERMINKAN ../todo-shared-ai-native-orchestration/architecture/api-contracts.md
// Jika ada ketidaksesuaian, KONTRAK yang menang.

export type TodoStatus = 'active' | 'completed';
export type TodoPriority = 'low' | 'medium' | 'high';

export interface Todo {
  id: string;
  title: string;
  description: string | null;
  status: TodoStatus;
  priority: TodoPriority;
  createdAt: string;
  updatedAt: string;
}

export interface CreateTodoInput {
  title: string;
  description?: string;
  priority?: TodoPriority;
}

export interface UpdateTodoInput {
  title?: string;
  description?: string;
  status?: TodoStatus;
  priority?: TodoPriority;
}

export interface TodoQueryParams {
  page?: number;
  limit?: number;
  status?: TodoStatus;
  priority?: TodoPriority;
  search?: string;
  sort?: 'createdAt' | 'updatedAt' | 'title' | 'priority';
  order?: 'ASC' | 'DESC';
}

export interface ApiResponse<T> {
  data: T;
}

export interface PaginatedResponse<T> {
  data: T[];
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface ApiError {
  error: {
    code: string;
    message: string;
    details?: Array<{ field: string; message: string }>;
  };
}
