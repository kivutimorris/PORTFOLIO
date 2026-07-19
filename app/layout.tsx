import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'Morris Kivuti — Backend Developer | Linux | PHP | Infrastructure',
  description:
    'Backend developer building secure web applications, Linux infrastructure, media platforms, and scalable systems using PHP, MariaDB, FFmpeg, and modern web technologies.',
  
  generator: 'kivuti.app',

  openGraph: {
    title: 'Morris Kivuti — Backend Developer | Linux | PHP | Infrastructure',
    description:
      'Building secure applications, Linux infrastructure, media platforms, and scalable backend systems.',
    url: 'https://kivuti.app',
    siteName: 'Kivuti Morris',
    images: [
      {
        url: 'https://kivuti.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Morris Kivuti — Backend Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Morris Kivuti — Backend Developer | Linux | PHP | Infrastructure',
    description:
      'Building secure applications, Linux infrastructure, and scalable backend systems.',
    images: ['https://kivuti.app/og-image.png'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-background font-sans antialiased">
        {children}

        {process.env.NODE_ENV === 'production' && (
          <>
            <Analytics />
            <SpeedInsights />
          </>
        )}
      </body>
    </html>
  )
}
