import type { Metadata } from 'next'
import { Inter, Sora } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-cabinet',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: {
    default: 'Builder Boilerplate — Next.js + Payload CMS',
    template: '%s | Builder Boilerplate',
  },
  description:
    'A premium Next.js + Payload CMS website builder boilerplate with Awwwards-level design quality.',
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://builder-boilerplate.vercel.app',
  ),
  keywords: ['Next.js', 'Payload CMS', 'website builder', 'boilerplate', 'TypeScript', 'Tailwind'],
  authors: [{ name: 'Builder Agency' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Builder Boilerplate',
    title: 'Builder Boilerplate — Next.js + Payload CMS',
    description:
      'A premium Next.js + Payload CMS website builder boilerplate with Awwwards-level design quality.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Builder Boilerplate',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Builder Boilerplate — Next.js + Payload CMS',
    description:
      'A premium Next.js + Payload CMS website builder boilerplate with Awwwards-level design quality.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
