import Equipa from '@/components/Equipa'
import Image from 'next/image'

export default function Nosotras() {
  return (
    <>
      <div className="flex bg-white">
        <div className="w-1/2 p-16">
          <p className="text-2xl">
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
        <div className="relative aspect-square w-1/2">
          <Image
            src="/img/proyectas/azcapotzalco_3.jpg"
            alt="image"
            fill
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
      </div>
      <Equipa />
    </>
  )
}
