import ImageSection from '@/components/ImageSection'
import Text from '@/components/Text'

function ProyectosSection() {
  return (
    <section>
      <div className="flex items-center gap-6 bg-blue p-4 lg:px-16 lg:py-8">
        <Text from="Home" variant="lg" as="h2">
          projects
        </Text>
        <span className="text-lg font-extrabold lg:text-3xl">|</span>
        <Text from="Home" variant="lg">
          explore-projects
        </Text>
      </div>
      <div className="relative bg-black p-4 pt-8 lg:p-16" id="images">
        <div className="absolute top-0 h-0 w-0 border-l-[15px] border-r-[15px] border-t-[15px] border-solid border-x-black border-t-blue" />
        <ImageSection
          caption={
            <Text from="Home" variant="sm">
              photos
            </Text>
          }
        />
      </div>
    </section>
  )
}

export default ProyectosSection
