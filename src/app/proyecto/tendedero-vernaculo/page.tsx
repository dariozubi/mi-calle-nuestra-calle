import ExploraProyectos from '@/components/ExploraProyectos'
import Footer from '@/components/Footer'
import NavigationBar from '@/components/NavigationBar'
import Image from 'next/image'

export default function TendederoVernaculo() {
  return (
    <main className="flex flex-col">
      <NavigationBar />
      <div className="relative aspect-[25/9] w-full">
        <Image
          src="https://picsum.photos/1600/900"
          alt="image"
          fill
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      <div className="mx-16 mb-8 mt-16 h-5 w-5 rounded-full bg-ladrillo" />
      <div className="g-16 mb-12 flex w-full px-16">
        <div className="flex w-1/2 flex-col">
          <p>Tendedero Vernaculo</p>
          <hr className="mt-2" />
          <p className="mb-6 text-xl">Laguna, CDMX</p>
          <p className="text-xl">
            Futuros comunitarios <br />
            Ciudades comunes <br />
            Diseño participativo
          </p>
          <hr className="mt-8" />
          <p className="mb-2 text-xl">Alianzas</p>
          <p className="text-xl">
            La Laguna <br />
            Diseña Colectiva
          </p>
          <hr className="mt-8" />
          <p className="mb-2 text-xl">Metodologías</p>
          <p className="text-xl">
            Participa <br />
            Reporte final
          </p>
        </div>
        <div className="flex w-1/2 flex-col px-16">
          <h1 className="mb-12 text-xl">Tendedero Vernaculo</h1>
          <p className="">
            Sophia es fundadora de Mi Calle, Nuestra Calle. Con más de 8 años de
            experiencia desarrollando proyectos de innovación social y liderando
            procesos de investigación antropológica y arte participativo, diseño
            de experiencias de inteligencia colectiva con enfoque de género y
            derechos humanos en América Latina. Desde un enfoque creativo, ético
            y crítico, ha colaborado como consultora independiente con proyectos
            de base, ONG’s de impacto sostenible y organizaciones de cooperación
            internacional, entre otros.
            <br />
            <br />
            Con alma de antropóloga urbana y una personalidad curiosa que la ha
            impulsado a explorar, descubrir e interesarse por los futuros como
            oficio, el arte comunitario-participativo como medio y el diseño de
            experiencias culturales antropológicas como vocación, combinado con
            un pensamiento crítico agudo.
          </p>
        </div>
      </div>
      <ExploraProyectos />
      <Footer />
    </main>
  )
}
