import ImageSection from '../ImageSection'

function ProyectosSection() {
  return (
    <section>
      <div className="flex items-center gap-6 bg-blue p-4 lg:px-16 lg:py-8">
        <h2 className="text-lg font-bold lg:text-3xl">Proyectos</h2>
        <span className="text-lg font-bold lg:text-3xl">|</span>
        <p className="text-lg font-bold lg:text-3xl">
          Explora nuestros futuros plurales
        </p>
      </div>
      <div className="relative bg-black p-4 pt-8 lg:p-16" id="images">
        <div className="absolute top-0 h-0 w-0 border-l-[15px] border-r-[15px] border-t-[15px] border-solid border-x-black border-t-blue" />
        <ImageSection />
      </div>
    </section>
  )
}

export default ProyectosSection
