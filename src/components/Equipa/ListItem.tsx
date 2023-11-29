type Props = {
  item: {
    name: string
    position: string
    country: string
    url: string
  }
}

export function ListItem({ item }: Props) {
  return (
    <div className="w-fill flex bg-salmon px-16 py-4">
      <p className="w-1/4">{item.name}</p>
      <p className="w-1/4">{item.position}</p>
      <p className="w-1/4 text-center">{item.country}</p>
      <p className="w-1/4 text-center">Conectar</p>
    </div>
  )
}
