'use client'

import { ListItem } from './ListItem'
import { FilterButton } from './FilterButton'
import { archivos, filters } from './consts'
import { useCallback, useState } from 'react'
import { Archivo } from './types'

function Archivo() {
  const [seleccion, setSeleccion] = useState<Archivo[]>([])
  const handleClick = useCallback(
    (filter: Archivo) => {
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
      <div className="sticky top-[62px] flex flex-wrap items-baseline justify-between bg-white p-4 pt-12 lg:px-16 lg:pt-20">
        <h2 className="text-3xl font-extrabold sm:pb-0 lg:text-4xl">Archivo</h2>
        <div className="flex flex-wrap items-end gap-4 px-4 lg:gap-8 lg:px-16">
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
        {archivos.map(
          item =>
            (!seleccion.length || seleccion.some(s => s === item.tag)) && (
              <ListItem
                key={item.url}
                item={item}
                selectedBackgroundColor={item.tag}
              />
            )
        )}
      </ul>
    </section>
  )
}

export default Archivo
