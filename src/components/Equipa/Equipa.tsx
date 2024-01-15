import { equipa } from './consts'
import { FilterButton } from './FilterButton'
import { ListItem } from './ListItem'

function Equipa() {
  return (
    <>
      <div className="flex justify-between p-16">
        <h1 className="text-4xl font-extrabold">Equipa</h1>
        <div className="flex justify-between gap-8">
          <FilterButton>Fundadoras</FilterButton>
          <FilterButton>Asociadas</FilterButton>
          <FilterButton>Aliadas</FilterButton>
          <FilterButton>Voluntarias</FilterButton>
        </div>
      </div>
      <div className="flex flex-col gap-1 pb-1">
        {equipa.map(item => (
          <ListItem item={item} key={item.name} />
        ))}
      </div>
    </>
  )
}

export default Equipa
