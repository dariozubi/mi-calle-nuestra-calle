import NosotrasPage from '@/components/NosotrasPage'
import { PageProps } from '@/utils/types'
import { unstable_setRequestLocale } from 'next-intl/server'

export default function Nosotras({ params: { locale } }: PageProps) {
  unstable_setRequestLocale(locale)
  return <NosotrasPage />
}
