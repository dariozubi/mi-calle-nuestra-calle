'use client'

import { escenarios, proyectas } from '@/utils/consts'
import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useState } from 'react'
import { TagButton } from './TagButton'

function ImageSection() {
  const [currentTags, setCurrentTags] = useState<string[]>([])

  const handleClick = useCallback(
    (tag: string) => {
      const index = currentTags.indexOf(tag)
      if (index !== -1) {
        if (currentTags.length > 0) {
          setCurrentTags(currentTags.toSpliced(index, 1))
        }
      } else {
        setCurrentTags([...currentTags, tag])
      }
    },
    [currentTags]
  )
  return (
    <figure>
      <div className="flex flex-wrap gap-2">
        {tags.map(t => (
          <TagButton
            key={t}
            selected={currentTags.includes(t)}
            onClick={() => handleClick(t)}
          >
            {t}
          </TagButton>
        ))}
      </div>
      <div className="flex flex-wrap">
        {trabajos.map(
          ({ image, link, titulo, tags }) =>
            !!image &&
            (!currentTags.length ||
              tags.some(t => currentTags.includes(t))) && (
              <Link
                className="group aspect-square w-1/4 min-w-[150px] p-2"
                href={`${link}`}
                key={link}
              >
                <div className="relative h-full w-full overflow-hidden rounded">
                  <Image
                    src={`${image}`}
                    alt="image"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute flex h-full w-full items-center justify-center opacity-0 group-hover:bg-white group-hover:opacity-70">
                    <span className="p-4 text-center font-extrabold">
                      {titulo}
                    </span>
                  </div>
                </div>
              </Link>
            )
        )}
      </div>
      <figcaption className="text-white">
        Fotografías: mi calle, nuestra calle, México, Guatemala, Barcelona
        (2020-2023)
      </figcaption>
    </figure>
  )
}

export default ImageSection

const trabajos = [
  ...proyectas.map(t => ({
    image: t.images ? t.images[0] : undefined,
    titulo: t.titulo,
    link: `/proyecta/${t.slug}`,
    tags: t.tags,
  })),
  ...escenarios.map(t => ({
    image: t.images ? t.images[0] : undefined,
    titulo: t.titulo,
    link: `/escenario/${t.slug}`,
    tags: t.tags,
  })),
]
const tags = [...new Set(trabajos.map(t => t.tags).flat())].sort()
