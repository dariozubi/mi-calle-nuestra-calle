import Trabajo from '@/components/Trabajo'
import { historias } from '@/utils/consts'
import { PageProps } from '@/utils/types'
import { unstable_setRequestLocale } from 'next-intl/server'

export default function Proyecto({ params }: PageProps) {
  unstable_setRequestLocale(params.locale)
  return <Trabajo slug={params.slug} type="historias" />
}

export async function generateStaticParams() {
  return historias.map(p => ({
    slug: p.slug,
  }))
}
