import Archivo from '@/components/Archivo'
import { PageProps } from '@/utils/types'
import { unstable_setRequestLocale } from 'next-intl/server'

export default function ArchivoPage({ params: { locale } }: PageProps) {
  unstable_setRequestLocale(locale)
  return <Archivo />
}
