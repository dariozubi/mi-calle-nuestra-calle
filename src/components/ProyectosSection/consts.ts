import { escenarios, proyectas } from '@/utils/consts'

export const trabajos = [
  ...proyectas.map(t => ({
    image: t.images ? t.images[0] : undefined,
    titulo: t.titulo,
    link: `/proyecta/${t.slug}`,
    tags: t.tags,
    slug: t.slug,
  })),
  // ...escenarios.map(t => ({
  //   image: t.images ? t.images[0] : undefined,
  //   titulo: t.titulo,
  //   link: `/escenario/${t.slug}`,
  //   tags: t.tags,
  //   slug: t.slug,
  // })),
]
