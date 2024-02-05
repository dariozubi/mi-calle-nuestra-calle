import Link from 'next/link'
import { ArrowDown } from 'react-feather'
import { Item } from './types'

type Props = {
  item: Item
}

export function ListItem({ item }: Props) {
  return (
    <div className="w-fill flex justify-between gap-2 bg-grey px-4 py-4 hover:bg-white lg:px-16">
      <p className="w-[250px] overflow-hidden text-ellipsis whitespace-nowrap">
        {item.name}
      </p>
      <p className="w-[250px] overflow-hidden text-ellipsis whitespace-nowrap">
        {item.details}
      </p>
      <p className="w-[100px]">{item.country}</p>
      <Link href={item.url} target="_blank" className="flex items-center gap-2">
        <ArrowDown size={20} />
        <span className="hidden md:block">Descargar</span>
      </Link>
    </div>
  )
}
