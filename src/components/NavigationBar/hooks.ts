import { useCallback, useEffect, useState } from 'react'

export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const hash = useHashChange()

  useEffect(() => {
    console.log(hash)
    if (hash === 'separte' || hash === 'labs') {
      setScrollPosition(1000)
    }
  }, [hash])

  const handleScroll = useCallback(() => {
    const position = window.scrollY
    setScrollPosition(position)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return { scrollPosition }
}

const getHash = () =>
  typeof window !== 'undefined'
    ? decodeURIComponent(window.location.hash.replace('#', ''))
    : undefined

export function useHashChange() {
  const [hash, setHash] = useState(getHash())
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
    const handleHashChange = () => {
      setHash(getHash())
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  return isClient ? hash : null
}
