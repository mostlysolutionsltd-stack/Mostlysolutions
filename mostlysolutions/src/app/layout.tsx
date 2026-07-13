import type { Metadata, Viewport } from 'next'
import { Archivo } from 'next/font/google'
import './globals.css'

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-archivo',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://mostlysolutions.co.uk'),
  title: "MostlySolutions — UK's #1 Mobile Car Repairing",
  description:
    'Premium mobile automotive diagnostics and repair delivered to your door. Expert mechanical support across Reading and London.',
  keywords: [
    'mobile mechanic',
    'automotive diagnostics',
    'car repair Reading',
    'car repair London',
    'mobile auto service',
    'vehicle diagnostics',
  ],
  openGraph: {
    title: "MostlySolutions — UK's #1 Mobile Car Repairing",
    description:
      'Expert mechanical support at your doorstep. We bring the garage to you, anywhere in England.',
    type: 'website',
    locale: 'en_GB',
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: '#060F1F',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={archivo.variable}>
      <body>{children}</body>
    </html>
  )
}
