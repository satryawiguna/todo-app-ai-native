# Arsitektur Komponen

## Component Tree

```
Layout
├── Header (navigasi)
└── Main Content
    ├── HomePage (/)
    │   ├── TodoFilter (filter + search + sort)
    │   └── TodoList
    │       ├── TodoCard[] (daftar todo)
    │       │   └── Checkbox, Edit link, Delete button
    │       └── Pagination
    ├── CreateTodoPage (/todos/create)
    │   └── TodoForm (create mode)
    ├── TodoDetailPage (/todos/:id)
    │   └── Todo info + Edit link
    └── EditTodoPage (/todos/:id/edit)
        └── TodoForm (edit mode)
```

## State Management

| State | Library | Keterangan |
|---|---|---|
| **Server state** (todo data) | TanStack React Query | Fetch, cache, mutasi, invalidasi |
| **Filter state** (status, priority, search, sort) | Zustand (`todoFilterStore`) | Client-side filter — dioper ke query params |
| **UI state** (dialog, toast) | Zustand (`uiStore`) | Modal konfirmasi hapus, notifikasi |

## Data Flow

```
User Action → Zustand (update filter) → React Query (refetch dengan params baru)
User Action → React Query Mutation → API call → onSuccess invalidate cache → UI update
```

## Server vs Client Component Strategy

- **Server Components**: Layout, Header (static parts), page shells
- **Client Components**: TodoList, TodoCard, TodoForm, TodoFilter (semua yang pakai hooks/state)
