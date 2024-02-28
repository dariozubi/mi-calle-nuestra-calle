import { PropsWithChildren } from 'react'
import { colorVariants } from './consts'
import Text from '../Text'

type Props = {
  selected: boolean
  selectedBackgroundColor: keyof typeof colorVariants
} & React.HTMLProps<HTMLButtonElement>

export function FilterButton({
  selected,
  selectedBackgroundColor,
  onClick,
  children,
}: PropsWithChildren<Props>) {
  const colors = selected
    ? colorVariants[selectedBackgroundColor].selected
    : colorVariants[selectedBackgroundColor].default
  return (
    <button onClick={onClick} className={`h-fit px-2 py-1 ${colors}`}>
      {children}
    </button>
  )
}
