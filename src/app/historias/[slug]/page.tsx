import Trabajo from '@/components/Trabajo'
import { historias } from '@/utils/consts'

export default function Proyecto({ params }: { params: { slug: string } }) {
  return <Trabajo slug={params.slug} type="historias" />
}

export async function generateStaticParams() {
  return historias.map(p => ({
    slug: p.slug,
  }))
}
