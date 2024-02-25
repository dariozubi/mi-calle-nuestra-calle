import AliadasSection from '@/components/AliadasSection'
import Equipa from '@/components/Equipa'
import Image from 'next/image'

export default function Nosotras() {
  return (
    <>
      <section className="flex flex-wrap bg-white">
        <div className="flex w-full bg-pink p-4 pt-16 lg:w-5/12 lg:p-16">
          <div>
            <h1 className="mb-8 mt-8 text-3xl font-extrabold lg:text-4xl">
              Historia
            </h1>
            <p className="text-base lg:text-xl">
              MCNC fue fundada en 2020, por la artista y futurista guatemalteca
              Sophia Arrazola como una respuesta a tiempos venideros. <br />
              <br />A partir de 2021 el proyecto ha evolucionado y se ha
              desarrollado en colaboración con la artista, mediadora y futurista
              mexicana Jesica Bastidas. <br />
              <br />
              La laboratoria opera de manera remota y está conformada por una
              colectiva feminista e itinerante de artistas interdisciplinarias,
              futuristas, urbanistas, estrategas, diseñadoras, sociólogas,
              antropólogas, ecologistas, etc.
            </p>
          </div>
        </div>
        <div className="relative aspect-square w-full lg:w-7/12">
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
      <div className="bg-blue p-4 lg:px-16 lg:py-8">
        <h2 className="text-lg font-bold lg:text-3xl">
          MCNC aboga por los futuros de todas las mujeres y las niñas.
        </h2>
      </div>
      <section className="relative flex flex-wrap bg-grey p-4 pt-8 lg:p-16">
        <div className="absolute top-0 h-0 w-0 border-l-[15px] border-r-[15px] border-t-[15px] border-solid border-x-grey border-t-blue" />
        <div className="w-full lg:w-1/2">
          <h2 className="mb-8 text-xl font-extrabold text-pink lg:text-4xl">
            Creemos
          </h2>
          <p className="text-base lg:text-xl">
            que los procesos de formación cívica basados en el reconocimiento de
            saberes detonan el pensamiento crítico.
          </p>
          <h2 className="my-8 text-xl font-extrabold text-blue lg:text-4xl">
            Actuamos
          </h2>
          <p className="text-base lg:text-xl">
            como mediadoras, creando vínculos entre org’s aliadas, entidades de
            gobierno, mujeres líderes, artistas locales y sus vecinas.
          </p>
          <h2 className="my-8 text-xl font-extrabold text-yellow lg:text-4xl">
            Invitamos
          </h2>
          <p className="text-base lg:text-xl">
            a mujeres diversas a imaginar nuevos futuros y resignificar el rol
            que desempeñan en sus comunidades.
          </p>
        </div>
        <div className="mt-8 w-full lg:mt-0 lg:w-1/2 lg:border-l lg:pl-8">
          <h2 className="mb-8 text-xl font-extrabold text-ladrillo lg:text-4xl">
            Tejemos
          </h2>
          <p className="text-base lg:text-xl">
            redes sororas, colocando a las mujeres al centro como agentes de
            cambio y cultura de paz en sus comunidades.
          </p>
          <h2 className="my-8 text-xl font-extrabold text-green lg:text-4xl">
            Celebramos
          </h2>
          <p className="text-base lg:text-xl">
            la experimentación artística, abordamos los problemas críticos que
            enfrentan las mujeres hoy y en el futuro con respons-habilidad.
          </p>
          <h2 className="my-4 text-xl font-extrabold text-lila lg:text-4xl">
            Transformamos
          </h2>
          <p className="text-base lg:text-xl">
            espacios públicos/privados en espacios de sanación, seguros y libres
            de violencias todas las formas de violencia.
          </p>
        </div>
      </section>
      <Equipa />
      <AliadasSection />
    </>
  )
}
