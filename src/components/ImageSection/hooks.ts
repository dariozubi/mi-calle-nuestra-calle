import { useCallback, useEffect, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export function useImagesState() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
  const [currentTags, setCurrentTags] = useState<string[]>([])

  useEffect(() => {
    const urlTags = searchParams.get('tags')
    setCurrentTags(urlTags ? urlTags.split(',') : [])
  }, [searchParams])

  const handleClick = useCallback(
    (tag: string) => {
      const index = currentTags.indexOf(tag)
      let newTags
      if (index !== -1) {
        if (currentTags.length > 0) {
          newTags = currentTags.toSpliced(index, 1)
        }
      } else {
        newTags = [...currentTags, tag]
      }
      router.push(
        `${pathname}${
          newTags && newTags?.length
            ? `?tags=${encodeURIComponent(newTags.toString())}`
            : ''
        }`,
        {
          shallow: true,
          scroll: false,
        }
      )
    },
    [currentTags, pathname, router]
  )

  return { currentTags, handleClick }
}
