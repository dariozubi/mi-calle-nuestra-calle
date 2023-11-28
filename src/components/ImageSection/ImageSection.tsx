import Image from 'next/image'

async function ImageSection() {
  const response = await fetch('https://picsum.photos/v2/list?limit=8')
  const data = await response.json()
  return (
    <div className="flex flex-wrap">
      {data.map((img: { download_url: string; id: string }) => (
        <div className="bg-blue relative aspect-square w-1/4" key={img.id}>
          <Image
            src={img.download_url}
            alt="image"
            fill
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
      ))}
    </div>
  )
}

export default ImageSection
