import Footer from '@/components/Footer'
import NavigationBar from '@/components/NavigationBar'
import Link from 'next/link'
import { ArrowUpRight } from 'react-feather'

export default function Sophia() {
  return (
    <main className="flex flex-col">
      <NavigationBar />
      <div className="flex justify-between bg-black px-16 py-6">
        <Link
          href="mailto:sophia@micallenuestracalle.com"
          className="text-xl font-extrabold text-white"
        >
          sophia@micallenuestracalle.com
        </Link>
        <div className="flex gap-2 text-white">
          <Link href="">Instagram</Link> | <Link href="">LinkedIn</Link>
        </div>
      </div>
      <div className="relative flex w-full">
        <div className="absolute top-0 ml-16 h-0 w-0 border-l-[15px] border-r-[15px] border-t-[15px] border-solid border-x-white border-t-black" />
        <div className="mt-16 flex w-1/2 flex-col px-16">
          <h1 className="text-lg">Sophia Arrazola</h1>
          <hr className="mt-4" />
          <h2 className="mb-12 text-2xl">Intereses actuales</h2>
          <p className="text-2xl">
            Mujeres y niñxs migrantes <br />
            Aprender de otras formas <br />
            Diseño y arte comunitario <br />
            Ciudades comúnes <br />
            Otras formas
          </p>
          <hr className="mt-12" />
          <h2 className="mb-12 text-2xl">Proyectos recientes</h2>
          <Link href="" className="flex items-center text-2xl">
            Lab La Nueva Fábrica
            <ArrowUpRight size={24} className="-mb-1" />
          </Link>
          <Link href="" className="flex items-center text-2xl">
            Bordando Futuros
            <ArrowUpRight size={24} className="-mb-1" />
          </Link>
          <hr className="mt-12" />
          <h2 className="mb-12 text-2xl">Conferencias / Talleres</h2>
          <p className="text-2xl">Institute for the future</p>
          <p className="mt-12">
            Sophia es fundadora de Mi Calle, Nuestra Calle. Con más de 8 años de
            experiencia desarrollando proyectos de innovación social y liderando
            procesos de investigación antropológica y arte participativo, diseño
            de experiencias de inteligencia colectiva con enfoque de género y
            derechos humanos en América Latina. Desde un enfoque creativo, ético
            y crítico, ha colaborado como consultora independiente con proyectos
            de base, ONG&apos;s de impacto sostenible y organizaciones de
            cooperación internacional, entre otros. <br />
            <br />
            Con alma de antropóloga urbana y una personalidad curiosa que la ha
            impulsado a explorar, descubrir e interesarse por los futuros como
            oficio, el arte comunitario-participativo como medio y el diseño de
            experiencias culturales antropológicas como vocación, combinado con
            un pensamiento crítico agudo.
          </p>
        </div>
        <div className="flex w-1/2 gap-4 pr-16">
          <div className="flex w-1/2 flex-col bg-blue"></div>
          <div className="flex w-1/2 flex-col bg-red"></div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
