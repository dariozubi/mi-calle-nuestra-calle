import ArchivoList from '../ArchivoList'
import { Filter } from '../ArchivoList/types'
import Text from '../Text'

function ArchivoPage() {
  const filters: Filter[] = [
    {
      label: (
        <Text from="Archivo" variant="sm" as="span">
          conferencias
        </Text>
      ),
      value: 'conferencia',
    },
    {
      label: (
        <Text from="Archivo" variant="sm" as="span">
          academia
        </Text>
      ),
      value: 'academia',
    },
    {
      label: (
        <Text from="Archivo" variant="sm" as="span">
          exhibiciones
        </Text>
      ),
      value: 'exhibicion',
    },
  ]

  return (
    <ArchivoList
      header={
        <Text
          from="Archivo"
          variant="xl"
          as="h1"
          className="mb-4 sm:mb-0 sm:pb-0"
        >
          archivo
        </Text>
      }
      filters={filters}
    />
  )
}

export default ArchivoPage
