import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Portfolio | Developer Portfolio',
  description: 'A modern developer portfolio showcasing projects, skills, and experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/portfolio.ico" />
        {/* <link rel="icon" type="image/png" sizes="32x32" href="/Favicon.png" /> */}
      </head>
      <body>{children}</body>
    </html>
  )
}


