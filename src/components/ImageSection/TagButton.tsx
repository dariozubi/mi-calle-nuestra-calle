type Props = {
  selected: boolean
} & React.HTMLProps<HTMLButtonElement>

export const TagButton = ({ children, selected, onClick }: Props) => {
  const colors = selected ? 'bg-white text-black' : 'bg-black text-white'
  return (
    <button
      onClick={onClick}
      className={`rounded-xl border px-4 py-2 ${colors}`}
    >
      {children}
    </button>
  )
}
