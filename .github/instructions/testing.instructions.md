---
applyTo: "src/**/*.test.ts,src/**/*.test.tsx,tests/**"
---

# Testing Instructions

## Unit & Integration Test (Vitest + RTL)
- Test file letakkan bersebelahan dengan file yang ditest: `Component.test.tsx`
- Gunakan `@testing-library/user-event` untuk simulasi interaksi user
- Query priority: `getByRole` > `getByLabelText` > `getByText` > `getByTestId`
- Mock API call menggunakan MSW (Mock Service Worker)
- Setiap custom hook wajib ada unit test-nya

```tsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { TaskCard } from './TaskCard'
import { mockTask } from '@/tests/mocks/task.mock'

describe('TaskCard', () => {
  it('should display task title', () => {
    render(<TaskCard task={mockTask} />)
    expect(screen.getByRole('heading', { name: mockTask.title })).toBeInTheDocument()
  })

  it('should call onDelete when delete button clicked', async () => {
    const onDelete = vi.fn()
    render(<TaskCard task={mockTask} onDelete={onDelete} />)
    await userEvent.click(screen.getByRole('button', { name: /delete/i }))
    expect(onDelete).toHaveBeenCalledWith(mockTask.id)
  })
})
```

## E2E Test (Playwright)
- Test file di folder `tests/e2e/`
- Gunakan Page Object Model untuk reusability
- Test skenario happy path dan error path
- Jangan hardcode test data — gunakan fixtures atau factory

```ts
// tests/e2e/task.spec.ts
import { test, expect } from '@playwright/test'
import { TaskPage } from './pages/task.page'

test('should create a new task', async ({ page }) => {
  const taskPage = new TaskPage(page)
  await taskPage.goto()
  await taskPage.createTask({ title: 'Test Task', description: 'Test description' })
  await expect(taskPage.getTaskByTitle('Test Task')).toBeVisible()
})
```

## Coverage
- Target coverage: 80% untuk lines, functions, branches
- Jalankan dengan: `npm run test:coverage`
- File yang tidak perlu dicoverage: `src/app/**`, `src/components/ui/**`
