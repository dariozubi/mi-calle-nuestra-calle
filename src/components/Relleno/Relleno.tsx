import Image from 'next/image'

function Relleno() {
  return (
    <>
      <div className="bg-yellow px-8 py-12 text-center">
        <h3 className="text-5xl font-extrabold">
          creemos que la realidad es transformable.
        </h3>
      </div>
      <div className="relative aspect-[25/9] w-full">
        <Image
          src="https://picsum.photos/1600/900"
          alt="image"
          fill
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
    </>
  )
}

export default Relleno
