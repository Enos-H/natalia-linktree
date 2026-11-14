import { ArrowRight } from 'lucide-react'
import type { BioLink as BioLinkData } from '../data/links'
import { cn } from '../lib/cn'

type BioLinkProps = {
  link: BioLinkData
}

export function BioLink({ link }: BioLinkProps) {
  const Icon = link.icon
  const emphasis = Boolean(link.emphasis)

  return (
    <a
      href={link.href}
      {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={cn(
        'group flex min-h-[68px] w-full items-center gap-3 rounded-2xl border px-4 py-3 text-left shadow-card transition-[background-color,border-color,box-shadow] duration-200 sm:min-h-[76px] sm:py-3.5',
        emphasis
          ? 'border-bark/20 bg-bark text-cream hover:bg-ink hover:shadow-lg'
          : 'border-bark/10 bg-paper text-ink hover:border-bark/25 hover:bg-white',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'flex h-9 w-9 shrink-0 items-center justify-center rounded-full sm:h-10 sm:w-10',
          emphasis ? 'bg-cream/10 text-cream' : 'bg-cream text-bark',
        )}
      >
        <Icon className="h-[18px] w-[18px]" />
      </span>

      <span className="min-w-0 flex-1">
        <span className="block text-[0.9rem] font-medium leading-snug sm:text-[0.94rem]">
          {link.label}
        </span>
        <span
          className={cn(
            'mt-0.5 block text-[0.75rem] leading-snug sm:text-[0.78rem]',
            emphasis ? 'text-cream/70' : 'text-stone',
          )}
        >
          {link.hint}
        </span>
      </span>

      <ArrowRight
        className={cn(
          'h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5',
          emphasis ? 'text-cream/80' : 'text-bark/80',
        )}
        aria-hidden="true"
      />

      {link.external ? <span className="sr-only"> (abre em nova aba)</span> : null}
    </a>
  )
}
