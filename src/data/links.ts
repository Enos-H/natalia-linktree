import type { ComponentType } from 'react'
import { BookOpen, Laptop, MapPin, Users, Video } from 'lucide-react'
import { InstagramIcon, WhatsAppIcon } from '../components/brand/SocialIcons'
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  WHATSAPP_DISPLAY,
  siteUrl,
  whatsappLink,
} from '../lib/site'

export type BioLink = {
  label: string
  hint: string
  href: string
  icon: ComponentType<{ className?: string }>
  emphasis?: boolean
  external?: boolean
}

export const bioLinks: BioLink[] = [
  {
    label: 'Agendar consulta online',
    hint: 'De qualquer lugar do Brasil',
    href: `${siteUrl('/')}?modalidade=online#agendar`,
    icon: Video,
    emphasis: true,
  },
  {
    label: 'Agendar consulta presencial',
    hint: 'Clínica Delphos · São Luís',
    href: `${siteUrl('/')}?modalidade=presencial#agendar`,
    icon: MapPin,
    emphasis: true,
  },
  {
    label: 'Conhecer a Dra. Natália',
    hint: 'Site',
    href: siteUrl('/#sobre'),
    icon: BookOpen,
  },
  {
    label: 'Como funciona a consulta online',
    hint: 'Receita digital, reembolso',
    href: siteUrl('/#consulta-online'),
    icon: Laptop,
  },
  {
    label: 'Sou psicólogo(a)',
    hint: 'Encaminhar um paciente',
    href: siteUrl('/ferramentas/para-psicologos'),
    icon: Users,
  },
  {
    label: 'Falar no WhatsApp',
    hint: WHATSAPP_DISPLAY,
    href: whatsappLink(),
    icon: WhatsAppIcon,
    external: true,
  },
  {
    label: 'Instagram',
    hint: INSTAGRAM_HANDLE,
    href: INSTAGRAM_URL,
    icon: InstagramIcon,
    external: true,
  },
]
