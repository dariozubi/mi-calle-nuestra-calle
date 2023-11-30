import { PropsWithChildren } from 'react'

export function FilterButton({ children }: PropsWithChildren) {
  return (
    <button className="h-10 bg-black px-2 text-xl  text-white hover:bg-pink hover:text-black">
      {children}
    </button>
  )
}
