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
    aliadas.violetaRadio,
    aliadas.lagunaMX,
    aliadas.disenaColectiva,
    aliadas.lasPanas,
    aliadas.laNana,
    aliadas.centro,
    aliadas.ibero,
    aliadas.detde,
  ],
  guatemala: [
    aliadas.laNuevaFabrica,
    aliadas.andar,
    aliadas.uvg,
    aliadas.uniRL,
  ],
  barcelona: [aliadas.superaccio],
}

function AliadasSection() {
  return (
    <section className="flex flex-col gap-12 px-4 py-4 lg:px-16 lg:py-16">
      <div className="flex flex-col gap-4">
        <Aliadxs pais="México" />
        <div className="flex flex-wrap">
          {aliadxs.mexico.map(
            a =>
              a.logo && <Logo key={a.nombre} logo={a.logo} nombre={a.nombre} />
          )}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Aliadxs pais="Guatemala" />
        <div className="flex flex-wrap">
          {aliadxs.guatemala.map(
            a =>
              a.logo && <Logo key={a.nombre} logo={a.logo} nombre={a.nombre} />
          )}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Aliadxs pais="Barcelona" />
        <div className="flex flex-wrap">
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
  <div className="relative h-[64px] w-4/12 p-6 sm:w-3/12 lg:w-2/12">
    <Image
      src={logo}
      alt={nombre}
      fill
      sizes="16vw"
      className="object-contain grayscale"
    />
  </div>
)

const Aliadxs = ({ pais }: { pais: string }) => (
  <h2 className="w-full text-xl lg:text-2xl">
    <span className="font-extrabold">Aliadxs</span>
    <span className="mx-4">|</span>
    {pais}
  </h2>
)

export default AliadasSection
