import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aman Kashyap - Full-Stack Developer & Data Scientist',
  description: 'Portfolio of Aman Kashyap, a passionate Full-Stack Developer and Data Scientist with expertise in modern web technologies and machine learning.',
  keywords: 'Aman Kashyap, Full-Stack Developer, Data Scientist, Web Development, Machine Learning, React, Node.js, Python, Portfolio',
  authors: [{ name: 'Aman Kashyap' }],
  creator: 'Aman Kashyap',
  openGraph: {
    title: 'Aman Kashyap - Full-Stack Developer & Data Scientist',
    description: 'Portfolio showcasing Full-Stack Development and Data Science projects',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aman Kashyap - Full-Stack Developer & Data Scientist',
    description: 'Portfolio showcasing Full-Stack Development and Data Science projects',
  },
  robots: 'index, follow',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
