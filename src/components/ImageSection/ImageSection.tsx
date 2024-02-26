'use client'

import Image from 'next/image'
import Link from 'next/link'
import { TagButton } from './TagButton'
import { tags, trabajos } from './consts'
import { useImagesState } from './hooks'

function ImageSection() {
  const { currentTags, handleClick } = useImagesState()

  return (
    <figure>
      <ul className="mb-4 ml-1 box-content flex gap-2 overflow-auto text-sm sm:text-base lg:ml-2">
        {tags.map(t => (
          <TagButton
            key={t}
            selected={currentTags.includes(t)}
            onClick={() => handleClick(t)}
          >
            {t}
          </TagButton>
        ))}
      </ul>
      <div className="flex flex-wrap justify-normal">
        {trabajos.map(
          ({ image, link, titulo, tags }) =>
            !!image &&
            (!currentTags.length ||
              tags.some(t => currentTags.includes(t))) && (
              <Link
                className="group aspect-square w-1/4 min-w-[110px] p-1 lg:p-2"
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
                  <div className="absolute flex h-full w-full items-center justify-center opacity-0 group-hover:bg-darkGrey group-hover:opacity-70">
                    <span className="p-4 text-center text-white">{titulo}</span>
                  </div>
                </div>
              </Link>
            )
        )}
      </div>
      <figcaption className="ml-1 text-sm text-white sm:text-base lg:ml-2">
        Fotografías: MCNC (2020-2023)
      </figcaption>
    </figure>
  )
}

export default ImageSection
