type Enlace = {
  nombre: string
  url: string
}

export type Proyecta = {
  slug: string
  titulo: string
  lugar?: string
  fecha?: string
  temas: string[]
  alianzas: Enlace[]
  descripcion: string
  metodos: string
  pedagogias: string
  medio: string
  cambios: string
  creditos: string
  images: string[]
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
