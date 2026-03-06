import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

// Using Inter as display font fallback - replace with Cabinet Grotesk or similar premium font when available
const cabinet = Inter({
  subsets: ['latin'],
  variable: '--font-cabinet',
  display: 'swap',
  weight: ['600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Builder Boilerplate',
  description: 'Next.js + Payload CMS website builder boilerplate',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${cabinet.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
