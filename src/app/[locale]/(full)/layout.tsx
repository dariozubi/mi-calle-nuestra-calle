import NavigationBar from '@/components/NavigationBar'
import Footer from '@/components/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <NavigationBar />
      {children}
      <Footer />
    </>
  )
}
