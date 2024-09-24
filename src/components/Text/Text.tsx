import { useTranslations } from 'next-intl'
import { PropsWithChildren } from 'react'

type Props = {
  from: string
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'span'
  isRichText?: boolean
  variant?: Variants
}

type Variants = 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs'

const baseClassNames: Record<Variants | 'text', string> = {
  text: 'text-base lg:text-xl',
  xxl: 'text-4xl font-extrabold',
  xl: 'text-3xl font-extrabold lg:text-6xl',
  lg: 'text-2xl font-extrabold lg:text-3xl',
  md: 'text-2xl font-extrabold',
  sm: 'text-sm lg:text-base',
  xs: 'text-xs',
}

function Text({
  from,
  as,
  className,
  children,
  isRichText,
  variant,
}: PropsWithChildren<Props>) {
  const t = useTranslations(from)
  const Tag = as || 'p'
  return (
    <Tag className={`${baseClassNames[variant || 'text']} ${className}`}>
      {typeof children === 'string'
        ? isRichText
          ? t.rich(children, {
              g: m => <span className="text-green">{m}</span>,
              y: m => <span className="text-yellow">{m}</span>,
              p: m => <span className="text-pink">{m}</span>,
              t: m => <span className="text-ladrillo">{m}</span>,
              r: m => <span className="text-red">{m}</span>,
              pu: m => <span className="text-lila">{m}</span>,
              b: m => <span className="text-blue">{m}</span>,
              bl: m => <span className="font-extrabold">{m}</span>,
              escenarios: m => (
                <a
                  className="underline"
                  href="https://docs.google.com/presentation/d/1ijUsY8DVAGaeatr5fGefiuanOpYxr_fwlMxZQtc3hnE/edit#slide=id.g264ab6ef26c_0_112"
                >
                  {m}
                </a>
              ),
              br: () => <br />,
            })
          : t(children)
        : children}
    </Tag>
  )
}

export default Text
