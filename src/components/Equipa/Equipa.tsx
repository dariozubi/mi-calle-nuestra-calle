'use client'

import { useCallback, useState } from 'react'
import { equipa, filters } from './consts'
import { FilterButton } from './FilterButton'
import { ListItem } from './ListItem'
import { Tag } from './types'
import { HoverPhoto } from './HoverPhoto'

function Equipa() {
  const [seleccion, setSeleccion] = useState<Tag[]>([])

  const handleClick = useCallback(
    (filter: Tag) => {
      const index = seleccion.indexOf(filter)
      if (index !== -1) {
        if (seleccion.length > 0) {
          setSeleccion(seleccion.toSpliced(index, 1))
        }
      } else {
        setSeleccion([...seleccion, filter])
      }
    },
    [seleccion]
  )

  return (
    <section>
      <div className="top-[68px] flex flex-wrap items-baseline justify-between bg-white p-4 first-letter:flex lg:sticky lg:p-16">
        <h1 className="mt-4 text-3xl font-extrabold lg:m-0 lg:mt-0 lg:text-4xl">
          Equipa
        </h1>
        <div className="flex justify-between gap-4 lg:gap-8">
          {filters.map(i => (
            <FilterButton
              key={i.value}
              selectedBackgroundColor={i.value}
              onClick={() => handleClick(i.value)}
              selected={seleccion.includes(i.value)}
            >
              {i.label}
            </FilterButton>
          ))}
        </div>
      </div>
      <ul className="flex flex-col gap-1 pb-1">
        {equipa.map(
          item =>
            (!seleccion.length || seleccion.some(s => s === item.tag)) && (
              <HoverPhoto img={item.img} key={item.name}>
                <ListItem item={item} selectedBackgroundColor={item.tag} />
              </HoverPhoto>
            )
        )}
      </ul>
    </section>
  )
}

export default Equipa
