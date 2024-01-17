'use client'

import { useCallback, useState } from 'react'
import { equipa } from './consts'
import { FilterButton } from './FilterButton'
import { ListItem } from './ListItem'
import { Tag } from './types'

function Equipa() {
  const [seleccion, setSeleccion] = useState<Tag[]>([
    'fundadora',
    'aliada',
    'voluntaria',
  ])

  const handleClick = useCallback(
    (filter: Tag) => {
      const index = seleccion.indexOf(filter)
      if (index !== -1) {
        if (seleccion.length > 1) {
          setSeleccion(seleccion.toSpliced(index, 1))
        }
      } else {
        setSeleccion([...seleccion, filter])
      }
    },
    [seleccion]
  )

  return (
    <>
      <div className="flex justify-between p-16">
        <h1 className="text-4xl font-extrabold">Equipa</h1>
        <div className="flex justify-between gap-8">
          <FilterButton
            onClick={() => handleClick('fundadora')}
            selected={seleccion.includes('fundadora')}
          >
            Fundadoras
          </FilterButton>
          <FilterButton
            onClick={() => handleClick('aliada')}
            selected={seleccion.includes('aliada')}
          >
            Aliadas
          </FilterButton>
          <FilterButton
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
            seleccion.some(s => s === item.tag) && (
              <ListItem item={item} key={item.name} />
            )
        )}
      </div>
    </>
  )
}

export default Equipa
