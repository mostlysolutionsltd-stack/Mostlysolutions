import type { Metadata, Viewport } from 'next'
import { Poppins, Inter } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MostlySolutions — Premium Mobile Automotive Diagnostics',
  description:
    'State-of-the-art diagnostic equipment and performance tuning delivered directly to your driveway. Serving Reading and London.',
  keywords: [
    'mobile mechanic',
    'automotive diagnostics',
    'car repair Reading',
    'car repair London',
    'mobile auto service',
    'vehicle diagnostics',
  ],
  openGraph: {
    title: 'MostlySolutions — Premium Mobile Automotive Diagnostics',
    description:
      'Expert automotive diagnostics and performance tuning delivered to your location.',
    type: 'website',
    locale: 'en_GB',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#081A36',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
