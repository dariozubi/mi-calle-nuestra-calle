import Semblante from '@/components/Semblante'
import { equipa } from '@/utils/consts'
import { PageProps } from '@/utils/types'
import { unstable_setRequestLocale } from 'next-intl/server'

export default function SemblantePage({ params }: PageProps) {
  unstable_setRequestLocale(params.locale)
  return <Semblante slug={params.slug} />
}

export async function generateStaticParams() {
  return equipa.map(p => ({
    slug: p.slug,
  }))
}
