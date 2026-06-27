---
description: "Gunakan saat menulis test frontend. Mencakup component test, hook test, dan E2E test."
applyTo:
  - "**/*.test.tsx"
  - "**/*.spec.tsx"
  - "e2e/**"
---

# Testing Instructions — Frontend

## Component Test (React Testing Library)
- `render(<Component />)` + `screen.getByText()` / `getByRole()`
- Test rendering, user interaction (fireEvent / userEvent), conditional states
- Format: `describe('ComponentName', () => { it('should ...', () => {}) })`

## Hook Test
- Gunakan `renderHook` dari `@testing-library/react`
- Bungkus dengan QueryClientProvider
- Test: initial state, loading, success, error

## E2E Test (Playwright)
- Simulasikan alur pengguna asli
- Happy path: create → view → edit → delete
- Error cases: validasi, 404, 422
- Gunakan `page.goto()`, `page.fill()`, `page.click()`

## MSW (API Mocking)
- Handler harus mengembalikan bentuk respons yang cocok dengan `api-contracts.md`
- Gunakan `http.get()`, `http.post()`, dll.

## Konvensi
- Deskripsi test dalam bahasa Indonesia
- Satu `it` untuk satu skenario
- Ikuti `standards/testing-standards.md` dari shared-context
