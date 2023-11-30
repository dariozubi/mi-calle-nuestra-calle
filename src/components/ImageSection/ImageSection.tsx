import Image from 'next/image'
import Link from 'next/link'

async function ImageSection() {
  const response = await fetch('https://picsum.photos/v2/list?limit=8')
  const data = await response.json()
  return (
    <div className="flex flex-wrap">
      {data.map((img: { download_url: string; id: string }) => (
        <Link
          className="aspect-square w-1/4 p-[3px]"
          href="/proyecto/tendedero-vernaculo"
          key={img.id}
        >
          <div className="relative h-full w-full overflow-hidden rounded">
            <Image
              src={img.download_url}
              alt="image"
              fill
              className="object-cover"
            />
          </div>
        </Link>
      ))}
    </div>
  )
}

export default ImageSection
