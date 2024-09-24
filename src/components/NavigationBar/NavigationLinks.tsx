import { links } from '@/utils/consts'
import { ArrowDown, ArrowUpRight } from 'react-feather'
import Text from '@/components/Text'
import { Link } from '@/navigation'

export const NavigationLinks = () => {
  return (
    <div className="flex w-full flex-wrap">
      <div className="flex w-full flex-col lg:w-3/12">
        <Link href="/nosotras">
          <Text from="Navigation" variant="xxl">
            we
          </Text>
        </Link>
        <Link href="/#proyectos">
          <Text from="Navigation" variant="xxl">
            projects
          </Text>
        </Link>
        <Link href="/#labs">
          <Text from="Navigation" variant="xxl">
            labs
          </Text>
        </Link>
        <Link href="/archivo">
          <Text from="Navigation" variant="xxl">
            archive
          </Text>
        </Link>
        <Link href="/#separte">
          <Text from="Navigation" variant="xxl">
            join
          </Text>
        </Link>
      </div>
      <hr className="my-2 w-full lg:hidden" />
      <div className="flex w-full flex-col lg:w-3/12">
        <Text from="Navigation" variant="md" className="font-normal">
          do-it-yourself
        </Text>
        <a
          href={links.metodologias}
          target="_blank"
          className="flex items-center"
        >
          <Text from="Navigation" variant="md">
            methods
          </Text>{' '}
          <ArrowDown size={28} />
        </a>
        <a
          target="_blank"
          href={links.herramientas}
          className="flex items-center"
        >
          <Text from="Navigation" variant="md">
            tools
          </Text>{' '}
          <ArrowDown size={28} />
        </a>
      </div>
      <hr className="my-2 w-full lg:hidden" />
      <div className="flex w-full flex-col lg:w-2/12">
        <div className="flex items-center">
          <Text from="Navigation" variant="md" className="font-normal">
            contact
          </Text>{' '}
          <ArrowUpRight size={28} />
        </div>
        <div className="flex items-center gap-4">
          <a
            href={links.mail}
            target="_blank"
            className="text-2xl font-extrabold text-white"
          >
            Email
          </a>
          <p className="font-extrabold text-white">|</p>
          <a
            href={links.dm}
            target="_blank"
            className="text-2xl font-extrabold text-white"
          >
            DM
          </a>
        </div>
      </div>
      <hr className="my-2 w-full lg:hidden" />
      <div className="flex w-full flex-col items-end justify-between lg:w-4/12 lg:pl-12 ">
        <div className="flex w-full items-center justify-start gap-2">
          <a className="text-xl" target="_blank" href={links.instagram}>
            Instagram
          </a>{' '}
          |{' '}
          <a className="text-xl" target="_blank" href={links.linkedin}>
            Linkedin
          </a>
        </div>
        <a
          href={links.merch}
          target="_blank"
          className="mt-8 w-full bg-black px-4 py-2 text-center text-white lg:mt-0"
        >
          <Text from="Navigation" className="font-bold">
            last-project
          </Text>
        </a>
      </div>
    </div>
  )
}
