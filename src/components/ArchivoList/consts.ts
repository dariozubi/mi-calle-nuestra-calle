import { Item } from './types'

export const colorVariants = {
  conferencia: {
    selected: 'text-black bg-blue',
    default: 'bg-black text-white hover:bg-blue hover:text-black',
    hover: 'hover:bg-blue',
  },
  academia: {
    selected: 'text-black bg-yellow',
    default: 'bg-black text-white hover:bg-yellow hover:text-black',
    hover: 'hover:bg-yellow',
  },
  exhibicion: {
    selected: 'text-black bg-red',
    default: 'bg-black text-white hover:bg-red hover:text-black',
    hover: 'hover:bg-red',
  },
}

export const archivos: Item[] = [
  {
    name: 'Contextualizing Foresight Tools to Interrogate Gender Norms ',
    details: 'Institute for the Future (IFTF)',
    country: 'EEUU',
    url: 'https://youtu.be/xrwoIjh9Zog?si=YjE02O0sMiYsSj4x',
    tag: 'conferencia',
  },
  {
    name: 'Activismo para la transformación',
    details: 'Diseña Colectiva',
    country: 'México',
    url: 'https://youtu.be/c4rYLPcU9MM?si=PNAWOLOUVa3vIeux',
    tag: 'conferencia',
  },
  {
    name: 'Contextualizando herramientas de prospectiva y arte para comunidades de mujeres en situación de vulnerabilidad',
    details: 'S. Estudios Prospectivos UNAM',
    country: 'México',
    url: 'http://investigacion.politicas.unam.mx/semprospectiva/?page_id=1396',
    tag: 'conferencia',
  },
  {
    name: 'Mujeres futuristas conversan sobre el futuro de las mujeres',
    details: 'CENTRO diseño, cine, tv',
    country: 'México',
    url: 'https://www.youtube.com/live/kJnhhD_6Q6o?si=EqriqU58qXbjS6cU',
    tag: 'conferencia',
  },
  {
    name: 'Navigating Possible Futures: A Comparative Study',
    details: 'Journal of Future Studies',
    country: 'Taiwan',
    url: 'https://jfsdigital.org/navigating-possible-futures-a-comparative-study/',
    tag: 'academia',
  },
  {
    name: 'Tendencias del lenguaje',
    details: 'Design Research Society',
    country: 'EEUU',
    url: './tendencias-del-lenguaje.pdf',
    tag: 'academia',
  },
  {
    name: 'Tendedero Vernáculo - 100 chilangxs dijeron',
    details: 'Diseña Colectiva',
    country: 'México',
    url: 'https://drive.google.com/drive/folders/1lz6tm0yY2bXuB-cn4p7noKvJqnaYmXV1?usp=sharing',
    tag: 'exhibicion',
  },
  {
    name: 'Intersecciones',
    details: 'La Nueva Fábrica',
    country: 'Guatemala',
    url: 'https://lanuevafabrica.org/es/intersecciones/',
    tag: 'exhibicion',
  },
  {
    name: 'Cuerpas como territorios',
    details: 'La Nueva Fábrica',
    country: 'Guatemala',
    url: 'https://lanuevafabrica.org/es/cuerpas-como-territorios/',
    tag: 'exhibicion',
  },
  {
    name: 'Tejiendo los futuros de las mujeres',
    details: 'La Nueva Fábrica',
    country: 'Guatemala',
    url: 'https://lanuevafabrica.org/es/los-futuros-de-las-mujeres/',
    tag: 'exhibicion',
  },
]
