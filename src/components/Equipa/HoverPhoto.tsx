import * as HoverCard from '@radix-ui/react-hover-card'
import { PropsWithChildren } from 'react'
import Image from 'next/image'

type Props = {
  img: string
}

export const HoverPhoto = ({ children, img }: PropsWithChildren<Props>) => (
  <HoverCard.Root openDelay={0} closeDelay={0}>
    <HoverCard.Trigger asChild>{children}</HoverCard.Trigger>
    <HoverCard.Portal>
      <HoverCard.Content align="start">
        <div className="relative h-[300px] w-[300px]">
          <Image
            src={img}
            alt={img ? img.substring(0, img.length - 3) : 'image'}
            fill
            priority={true}
            sizes="300px"
            className="overflow-hidden rounded-lg object-cover"
          />
        </div>
      </HoverCard.Content>
    </HoverCard.Portal>
  </HoverCard.Root>
)
