import { BioLink } from '../components/BioLink'
import { CrisisNotice } from '../components/CrisisNotice'
import { ProfileHeader } from '../components/ProfileHeader'
import { FingerprintPattern } from '../components/brand/FingerprintPattern'
import { bioLinks } from '../data/links'
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from '../lib/site'

export function LinktreePage() {
  return (
    <main className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-cream px-5 py-8 sm:py-12">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <FingerprintPattern className="fingerprint--xl" />
      </div>

      <div className="relative flex w-full max-w-[430px] flex-col items-center text-center">
        <h1 className="sr-only">Dra. Natália Brito — links</h1>

        <ProfileHeader />

        <p className="mt-5 font-serif text-sm italic text-stone/90 sm:mt-7">
          clique para acessar:
        </p>

        <nav
          aria-label="Links da Dra. Natália"
          className="mt-3 flex w-full flex-col gap-2.5 sm:mt-4 sm:gap-3"
        >
          {bioLinks.map((link) => (
            <BioLink key={link.label} link={link} />
          ))}
        </nav>

        <CrisisNotice />

        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Instagram ${INSTAGRAM_HANDLE} (abre em nova aba)`}
          className="mt-3 text-[0.78rem] text-stone underline-offset-4 transition-colors hover:text-bark hover:underline sm:mt-5"
        >
          {INSTAGRAM_HANDLE}
        </a>
      </div>
    </main>
  )
}
