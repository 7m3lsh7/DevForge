import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';
import AntigravityBackground from '@/components/AntigravityBackground';

export const metadata: Metadata = {
  title: {
    default: 'P7 Dev | Professional Software Development Team',
    template: '%s | P7 Dev',
  },
  description:
    'P7 Dev is a passionate software development team delivering high-quality web apps, APIs, cybersecurity assessment, and full-stack solutions. Based in Egypt.',
  keywords: [
    'P7 Dev',
    'P7 Team',
    'software development team',
    'full stack developers Egypt',
    'ASP.NET Core team',
    'React developers',
    'MERN stack',
    'cybersecurity Egypt',
    'penetration testing',
    'web development team Cairo',
    'فريق P7',
    'تطوير برمجيات مصر',
  ],
  authors: [{ name: 'P7 Dev Team', url: 'https://P7dev.vercel.app' }],
  creator: 'P7 Dev Team',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ar_EG',
    siteName: 'P7 Dev',
    title: 'P7 Dev | Professional Software Development Team',
    description:
      'Passionate developers from Egypt delivering secure, scalable, and modern digital solutions.',
    images: [
      {
        url: '/images/P7.png',
        width: 1200,
        height: 630,
        alt: 'P7 Dev Team Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'P7 Dev | Software Development Team',
    description: 'High-quality digital solutions by Team P7.',
    images: ['/images/P7.png'],
  },
  icons: {
    icon: '/images/P7.png',
    apple: '/images/P7.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
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
