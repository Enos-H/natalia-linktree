import { CRM, RQE } from '../lib/site'
import { Logo } from './brand/Logo'

export function ProfileHeader() {
  return (
    <header className="flex flex-col items-center">
      <img
        src="/images/profile-320.webp"
        alt="Dra. Natália Brito"
        width={320}
        height={320}
        fetchPriority="high"
        className="h-24 w-24 rounded-full border-4 border-paper object-cover shadow-card sm:h-28 sm:w-28"
      />
      <Logo
        width={200}
        widthClassName="w-[160px] sm:w-[170px]"
        className="mt-3 sm:mt-4"
      />
      <p className="mt-2.5 text-[0.67rem] uppercase tracking-[0.13em] text-stone sm:mt-3 sm:text-[0.72rem] sm:tracking-[0.18em]">
        Médica psiquiatra · {CRM} · {RQE}
      </p>
      <p className="mt-1.5 text-[0.78rem] leading-relaxed text-stone sm:mt-2 sm:text-[0.82rem]">
        Presencial em São Luís e online para todo o Brasil
      </p>
    </header>
  )
}
