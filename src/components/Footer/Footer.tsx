import { links } from '@/utils/consts'
import Link from 'next/link'
import { PropsWithChildren } from 'react'

function Footer() {
  return (
    <footer className="p-4 lg:p-16">
      <div className="flex flex-wrap justify-between">
        <Link
          className="text-sm font-bold md:text-base"
          target="_blank"
          href={links.mail}
        >
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
      <hr className="my-4 md:my-8" />
      <div className="flex flex-wrap justify-between">
        <div className="flex w-full flex-wrap py-4 md:w-1/2 md:py-0">
          <FooterLink href="/nosotras">Nosotras</FooterLink>
          <FooterLink href="/archivo">Archivo</FooterLink>
          <FooterLink href="/#labs">Laboratorias</FooterLink>
          <FooterLink href="/#separte">Sé parte</FooterLink>
        </div>
        <p className="flex w-full items-end justify-end py-4 text-xs md:w-1/2 md:py-0">
          © 2023 Mi Calle, Nuestra Calle | Diseñado por Sophia Arrazola
        </p>
      </div>
    </footer>
  )
}

function FooterLink({ children, href }: PropsWithChildren<{ href: string }>) {
  return (
    <Link href={href} className="w-1/2 text-sm">
      {children}
    </Link>
  )
}

export default Footer
