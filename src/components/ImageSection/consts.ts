import { escenarios, proyectas } from '@/utils/consts'

export const trabajos = [
  ...proyectas.map(t => ({
    image: t.images ? t.images[0] : undefined,
    titulo: t.titulo,
    link: `/proyecta/${t.slug}`,
    tags: t.tags,
  })),
  ...escenarios.map(t => ({
    image: t.images ? t.images[0] : undefined,
    titulo: t.titulo,
    link: `/escenario/${t.slug}`,
    tags: t.tags,
  })),
]
export const tags = [...new Set(trabajos.map(t => t.tags).flat())].sort()
