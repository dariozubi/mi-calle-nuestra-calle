import * as HoverCard from '@radix-ui/react-hover-card'
import { PropsWithChildren } from 'react'
import Image from 'next/image'

type Props = {
  img: string
}

export const HoverPhoto = ({ children, img }: PropsWithChildren<Props>) => (
  <HoverCard.Root openDelay={200} closeDelay={100}>
    <HoverCard.Trigger asChild>{children}</HoverCard.Trigger>
    <HoverCard.Portal>
      <HoverCard.Content align="start">
        <div className="h-[400px] w-[400px]">
          <Image
            src={img}
            alt={img ? img.substring(0, img.length - 3) : 'image'}
            fill
            className="object-cover"
          />
        </div>
      </HoverCard.Content>
    </HoverCard.Portal>
  </HoverCard.Root>
)
