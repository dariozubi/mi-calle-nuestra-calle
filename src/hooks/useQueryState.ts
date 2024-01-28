import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import { useEffect, useState } from 'react'

export const useQueryState = (initialState?: ParsedUrlQuery) => {
  const router = useRouter()
  const [state, setState] = useState(initialState)

  useEffect(() => {
    setState(router.query)
  }, [router.query])

  const setQueryParams = (query: ParsedUrlQuery) => {
    router.push({ pathname: router.pathname, query }, undefined, {
      shallow: true,
    })
  }

  return [state, setQueryParams]
}
