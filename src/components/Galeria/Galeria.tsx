'use client'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Slider from 'react-slick'

import Image from 'next/image'

type Props = {
  images: string[]
  className?: string
}

const Galeria = ({ images, className }: Props) => {
  const settings = {
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ArrowButton type="next" />,
    prevArrow: <ArrowButton type="previous" />,
  }
  return (
    <div className={className}>
      <Slider {...settings}>
        {images.map(image => (
          <div
            key={image}
            className="relative aspect-[16/9] w-full bg-darkGrey"
          >
            <Image src={image} alt="image" fill className="object-cover" />
          </div>
        ))}
      </Slider>
    </div>
  )
}

const ArrowButton = ({
  className,
  style,
  onClick,
  type,
}: { type: 'next' | 'previous' } & React.HTMLProps<HTMLButtonElement>) => {
  return (
    <button
      style={{
        ...style,
        left: type === 'previous' ? '35px' : undefined,
        right: type === 'next' ? '35px' : undefined,
        zIndex: 1,
      }}
      className={className}
      onClick={onClick}
    />
  )
}

export default Galeria
