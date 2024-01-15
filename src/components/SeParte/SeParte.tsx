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
      <div className="flex p-16" id="separte">
        <div className="flex w-1/2 flex-col">
          <h2 className="mb-12 text-6xl font-extrabold">Sé parte</h2>
          <div className="flex  flex-col">
            <Item>Dona tu tiempo como voluntaria</Item>
            <Item>Haz un internship con nosotras</Item>
            <Item>Únete al equipo de consultoras</Item>
          </div>
        </div>
        <div className="flex w-1/2 flex-col px-12">
          <h3 className="mb-12 text-3xl font-extrabold">¿Por qué unirme?</h3>
          <p className="text-xl">
            Creemos que todo conocimiento o area de expertís suma a nuestra
            causa.
            <br />
            <br />
            Nuestra tribu esta conformada por una colectiva de artistas
            interdisciplinarias, futuristas, urbanistas, estrategas,
            diseñadoras, sociólogas, antropólogas, ecologistas etc, de distintas
            partes del mundo. <br />
            <br />
            ¡Los futuros se construyen en comunidad! ¡Solo nos faltas tú!
          </p>
        </div>
      </div>
    </>
  )
}

function Item({ children }: PropsWithChildren) {
  return (
    <button className="border-b border-black p-4 text-left text-2xl font-bold hover:bg-black hover:text-white">
      {children}
    </button>
  )
}

export default SeParte
