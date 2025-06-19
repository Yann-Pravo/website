import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Yann Pravossoudovitch - Portfolio',
  description: 'Portfolio and resume of Yann Pravossoudovitch',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
