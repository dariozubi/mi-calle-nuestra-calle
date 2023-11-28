import { PropsWithChildren } from 'react'

function SeParte() {
  return (
    <div className="px-8 py-12">
      <h2 className="mb-4 text-6xl font-extrabold">Sé parte</h2>
      <div className="flex">
        <div className="flex w-1/2 flex-col">
          <Item>ndnckjsndFKLwjehfkds</Item>
          <Item>ndnckjsndFKLwjehfkds</Item>
          <Item>ndnckjsndFKLwjehfkds</Item>
        </div>
        <div className="flex w-1/2 flex-col px-12">
          <h4 className="mb-12 text-2xl">Tendedero vernáculo</h4>
          <p>
            Sophia es fundadora de Mi Calle, Nuestra Calle. Con más de 8 años.
          </p>
        </div>
      </div>
    </div>
  )
}

function Item({ children }: PropsWithChildren) {
  return (
    <button className="border-b border-black p-2 text-left hover:bg-black hover:text-white">
      {children}
    </button>
  )
}

export default SeParte
