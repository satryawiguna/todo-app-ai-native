---
description: "Gunakan saat menulis komponen atau halaman Next.js dengan App Router. Mencakup Server/Client Components, struktur, dan pola."
applyTo:
  - "src/app/**"
  - "src/components/**"
---

# Next.js Instructions — Frontend

## Server vs Client Components
- **Default: Server Component** — tanpa 'use client' directive
- Tambahkan **'use client'** HANYA jika komponen menggunakan:
  - useState, useEffect, useContext
  - Event handlers (onClick, onChange)
  - Browser APIs (window, document, localStorage)
  - Custom hooks yang mengandung state

## App Router Patterns
- `page.tsx` — halaman utama route
- `layout.tsx` — shared layout (Server Component)
- Folder `[param]` — dynamic route
- `loading.tsx` — loading state otomatis
- `error.tsx` — error boundary

## Component Structure
- Satu komponen per file
- Nama file = nama komponen (PascalCase)
- Props type di file yang sama
- Komponen kecil & fokus — maksimal 150 baris

## Styling
- Gunakan Tailwind CSS utility classes
- Jangan inline styles — kecuali untuk nilai dinamis
- Responsif: mobile-first dengan breakpoint Tailwind
