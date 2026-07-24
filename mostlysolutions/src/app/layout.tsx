import type { Metadata, Viewport } from 'next'
import { Archivo } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const GTM_ID = 'GTM-TCKJZ22B'
const GA_ID = 'G-QDCM4SDTQC'

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
  verification: { google: 'T9OlO5RfkWMRqkxmomRtSpaJ6E2pXiE4FuZFziE17Ns' },
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
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-base" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        {/* Google tag (gtag.js) */}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="gtag-base" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
        </Script>
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  )
}
