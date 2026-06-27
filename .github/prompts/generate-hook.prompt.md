---
description: "Buat custom React Query hook untuk endpoint API"
agent: "craft"
---

Buat custom hook React Query untuk: **$ARGUMENTS**

Langkah-langkah:
1. Baca `../todo-shared-ai-native-orchestration/architecture/api-contracts.md` untuk kontrak endpoint
2. Tentukan tipe: query (GET) atau mutation (POST/PUT/DELETE)
3. Buat file di `src/hooks/use<Nama>.ts`
4. Untuk query: `useQuery` dengan query key yang konsisten
5. Untuk mutation: `useMutation` dengan `onSuccess` invalidasi

Ikuti konvensi dari `.github/instructions/react-query.instructions.md`
