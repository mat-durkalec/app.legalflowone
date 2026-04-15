import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Legal Flow One — Entity Management Dashboard',
  description: 'Access your entity workspace and governance dashboard. Manage company formation, documents, obligations, and compliance in one place.',
  openGraph: {
    type: 'website',
    title: 'Legal Flow One',
    description: 'Entity Management Dashboard',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans bg-slate-50 text-slate-900 antialiased">
        {children}
      </body>
    </html>
  )
}
