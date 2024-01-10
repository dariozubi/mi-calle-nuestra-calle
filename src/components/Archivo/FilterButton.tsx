import { PropsWithChildren } from 'react'

type Props = {
  selected: boolean
} & React.HTMLProps<HTMLButtonElement>

export function FilterButton({
  children,
  selected,
  onClick,
}: PropsWithChildren<Props>) {
  const colors = selected
    ? 'bg-ladrillo text-black'
    : 'bg-black text-ladrillo hover:bg-ladrillo hover:text-black'
  return (
    <button onClick={onClick} className={`h-10 px-2  font-bold ${colors}`}>
      {children}
    </button>
  )
}
