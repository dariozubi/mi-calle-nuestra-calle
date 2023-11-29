import { PropsWithChildren } from 'react'

export function FilterButton({ children }: PropsWithChildren) {
  return (
    <button className="h-10 bg-black px-2 text-white hover:bg-ladrillo hover:text-black">
      {children}
    </button>
  )
}
