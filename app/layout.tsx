import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Contact Form',
  description: 'Get in touch with us',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
