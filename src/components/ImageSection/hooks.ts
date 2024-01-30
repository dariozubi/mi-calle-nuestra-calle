import { useCallback, useState } from 'react'

export function useImagesState() {
  const [currentTags, setCurrentTags] = useState<string[]>([])

  // useEffect(() => {
  //   const urlTags = searchParams.get('tags')
  //   setCurrentTags(urlTags ? urlTags.split(',') : [])
  // }, [searchParams])

  const handleClick = useCallback(
    (tag: string) => {
      const index = currentTags.indexOf(tag)
      if (index !== -1) {
        if (currentTags.length > 0) {
          setCurrentTags(currentTags.toSpliced(index, 1))
        }
      } else {
        setCurrentTags([...currentTags, tag])
      }
      // router.replace(
      //   `${pathname}${
      //     newTags && newTags?.length
      //       ? `?tags=${encodeURIComponent(newTags.toString())}`
      //       : ''
      //   }`,
      //   {
      //     shallow: true,
      //     scroll: false,
      //   }
      // )
    },
    [currentTags]
  )

  return { currentTags, handleClick }
}
