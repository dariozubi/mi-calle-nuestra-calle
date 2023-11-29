import { lista_archivo } from '@/utils/consts'
import { ListItem } from './ListItem'
import { FilterButton } from './FilterButton'

function Archivo() {
  return (
    <>
      <div className="bg-ladrillo p-16">
        <div className="flex justify-between">
          <h2 className="text-6xl font-extrabold">Archivo</h2>
          <div className="flex items-end gap-8">
            <FilterButton>Conferencias</FilterButton>
            <FilterButton>Academia</FilterButton>
            <FilterButton>Exhibiciones</FilterButton>
          </div>
        </div>
        <hr className="my-12" />
        <p className="mb-8">
          Lorem ipsum dolor sit México, Guatemala, Barcelona adipiscing elit,
          sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
          aliquam erat volutpat. Ut wisi enim ad minim veniam, quis Lorem ipsum
          dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
          euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
          wisi enim ad minim
        </p>
      </div>
      <div className="flex flex-col gap-1 bg-ladrillo pb-1">
        {lista_archivo.map(item => (
          <ListItem item={item} key={item.url} />
        ))}
      </div>
    </>
  )
}

export default Archivo
