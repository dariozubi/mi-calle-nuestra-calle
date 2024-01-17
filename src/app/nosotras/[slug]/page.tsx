import Footer from '@/components/Footer'
import NavigationBar from '@/components/NavigationBar'
import Semblante from '@/components/Semblante'
import { equipa } from '@/utils/consts'

export default function SemblantePage({
  params,
}: {
  params: { slug: string }
}) {
  return (
    <main className="flex flex-col">
      <NavigationBar />
      <Semblante slug={params.slug} />
      <Footer />
    </main>
  )
}

export async function generateStaticParams() {
  return equipa.map(p => ({
    slug: p.slug,
  }))
}
