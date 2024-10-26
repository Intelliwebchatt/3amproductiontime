// src/app/layout.tsx
import type { Metadata } from 'next'
import { Space_Grotesk, Poppins, Pacifico } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-space'
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-poppins'
})

const pacifico = Pacifico({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-pacifico'
})

export const metadata: Metadata = {
  title: 'Modern Website',
  description: 'Modern website with scroll effects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${poppins.variable} ${pacifico.variable}`}>
        {children}
      </body>
    </html>
  )
}
