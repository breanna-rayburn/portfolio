import '@/styles/globals.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

import type { Metadata } from 'next'
import { Josefin_Sans } from 'next/font/google'

const inter = Josefin_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Breanna Rayburn',
  description:
    'Passionate front-end web developer dedicated to crafting impactful digital experiences with a focus on responsiveness and performance. Lets collaborate on your next project today!',
  icons: [
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
