import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Legal Flow One — Entity Lifecycle Management Platform',
  description:
    'AI-powered platform for global corporate governance and entity lifecycle management. Automate company formation, governance workflows, document automation, and obligation tracking in one place.',
  keywords: [
    'corporate governance platform',
    'entity lifecycle management',
    'company formation software',
    'governance workflow automation',
    'multi-entity management',
    'legal operations platform',
  ],
  openGraph: {
    title: 'Legal Flow One — Entity Lifecycle Management Platform',
    description:
      'One place to launch, manage, and maintain your legal entities. AI-powered. Globally scalable.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
