import { aliadas } from '@/utils/consts'
import Image from 'next/image'
import Text from '../Text'

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
        <Text from="Nosotras" variant="lg" as="h2" className="mb-8">
          aliadxs
        </Text>
        <Text from="Nosotras" isRichText>
          aliadxs-text
        </Text>
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
