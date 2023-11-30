import Link from 'next/link'
import { ArrowDown } from 'react-feather'

type Props = {
  item: {
    name: string
    publisher: string
    country: string
    url: string
  }
}

export function ListItem({ item }: Props) {
  return (
    <div className="w-fill bg-grey flex justify-between px-16 py-4 hover:bg-white">
      <p>{item.name}</p>
      <p>{item.publisher}</p>
      <p>{item.country}</p>
      <Link href="" className="flex items-center gap-2">
        <ArrowDown size={20} /> Descargar
      </Link>
    </div>
  )
}
