import NavigationBar from '@/components/NavigationBar'
import Footer from '@/components/Footer'
import { PageProps } from '@/utils/types'
import { unstable_setRequestLocale } from 'next-intl/server'

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: PageProps['params']
}) {
  unstable_setRequestLocale(locale)
  return (
    <>
      <NavigationBar />
      {children}
      <Footer />
    </>
  )
}
