import { FiX } from 'react-icons/fi'

type Props = {
  selected: boolean
} & React.HTMLProps<HTMLLIElement>

export const TagButton = ({ children, selected, onClick }: Props) => {
  const colors = selected ? 'bg-white text-black' : 'bg-darkGrey text-white'
  return (
    <li
      onClick={onClick}
      className={`font-sm flex w-fit cursor-pointer items-center gap-1 whitespace-nowrap rounded-xl px-2 py-1 ${colors}`}
    >
      {children}
      {selected && <FiX />}
    </li>
  )
}
