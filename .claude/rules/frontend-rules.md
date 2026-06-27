---
paths:
  - "src/**/*.tsx"
  - "src/**/*.ts"
---

# Frontend Rules

- Gunakan Server Components secara default — hanya tambahkan 'use client' jika perlu hooks/state/event
- Tipe frontend harus mencerminkan `../todo-shared-ai-native-orchestration/architecture/api-contracts.md`
- React Query: query keys array `["resource", params]`, mutation invalidate di onSuccess
- Zustand: satu store per concern, gunakan selector
- Tailwind CSS untuk styling — tanpa inline styles
- Validasi form dengan Zod SEBELUM kirim ke API
