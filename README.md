# Links — Dra. Natália Brito

Página de links (link na bio) da Dra. Natália Brito, psiquiatra em São Luís e online para todo o Brasil. O site completo fica em [psiquiatranataliabrito.com.br](https://psiquiatranataliabrito.com.br).

A página é independente do site institucional e será publicada em `links.psiquiatranataliabrito.com.br`.

## Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS 4
- Fontsource: Bodoni Moda e Jost
- Vitest + Testing Library
- Oxlint

## Rodando

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`.

## Scripts

```bash
npm run dev        # desenvolvimento
npm run build      # build de produção
npm run preview    # prévia do build
npm run lint       # análise estática
npm run test       # testes
npm run verify     # lint + testes + build
```

## Estrutura

```text
src/
├─ components/
│  ├─ BioLink.tsx          # cartão de link (escuro ou claro)
│  ├─ CrisisNotice.tsx     # aviso CVV/SAMU
│  ├─ ProfileHeader.tsx    # foto, logo, credenciais
│  └─ brand/               # logo e impressão digital
├─ data/links.ts           # os links e seus destinos
├─ lib/site.ts             # URL do site, Instagram, CRM e RQE
├─ pages/LinktreePage.tsx  # composição da página
├─ test/                   # testes
├─ App.tsx
├─ index.css               # tokens de cor, fontes e textura
└─ main.tsx
public/
├─ images/                 # logo, foto, impressão digital e OG
├─ favicon.png
└─ apple-touch-icon.png
```

## Onde alterar

- **Links e textos dos botões:** `src/data/links.ts`.
- **Site de destino dos links:** variável `VITE_MAIN_SITE_URL` (veja `.env.example`).
- **Instagram, WhatsApp, CRM e RQE:** `src/lib/site.ts`.
- **Cores, fontes e textura:** `src/index.css`.
- **Foto, logo e imagem de compartilhamento:** `public/images/`.
- **Título, descrição e Open Graph:** `index.html`.

A foto circular é um recorte da foto `nat-01-hero-854.webp` do projeto `natalia-landpage`.

## Destinos atuais

| Item | Destino |
|---|---|
| Agendar consulta online | `/?modalidade=online#agendar` no site |
| Agendar consulta presencial | `/?modalidade=presencial#agendar` no site |
| Conhecer a Dra. Natália | `/#sobre` no site |
| Como funciona a consulta online | `/#consulta-online` no site |
| Sou psicólogo(a) | `/ferramentas/para-psicologos` no site |
| Falar no WhatsApp | `https://wa.me/5598984359161` com mensagem pronta |
| Instagram | `https://www.instagram.com/psiquiatranataliabrito/` |
| CVV / SAMU | `tel:188` / `tel:192` |

Os links abrem na mesma aba, com exceção do Instagram.

## Deploy na Vercel

1. Importe este repositório na Vercel.
2. Use o preset **Vite**, com build `npm run build` e saída `dist`.
3. Configure a variável de ambiente de produção:
   - `VITE_MAIN_SITE_URL=https://psiquiatranataliabrito.com.br`
4. Adicione o domínio `links.psiquiatranataliabrito.com.br` ao projeto.
   - Se o DNS do domínio estiver na Vercel, adicione o domínio diretamente no painel.
   - Caso contrário, crie um registro `CNAME` com nome `links` apontando para `cname.vercel-dns.com`.
5. Faça o deploy. A página fica em `https://links.psiquiatranataliabrito.com.br/`.

O `index.html` usa a URL de produção nos metadados de canonical e Open Graph. Se o subdomínio mudar, atualize também essas URLs.

## Observações

- A página é `noindex, follow`, como a antiga `/links` do site, para não competir com o site institucional.
- Não há analytics, rastreadores ou coleta de dados.
- O build é totalmente estático e não depende de servidor.
