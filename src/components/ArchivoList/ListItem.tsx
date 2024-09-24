import Link from 'next/link'
import { Item } from './types'
import { colorVariants } from './consts'

type Props = {
  item: Item
  selectedBackgroundColor: keyof typeof colorVariants
}

export function ListItem({ item, selectedBackgroundColor }: Props) {
  const selectedVariant = colorVariants[selectedBackgroundColor].hover
  return (
    <li className={`bg-grey ${selectedVariant}`}>
      <Link
        href={item.url}
        target="_blank"
        className="w-fill flex justify-between gap-2 px-4 py-4 lg:px-16"
      >
        <p className="w-7/12 overflow-hidden text-ellipsis whitespace-nowrap pr-4">
          {item.name}
        </p>
        <p className="w-3/12 overflow-hidden text-ellipsis whitespace-nowrap text-start">
          {item.details}
        </p>
        <p className="w-2/12 text-end">{item.country}</p>
      </Link>
    </li>
  )
}
