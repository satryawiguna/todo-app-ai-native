---
description: "Scaffold a new feature module — components, hooks, stores, services, types following the feature-based folder structure"
argument-hint: "Describe the feature to scaffold (name, domain, API endpoints, state needs)"
---

Scaffold a complete feature module following the project's feature-based architecture from `.github/copilot-instructions.md`.

## Before You Write Code

1. Read `.github/copilot-instructions.md` for folder structure and coding standards
2. Read `../todo-shared-ai-native/architecture/api-contracts.md` for API response format
3. Read `../todo-shared-ai-native/business/business-rules.md` for domain rules
4. Check existing features in `src/features/` for the pattern to follow

## Feature Module Scaffold

Create the following structure under `src/features/[feature-name]/`:

```
src/features/[feature-name]/
├── components/       # Feature-specific UI components
│   └── [Component].tsx
├── hooks/            # TanStack Query hooks + custom hooks
│   ├── use[Feature]Query.ts
│   └── use[Feature]Mutation.ts
├── stores/           # Zustand stores (if needed)
│   └── [feature].store.ts
└── types/            # Feature-specific types
    └── index.ts
```

## Service Layer

Create service functions in `src/services/[feature].service.ts`:

```ts
import { apiClient } from '@/lib/api-client'

export const [feature]Service = {
  getAll: (params?) => apiClient.get('/[endpoint]', { params }),
  getById: (id: string) => apiClient.get(`/[endpoint]/${id}`),
  create: (data) => apiClient.post('/[endpoint]', data),
  update: (id: string, data) => apiClient.patch(`/[endpoint]/${id}`, data),
  delete: (id: string) => apiClient.delete(`/[endpoint]/${id}`),
}
```

## TanStack Query Hooks

Follow `.github/instructions/api.instructions.md` for hook patterns:

```ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { [feature]Service } from '@/services/[feature].service'

export const [FEATURE]_QUERY_KEY = ['[feature]'] as const

export const use[Feature]Query = (params?) => {
  return useQuery({
    queryKey: [...[FEATURE]_QUERY_KEY, params],
    queryFn: () => [feature]Service.getAll(params),
  })
}

export const use[Feature]Mutation = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: [feature]Service.create,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [FEATURE]_QUERY_KEY }),
  })
}
```

## Zustand Store (if needed)

```ts
import { create } from 'zustand'

interface [Feature]State {
  // state
}

export const use[Feature]Store = create<[Feature]State>((set) => ({
  // initial state + actions
}))
```

## Rules

- All types go in `types/index.ts` — explicit, no `any`
- Hooks use TanStack Query for server state, Zustand for client-only state
- Components follow `.github/instructions/components.instructions.md`
- Every hook and component gets a co-located test
- Auth: access token in Zustand, never localStorage

## Output

- Complete feature module with all files listed above
- Service functions at `src/services/`
- Types at `src/features/[feature]/types/`
- Test files for hooks and components
