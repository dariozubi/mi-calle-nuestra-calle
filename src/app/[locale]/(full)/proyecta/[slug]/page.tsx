import Trabajo from '@/components/Trabajo'
import { proyectas } from '@/utils/consts'

export default function Proyecto({ params }: { params: { slug: string } }) {
  return <Trabajo slug={params.slug} type="proyectas" />
}

export async function generateStaticParams() {
  return proyectas.map(p => ({
    slug: p.slug,
  }))
}
