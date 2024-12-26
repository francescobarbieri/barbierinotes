import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ViewTransitions } from 'next-view-transitions';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.barbierinotes.com'),
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'Barbieri Notes',
    template: '%s | Barbieri Notes',
  },
  description: 'Personal website of Francesco Barbieri.',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/images/favicon-light.webp',
        href: '/images/favicon-light.webp',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/images/favicon-dark.webp',
        href: '/images/favicon-dark.webp',
      },
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" className={inter.className}>
        <body className="antialiased tracking-tight">
          <div className="min-h-svh flex flex-col justify-between pt-0 md:pt-8 p-8 bg-white text-gray-900">
            <main className="max-w-[60ch] mx-auto w-full">{children}</main>
            <Footer />
          </div>
          <Analytics />
        </body>
      </html>
    </ViewTransitions>
  );
}

function Footer() {
  const links = [
    { name: '@barbierinotes', url: 'https://x.com/intent/user?screen_name=barbierinotes' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/barbieri-francesco' },
    { name: 'github', url: 'https://github.com/francescobarbieri' },
  ];

  return (
    <footer className="mt-12 text-center">
      <div className="flex justify-center space-x-4 tracking-tight">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
}
