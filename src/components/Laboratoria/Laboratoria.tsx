import Image from 'next/image'

function Laboratoria() {
  return (
    <>
      <section className="bg-white p-4 lg:p-16" id="labs">
        <h2 className="mb-4 text-3xl font-extrabold lg:mb-6 lg:text-6xl">
          Laboratorias
        </h2>
        <p className="text-xl font-bold lg:text-3xl lg:font-extrabold">
          Nuestro modelo es{' '}
          <span className="text-green">itinerante, reflexivo, lúdico</span> y{' '}
          <span className="text-yellow">adaptativo</span> al contexto. Montamos{' '}
          <span className="text-pink">laboratorias efímeras</span> de{' '}
          <span className="text-ladrillo">diversas escalas</span> y{' '}
          <span className="text-red">temporalidades</span>, para la{' '}
          <span className="text-lila">transformación</span> de{' '}
          <span className="text-blue">espacios vulnerables</span> en{' '}
          <span className="text-lila">espacios seguros</span>, de{' '}
          <span className="text-green">reflexión crítica</span> y formación de{' '}
          <span className="text-ladrillo">ciudadanía</span>. <br />
          <br />A través de experiencias inmersivas de arte participativo,
          futuros y prácticas narrativas, visibilizamos las historias y anhelos
          de comunidades diversas.
        </p>
      </section>
      <section className="bg-pink p-4 lg:px-16 lg:py-8">
        <h2 className="text-xl font-extrabold lg:text-3xl">
          Creamos, de creer y crear
        </h2>
      </section>
      <section className="relative bg-ladrillo p-4 lg:p-16">
        <div className="absolute top-0 h-0 w-0 border-l-[15px] border-r-[15px] border-t-[15px] border-solid border-x-ladrillo border-t-pink" />
        <div className="flex flex-wrap">
          <figure className="relative mb-12 mt-4 min-h-[300px] w-full lg:mb-0 lg:mt-0 lg:w-1/2">
            <Image
              src="/img/proyectas/azcapotzalco_3.JPG"
              alt="image"
              fill
              className="object-cover"
            />
            <figcaption className="sm:tex-base relative top-[100%] text-sm text-black">
              Fotografía: mi calle, nuestra calle, México (2021)
            </figcaption>
          </figure>
          <div className="w-full lg:w-1/2 lg:px-16">
            <h3 className="mb-4 text-2xl font-bold lg:mb-8 lg:text-3xl">
              Servicios
            </h3>
            <ul className="lg_mb-0 mb-4 text-base lg:text-xl">
              <li>Experiencias de vinculación comunitaria</li>
              <li>Etnografía poética y prácticas narrativas</li>
              <li>Investigación de futuros</li>
              <li>Diseño y mediación talleres participativos</li>
              <li>Diseño de futuros experienciales</li>
              <li>Planeación prospectiva estratégica</li>
              <li>Diseño de teorías de cambio</li>
              <li>Diseño de metodologías</li>
              <li>Programas pedagógicos en contexto</li>
              <li>Experiencias de arte participativo</li>
              <li>Intervenciones de arte en espacio público</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default Laboratoria
