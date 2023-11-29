import Equipa from '@/components/Equipa'
import Footer from '@/components/Footer'
import NavigationBar from '@/components/NavigationBar'
import Image from 'next/image'

export default function Nosotras() {
  return (
    <main className="flex flex-col">
      <NavigationBar />
      <div className="flex bg-yellow">
        <div className="w-1/3 p-16">
          <div className="mb-12 h-5 w-5 rounded-full bg-black" />
          <p className="text-xl">
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
        <div className="relative aspect-square w-2/3">
          <Image
            src="https://picsum.photos/1600/900"
            alt="image"
            fill
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
      </div>
      <Equipa />
      <Footer />
    </main>
  )
}
