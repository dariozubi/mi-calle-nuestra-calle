'use client'

import Link from 'next/link'
import { ArrowDown, ArrowUpRight } from 'react-feather'
import { MainLink } from './MainLink'
import { links } from '@/utils/consts'

type Props = {
  show: boolean
  handleClose: () => void
}

function DesktopNavigation({ show, handleClose }: Props) {
  return (
    <>
      <div
        className={`flex w-full gap-12 bg-lila px-16 py-8 transition-[margin] duration-700 ${
          show ? '' : 'fixed -mt-72'
        }`}
      >
        <div className="hidden w-2/12 flex-col lg:flex">
          <MainLink
            onClick={handleClose}
            href="/#images"
            className="text-2xl font-extrabold"
          >
            México
          </MainLink>
          <MainLink
            onClick={handleClose}
            href="/#images"
            className="text-2xl font-extrabold"
          >
            Guatemala
          </MainLink>
          <MainLink
            onClick={handleClose}
            href="/#images"
            className="text-2xl font-extrabold"
          >
            Barcelona
          </MainLink>
        </div>
        <div className="flex w-3/12 flex-col">
          <MainLink onClick={handleClose} href="/nosotras">
            Nosotras
          </MainLink>
          <MainLink onClick={handleClose} href="/#labs">
            Labs
          </MainLink>
          <MainLink onClick={handleClose} href="/archivo">
            Archivo
          </MainLink>
          <MainLink onClick={handleClose} href="/#separte">
            Sé parte
          </MainLink>
        </div>
        <div className="flex w-3/12 flex-col">
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
          <p className="mt-6 flex items-center text-2xl">
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
        </div>
        <div className="flex w-4/12 flex-col items-end justify-between">
          <div className="flex w-full items-center justify-end gap-2">
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
            className="bg-black px-4 py-2 text-center text-xl font-bold text-white"
          >
            Adquiere nuestra merch
          </a>
        </div>
      </div>
    </>
  )
}

export default DesktopNavigation
