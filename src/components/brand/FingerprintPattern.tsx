import { cn } from '../../lib/cn'

export function FingerprintPattern({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn('fingerprint absolute inset-0 text-bark', className)}
    />
  )
}
