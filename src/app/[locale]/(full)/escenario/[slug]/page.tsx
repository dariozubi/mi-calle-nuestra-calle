import Trabajo from '@/components/Trabajo'
import { escenarios } from '@/utils/consts'
import { PageProps } from '@/utils/types'
import { unstable_setRequestLocale } from 'next-intl/server'

export default function Proyecto({ params }: PageProps) {
  unstable_setRequestLocale(params.locale)
  return <Trabajo slug={params.slug} type="escenarios" />
}

export async function generateStaticParams() {
  return escenarios.map(p => ({
    slug: p.slug,
  }))
}
