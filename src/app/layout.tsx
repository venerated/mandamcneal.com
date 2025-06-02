import {
  Zen_Dots,
  Sixtyfour_Convergence,
  IBM_Plex_Sans,
} from 'next/font/google'

import Layout from '@/components/Layout'

import './globals.scss'
import 'normalize.css'

const workmarkFont = Zen_Dots({
  subsets: ['latin'],
  variable: '--font-wordmark',
  display: 'swap',
  weight: '400',
})

const displayFont = Sixtyfour_Convergence({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  axes: ['BLED', 'SCAN', 'XELA', 'YELA'],
})

const bodyFont = IBM_Plex_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['400', '700'],
  style: ['normal', 'italic'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Here because Lightening CSS can't process `@font-palette-values` */
        /* eslint-disable @next/next/no-css-tags */}
        <link rel="stylesheet" href="/unminified.css" />
      </head>
      <body
        className={`${displayFont.variable} ${bodyFont.variable} ${workmarkFont.variable}`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
