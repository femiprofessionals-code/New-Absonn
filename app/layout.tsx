import type { Metadata } from 'next'
import DocStrip from '@/components/DocStrip'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Absonn — Non-Profit Finance Advisory',
  description:
    'Institutional-grade finance operations for non-profit organizations, private foundations, and educational institutions. Bookkeeping, CFO advisory, audit support, and grant reporting.',
  metadataBase: new URL('https://absonn.com'),
  openGraph: {
    title: 'Absonn Advisory',
    description: 'Independent non-profit finance advisory practice.',
    url: 'https://absonn.com',
    siteName: 'Absonn',
    type: 'website',
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
