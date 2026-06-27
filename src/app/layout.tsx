import type { Metadata } from 'next';
import { Providers } from './providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'Todo App',
  description: 'Aplikasi Todo sederhana — orkestrasi AI-native',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="bg-gray-50 antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
