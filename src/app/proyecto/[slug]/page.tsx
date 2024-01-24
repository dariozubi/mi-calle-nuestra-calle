import Proyecta from '@/components/Proyecta'
import { proyectas } from '@/utils/consts'

export default function Proyecto({ params }: { params: { slug: string } }) {
  return <Proyecta slug={params.slug} />
}

export async function generateStaticParams() {
  return proyectas.map(p => ({
    slug: p.slug,
  }))
}
