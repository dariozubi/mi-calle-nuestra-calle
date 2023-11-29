import { PropsWithChildren } from 'react'

function NavigationBar() {
  return (
    <nav className="flex w-full flex-col gap-3 px-16 py-8">
      <p className="text-xl font-extrabold">mi calle, nuestra calle.</p>
      <div className="flex gap-5">
        <NavLink>Nosotras</NavLink>
        <NavLink>Labs</NavLink>
        <NavLink>Archivo</NavLink>
        <NavLink>Sé parte</NavLink>
      </div>
      <hr className="mt-8 border-black" />
    </nav>
  )
}

function NavLink({ children }: PropsWithChildren) {
  return <p className="text-lg font-semibold">{children}</p>
}

export default NavigationBar
