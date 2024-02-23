import { Miembro, Tag } from './types'

export const filters: { label: string; value: Tag }[] = [
  {
    label: 'Fundadoras',
    value: 'fundadora',
  },
  {
    label: 'Aliadas',
    value: 'aliada',
  },
  {
    label: 'Voluntarias',
    value: 'voluntaria',
  },
]

export const colorVariants = {
  fundadora: {
    selected: 'text-black bg-pink',
    default: 'bg-black text-white hover:bg-pink hover:text-black',
    hover: 'hover:bg-pink',
  },
  aliada: {
    selected: 'text-black bg-yellow',
    default: 'bg-black text-white hover:bg-yellow hover:text-black',
    hover: 'hover:bg-yellow',
  },
  voluntaria: {
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
    img: '/img/equipa/Sophia.jpg',
  },
  {
    name: 'Jesica Bastidas',
    position: 'Directora de campo (Co-fundadora)',
    country: 'México',
    url: '/nosotras/jesica-bastidas',
    tag: 'fundadora',
    img: '/img/equipa/Jesica.jpg',
  },
  {
    name: 'Rosi Álvarez',
    position: 'Mentora (Aliada)',
    country: 'México',
    url: 'https://www.linkedin.com/in/rosi-alvarez-7221462b/',
    tag: 'aliada',
    img: '/img/equipa/Rosi.jpg',
  },
  {
    name: 'Monserrat Padilla',
    position: 'Diseñadora, creativa y estratega (Aliada)',
    country: 'México',
    url: 'https://esdd.mx',
    tag: 'aliada',
    img: '/img/equipa/Monse.jpg',
  },
  {
    name: 'Luciana Renner',
    position: 'Urbanista (Aliada)',
    country: 'México',
    url: 'https://mx.linkedin.com/in/luciana-renner-2190837a',
    tag: 'aliada',
    img: '/img/equipa/Luciana.jpg',
  },
  {
    name: 'Carolina González',
    position: 'Mediadora comunitaria (Aliada)',
    country: 'Argentina',
    url: 'https://www.linkedin.com/in/carolagonz%C3%A1lez',
    tag: 'aliada',
    img: '/img/equipa/Caro.jpg',
  },
  {
    name: 'Diana Rivadeneira',
    position: 'Diseñadora estratega UX (Aliada)',
    country: 'Ecuador',
    url: 'https://www.linkedin.com/in/diana-rivadeneira',
    tag: 'aliada',
    img: '/img/equipa/Diana.jpg',
  },
  {
    name: 'Marce Bulla Montoya',
    position: 'Mediadora comunitaria (Voluntaria)',
    country: 'Costa Rica',
    url: 'https://www.facebook.com/sandra.marcela.96?mibextid=kFxxJD',
    tag: 'voluntaria',
    img: '/img/equipa/Marce.jpg',
  },
  {
    name: 'Chris Van Balen',
    position: 'Urbanista y Geógrafa Humana (Voluntaria)',
    country: 'Holanda',
    url: 'https://www.linkedin.com/in/chrisvbalen/',
    tag: 'voluntaria',
    img: '/img/equipa/Chris.jpg',
  },
  {
    name: 'Sophie Greenspan',
    position: 'Artista visual (Voluntaria)',
    country: 'EEUU',
    url: 'https://www.instagram.com/_sophiegreenspan/',
    tag: 'voluntaria',
    img: '/img/equipa/Sophie.jpg',
  },
  {
    name: 'Paulina Garzaro',
    position: 'Antropóloga (Voluntaria)',
    country: 'Guatemala',
    url: 'https://www.linkedin.com/in/paulina-garzaro-a46ab6197/',
    tag: 'voluntaria',
    img: '/img/equipa/Paulina.jpg',
  },
]
