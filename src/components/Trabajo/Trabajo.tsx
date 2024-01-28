import { historias, proyectas, escenarios } from '@/utils/consts'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowDown, ArrowUpRight } from 'react-feather'
import ExploraProyectos from '../ExploraProyectos'

type Props = {
  slug: string
  type: 'proyectas' | 'historias' | 'escenarios'
}

const DATA = {
  proyectas: proyectas,
  historias: historias,
  escenarios: escenarios,
}

function Trabajo({ slug, type }: Props) {
  const {
    titulo,
    lugar,
    fecha,
    temas,
    alianzas,
    descripcion,
    metodos,
    pedagogias,
    medio,
    cambios,
    creditos,
    images,
    reporte,
  } = DATA[type].filter(p => p.slug === slug)[0]
  return (
    <>
      {!!images && (
        <div className="relative aspect-[25/9] w-full">
          <Image
            src={`${images[0]}`}
            alt="image"
            fill
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
      )}
      <div className="mx-16 mb-8 mt-16 h-5 w-5 rounded-full bg-ladrillo" />
      <div className="g-16 mb-12 flex w-full px-16">
        <div className="flex w-1/2 flex-col">
          <p>{titulo}</p>
          <hr className="mt-2" />
          {!!lugar && (
            <p className="mb-6 text-xl">{`${lugar} ${
              fecha ? `(${fecha})` : ''
            }`}</p>
          )}
          <hr className="mt-8" />
          <p className="mb-6 text-xl">Temas</p>
          <p className="text-xl">
            {temas.map((tema, i) => (
              <>
                <span key={i}>{tema}</span>
                <br />
              </>
            ))}
          </p>
          <hr className="mt-8" />
          <p className="mb-6 text-xl">Alianzas</p>
          <>
            {alianzas.map(alianza => (
              <Link
                href={alianza.url}
                target="_blank"
                className="flex items-center text-xl"
                key={alianza.url}
              >
                {alianza.nombre}
                <ArrowUpRight size={20} className="-mb-1" />
              </Link>
            ))}
            {!!reporte && (
              <Link href={reporte} className="mt-8 flex items-center text-xl">
                Reporte final
                <ArrowDown size={20} className="ml-1" />
              </Link>
            )}
          </>
        </div>
        <div className="flex w-1/2 flex-col px-16">
          <h1 className="mb-12 text-xl">{titulo}</h1>
          <p>{descripcion}</p>
          <br />
          <p>
            {!!metodos && (
              <>
                <span className="font-bold">Métodos:</span> {metodos} <br />
              </>
            )}
            <br />
            {!!pedagogias && (
              <>
                <span className="font-bold">Pedagogías:</span> {pedagogias}
                <br />
              </>
            )}
            <br />
            {!!medio && (
              <>
                <span className="font-bold">Medio:</span> {medio} <br />
              </>
            )}
            <br />
            {!!cambios && (
              <>
                <span className="font-bold">Cambios:</span> {cambios} <br />
              </>
            )}
            <br />
            {!!creditos && (
              <>
                <span className="font-bold">Créditos:</span> {creditos} <br />
              </>
            )}
            <br />
          </p>
        </div>
      </div>
      <ExploraProyectos slug={slug} />
    </>
  )
}

export default Trabajo
