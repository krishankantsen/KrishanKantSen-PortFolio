import type { Metadata } from 'next'
import { GeistSans } from "geist/font/sans";
import './globals.css'
import Navbar from './components/Navbar';


export const metadata: Metadata = {
  title: 'Krishan Kant Sen',
  description: 'Full Stack Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      
      <body className={`${GeistSans.variable}`}><Navbar/>{children}</body>
    </html>
  )
}
