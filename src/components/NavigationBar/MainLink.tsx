import { PropsWithChildren } from 'react'

export function MainLink({
  href,
  onClick,
  children,
}: PropsWithChildren<React.HTMLProps<HTMLAnchorElement>>) {
  return (
    <a className="text-4xl font-extrabold" href={href} onClick={onClick}>
      {children}
    </a>
  )
}
