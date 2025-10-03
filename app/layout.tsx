import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'KeeperTrack.co.uk is for sale',
  description: 'Get in touch if you are interested in buying KeeperTrack.co.uk',
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
