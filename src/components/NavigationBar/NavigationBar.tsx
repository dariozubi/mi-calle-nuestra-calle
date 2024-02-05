'use client'

import { useCallback, useEffect, useState } from 'react'
import { Layout } from './Layout'
import DesktopNavigation from './DesktopNavigation'
import { MobileNavigation } from './MobileNavigation'

const scrollLimit = 344

function NavigationBar() {
  const [open, setOpen] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
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
      <div className="hidden lg:block">
        <Layout
          open={open}
          showMenuButton={!isOnTop}
          menuButtonClickHandler={handleClick}
        >
          <DesktopNavigation handleClose={handleClose} show={open || isOnTop} />
        </Layout>
      </div>
      <div className="block lg:hidden">
        <Layout
          open={open}
          showMenuButton={true}
          menuButtonClickHandler={handleClick}
        >
          <MobileNavigation handleClose={handleClose} open={open} />
        </Layout>
      </div>
      <div
        className={`hidden transition-[height] duration-500 lg:block ${
          scrollPosition < scrollLimit + 100 ? 'h-72' : `h-48 w-full`
        }`}
      />
    </>
  )
}

export default NavigationBar
