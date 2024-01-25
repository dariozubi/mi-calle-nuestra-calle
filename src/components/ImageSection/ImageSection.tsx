import { proyectas } from '@/utils/consts'
import Image from 'next/image'
import Link from 'next/link'

async function ImageSection() {
  return (
    <figure className="flex flex-wrap">
      {proyectas.map(
        ({ images, slug }) =>
          !!images && (
            <Link
              className="aspect-square w-1/4 p-[3px]"
              href={`/proyecta/${slug}`}
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
          )
      )}
      <figcaption className="text-white">
        Fotografías: mi calle, nuestra calle, México, Guatemala, Barcelona
        (2020-2023)
      </figcaption>
    </figure>
  )
}

export default ImageSection
