import Footer from '@/components/Footer'
import NavigationBar from '@/components/NavigationBar'
import Proyecta from '@/components/Proyecta'
import { proyectas } from '@/utils/consts'

export default function Proyecto({ params }: { params: { slug: string } }) {
  return (
    <main className="flex flex-col">
      <NavigationBar />
      <Proyecta slug={params.slug} />
      <Footer />
    </main>
  )
}

export async function generateStaticParams() {
  return proyectas.map(p => ({
    slug: p.slug,
  }))
}
