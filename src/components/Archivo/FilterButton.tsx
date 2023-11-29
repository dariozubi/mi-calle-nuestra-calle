import { PropsWithChildren } from 'react'

export function FilterButton({ children }: PropsWithChildren) {
  return (
    <button className="h-10 bg-black px-2 text-ladrillo hover:bg-salmon hover:text-black">
      {children}
    </button>
  )
}
