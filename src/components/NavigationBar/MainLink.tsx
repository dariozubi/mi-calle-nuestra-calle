import { PropsWithChildren } from 'react'

type Props = {
  href: string
  active: boolean
  onClick: () => void
}

export function MainLink({
  href,
  active,
  onClick,
  children,
}: PropsWithChildren<Props>) {
  return (
    <div className="flex items-center" onClick={onClick}>
      <div
        className={`mr-2 h-5 w-5 rounded-full bg-${
          active ? 'black' : 'transparent'
        }`}
      />
      <a className="text-4xl font-extrabold" href={href}>
        {children}
      </a>
    </div>
  )
}
