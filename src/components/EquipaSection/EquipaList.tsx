'use client'

import { ReactNode, useCallback, useState } from 'react'
import { FilterButton } from './FilterButton'
import { ListItem } from './ListItem'
import { Filter, Miembro, Tag } from './types'
import { HoverPhoto } from './HoverPhoto'

type Props = {
  header: ReactNode
  filters: Filter[]
  miembros: Miembro[]
}

export const EquipaList = ({ header, filters, miembros }: Props) => {
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
      <div className="top-[68px] flex flex-wrap items-baseline justify-between gap-4 bg-white p-4 first-letter:flex lg:sticky lg:p-8">
        {header}
        <div className="my-4 flex justify-between gap-4 lg:my-0 lg:gap-8">
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
        {miembros.map(
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
