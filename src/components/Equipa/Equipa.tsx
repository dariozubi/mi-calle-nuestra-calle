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
    <div className="mt-8">
      <div className="sticky top-[68px] flex justify-between bg-white p-8 first-letter:flex">
        <h1 className="text-4xl font-extrabold">Equipa</h1>
        <div className="flex justify-between gap-8">
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
