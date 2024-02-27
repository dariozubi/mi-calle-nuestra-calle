import Link from 'next/link'
import Image from 'next/image'
import { proyectas } from '@/utils/consts'
import Text from '../Text'

type Props = {
  slug: string
}

async function ExploraProyectos({ slug }: Props) {
  const data = proyectas
    .filter(p => p.slug !== slug && !!p.images)
    .map(p => ({ img: p.images![0], slug: p.slug }))
  return (
    <div className="bg-pink p-4 lg:p-16">
      <div className="flex flex-wrap">
        <div className="flex aspect-square w-1/4 items-center justify-center bg-ladrillo">
          <p className="text-normal text-center lg:text-lg">
            Explora + <br /> labs
          </p>
        </div>
        {data.map(proyecta => (
          <Link
            href={`/proyecta/${proyecta.slug}`}
            className="group relative aspect-square w-1/4 bg-blue"
            key={proyecta.slug}
          >
            <Image
              src={`${proyecta.img}`}
              alt="image"
              fill
              className="object-cover"
            />
            <div className="absolute flex h-full w-full items-center justify-center bg-darkGrey opacity-70 group-hover:bg-darkGrey group-hover:opacity-70 sm:opacity-0">
              <Text
                from="Proyectos"
                className="p-2 text-center text-white lg:p-4"
                variant="sm"
                as="span"
              >{`${proyecta.slug}.titulo`}</Text>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ExploraProyectos
