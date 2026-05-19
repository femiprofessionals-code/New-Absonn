import type { Metadata, Viewport } from 'next'
import DocStrip from '@/components/DocStrip'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0E2A47',
}

export const metadata: Metadata = {
  title: 'Absonn — Non-Profit Finance Advisory',
  description:
    'Institutional-grade finance operations for non-profit organizations, private foundations, and educational institutions. Bookkeeping, CFO advisory, audit support, and grant reporting.',
  metadataBase: new URL('https://absonn.com'),
  icons: {
    icon: [
      { url: '/icon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/icon-32.png',
  },
  openGraph: {
    title: 'Absonn Advisory',
    description: 'Independent non-profit finance advisory practice.',
    url: 'https://absonn.com',
    siteName: 'Absonn',
    type: 'website',
    images: ['/logo.png'],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <DocStrip />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
