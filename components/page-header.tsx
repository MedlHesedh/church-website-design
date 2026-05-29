import { FadeIn } from '@/components/motion'

interface PageHeaderProps {
  label?: string
  title: string
  subtitle?: string
}

export function PageHeader({ label, title, subtitle }: PageHeaderProps) {
  return (
    <section className="bg-primary text-primary-foreground py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {label && (
          <FadeIn delay={0} className="mb-4">
            <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-accent">
              {label}
            </p>
          </FadeIn>
        )}
        <FadeIn delay={0.1}>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] mb-5 max-w-3xl">
            {title}
          </h1>
        </FadeIn>
        {subtitle && (
          <FadeIn delay={0.2}>
            <p className="text-base md:text-lg font-light text-primary-foreground/70 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          </FadeIn>
        )}
      </div>
    </section>
  )
}
