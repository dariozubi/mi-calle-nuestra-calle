import Link from 'next/link'
import { ArrowDown, ArrowUpRight } from 'react-feather'

import { historias, proyectas, escenarios } from '@/utils/consts'
import ExploraProyectos from '../ExploraProyectos'
import Galeria from '../Galeria'
import Text from '../Text'

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
  const trabajo = DATA[type].filter(p => p.slug === slug)[0]
  const { lugar, fecha, alianzas, images, reporte } = trabajo

  return (
    <>
      {images && <Galeria images={images} className="mt-7" />}
      <div className="mb-12 mt-8 flex w-full flex-wrap-reverse px-4 lg:px-16">
        <section className="flex w-full flex-col lg:w-1/2">
          <Text
            from="Proyectos"
            as="h1"
            className="hidden lg:block"
          >{`${slug}.titulo`}</Text>
          <hr className="mt-2" />
          {!!lugar && (
            <p className="text-normal mb-4 lg:mb-6 lg:text-xl">{`${lugar} ${
              fecha ? `(${fecha})` : ''
            }`}</p>
          )}
          <hr className="mt-8" />
          <Text from="Proyectos" className="mb-4 lg:mb-6">
            temas
          </Text>
          <Text from="Proyectos" isRichText>
            {`${slug}.temas`}
          </Text>
          <hr className="mt-8" />
          <Text from="Proyectos" className="mb-4 lg:mb-6">
            alianzas
          </Text>
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
              <Link href={reporte} className="mt-8 flex items-center">
                <Text from="Proyectos">reporte</Text>
                <ArrowDown size={20} className="ml-1" />
              </Link>
            )}
          </>
        </section>
        <section className="flex w-full flex-col px-0 lg:w-1/2 lg:px-16">
          <Text
            from="Proyectos"
            as="h1"
            variant="lg"
            className="mb-4 lg:mb-12 lg:block"
          >{`${slug}.titulo`}</Text>
          <Text from="Proyectos" isRichText>{`${slug}.descripcion`}</Text>
          <br />
          {type !== 'escenarios' && (
            <p>
              <Text from="Proyectos" as="span" className="font-bold">
                metodos
              </Text>
              : <Text from="Proyectos" as="span">{`${slug}.metodos`}</Text>
              <br />
              <br />
              <Text from="Proyectos" as="span" className="font-bold">
                pedagogias
              </Text>
              : <Text from="Proyectos" as="span">{`${slug}.pedagogias`}</Text>
              <br />
              <br />
              <Text from="Proyectos" as="span" className="font-bold">
                medio
              </Text>
              : <Text from="Proyectos" as="span">{`${slug}.medio`}</Text>
              <br />
              <br />
              <Text from="Proyectos" as="span" className="font-bold">
                cambios
              </Text>
              : <Text from="Proyectos" as="span">{`${slug}.cambios`}</Text>
              <br />
              <br />
              <Text from="Proyectos" as="span" className="font-bold">
                creditos
              </Text>
              : <Text from="Proyectos" as="span">{`${slug}.creditos`}</Text>
            </p>
          )}
        </section>
      </div>
      <ExploraProyectos slug={slug} />
    </>
  )
}

export default Trabajo
