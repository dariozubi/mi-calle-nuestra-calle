import { PropsWithChildren } from 'react'

export function FilterButton({ children }: PropsWithChildren) {
  return (
    <button className="text-ladrillo hover:bg-salmon h-10 bg-black px-2 hover:text-black">
      {children}
    </button>
  )
}
