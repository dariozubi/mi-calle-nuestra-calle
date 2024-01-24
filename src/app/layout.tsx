import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavigationBar from '@/components/NavigationBar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'mi calle, nuestra calle',
  description:
    'Laboratoria de futuros comunitarios [futuros + arte en contexto + espacios comunes]',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex flex-col">
          <NavigationBar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
