'use client'

import { useCallback, useState } from 'react'
import { backgroundColors, equipa } from './consts'
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
    <div className="lg:mt-8">
      <div className="top-[68px] flex flex-wrap items-baseline justify-between bg-white p-4 first-letter:flex lg:sticky lg:p-8">
        <h1 className="mt-4 text-3xl font-extrabold lg:m-0 lg:mt-0 lg:text-4xl">
          Equipa
        </h1>
        <div className="flex justify-between gap-4 lg:gap-8">
          <FilterButton
            selectedBackgroundColor={backgroundColors.fundadora}
            onClick={() => handleClick('fundadora')}
            selected={seleccion.includes('fundadora')}
          >
            Fundadoras
          </FilterButton>
          <FilterButton
            selectedBackgroundColor={backgroundColors.aliada}
            onClick={() => handleClick('aliada')}
            selected={seleccion.includes('aliada')}
          >
            Aliadas
          </FilterButton>
          <FilterButton
            selectedBackgroundColor={backgroundColors.voluntaria}
            onClick={() => handleClick('voluntaria')}
            selected={seleccion.includes('voluntaria')}
          >
            Voluntarias
          </FilterButton>
        </div>
      </div>
      <div className="flex flex-col gap-1 pb-1">
        {equipa.map(
          item =>
            (!seleccion.length || seleccion.some(s => s === item.tag)) && (
              <HoverPhoto img={item.img} key={item.name}>
                <ListItem
                  item={item}
                  selectedBackgroundColor={backgroundColors[item.tag]}
                />
              </HoverPhoto>
            )
        )}
      </div>
    </div>
  )
}

export default Equipa
