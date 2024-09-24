import Galeria from '../Galeria'
import Text from '../Text'

const images = [
  '/img/labs/labs1.jpg',
  '/img/labs/labs2.jpg',
  '/img/labs/labs3.jpg',
  '/img/labs/labs4.jpg',
  '/img/labs/labs5.jpg',
]

function LaboratoriaSection() {
  return (
    <section>
      <Galeria images={images} className="-mb-2" />
      <div className="bg-white px-4 py-12 lg:p-16" id="labs">
        <Text from="Home" variant="xl" className="mb-4 lg:mb-6">
          labs
        </Text>
        <Text from="Home" isRichText variant="lg">
          labs-text
        </Text>
      </div>
    </section>
  )
}

export default LaboratoriaSection
