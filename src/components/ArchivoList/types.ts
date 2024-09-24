import { ReactNode } from 'react'

export type Item = {
  name: string
  details: string
  country: string
  url: string
  tag: Archivo
}

export type Filter = {
  label: ReactNode
  value: Archivo
}

export type Archivo = 'conferencia' | 'academia' | 'exhibicion'
