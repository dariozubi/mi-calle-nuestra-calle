import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import NavigationBar from '@/components/NavigationBar'
import Footer from '@/components/Footer'

const montserrat = Montserrat({ subsets: ['latin'] })

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
      <body className={montserrat.className}>
        <main className="flex flex-col">
          <NavigationBar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
