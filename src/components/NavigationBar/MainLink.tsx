import { PropsWithChildren } from 'react'

export function MainLink({
  href,
  onClick,
  children,
}: PropsWithChildren<React.HTMLProps<HTMLAnchorElement>>) {
  return (
    <a href={href} onClick={onClick}>
      {children}
    </a>
  )
}
