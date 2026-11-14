import { MessageCircle } from 'lucide-react'

export function WhatsAppIcon({ className }: { className?: string }) {
  return <MessageCircle className={className} strokeWidth={1.5} aria-hidden="true" />
}
