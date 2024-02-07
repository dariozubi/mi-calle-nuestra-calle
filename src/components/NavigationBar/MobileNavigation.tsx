import { links } from '@/utils/consts'
import Link from 'next/link'
import { ArrowDown, ArrowUpRight } from 'react-feather'

type Props = {
  open: boolean
  handleClose: () => void
}

export const MobileNavigation = ({ open, handleClose }: Props) => {
  if (!open) return null
  return (
    <div className="flex h-screen flex-col gap-2 bg-lila px-8 pt-4">
      <Link
        onClick={handleClose}
        href="/nosotras"
        className="text-4xl font-extrabold"
      >
        Nosotras
      </Link>
      <Link
        onClick={handleClose}
        href="/#labs"
        className="text-4xl font-extrabold"
      >
        Labs
      </Link>
      <Link
        onClick={handleClose}
        href="/archivo"
        className="text-4xl font-extrabold"
      >
        Archivo
      </Link>
      <Link
        onClick={handleClose}
        href="/#separte"
        className="text-4xl font-extrabold"
      >
        Sé parte
      </Link>
      <hr className="mt-2" />
      <p className="text-2xl">Hazlo tu mismx</p>
      <Link
        href={links.metodologias}
        target="_blank"
        className="flex items-center text-2xl font-extrabold"
      >
        Metodologías <ArrowDown size={28} />
      </Link>
      <Link
        target="_blank"
        href={links.herramientas}
        className="flex items-center text-2xl font-extrabold"
      >
        Herramientas <ArrowDown size={28} />
      </Link>
      <hr className="mt-2" />
      <p className=" flex items-center text-2xl">
        Contáctanos <ArrowUpRight size={28} />
      </p>
      <div className="flex items-center gap-2">
        <Link
          href={links.mail}
          target="_blank"
          className="text-2xl font-extrabold text-white"
        >
          Email
        </Link>
        <p className="font-extrabold text-white">|</p>
        <Link
          href={links.dm}
          target="_blank"
          className="text-2xl font-extrabold text-white"
        >
          DM
        </Link>
      </div>
      <hr className="mt-2" />
      <div className="flex w-full items-center gap-2">
        <Link className="text-xl" target="_blank" href={links.instagram}>
          Instagram
        </Link>{' '}
        |{' '}
        <Link className="text-xl" target="_blank" href={links.linkedin}>
          Linkedin
        </Link>
      </div>
      <a
        href={links.merch}
        target="_blank"
        className="mt-4 bg-black px-4 py-2 text-center text-xl font-bold text-white"
      >
        Adquiere nuestra merch
      </a>
    </div>
  )
}
