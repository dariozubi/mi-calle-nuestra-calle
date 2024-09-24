import ArchivoPage from '@/components/ArchivoPage'
import { PageProps } from '@/utils/types'
import { unstable_setRequestLocale } from 'next-intl/server'

export default function Archivo({ params: { locale } }: PageProps) {
  unstable_setRequestLocale(locale)
  return <ArchivoPage />
}
