export type PageProps = {
  params: { slug: string; locale: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}

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
  lugar: string
  fecha: string
  alianzas: Aliada[]
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
  moodboard: string[]
}
