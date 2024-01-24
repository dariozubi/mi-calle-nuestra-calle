'use client'

import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'
import { ArrowDown, ArrowUpRight, Menu, X } from 'react-feather'
import { MainLink } from './MainLink'
import { usePathname } from 'next/navigation'
import { links } from '@/utils/consts'

const scrollLimit = 344

function NavigationBar() {
  const [open, setOpen] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const pathname = usePathname()
  const isOnTop = scrollPosition < scrollLimit

  const handleScroll = useCallback(() => {
    const position = window.scrollY
    setScrollPosition(position)
  }, [])
  const handleClick = useCallback(() => setOpen(current => !current), [])
  const handleClose = useCallback(() => setOpen(false), [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return (
    <>
      <nav className={`fixed z-50 flex w-full flex-col bg-white`}>
        <div className="z-10 flex w-full items-center justify-between bg-white px-16 py-4">
          <Link href="/" className="text-3xl font-black">
            mi calle, nuestra calle.
          </Link>
          {!isOnTop && (
            <button onClick={handleClick}>
              {open ? <X size={30} /> : <Menu size={30} />}
            </button>
          )}
        </div>
        <div
          className={`flex w-full gap-12 bg-lila px-16 py-8 transition-[margin] duration-700 ${
            open || isOnTop ? '' : 'fixed -mt-72'
          }`}
        >
          <div className="flex w-2/12 flex-col">
            <p className="text-2xl font-extrabold">México</p>
            <p className="text-2xl font-extrabold">Guatemala</p>
            <p className="text-2xl font-extrabold">Barcelona</p>
          </div>
          <div className="flex w-3/12 flex-col">
            <MainLink
              onClick={handleClose}
              active={pathname.includes('/nosotras')}
              href="/nosotras"
            >
              Nosotras
            </MainLink>
            <MainLink onClick={handleClose} active={false} href="/#labs">
              Labs
            </MainLink>
            <MainLink onClick={handleClose} active={false} href="/#archivo">
              Archivo
            </MainLink>
            <MainLink onClick={handleClose} active={false} href="/#separte">
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
          <div className="flex w-4/12 flex-col">
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
              className="mt-28 bg-black py-2 text-center text-xl font-bold text-white"
            >
              Adquiere nuestra merch
            </a>
          </div>
        </div>
      </nav>
      <div
        className={`transition-[height] duration-500 ${
          scrollPosition < scrollLimit + 100 ? 'h-72' : `h-48 w-full`
        }`}
      />
    </>
  )
}

export default NavigationBar
