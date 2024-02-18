import Aliadas from '@/components/Aliadas'
import Equipa from '@/components/Equipa'
import Image from 'next/image'

export default function Nosotras() {
  return (
    <>
      <div className="flex flex-wrap bg-white">
        <div className="w-full p-4 pt-16 lg:w-1/2 lg:p-16">
          <p className="text-base lg:text-xl">
            MCNC fue fundada en Ciudad de México en el contexto de la pandemia
            de 2020, por la artista y futurista guatemalteca Sophia Arrazola
            como una respuesta a tiempos venideros. <br />
            <br />A partir de 2021 el proyecto ha evolucionado y se ha
            desarrollado en colaboración con la artista clown, mediadora y
            futurista Jesica Bastidas. <br />
            <br />
            Estamos conformadas por una colectiva itinerante de artistas
            interdisciplinarias, futuristas, urbanistas, estrategas,
            diseñadoras, sociólogas, antropólogas, ecologistas etc.
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
      </div>
      <Equipa />
      <Aliadas />
    </>
  )
}
