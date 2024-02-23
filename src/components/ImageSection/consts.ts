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

export const tags = [
  '2020',
  '2021',
  '2022',
  '2023',
  'CDMX',
  'GT',
  'Barcelona',
  'TW',
  'Arte comunitario',
  'Educación',
  'Futuros',
  'Género',
  'Investigación',
  'Narrativas',
  'Ciudad',
  'Clown',
  'Corporal',
  'Escenarios',
  'Ficción',
  'Híbrido',
  'Instalación',
  'Muralismo',
  'Online',
  'Performance',
  'Presencial',
  'Rural',
  'Taller',
  'Téxtil',
]
