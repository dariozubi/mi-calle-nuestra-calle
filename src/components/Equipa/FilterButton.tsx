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
      className={`h-10 px-2 py-1 text-base font-bold lg:px-4 lg:py-2 lg:text-xl ${colors}`}
    >
      {children}
    </button>
  )
}
