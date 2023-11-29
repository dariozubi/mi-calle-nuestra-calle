import Link from 'next/link'
import { PropsWithChildren } from 'react'

function NavigationBar() {
  return (
    <nav className="flex w-full flex-col gap-3 px-16 py-10">
      <Link href="/" className="text-xl font-extrabold">
        mi calle, nuestra calle.
      </Link>
      <div className="flex gap-5">
        <NavLink href="/nosotras">Nosotras</NavLink>
        <NavLink href="/#labs">Labs</NavLink>
        <NavLink href="/#archivo">Archivo</NavLink>
        <NavLink href="/#separte">Sé parte</NavLink>
      </div>
    </nav>
  )
}

function NavLink({ children, href }: PropsWithChildren<{ href: string }>) {
  return (
    <a href={href} className="text-lg font-semibold">
      {children}
    </a>
  )
}

export default NavigationBar
