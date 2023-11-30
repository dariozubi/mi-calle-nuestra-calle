import Link from 'next/link'
import { ArrowUpRight } from 'react-feather'

type Props = {
  item: {
    name: string
    position: string
    country: string
    url: string
  }
}

export function ListItem({ item }: Props) {
  return (
    <Link
      href={item.url}
      className="w-fill bg-grey flex px-16 py-4 hover:bg-pink"
    >
      <p className="w-1/4">{item.name}</p>
      <p className="w-1/4">{item.position}</p>
      <p className="w-1/4 text-end">{item.country}</p>
      <p className="flex w-1/4 items-center justify-end gap-1">
        <ArrowUpRight size={16} className="-mb-1" />
        Conectar
      </p>
    </Link>
  )
}
