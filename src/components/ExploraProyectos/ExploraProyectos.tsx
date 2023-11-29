import Link from 'next/link'
import Image from 'next/image'

async function ExploraProyectos() {
  const response = await fetch('https://picsum.photos/v2/list?limit=3')
  const data = await response.json()
  return (
    <div className="bg-pink p-16">
      <div className="flex">
        <div className="flex aspect-square w-1/4 items-center justify-center bg-ladrillo">
          <p className="text-lg">
            Explora + <br /> labs
          </p>
        </div>
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
    </div>
  )
}

export default ExploraProyectos
