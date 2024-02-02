import Archivo from '@/components/Archivo'
import Laboratoria from '@/components/Laboratoria'
import MainHeader from '@/components/MainHeader'
import Projects from '@/components/Projects'
import SeParte from '@/components/SeParte'

export default function Home() {
  return (
    <>
      <MainHeader />
      <Projects />
      <Laboratoria />
      {/* <Archivo /> */}
      <SeParte />
    </>
  )
}
