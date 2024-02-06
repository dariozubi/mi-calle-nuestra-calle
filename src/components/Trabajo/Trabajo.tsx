import Link from 'next/link'
import { ArrowDown, ArrowUpRight } from 'react-feather'

import { historias, proyectas, escenarios } from '@/utils/consts'
import ExploraProyectos from '../ExploraProyectos'
import { Galeria } from './Galeria'

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
      {!!images && <Galeria images={images} />}
      <div className="mb-12 mt-8 flex w-full flex-wrap-reverse px-4 lg:px-16">
        <div className="flex w-full flex-col lg:w-1/2">
          <h1 className="hidden text-xl lg:block">{titulo}</h1>
          <hr className="mt-2" />
          {!!lugar && (
            <p className="text-normal mb-4 lg:mb-6 lg:text-xl">{`${lugar} ${
              fecha ? `(${fecha})` : ''
            }`}</p>
          )}
          <hr className="mt-8" />
          <p className="mb-4 text-lg font-bold lg:mb-6 lg:text-xl lg:font-normal">
            Temas
          </p>
          <p className="text-normal lg:text-xl">
            {temas.map((tema, i) => (
              <>
                <span key={i}>{tema}</span>
                <br />
              </>
            ))}
          </p>
          <hr className="mt-8" />
          <p className="mb-4 text-lg font-bold lg:mb-6 lg:text-xl lg:font-normal">
            Alianzas
          </p>
          <>
            {alianzas.map(alianza => (
              <Link
                href={alianza.url}
                target="_blank"
                className="text-normal flex items-center lg:text-xl"
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
        <div className="flex w-full flex-col px-0 lg:w-1/2 lg:px-16">
          <h1 className="mb-4 text-lg font-bold lg:mb-12 lg:block lg:text-xl lg:font-normal">
            {titulo}
          </h1>
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
