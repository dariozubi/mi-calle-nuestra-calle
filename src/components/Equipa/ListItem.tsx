import Link from 'next/link'
import { ArrowUpRight } from 'react-feather'
import { Miembro } from './types'
import { colorVariants } from './consts'

type Props = {
  item: Miembro
  selectedBackgroundColor: keyof typeof colorVariants
}

export function ListItem({ item, selectedBackgroundColor }: Props) {
  return (
    <div
      className={`w-fill flex bg-grey px-16 py-4 ${colorVariants[selectedBackgroundColor].hover}`}
    >
      <p className="w-1/4">{item.name}</p>
      <p className="w-1/4">{item.position}</p>
      <p className="w-1/4 text-end">{item.country}</p>
      {!!item.url ? (
        <Link
          href={item.url}
          className="flex w-1/4 items-center justify-end gap-1"
        >
          <ArrowUpRight size={16} className="-mb-1" />
          Conectar
        </Link>
      ) : (
        <div />
      )}
    </div>
  )
}
