import NavigationBar from '@/components/NavigationBar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <NavigationBar />
      {children}
    </>
  )
}
