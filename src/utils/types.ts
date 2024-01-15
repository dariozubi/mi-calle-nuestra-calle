export type Proyecta = {
  slug: string
  titulo: string
  lugar?: string
  fecha?: string
  temas: string[]
  alianzas: {
    name: string
    url: string
  }[]
  descripcion: string
  metodos: string
  pedagogias: string
  medio: string
  cambios: string
  creditos: string
  images: string[]
  reporte?: string
}
