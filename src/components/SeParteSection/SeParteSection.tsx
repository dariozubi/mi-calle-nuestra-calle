import { PropsWithChildren } from 'react'
import Image from 'next/image'

function SeParteSection() {
  return (
    <section>
      <figure className="relative aspect-[16/9] w-full">
        <Image
          src="/img/separte.jpg"
          alt="image"
          fill
          className="object-cover"
        />
      </figure>
      <div className="flex flex-wrap p-4 lg:p-16" id="separte">
        <div className="flex w-full flex-col lg:w-1/2">
          <h2 className="text-3xl font-extrabold lg:mb-12 lg:text-6xl">
            Sé parte
          </h2>
          <div className="flex flex-col">
            <Item href="https://forms.gle/tzn1KGtphsBMxDV56">
              Dona tu tiempo como voluntaria
            </Item>
            <Item href="https://forms.gle/MVZq97wSdJcWBWWt7">
              Haz un internship con nosotras
            </Item>
            <Item href="https://forms.gle/grbpsqPRBuGkQHbw5">
              Únete al equipo de consultoras
            </Item>
          </div>
        </div>
        <div className="flex w-full flex-col lg:w-1/2 lg:px-12">
          <h3 className="mb-4 mt-8 text-2xl font-extrabold lg:mb-12 lg:mt-0 lg:text-3xl">
            ¿Por qué unirme?
          </h3>
          <p className="text-base lg:text-xl">
            Creemos que todo conocimiento o area de expertís suma a nuestra
            causa.
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
    </section>
  )
}

function Item({ children, href }: PropsWithChildren<{ href: string }>) {
  return (
    <a
      href={href}
      target="_blank"
      className="border-b border-black py-2 text-left text-base font-bold hover:bg-black hover:text-white lg:p-4 lg:text-2xl"
    >
      {children}
    </a>
  )
}

export default SeParteSection
