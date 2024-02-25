import Trabajo from '@/components/Trabajo'
import { escenarios } from '@/utils/consts'

export default function Proyecto({ params }: { params: { slug: string } }) {
  return <Trabajo slug={params.slug} type="escenarios" />
}

export async function generateStaticParams() {
  return escenarios.map(p => ({
    slug: p.slug,
  }))
}
