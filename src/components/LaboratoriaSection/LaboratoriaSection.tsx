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
      <Galeria images={images} className="-mb-2" />
      <div className="bg-white p-4 lg:p-16" id="labs">
        <h2 className="mb-4 text-3xl font-extrabold lg:mb-6 lg:text-6xl">
          Laboratorias
        </h2>
        <p className="text-xl font-bold lg:text-3xl lg:font-extrabold">
          Montamos <span className="text-pink">laboratorias efímeras</span> de{' '}
          <span className="text-ladrillo">diversas escalas</span> y{' '}
          <span className="text-red">temporalidades</span>, para la{' '}
          <span className="text-lila">transformación</span> de{' '}
          <span className="text-blue">espacios vulnerables</span> en{' '}
          <span className="text-lila">espacios seguros</span>, de{' '}
          <span className="text-green">reflexión crítica</span> y formación de{' '}
          <span className="text-ladrillo">ciudadanía</span>.
        </p>
      </div>
    </section>
  )
}

export default LaboratoriaSection
