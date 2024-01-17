import { PropsWithChildren } from 'react'

type Props = {
  selected: boolean
} & React.HTMLProps<HTMLButtonElement>

export function FilterButton({
  selected,
  onClick,
  children,
}: PropsWithChildren<Props>) {
  const colors = selected
    ? 'bg-pink text-black'
    : 'bg-black text-white hover:bg-pink hover:text-black'
  return (
    <button onClick={onClick} className={`h-10 px-2 text-xl ${colors}`}>
      {children}
    </button>
  )
}
