---
description: "Create a new React component following project conventions — TypeScript, Tailwind, shadcn/ui, accessibility"
argument-hint: "Describe the component to create (name, purpose, props)"
---

Create a new React component following the project's component conventions from `.github/instructions/components.instructions.md`.

## Before You Write Code

1. Read `.github/instructions/components.instructions.md` for the full component rules
2. Read `.github/copilot-instructions.md` for coding standards
3. Check `src/components/` for existing patterns to follow

## Component Requirements

### Structure

```tsx
// 1. 'use client' directive (only if needed)
'use client'

// 2. Imports — ordered: React → third-party → @/ → relative
import { type FC } from 'react'
import { cn } from '@/lib/utils'

// 3. Props Interface — explicit, no `any`
interface ComponentNameProps {
  // define all props here
}

// 4. Component — named export, FC type
export const ComponentName: FC<ComponentNameProps> = ({ prop1, prop2 }) => {
  // 5. Hooks at the top
  // 6. Derived state
  // 7. Event handlers
  // 8. Render
  return (...)
}
```

### Rules

- Use `cn()` for conditional className — NEVER template literals
- No inline styles except for truly dynamic values Tailwind can't handle
- Accessibility: semantic HTML, aria attributes, keyboard navigable
- Separate logic from presentation — extract logic to custom hooks
- Server Component by default — add `'use client'` ONLY for hooks/events/browser APIs
- Named export for components, default export only for pages

### Styling

- Tailwind utility classes for all styling
- `cn()` from `@/lib/utils` for conditional merging
- If extending shadcn/ui, create a wrapper — never modify `src/components/ui/` directly

### Test

- Create a co-located `.test.tsx` file
- Follow `.github/instructions/testing.instructions.md`
- Query priority: `getByRole` > `getByLabelText` > `getByText` > `getByTestId`

## Output

- The component file at the appropriate path
- A co-located test file
- Any needed type definitions
