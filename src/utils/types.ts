import { ReactNode } from 'react'

type Enlace = {
  nombre: string
  url: string
}

export type Aliada = {
  nombre: string
  url: string
  logo?: string
}

export type Proyecta = {
  slug: string
  tags: string[]
  titulo: string
  lugar: string
  fecha: string
  temas: string[]
  alianzas: Aliada[]
  descripcion: string | ReactNode[]
  metodos?: string
  pedagogias?: string
  medio?: string
  cambios?: string
  creditos?: string
  images?: string[]
  reporte?: string
}

export type Semblante = {
  slug: string
  nombre: string
  correo: string
  instagram: string
  linkedin: string
  intereses: string[]
  proyectosRecientes: Enlace[]
  conferencias: Enlace[]
  semblante: string
}
