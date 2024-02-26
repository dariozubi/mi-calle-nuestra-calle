import { PropsWithChildren } from 'react'
import Image from 'next/image'
import Text from '../Text'

function SeParteSection() {
  return (
    <section>
      <figure className="relative aspect-[16/9] w-full">
        <Image
          src="/img/separte.jpg"
          alt="image"
          fill
          className="object-cover"
        />
      </figure>
      <div className="flex flex-wrap p-4 lg:p-16" id="separte">
        <div className="flex w-full flex-col lg:w-1/2">
          <Text from="Home" as="h2" variant="xl" className="lg:mb-12">
            join
          </Text>
          <div className="flex flex-col">
            <Item href="https://forms.gle/tzn1KGtphsBMxDV56">
              <Text from="Home">donate-time</Text>
            </Item>
            <Item href="https://forms.gle/MVZq97wSdJcWBWWt7">
              <Text from="Home">internship</Text>
            </Item>
            <Item href="https://forms.gle/grbpsqPRBuGkQHbw5">
              <Text from="Home">consulting</Text>
            </Item>
          </div>
        </div>
        <div className="flex w-full flex-col lg:w-1/2 lg:px-12">
          <Text
            from="Home"
            as="h3"
            variant="md"
            className="mb-4 mt-8 lg:mb-12 lg:mt-0"
          >
            why-join
          </Text>
          <Text from="Home" isRichText>
            why-join-text
          </Text>
        </div>
      </div>
    </section>
  )
}

function Item({ children, href }: PropsWithChildren<{ href: string }>) {
  return (
    <a
      href={href}
      target="_blank"
      className="border-b border-black py-2 text-left text-base font-bold hover:bg-black hover:text-white lg:p-4 lg:text-2xl"
    >
      {children}
    </a>
  )
}

export default SeParteSection
