type Props = {
  item: {
    name: string
    publisher: string
    country: string
    url: string
  }
}

export function ListItem({ item }: Props) {
  return (
    <div className="bg-salmon w-fill flex justify-between px-8 py-4">
      <p>{item.name}</p>
      <p>{item.publisher}</p>
      <p>{item.country}</p>
      <p>{item.url}</p>
    </div>
  )
}
