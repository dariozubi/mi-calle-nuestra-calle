import { links } from '@/utils/consts'
import Link from 'next/link'
import { PropsWithChildren } from 'react'

function Footer() {
  return (
    <div className="p-16">
      <div className="flex justify-between">
        <Link className="font-bold" target="_blank" href={links.mail}>
          hola@micallenuestracalle.com
        </Link>
        <div>
          <Link className="text-sm" target="_blank" href={links.instagram}>
            Instagram
          </Link>{' '}
          |{' '}
          <Link className="text-sm" target="_blank" href={links.linkedin}>
            Linkedin
          </Link>
        </div>
      </div>
      <hr className="my-8" />
      <div className="flex justify-between">
        <div className="flex w-1/2 flex-wrap">
          <FooterLink href="/nosotras">Nosotras</FooterLink>
          <FooterLink href="/#archivo">Archivo</FooterLink>
          <FooterLink href="/">Impacto</FooterLink>
          <FooterLink href="/#labs">Laboratorias</FooterLink>
          <FooterLink href="/#separte">Sé parte</FooterLink>
          <FooterLink href="/">Herramientas</FooterLink>
        </div>
        <div className="flex w-1/2 items-end justify-end text-xs">
          © 2023 Mi Calle, Nuestra Calle | Diseñado por Sophia Arrazola
        </div>
      </div>
    </div>
  )
}

function FooterLink({ children, href }: PropsWithChildren<{ href: string }>) {
  return (
    <a href={href} className="w-1/3 text-sm">
      {children}
    </a>
  )
}

export default Footer
