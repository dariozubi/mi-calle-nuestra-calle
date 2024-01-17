import { equipa } from '@/utils/consts'
import Link from 'next/link'
import { ArrowUpRight } from 'react-feather'

type Props = {
  slug: string
}

function Semblante({ slug }: Props) {
  const {
    nombre,
    correo,
    instagram,
    linkedin,
    intereses,
    proyectosRecientes,
    conferencias,
    semblante,
  } = equipa.filter(p => p.slug === slug)[0]
  return (
    <>
      <div className="mt-6 flex justify-between bg-black px-16 py-6">
        <Link
          href={`mailto:${correo}`}
          className="text-xl font-extrabold text-white"
        >
          {correo}
        </Link>
        <div className="flex gap-2 text-white">
          <Link href={instagram}>Instagram</Link> |{' '}
          <Link href={linkedin}>LinkedIn</Link>
        </div>
      </div>
      <div className="relative flex w-full">
        <div className="absolute top-0 ml-16 h-0 w-0 border-l-[15px] border-r-[15px] border-t-[15px] border-solid border-x-white border-t-black" />
        <div className="mt-16 flex w-1/2 flex-col px-16">
          <h1 className="text-lg">{nombre}</h1>
          <hr className="mt-4" />
          <h2 className="mb-12 text-2xl">Intereses actuales</h2>
          {intereses.map(i => (
            <p className="text-2xl" key={i}>
              {i}
            </p>
          ))}
          <hr className="mt-12" />
          <h2 className="mb-12 text-2xl">Proyectos recientes</h2>
          {proyectosRecientes.map(p => (
            <Link
              href={p.url}
              key={p.url}
              className="flex items-center text-2xl"
            >
              {p.nombre}
              <ArrowUpRight size={24} className="-mb-1" />
            </Link>
          ))}
          <hr className="mt-12" />
          <h2 className="mb-12 text-2xl">Conferencias / Talleres</h2>
          {conferencias.map(p => (
            <Link
              href={p.url}
              key={p.url}
              className="flex items-center text-2xl"
            >
              {p.nombre}
              <ArrowUpRight size={24} className="-mb-1" />
            </Link>
          ))}
          <p className="mt-12">{semblante}</p>
        </div>
        <div className="flex w-1/2 gap-4 pr-16">
          <div className="flex w-1/2 flex-col bg-blue"></div>
          <div className="flex w-1/2 flex-col bg-red"></div>
        </div>
      </div>
    </>
  )
}

export default Semblante
