import AliadasSection from '@/components/AliadasSection'
import EquipaSection from '@/components/EquipaSection'
import Image from 'next/image'
import Text from '../Text'

const titlesLeft = ['creemos', 'actuamos', 'invitamos']
const titlesRight = ['tejemos', 'celebramos', 'transformamos']

function NosotrasPage() {
  return (
    <>
      <section className="flex flex-wrap bg-white">
        <div className="flex w-full bg-pink p-4 pt-16 lg:w-5/12 lg:p-16">
          <div>
            <Text from="Nosotras" variant="xl" as="h1" className="mb-8 mt-8">
              historia
            </Text>
            <Text from="Nosotras" isRichText>
              historia-text
            </Text>
          </div>
        </div>
        <div className="relative aspect-square w-full lg:w-7/12">
          <Image
            src="/img/nosotras.jpg"
            alt="image"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, (max-width: 1200px) 50vw"
            priority={true}
          />
        </div>
      </section>
      <div className="bg-blue p-4 lg:px-16 lg:py-8">
        <Text from="Nosotras" variant="lg" as="h2">
          aboga
        </Text>
      </div>
      <section className="relative flex flex-wrap bg-grey p-4 pt-8 lg:p-16">
        <div className="absolute top-0 h-0 w-0 border-l-[15px] border-r-[15px] border-t-[15px] border-solid border-x-grey border-t-blue" />
        <div className="w-full lg:w-1/2 lg:pr-24">
          {titlesLeft.map(t => (
            <>
              <Text
                from="Nosotras"
                as="h2"
                variant="lg"
                isRichText
                className="my-8"
              >
                {t}
              </Text>
              <Text from="Nosotras">{`${t}-text`}</Text>
            </>
          ))}
        </div>
        <div className="mt-8 w-full lg:mt-0 lg:w-1/2 lg:border-l lg:pl-24">
          {titlesRight.map(t => (
            <>
              <Text
                from="Nosotras"
                as="h2"
                variant="lg"
                isRichText
                className="my-8"
              >
                {t}
              </Text>
              <Text from="Nosotras">{`${t}-text`}</Text>
            </>
          ))}
        </div>
      </section>
      <EquipaSection />
      <AliadasSection />
    </>
  )
}

export default NosotrasPage
