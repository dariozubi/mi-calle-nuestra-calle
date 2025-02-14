import { equipa } from '@/utils/consts'
import Link from 'next/link'
import { ArrowUpRight } from 'react-feather'
import Image from 'next/image'

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
    moodboard,
  } = equipa.filter(p => p.slug === slug)[0]
  return (
    <>
      <div className="mt-14 flex flex-col justify-between bg-black px-4 py-6 lg:mt-6 lg:flex-row lg:px-16">
        <Link
          href={`mailto:${correo}`}
          className="text-base font-extrabold text-white lg:text-xl"
        >
          {correo}
        </Link>
        <div className="flex gap-2 text-white">
          <Link href={instagram}>Instagram</Link> |{' '}
          <Link href={linkedin}>LinkedIn</Link>
        </div>
      </div>
      <div className="relative flex w-full flex-wrap">
        <div className="absolute top-0 ml-4 h-0 w-0 border-l-[15px] border-r-[15px] border-t-[15px] border-solid border-x-white border-t-black lg:ml-16" />
        <section className="mt-8 flex w-full flex-col px-4 lg:mt-16 lg:w-1/2 lg:px-16">
          <h1 className="text-lg">{nombre}</h1>
          <hr className="mt-4" />
          <h2 className="mb-4 text-lg font-bold lg:mb-12 lg:text-2xl lg:font-normal">
            Intereses actuales
          </h2>
          {intereses.map(i => (
            <p className="text-lg lg:text-2xl" key={i}>
              {i}
            </p>
          ))}
          <hr className="mt-8 lg:mt-12" />
          <h2 className="mb-4 text-lg font-bold lg:mb-12 lg:text-2xl lg:font-normal">
            Proyectos recientes
          </h2>
          {proyectosRecientes.map(p => (
            <Link
              href={p.url}
              key={p.url}
              className="flex items-center text-lg lg:text-2xl"
            >
              {p.nombre}
              <ArrowUpRight size={24} className="-mb-1" />
            </Link>
          ))}
          <hr className="mt-8 lg:mt-12" />
          <h2 className="mb-4 text-lg font-bold lg:mb-12 lg:text-2xl lg:font-normal">
            Conferencias / Talleres
          </h2>
          {conferencias.map(p => (
            <Link
              href={p.url}
              key={p.url}
              className="flex items-center text-lg lg:text-2xl"
            >
              {p.nombre}
              <ArrowUpRight size={24} className="-mb-1" />
            </Link>
          ))}
          <hr className="mt-8 lg:mt-12" />
          <h2 className="mb-4 text-lg font-bold lg:mb-12 lg:text-2xl lg:font-normal">
            Acerca de
          </h2>
          <p
            className="text-base lg:text-xl"
            dangerouslySetInnerHTML={{ __html: semblante }}
          />
        </section>
        <section className="flex w-full flex-col gap-2 pt-8 lg:w-1/2 lg:gap-4 lg:py-0 lg:pt-0">
          <div className="relative aspect-video w-full">
            <Image
              src={moodboard[0]}
              alt="image"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, (max-width: 1200px) 50vw"
              priority={true}
            />
          </div>
          <div className="flex w-full gap-2 lg:gap-4">
            <div className="flex w-1/2 flex-col gap-2 lg:gap-4">
              <div className="relative aspect-video w-full">
                <Image
                  src={moodboard[1]}
                  alt="image"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, (max-width: 1200px) 25vw"
                  priority={true}
                />
              </div>
              <div className="relative aspect-square w-full">
                <Image
                  src={moodboard[2]}
                  alt="image"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, (max-width: 1200px) 25vw"
                  priority={true}
                />
              </div>
            </div>
            <div className="relative flex aspect-square w-1/2 flex-col gap-2 lg:gap-4">
              <Image
                src={moodboard[3]}
                alt="image"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, (max-width: 1200px) 25vw"
                priority={true}
              />
            </div>
          </div>
          <div className="relative aspect-video w-full">
            <Image
              src={moodboard[4]}
              alt="image"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, (max-width: 1200px) 50vw"
              priority={true}
            />
          </div>
          <div className="flex w-full gap-2 lg:gap-4">
            <div className="flex w-1/2 flex-col gap-2 lg:gap-4">
              <div className="relative aspect-video w-full">
                <Image
                  src={moodboard[5]}
                  alt="image"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, (max-width: 1200px) 25vw"
                  priority={true}
                />
              </div>
              <div className="relative aspect-square w-full">
                <Image
                  src={moodboard[6]}
                  alt="image"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, (max-width: 1200px) 25vw"
                  priority={true}
                />
              </div>
            </div>
            <div className="relative flex aspect-square w-1/2 flex-col gap-2 lg:gap-4">
              <Image
                src={moodboard[7]}
                alt="image"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, (max-width: 1200px) 25vw"
                priority={true}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Semblante
