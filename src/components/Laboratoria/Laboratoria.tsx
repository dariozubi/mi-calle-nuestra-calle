import { MapPin } from 'react-feather'
import Image from 'next/image'

function Laboratoria() {
  return (
    <>
      <div className="bg-white p-16" id="labs">
        <h2 className="mb-6 text-6xl font-extrabold">Laboratorias</h2>
        <p className="text-3xl font-extrabold">
          Nuestro modelo es itinerante, reflexivo, lúdico y adaptativo al
          contexto. Montamos laboratorias efímeras de diversas escalas y
          temporalidades, para la transformación de espacios vulnerables en
          espacios seguros, de reflexión crítica y formación de ciudadanía.{' '}
          <br />
          <br />A través de experiencias inmersivas de arte participativo,
          futuros y prácticas narrativas, visibilizamos las historias y anhelos
          de comunidades diversas.
        </p>
        <div className="mt-10 flex justify-end">
          <div className="flex items-center gap-5">
            <div className="flex items-baseline">
              <MapPin size={16} />
              <p className="text-xl">México</p>
            </div>
            <p className="text-xl text-blue">Guatemala</p>
            <p className="text-xl">Barcelona</p>
          </div>
        </div>
      </div>
      <div className="bg-pink px-16 py-8">
        <h2 className="text-3xl font-bold">Creamos, de creer y crear</h2>
      </div>
      <div className="relative bg-ladrillo p-16">
        <div className="absolute top-0 h-0 w-0 border-l-[15px] border-r-[15px] border-t-[15px] border-solid border-x-ladrillo border-t-pink" />
        <div className="flex">
          <div className="relative w-1/2">
            <Image
              src="https://picsum.photos/1600/900"
              alt="image"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-1/2 px-16">
            <h3 className="mb-8 text-3xl font-bold">Nuestra especialidad</h3>
            <ul className="text-xl">
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
      </div>
    </>
  )
}

export default Laboratoria
