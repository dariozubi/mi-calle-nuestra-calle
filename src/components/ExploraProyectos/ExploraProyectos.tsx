import Link from 'next/link'
import Image from 'next/image'
import { proyectas } from '@/utils/consts'

type Props = {
  slug: string
}

async function ExploraProyectos({ slug }: Props) {
  const data = proyectas
    .filter(p => p.slug !== slug)
    .map(p => ({ img: p.images[0], slug: p.slug }))
  return (
    <div className="bg-pink p-16">
      <div className="flex">
        <div className="flex aspect-square w-1/4 items-center justify-center bg-ladrillo">
          <p className="text-lg">
            Explora + <br /> labs
          </p>
        </div>
        {data.map(proyecta => (
          <Link
            href={`/proyecta/${proyecta.slug}`}
            className="relative aspect-square w-1/4 bg-blue"
            key={proyecta.slug}
          >
            <Image
              src={`/img/proyectas/${proyecta.img}`}
              alt="image"
              fill
              style={{
                objectFit: 'cover',
              }}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ExploraProyectos
