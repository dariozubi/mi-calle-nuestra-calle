'use client'

import { ListItem } from './ListItem'
import { FilterButton } from './FilterButton'
import { academia, conferencias, exhibiciones } from './consts'
import { useCallback, useState } from 'react'
import { Archivos } from './types'

function Archivo() {
  const [filters, setFilters] = useState<Archivos[]>([])
  const handleClick = useCallback(
    (filter: Archivos) => {
      const index = filters.indexOf(filter)
      if (index !== -1) {
        if (filters.length > 0) {
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
      <div className="p-4 lg:p-16" id="archivo">
        <div className="flex flex-wrap items-center justify-between">
          <h2 className="py-4 text-3xl font-extrabold sm:pb-0 lg:text-6xl">
            Archivo
          </h2>
          <div className="flex flex-wrap items-end gap-2 lg:gap-8">
            <FilterButton
              selected={filters.includes('conferencias')}
              onClick={() => handleClick('conferencias')}
            >
              Conferencias
            </FilterButton>
            <FilterButton
              selected={filters.includes('academia')}
              onClick={() => handleClick('academia')}
            >
              Academia
            </FilterButton>
            <FilterButton
              selected={filters.includes('exhibiciones')}
              onClick={() => handleClick('exhibiciones')}
            >
              Exhibiciones
            </FilterButton>
          </div>
        </div>
        <hr className="mb-4 mt-4 lg:mb-0" />
      </div>
      <div className="flex flex-col gap-1 pb-1">
        {(!filters.length || filters.includes('conferencias')) &&
          conferencias.map(item => <ListItem item={item} key={item.url} />)}
        {(!filters.length || filters.includes('academia')) &&
          academia.map(item => <ListItem item={item} key={item.url} />)}
        {(!filters.length || filters.includes('exhibiciones')) &&
          exhibiciones.map(item => <ListItem item={item} key={item.url} />)}
      </div>
    </>
  )
}

export default Archivo
