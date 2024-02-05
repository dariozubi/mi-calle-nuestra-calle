import { PropsWithChildren } from 'react'
import Image from 'next/image'

function SeParte() {
  return (
    <>
      <figure className="relative aspect-[25/9] w-full">
        <Image
          src="/img/proyectas/azcapotzalco_1.jpg"
          alt="image"
          fill
          style={{
            objectFit: 'cover',
          }}
        />
      </figure>
      <div className="flex flex-wrap p-4 lg:p-16" id="separte">
        <div className="flex w-full flex-col lg:w-1/2">
          <h2 className="text-3xl font-extrabold lg:mb-12 lg:text-6xl">
            Sé parte
          </h2>
          <div className="flex flex-col">
            <Item>Dona tu tiempo como voluntaria</Item>
            <Item>Haz un internship con nosotras</Item>
            <Item>Únete al equipo de consultoras</Item>
          </div>
        </div>
        <div className="flex w-full flex-col lg:w-1/2 lg:px-12">
          <h3 className="mb-4 mt-8 text-2xl font-extrabold lg:mb-12 lg:mt-0 lg:text-3xl">
            ¿Por qué unirme?
          </h3>
          <p className="text-base lg:text-xl">
            Creemos que todo conocimiento o area de expertís <br /> suma a
            nuestra causa.
            <br />
            <br />
            Nuestra tribu esta conformada por una colectiva de artistas
            interdisciplinarias, futuristas, urbanistas, estrategas,
            diseñadoras, sociólogas, antropólogas, ecologistas, etc, de
            distintas partes del mundo. <br />
            <br />
            ¡Los futuros se construyen en comunidad! <br />
            ¡Solo nos faltas tú!
          </p>
        </div>
      </div>
    </>
  )
}

function Item({ children }: PropsWithChildren) {
  return (
    <button className="border-b border-black py-2 text-left text-base font-bold hover:bg-black hover:text-white lg:p-4 lg:text-2xl">
      {children}
    </button>
  )
}

export default SeParte
