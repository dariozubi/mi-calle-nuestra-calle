import { PropsWithChildren } from 'react'
import { colorVariants } from './consts'

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
    <button
      onClick={onClick}
      className={`h-10 px-4 py-2 text-xl font-bold ${colors}`}
    >
      {children}
    </button>
  )
}
