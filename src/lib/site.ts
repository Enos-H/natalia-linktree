const DEFAULT_MAIN_SITE_URL = 'https://psiquiatranataliabrito.com.br'

export const MAIN_SITE_URL = (
  import.meta.env.VITE_MAIN_SITE_URL || DEFAULT_MAIN_SITE_URL
).replace(/\/+$/, '')

export function siteUrl(path: string): string {
  return `${MAIN_SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}

export const INSTAGRAM_URL = 'https://www.instagram.com/psiquiatranataliabrito/'
export const INSTAGRAM_HANDLE = '@psiquiatranataliabrito'
export const WHATSAPP_NUMBER = '5598984359161'
export const WHATSAPP_DISPLAY = '(98) 98435-9161'
export const WHATSAPP_MESSAGE =
  'Olá, Dra. Natália! Vim pelo link da bio e gostaria de falar.'
export const CRM = 'CRM-MA 11.956'
export const RQE = 'RQE 7.287'

export function whatsappLink(message: string = WHATSAPP_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
