---
description: "Review a PR against project standards — TypeScript strict, no any, accessibility, no hardcoded secrets, build check"
argument-hint: "Describe the PR or branch to review"
---

Review the pull request against the project's coding standards and checklist defined in `.github/pull_request_template.md` and `.github/copilot-instructions.md`.

## Review Checklist

### Type Safety

- [ ] No `any` type used anywhere
- [ ] All component props have explicit interfaces
- [ ] All function parameters and returns are typed
- [ ] No type assertions that bypass the type system (`as` only when truly necessary)

### Component Rules

- [ ] Components follow the structure from `.github/instructions/components.instructions.md`
- [ ] `cn()` used for conditional className — no template literals
- [ ] No inline styles (except for truly dynamic values)
- [ ] `'use client'` only when hooks/events/browser APIs are used, placed at line 1
- [ ] Named exports for components, default exports only for pages
- [ ] No modification to `src/components/ui/` files

### API & Data

- [ ] API calls go through service functions in `src/services/` — no direct fetch/axios in components
- [ ] Server state uses TanStack Query hooks — no manual fetch in `useEffect`
- [ ] Error handling follows RFC 7807 format from backend
- [ ] No hardcoded URLs or credentials — uses `NEXT_PUBLIC_API_URL`
- [ ] Tokens never stored in `localStorage`

### Accessibility

- [ ] Semantic HTML elements used (`<button>`, `<form>`, `<nav>`, etc.)
- [ ] Appropriate aria attributes on interactive elements
- [ ] Keyboard navigable — all interactive elements reachable via Tab
- [ ] Form inputs have associated `<label>` elements
- [ ] Images have meaningful `alt` text

### Testing

- [ ] New components have co-located `.test.tsx` files
- [ ] New custom hooks have unit tests
- [ ] Tests use RTL query priority: `getByRole` > `getByLabelText` > `getByText` > `getByTestId`
- [ ] API calls mocked with MSW (not manual mock)
- [ ] User interactions use `@testing-library/user-event`

### General

- [ ] Import order: React → third-party → `@/` → relative
- [ ] No unused imports or variables
- [ ] No commented-out code
- [ ] No console.log left in production paths
- [ ] `.github/copilot-instructions.md` conventions followed

## Security Scan

- [ ] No hardcoded API keys, tokens, or secrets
- [ ] No sensitive data exposed in error messages
- [ ] Environment variables prefixed with `NEXT_PUBLIC_` for client-side usage only
- [ ] No `dangerouslySetInnerHTML` without sanitization

## Output

Provide a structured review:

1. **Critical Issues**: Must fix before merge (security, type safety violations, broken patterns)
2. **Warnings**: Should fix (accessibility gaps, missing tests, style inconsistencies)
3. **Suggestions**: Nice to have (code organization, performance, readability)
4. **Summary**: Brief overall assessment with approval/rejection recommendation
