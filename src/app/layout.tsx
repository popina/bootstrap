import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'

import './globals.css'

const title = 'Popina Developer Setup'
const description =
  'Prepare a Mac for Popina web development with one guided command.'

export const metadata: Metadata = {
  metadataBase: new URL('https://popina.sh'),
  title,
  description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: 'https://popina.sh',
    siteName: 'Popina',
    title,
    description,
  },
  twitter: {
    card: 'summary',
    title,
    description,
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f4f1e8',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
