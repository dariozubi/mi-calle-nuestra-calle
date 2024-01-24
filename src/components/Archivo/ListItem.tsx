import Link from 'next/link'
import { ArrowDown } from 'react-feather'
import { Item } from './types'

type Props = {
  item: Item
}

export function ListItem({ item }: Props) {
  return (
    <div className="w-fill flex justify-between bg-grey px-16 py-4 hover:bg-white">
      <p className="w-[250px] overflow-hidden text-ellipsis whitespace-nowrap">
        {item.name}
      </p>
      <p className="w-[250px] overflow-hidden text-ellipsis whitespace-nowrap">
        {item.details}
      </p>
      <p className="w-[100px]">{item.country}</p>
      <Link href={item.url} target="_blank" className="flex items-center gap-2">
        <ArrowDown size={20} /> Descargar
      </Link>
    </div>
  )
}
