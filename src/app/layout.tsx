import localFont from 'next/font/local'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

import Layout from '@/components/Layout'
import { ThemeProvider } from '@/context/ThemeProvider'

import './globals.scss'
import 'normalize.css'

const displayFont = localFont({
  display: 'swap',
  src: [
    { path: '../../public/fonts/ClashDisplay-Extralight.woff2', weight: '200' },
    { path: '../../public/fonts/ClashDisplay-Light.woff2', weight: '300' },
    { path: '../../public/fonts/ClashDisplay-Regular.woff2', weight: '400' },
    { path: '../../public/fonts/ClashDisplay-Medium.woff2', weight: '500' },
    { path: '../../public/fonts/ClashDisplay-Semibold.woff2', weight: '600' },
    { path: '../../public/fonts/ClashDisplay-Bold.woff2', weight: '700' },
  ],
  variable: '--font-display',
})

const bodyFont = Inter({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-body',
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
        <ThemeProvider>
          <Layout>{children}</Layout>
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}
