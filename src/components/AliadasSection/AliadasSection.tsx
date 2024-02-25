import { aliadas } from '@/utils/consts'
import Image from 'next/image'

const aliadxs: Record<
  'mexico' | 'guatemala' | 'barcelona',
  (typeof aliadas)[number][]
> = {
  mexico: [
    aliadas.gobiernoMX,
    aliadas.gobiernoCDMX,
    aliadas.ONUMujeres,
    aliadas.placemaking,
    aliadas.ibero,
    aliadas.centro,
    aliadas.lasPanas,
    aliadas.lagunaMX,
    aliadas.violetaRadio,
    aliadas.disenaColectiva,
    aliadas.laNana,
    aliadas.detde,
  ],
  guatemala: [
    aliadas.andar,
    aliadas.uniRL,
    aliadas.uvg,
    aliadas.laNuevaFabrica,
  ],
  barcelona: [aliadas.superaccio],
}

function AliadasSection() {
  return (
    <section className="flex flex-col gap-12 px-4 py-4 lg:px-16 lg:py-16">
      <div>
        <h2 className="mb-8 text-xl font-extrabold lg:text-4xl">Aliadxs</h2>
        <p className="text-base lg:text-xl">
          Desde el año 2020, colaboramos de manera directa e indirecta con una
          red de organizaciones (gubernamentales y no gubernamentales),
          organizaciones de base y/o universidades, que abogan por los derechos
          humanos de las mujeres, radicadas en México, Guatemala y Barcelona.{' '}
          <br />
          <br />
          Nuestros proyectos de cooperación, van desde la creación y gestión de
          laboratorias efímeras que inciden de manera directa o indirecta en
          comunidades de mujeres diversas en situación de exclusión social,
          hasta proyectos de consultoría en investigación de futuros con enfoque
          de género, etc.
        </p>
      </div>
      <hr />
      <div className="flex flex-col gap-4">
        <h3 className="w-full text-xl lg:text-4xl">México</h3>
        <div className="flex flex-wrap md:ml-48">
          {aliadxs.mexico.map(
            a =>
              a.logo && <Logo key={a.nombre} logo={a.logo} nombre={a.nombre} />
          )}
        </div>
      </div>
      <hr />
      <div className="flex flex-col gap-4">
        <h3 className="w-full text-xl lg:text-4xl">Guatemala</h3>
        <div className="flex flex-wrap md:ml-48">
          {aliadxs.guatemala.map(
            a =>
              a.logo && <Logo key={a.nombre} logo={a.logo} nombre={a.nombre} />
          )}
        </div>
      </div>
      <hr />
      <div className="flex flex-col gap-4">
        <h3 className="w-full text-xl lg:text-4xl">Barcelona</h3>
        <div className="flex flex-wrap md:ml-48">
          {aliadxs.barcelona.map(
            a =>
              a.logo && <Logo key={a.nombre} logo={a.logo} nombre={a.nombre} />
          )}
        </div>
      </div>
    </section>
  )
}

const Logo = ({ logo, nombre }: { logo: string; nombre: string }) => (
  <div className="relative mb-12 h-[64px] w-4/12 p-6 sm:w-3/12 lg:w-1/3">
    <Image
      src={logo}
      alt={nombre}
      fill
      sizes="16vw"
      className="object-contain grayscale"
    />
  </div>
)

export default AliadasSection
