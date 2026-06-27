# Todo App — Frontend Next.js 15

Frontend aplikasi Todo, dibangun dengan Next.js 15 + TanStack React Query + Zustand + Tailwind CSS.

## 🚀 Mulai Cepat

```bash
# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env.local

# Jalankan development server
pnpm dev
```

Aplikasi berjalan di `http://localhost:3000`

## 📋 Prasyarat

- Node.js 20+
- pnpm
- Backend API berjalan di `http://localhost:3001` (lihat `todo-api-ai-native-orchestration`)

## 🛠️ Development

```bash
pnpm dev            # Jalankan development server
pnpm build          # Build production
pnpm lint           # Lint kode
pnpm format         # Format kode dengan Prettier
pnpm type-check     # Cek tipe TypeScript
pnpm test           # Unit test
pnpm test:e2e       # E2E test dengan Playwright
```

## 🐳 Docker

```bash
# Build dan jalankan
docker compose up -d

# Hentikan
docker compose down
```

## 📁 Struktur Proyek

```
src/
├── app/                      # App Router (Next.js 15)
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Halaman utama (daftar todo)
│   └── todos/                # Route /todos
│       ├── create/           # Buat todo baru
│       └── [id]/             # Detail + edit todo
├── components/
│   ├── layout/               # Header, Layout
│   ├── todos/                # TodoCard, TodoList, TodoForm, TodoFilter
│   └── ui/                   # UI primitives
├── hooks/                    # React Query hooks
├── stores/                   # Zustand stores
├── services/                 # Axios API client
├── types/                    # Tipe TypeScript
└── lib/                      # Utils, validators
```

## 🧪 Testing

```bash
pnpm test           # Unit + component tests
pnpm test:e2e       # Playwright E2E tests
```

## 📚 Dokumentasi

- **Kontrak API:** `../todo-shared-ai-native-orchestration/architecture/api-contracts.md`
- **Standar:** `../todo-shared-ai-native-orchestration/standards/`
- **Pengetahuan Domain:** `../todo-shared-ai-native-orchestration/`
