'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-gray-900">
          📝 Todo App
        </Link>
        <nav className="flex gap-4">
          <Link
            href="/"
            className={`text-sm ${pathname === '/' ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
          >
            Daftar
          </Link>
          <Link
            href="/todos/create"
            className={`text-sm ${pathname === '/todos/create' ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
          >
            + Buat Baru
          </Link>
        </nav>
      </div>
    </header>
  );
}
