'use client'

import { PropsWithChildren, useCallback, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'react-feather'
import { useScrollPosition } from './hooks'
import { LanguageSelector } from './LanguageSelector'

const scrollLimit = 10

export const Layout = ({ children }: PropsWithChildren) => {
  const [open, setOpen] = useState(false)
  const { scrollPosition } = useScrollPosition()

  const handleClick = useCallback(() => setOpen(current => !current), [])
  const isOnTop = scrollPosition < scrollLimit

  return (
    <>
      <nav className="fixed z-50 flex w-full flex-col bg-white">
        <div className="z-10 flex w-full items-center justify-between bg-white px-4 py-4 lg:px-16">
          <Link href="/" className="text-xl font-black lg:text-3xl">
            mi calle, nuestra calle.
          </Link>
          <div className="flex h-full items-center gap-8">
            <LanguageSelector />
            <div className="hidden lg:block lg:min-w-[30px]">
              {!isOnTop && (
                <button onClick={handleClick}>
                  {open ? <X size={30} /> : <Menu size={30} />}
                </button>
              )}
            </div>
            <div className="block lg:hidden">
              <button onClick={handleClick}>
                {open ? <X size={30} /> : <Menu size={30} />}
              </button>
            </div>
          </div>
        </div>
        <div className="block lg:hidden">
          {open && (
            <div className="flex h-screen flex-col gap-2 bg-lila px-8 pt-4">
              {children}
            </div>
          )}
        </div>
        <div className="hidden lg:block">
          <div
            className={`flex w-full gap-12 bg-lila px-16 py-8 transition-[margin] duration-700 ${
              open || isOnTop ? '' : 'fixed -mt-72'
            }`}
          >
            {children}
          </div>
        </div>
      </nav>
      <div
        className={`hidden transition-[height] duration-500 lg:block ${
          scrollPosition < scrollLimit + 100 ? 'h-64' : `h-48 w-full`
        }`}
      />
    </>
  )
}
