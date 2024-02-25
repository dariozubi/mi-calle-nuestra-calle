import '../globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import NavigationBar from '@/components/NavigationBar'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'mi calle, nuestra calle',
  description:
    'Laboratoria de futuros comunitarios [futuros + arte en contexto + espacios comunes]',
  generator: 'Next.js',
  applicationName: 'mi calle, nuestra calle',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Futuros',
    'Arte en contexto',
    'Espacios comunes',
    'Futuros comunitarios',
  ],
  authors: [
    { name: 'dazuma', url: 'https://dazu.ma' },
    { name: 'Sophia Arrazola' },
  ],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: 'all',
  openGraph: {
    title: 'mi calle, nuestra calle',
    description:
      'Laboratoria de futuros comunitarios [futuros + arte en contexto + espacios comunes]',
    images: '/img/nosotras.jpg',
  },
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
        </main>
      </body>
    </html>
  )
}
