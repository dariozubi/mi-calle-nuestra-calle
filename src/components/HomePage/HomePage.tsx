import LaboratoriaSection from '@/components/LaboratoriaSection'
import ProyectosSection from '@/components/ProyectosSection'
import SeParteSection from '@/components/SeParteSection'
import ServiciosSection from '@/components/ServiciosSection'
import Text from '@/components/Text'

function HomePage() {
  return (
    <>
      <Text
        from="Home"
        isRichText
        className="p-4 pt-16 lg:p-16 lg:pt-24"
        as="h1"
        variant="lg"
      >
        main-header
      </Text>
      <ProyectosSection />
      <Text from="Home" isRichText className="px-4 py-12 lg:p-16" variant="lg">
        second-header
      </Text>
      <LaboratoriaSection />
      <ServiciosSection />
      <SeParteSection />
    </>
  )
}

export default HomePage
