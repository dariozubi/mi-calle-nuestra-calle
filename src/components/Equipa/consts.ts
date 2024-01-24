import { Miembro, Tag } from './types'

export const backgroundColors: Record<Tag, keyof typeof colorVariants> = {
  fundadora: 'pink',
  aliada: 'yellow',
  voluntaria: 'lila',
}

export const colorVariants = {
  pink: {
    selected: 'text-black bg-pink',
    default: 'bg-black text-white hover:bg-pink hover:text-black',
    hover: 'hover:bg-pink',
  },
  yellow: {
    selected: 'text-black bg-yellow',
    default: 'bg-black text-white hover:bg-yellow hover:text-black',
    hover: 'hover:bg-yellow',
  },
  lila: {
    selected: 'text-black bg-lila',
    default: 'bg-black text-white hover:bg-lila hover:text-black',
    hover: 'hover:bg-lila',
  },
}

export const equipa: Miembro[] = [
  {
    name: 'Sophia Arrazola',
    position: 'Directora ejecutiva (Fundadora)',
    country: 'Guatemala',
    url: '/nosotras/sophia-arrazola',
    tag: 'fundadora',
  },
  {
    name: 'Jesica Bastidas',
    position: 'Directora de campo (Co-fundadora)',
    country: 'México',
    url: '/nosotras/jesica-bastidas',
    tag: 'fundadora',
  },
  {
    name: 'Rosi Álvarez',
    position: 'Mentora (Aliada)',
    country: 'México',
    url: 'https://www.linkedin.com/in/rosi-alvarez-7221462b/',
    tag: 'aliada',
  },
  {
    name: 'Monserrat Padilla',
    position: 'Diseñadora, creativa y estratega (Aliada)',
    country: 'México',
    url: 'https://esdd.mx',
    tag: 'aliada',
  },
  {
    name: 'Luciana Renner',
    position: 'Urbanista (Aliada)',
    country: 'México',
    url: 'https://mx.linkedin.com/in/luciana-renner-2190837a',
    tag: 'aliada',
  },
  {
    name: 'Carolina González',
    position: 'Mediadora comunitaria (Aliada)',
    country: 'Argentina',
    url: 'https://www.linkedin.com/in/carolagonz%C3%A1lez',
    tag: 'aliada',
  },
  {
    name: 'Diana Rivadeneira',
    position: 'Diseñadora estratega UX (Aliada)',
    country: 'Ecuador',
    url: 'https://www.linkedin.com/in/diana-rivadeneira',
    tag: 'aliada',
  },
  {
    name: 'Marce Bulla Montoya',
    position: 'Mediadora comunitaria (Voluntaria)',
    country: 'Costa Rica',
    url: 'https://www.facebook.com/sandra.marcela.96?mibextid=kFxxJD',
    tag: 'voluntaria',
  },
  {
    name: 'Chris Van Balen',
    position: 'Urbanista y Geógrafa Humana (Voluntaria)',
    country: 'Holanda',
    url: 'https://www.linkedin.com/in/chrisvbalen/',
    tag: 'voluntaria',
  },
  {
    name: 'Sophie Greenspan',
    position: 'Artista visual (Voluntaria)',
    country: 'EEUU',
    url: 'https://www.instagram.com/_sophiegreenspan/',
    tag: 'voluntaria',
  },
  {
    name: 'Paulina Garzaro',
    position: 'Antropóloga (Voluntaria)',
    country: 'Guatemala',
    url: 'https://www.linkedin.com/in/paulina-garzaro-a46ab6197/',
    tag: 'voluntaria',
  },
]
