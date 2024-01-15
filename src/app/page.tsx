import Archivo from '@/components/Archivo'
import Footer from '@/components/Footer'
import Laboratoria from '@/components/Laboratoria'
import MainHeader from '@/components/MainHeader'
import NavigationBar from '@/components/NavigationBar'
import Projects from '@/components/Projects'
import SeParte from '@/components/SeParte'

export default function Home() {
  return (
    <main className="flex flex-col">
      <NavigationBar />
      <MainHeader />
      <Projects />
      <Laboratoria />
      <Archivo />
      <SeParte />
      <Footer />
    </main>
  )
}
