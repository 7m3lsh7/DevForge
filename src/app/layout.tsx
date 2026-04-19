import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';
import AntigravityBackground from '@/components/AntigravityBackground';

export const metadata: Metadata = {
  title: 'DevForge Admin Portfolio',
  description: 'Premium team portfolio and dashboard',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>
          <AntigravityBackground />
          {children}
        </Providers>
      </body>
    </html>
  );
}
