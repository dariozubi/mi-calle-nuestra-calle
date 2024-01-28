import Link from 'next/link'
import Image from 'next/image'
import { proyectas } from '@/utils/consts'

type Props = {
  slug: string
}

async function ExploraProyectos({ slug }: Props) {
  const data = proyectas
    .filter(p => p.slug !== slug && !!p.images)
    .map(p => ({ img: p.images![0], slug: p.slug, titulo: p.titulo }))
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
            className="group relative aspect-square w-1/4 bg-blue"
            key={proyecta.slug}
          >
            <Image
              src={`${proyecta.img}`}
              alt="image"
              fill
              style={{
                objectFit: 'cover',
              }}
            />
            <div className="absolute flex h-full w-full items-center justify-center opacity-0 group-hover:bg-white group-hover:opacity-70">
              <span className="p-4 text-center font-extrabold">
                {proyecta.titulo}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ExploraProyectos
