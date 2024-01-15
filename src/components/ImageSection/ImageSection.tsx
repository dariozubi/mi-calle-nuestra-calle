import { proyectas } from '@/utils/consts'
import Image from 'next/image'
import Link from 'next/link'

async function ImageSection() {
  return (
    <div className="flex flex-wrap">
      {proyectas.map(({ images, slug }) => (
        <Link
          className="aspect-square w-1/4 p-[3px]"
          href={`/proyecto/${slug}`}
          key={slug}
        >
          <div className="relative h-full w-full overflow-hidden rounded">
            <Image
              src={`/img/proyectas/${images[0]}`}
              alt="image"
              fill
              className="object-cover"
            />
          </div>
        </Link>
      ))}
    </div>
  )
}

export default ImageSection
