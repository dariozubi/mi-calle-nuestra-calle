import { ReactNode } from 'react'

export type Miembro = {
  name: string
  position: ReactNode
  country: string
  tag: Tag
  url: string
  img: string
}

export type Filter = {
  label: ReactNode
  value: Tag
}

export type Tag = 'fundadora' | 'aliada' | 'voluntaria'
