import { Heart } from 'lucide-react'

export function CrisisNotice() {
  return (
    <div className="mt-4 flex w-full items-start gap-2.5 rounded-2xl border border-bark/10 bg-paper/55 px-4 py-2.5 text-left sm:mt-6 sm:py-3">
      <Heart className="mt-0.5 h-4 w-4 shrink-0 text-stone" aria-hidden="true" />
      <p className="text-[0.75rem] leading-relaxed text-stone sm:text-[0.78rem]">
        Em crise, ligue{' '}
        <a
          href="tel:188"
          className="underline decoration-stone/40 underline-offset-2 transition-colors hover:text-bark"
        >
          188 (CVV)
        </a>{' '}
        ou{' '}
        <a
          href="tel:192"
          className="underline decoration-stone/40 underline-offset-2 transition-colors hover:text-bark"
        >
          192 (SAMU)
        </a>
        .
      </p>
    </div>
  )
}
