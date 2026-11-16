import { render, screen } from '@testing-library/react'
import { LinktreePage } from '../pages/LinktreePage'

const MAIN_SITE = 'https://psiquiatranataliabrito.com.br'

function renderPage() {
  return render(<LinktreePage />)
}

test('shows the original five bio links with their destinations', () => {
  renderPage()

  expect(
    screen.getByRole('link', { name: /agendar consulta online/i }),
  ).toHaveAttribute('href', `${MAIN_SITE}/?modalidade=online#agendar`)
  expect(
    screen.getByRole('link', { name: /agendar consulta presencial/i }),
  ).toHaveAttribute('href', `${MAIN_SITE}/?modalidade=presencial#agendar`)
  expect(
    screen.getByRole('link', { name: /conhecer a dra\. natália/i }),
  ).toHaveAttribute('href', `${MAIN_SITE}/#sobre`)
  expect(
    screen.getByRole('link', { name: /como funciona a consulta online/i }),
  ).toHaveAttribute('href', `${MAIN_SITE}/#consulta-online`)
  expect(
    screen.getByRole('link', { name: /sou psicólogo\(a\)/i }),
  ).toHaveAttribute('href', `${MAIN_SITE}/ferramentas/para-psicologos`)
})

test('shows credentials, Instagram and the crisis contacts', () => {
  renderPage()

  expect(screen.getByText(/CRM-MA 11\.956/)).toBeInTheDocument()
  expect(screen.getByText(/RQE 7\.287/)).toBeInTheDocument()
  expect(screen.getByText(/Presencial em São Luís e online para todo o Brasil/)).toBeInTheDocument()
  const instagramLinks = screen.getAllByRole('link', { name: /instagram/i })
  expect(
    instagramLinks.every(
      (link) =>
        link.getAttribute('href') === 'https://www.instagram.com/psiquiatranataliabrito/',
    ),
  ).toBe(true)
  expect(screen.getByRole('link', { name: '188 (CVV)' })).toHaveAttribute('href', 'tel:188')
  expect(screen.getByRole('link', { name: '192 (SAMU)' })).toHaveAttribute('href', 'tel:192')
})

test('adds WhatsApp as a bio link and keeps the Instagram handle', () => {
  renderPage()

  const whatsapp = screen.getByRole('link', { name: /falar no whatsapp/i })
  expect(whatsapp.getAttribute('href')).toMatch(
    /^https:\/\/wa\.me\/5598984359161\?text=/,
  )
  expect(whatsapp).toHaveAttribute('target', '_blank')

  const instagramLinks = screen.getAllByRole('link', { name: /instagram/i })
  expect(instagramLinks).toHaveLength(1)
  expect(instagramLinks[0]).toHaveAttribute(
    'href',
    'https://www.instagram.com/psiquiatranataliabrito/',
  )
})

test('exposes one accessible heading and the profile photo', () => {
  renderPage()

  expect(
    screen.getByRole('heading', { level: 1, name: /dra\. natália brito — links/i }),
  ).toBeInTheDocument()
  expect(screen.getByAltText('Dra. Natália Brito')).toBeInTheDocument()
})

test('shows the updated logo wording', () => {
  renderPage()

  expect(screen.getByAltText('Natália Brito — psiquiatra')).toBeInTheDocument()
})
