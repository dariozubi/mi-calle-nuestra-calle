import Link from 'next/link'
import { ArrowUpRight } from 'react-feather'
import { Miembro } from './types'
import { colorVariants } from './consts'

type Props = {
  item: Miembro
  selectedBackgroundColor: keyof typeof colorVariants
}

export function ListItem({ item, selectedBackgroundColor }: Props) {
  const selectedVariant = colorVariants[selectedBackgroundColor].selected
  return (
    <div
      className={`w-fill flex flex-wrap bg-grey px-4 py-4 lg:px-16 ${selectedVariant}`}
    >
      <p className="w-1/2 font-bold lg:w-1/4 lg:font-normal">{item.name}</p>
      <p className="w-1/2 lg:w-5/12">{item.position}</p>
      <p className="w-1/2 pt-2 lg:w-2/12 lg:pt-0 lg:text-end">{item.country}</p>
      {!!item.url ? (
        <Link
          href={item.url}
          className="flex w-1/2 items-center gap-1 pt-2 lg:w-2/12 lg:justify-end lg:pt-0"
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
