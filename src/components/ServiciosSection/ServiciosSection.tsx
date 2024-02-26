import Image from 'next/image'
import Text from '../Text'

function ServiciosSection() {
  return (
    <>
      <div className="bg-pink p-4 lg:px-16 lg:py-8">
        <Text from="Home" variant="lg" as="h2">
          create
        </Text>
      </div>
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
            <figcaption className="sm:tex-base relative top-[100%] flex items-center text-sm text-black">
              <Text from="Home" variant="sm">
                photos
              </Text>
              : MCNC (2021)
            </figcaption>
          </figure>
          <div className="w-full lg:w-1/2 lg:px-16">
            <Text from="Home" as="h2" variant="md" className="mb-4">
              services
            </Text>
            <ul className="mb-4 lg:mb-0">
              {[...Array(11).keys()].map(i => (
                <li className="flex" key={i}>
                  <span className="mr-2 hidden lg:block">•</span>
                  <Text from="Home" as="span">{`service-${i + 1}`}</Text>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServiciosSection
