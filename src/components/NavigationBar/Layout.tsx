import { PropsWithChildren } from 'react'
import Link from 'next/link'
import { Menu, X } from 'react-feather'

type Props = {
  open: boolean
  showMenuButton: boolean
  menuButtonClickHandler: () => void
}

export const Layout = ({
  children,
  open,
  showMenuButton,
  menuButtonClickHandler,
}: PropsWithChildren<Props>) => {
  return (
    <nav className="fixed z-50 flex w-full flex-col bg-white">
      <div className="z-10 flex w-full items-center justify-between bg-white px-4 py-4 lg:px-16">
        <Link href="/" className="text-xl font-black lg:text-3xl">
          mi calle, nuestra calle.
        </Link>
        {showMenuButton && (
          <button onClick={menuButtonClickHandler}>
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>
        )}
      </div>
      {children}
    </nav>
  )
}
