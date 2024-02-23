import AliadasSection from '@/components/AliadasSection'
import Equipa from '@/components/Equipa'
import Image from 'next/image'

export default function Nosotras() {
  return (
    <>
      <section className="flex flex-wrap bg-white">
        <div className="w-full p-4 pt-16 lg:w-1/2 lg:p-16">
          <h1 className="mb-4 text-3xl font-extrabold lg:text-4xl">Historia</h1>
          <p className="text-base lg:text-xl">
            MCNC fue fundada en 2020, por la artista y futurista guatemalteca
            Sophia Arrazola como una respuesta a tiempos venideros. A partir de
            2021 el proyecto ha evolucionado y se ha desarrollado en
            colaboración con la artista, mediadora y futurista mexicana Jesica
            Bastidas. <br />
            <br />
            La laboratoria está conformada por una colectiva feminista
            itinerante de artistas interdisciplinarias, futuristas, urbanistas,
            estrategas, diseñadoras, sociólogas, antropólogas, ecologistas, etc.
          </p>
        </div>
        <div className="relative aspect-square w-full lg:w-1/2">
          <Image
            src="/img/nosotras.jpg"
            alt="image"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, (max-width: 1200px) 50vw"
            priority={true}
          />
        </div>
      </section>
      <Equipa />
      <AliadasSection />
    </>
  )
}
