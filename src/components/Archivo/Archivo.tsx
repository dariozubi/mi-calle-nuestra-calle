'use client'

import { ListItem } from './ListItem'
import { FilterButton } from './FilterButton'
import { academia, conferencias, exhibiciones } from './consts'
import { useCallback, useState } from 'react'
import { Archivos } from './types'

function Archivo() {
  const [filters, setFilters] = useState<Archivos[]>(['conferencias'])
  const handleClick = useCallback(
    (filter: Archivos) => {
      const index = filters.indexOf(filter)
      if (index !== -1) {
        if (filters.length > 1) {
          setFilters(filters.toSpliced(index, 1))
        }
      } else {
        setFilters([...filters, filter])
      }
    },
    [filters]
  )

  return (
    <>
      <div className="p-16" id="archivo">
        <div className="flex justify-between">
          <h2 className="text-6xl font-extrabold">Archivo</h2>
          <div className="flex items-end gap-8">
            {conferencias.length > 0 && (
              <FilterButton
                selected={filters.includes('conferencias')}
                onClick={() => handleClick('conferencias')}
              >
                Conferencias
              </FilterButton>
            )}
            {academia.length > 0 && (
              <FilterButton
                selected={filters.includes('academia')}
                onClick={() => handleClick('academia')}
              >
                Academia
              </FilterButton>
            )}
            {exhibiciones.length > 0 && (
              <FilterButton
                selected={filters.includes('exhibiciones')}
                onClick={() => handleClick('exhibiciones')}
              >
                Exhibiciones
              </FilterButton>
            )}
          </div>
        </div>
        <hr className="mt-16" />
      </div>
      <div className="flex flex-col gap-1 pb-1">
        {conferencias.length > 0 &&
          filters.includes('conferencias') &&
          conferencias.map(item => <ListItem item={item} key={item.url} />)}
        {academia.length > 0 &&
          filters.includes('academia') &&
          academia.map(item => <ListItem item={item} key={item.url} />)}
        {exhibiciones.length > 0 &&
          filters.includes('exhibiciones') &&
          exhibiciones.map(item => <ListItem item={item} key={item.url} />)}
      </div>
    </>
  )
}

export default Archivo
