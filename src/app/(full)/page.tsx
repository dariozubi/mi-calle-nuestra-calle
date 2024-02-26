import LaboratoriaSection from '@/components/LaboratoriaSection'
import MainHeader from '@/components/MainHeader'
import ProyectosSection from '@/components/ProyectosSection'
import SeParteSection from '@/components/SeParteSection'
import SecondHeader from '@/components/SecondHeader'
import ServiciosSection from '@/components/ServiciosSection'

export default function Home() {
  return (
    <>
      <MainHeader />
      <ProyectosSection />
      <SecondHeader />
      <LaboratoriaSection />
      <ServiciosSection />
      <SeParteSection />
    </>
  )
}
