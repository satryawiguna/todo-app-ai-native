---
applyTo: "src/components/**,src/features/**/components/**"
---

# Component Instructions

## Struktur Komponen
Setiap komponen mengikuti pola ini:

```tsx
// 1. Imports
import { type FC } from 'react'
import { cn } from '@/lib/utils'

// 2. Props Interface
interface ComponentNameProps {
  // definisi props yang eksplisit
}

// 3. Component
export const ComponentName: FC<ComponentNameProps> = ({ prop1, prop2 }) => {
  // 4. Hooks (selalu di bagian paling atas)
  // 5. Derived state / computed values
  // 6. Event handlers
  // 7. Render
  return (...)
}
```

## Rules
- Gunakan `cn()` untuk className conditional, bukan template literal biasa
- Hindari inline style kecuali untuk dynamic value yang tidak bisa dilakukan dengan Tailwind
- Komponen harus accessible: gunakan semantic HTML dan aria attributes yang tepat
- Pisahkan logic dari presentasi: logic di custom hook, presentasi di komponen
- Komponen shadcn/ui di `src/components/ui/` jangan dimodifikasi langsung — buat wrapper jika perlu extend

## Server vs Client Component
- Default: Server Component (tidak ada `'use client'`)
- Tambahkan `'use client'` hanya jika: menggunakan hooks, event listener, atau browser API
- Letakkan `'use client'` di paling atas file, sebelum imports
