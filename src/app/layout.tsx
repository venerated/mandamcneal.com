import localFont from 'next/font/local'
import { Inter } from 'next/font/google'

import Layout from '@/components/Layout'

import './globals.scss'
import 'normalize.css'

const displayFont = localFont({
  variable: '--font-display',
  display: 'swap',
  src: [
    { path: '../../public/fonts/ClashDisplay-Extralight.woff2', weight: '200' },
    { path: '../../public/fonts/ClashDisplay-Light.woff2', weight: '300' },
    { path: '../../public/fonts/ClashDisplay-Regular.woff2', weight: '400' },
    { path: '../../public/fonts/ClashDisplay-Medium.woff2', weight: '500' },
    { path: '../../public/fonts/ClashDisplay-Semibold.woff2', weight: '600' },
    { path: '../../public/fonts/ClashDisplay-Bold.woff2', weight: '700' },
  ],
})

const bodyFont = Inter({
  variable: '--font-body',
  display: 'swap',
  weight: ['400', '700'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${displayFont.variable} ${bodyFont.variable}`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
