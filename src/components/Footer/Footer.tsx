import Link from 'next/link'
import { PropsWithChildren } from 'react'

function Footer() {
  return (
    <div className="p-16">
      <div className="flex justify-between">
        <Link className="font-bold" href="mailto:hola@micallenuestracalle.com">
          hola@micallenuestracalle.com
        </Link>
        <div>
          <Link className="text-sm" href="">
            Instagram
          </Link>{' '}
          |{' '}
          <Link className="text-sm" href="">
            Linkedin
          </Link>
        </div>
      </div>
      <hr className="my-8" />
      <div className="flex justify-between">
        <div className="flex w-1/2 flex-wrap">
          <FooterLink>Nosotras</FooterLink>
          <FooterLink>Archivo</FooterLink>
          <FooterLink>Impacto</FooterLink>
          <FooterLink>Laboratorias</FooterLink>
          <FooterLink>Sé parte</FooterLink>
          <FooterLink>Herramientas</FooterLink>
        </div>
        <div className="flex w-1/2 items-end justify-end text-xs">
          © 2023 Mi Calle, Nuestra Calle | Diseñado por Sophia Arrazola
        </div>
      </div>
    </div>
  )
}

function FooterLink({ children }: PropsWithChildren) {
  return <p className="w-1/3 text-sm">{children}</p>
}

export default Footer
