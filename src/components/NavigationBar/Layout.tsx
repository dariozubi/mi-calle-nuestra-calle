'use client'

import { PropsWithChildren, useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'react-feather'
import { usePathname } from 'next/navigation'

type Props = {
  isMobile?: boolean
}

const scrollLimit = 10

export const Layout = ({ children, isMobile }: PropsWithChildren<Props>) => {
  const [open, setOpen] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(1000)
  const pathname = usePathname()

  const isOnTop = scrollPosition < scrollLimit
  const showMenuButton = isMobile ? true : !isOnTop

  const handleScroll = useCallback(() => {
    const position = window.scrollY
    setScrollPosition(position)
  }, [])
  const handleClick = useCallback(() => setOpen(current => !current), [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <>
      <nav className="fixed z-50 flex w-full flex-col bg-white">
        <div className="z-10 flex w-full items-center justify-between bg-white px-4 py-4 lg:px-16">
          <Link href="/" className="text-xl font-black lg:text-3xl">
            mi calle, nuestra calle.
          </Link>
          {showMenuButton && (
            <button onClick={handleClick}>
              {open ? <X size={30} /> : <Menu size={30} />}
            </button>
          )}
        </div>
        {isMobile ? (
          open ? (
            <div className="flex h-screen flex-col gap-2 bg-lila px-8 pt-4">
              {children}
            </div>
          ) : null
        ) : (
          <div
            className={`flex w-full gap-12 bg-lila px-16 py-8 transition-[margin] duration-700 ${
              open || isOnTop ? '' : 'fixed -mt-72'
            }`}
          >
            {children}
          </div>
        )}
      </nav>
      <div
        className={`hidden transition-[height] duration-500 lg:block ${
          scrollPosition < scrollLimit + 100 ? 'h-64' : `h-48 w-full`
        }`}
      />
    </>
  )
}
