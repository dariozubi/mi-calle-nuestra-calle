import Image from 'next/image'
import Link from 'next/link'

async function ImageSection() {
  const response = await fetch('https://picsum.photos/v2/list?limit=8')
  const data = await response.json()
  return (
    <div className="flex flex-wrap">
      {data.map((img: { download_url: string; id: string }) => (
        <Link
          href="/proyecto/tendedero-vernaculo"
          className="relative aspect-square w-1/4 bg-blue"
          key={img.id}
        >
          <Image
            src={img.download_url}
            alt="image"
            fill
            style={{
              objectFit: 'cover',
            }}
          />
        </Link>
      ))}
    </div>
  )
}

export default ImageSection
