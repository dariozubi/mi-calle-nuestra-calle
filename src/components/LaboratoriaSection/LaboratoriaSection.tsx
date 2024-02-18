import Galeria from '../Galeria'

const images = [
  '/img/labs/labs1.jpg',
  '/img/labs/labs2.jpg',
  '/img/labs/labs3.jpg',
  '/img/labs/labs4.jpg',
  '/img/labs/labs5.jpg',
]

function LaboratoriaSection() {
  return (
    <section>
      <div className="bg-white p-4 lg:p-16" id="labs">
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
      </div>
      <Galeria images={images} className="-mb-2" />
    </section>
  )
}

export default LaboratoriaSection
