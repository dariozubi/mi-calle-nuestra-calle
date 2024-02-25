import Semblante from '@/components/Semblante'
import { equipa } from '@/utils/consts'

export default function SemblantePage({
  params,
}: {
  params: { slug: string }
}) {
  return <Semblante slug={params.slug} />
}

export async function generateStaticParams() {
  return equipa.map(p => ({
    slug: p.slug,
  }))
}
