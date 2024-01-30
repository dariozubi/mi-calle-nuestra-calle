import ImageSection from '../ImageSection'

function Projects() {
  return (
    <section>
      <div className="flex items-center bg-blue px-16 py-8">
        <h2 className="text-3xl font-bold">
          Explora nuestros futuros plurales
        </h2>
      </div>
      <div className="relative bg-black p-16" id="images">
        <div className="absolute top-0 h-0 w-0 border-l-[15px] border-r-[15px] border-t-[15px] border-solid border-x-black border-t-blue" />
        <ImageSection />

        <p className="mt-12 text-lg text-white">
          Abogamos por los futuros de todas las mujeres y las niñas desde una
          perspectiva de género y derechos humanos. Nuestras proyectas de arte
          comunitario informadas por la antrología del futuro, abarcan diversos
          temas, industrias y tecnologías en contextos de exclusión social.
          Explora futuros plurales*
        </p>
      </div>
    </section>
  )
}

export default Projects
