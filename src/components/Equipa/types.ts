export type Miembro = {
  name: string
  position: string
  country: string
  tag: Tag
  url: string
  img: string
}

export type Tag = 'fundadora' | 'aliada' | 'voluntaria'
