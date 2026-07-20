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
  title: 'Mobile Car Diagnostics & Repair in London | Mostly Solutions',
  description:
    'Need reliable mobile vehicle repairs? Mostly Solutions provides expert mobile car diagnostics, mechanical repairs, battery services and vehicle detailing across London. Book a trusted mobile technician today.',
  keywords: [
    'mobile mechanic',
    'automotive diagnostics',
    'car repair Reading',
    'car repair London',
    'mobile auto service',
    'vehicle diagnostics',
  ],
  openGraph: {
    title: 'Mobile Car Diagnostics & Repair in London | Mostly Solutions',
    description:
      'Need reliable mobile vehicle repairs? Mostly Solutions provides expert mobile car diagnostics, mechanical repairs, battery services and vehicle detailing across London. Book a trusted mobile technician today.',
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
