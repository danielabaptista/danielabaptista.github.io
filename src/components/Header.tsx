import { shared } from '../content/shared'
import type { Lang } from '../content/types'
import { useLanguage } from '../i18n'

export const sectionIds = ['about', 'resume', 'projects', 'contact'] as const

const languages: Lang[] = ['de', 'en']

export default function Header({ active }: { active: string }) {
  const { lang, setLang, t } = useLanguage()

  return (
    <header className="sticky top-0 z-10 bg-white/95 backdrop-blur">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-x-8 gap-y-2 px-6 py-3 md:px-10 md:py-7"
      >
        <a href="#about" className="order-1 flex items-center gap-3 no-underline">
            <span aria-hidden="true" className="inline-block size-3 rounded-full bg-accent" />
            <span className="font-display text-base font-semibold text-ink md:text-lg">{shared.name}</span>
          {/* <span className="hidden text-base text-muted lg:inline">/ {t.title}</span>*/}
        </a>
        <ul className="order-3 m-0 flex w-full list-none flex-wrap gap-x-5 gap-y-1 p-0 text-[15px] md:order-2 md:ml-auto md:w-auto md:gap-x-8 md:text-base">
            {sectionIds.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? 'true' : undefined}
                  className={`no-underline transition-colors hover:text-accent ${active === id ? 'text-accent' : 'text-ink'}`}
                >
                  {t.ui.nav[id]}
                </a>
              </li>
            ))}
        </ul>
        <div role="group" aria-label={t.ui.languageLabel} className="order-2 flex text-sm font-semibold md:order-3">
            {languages.map((code, i) => (
              <button
                key={code}
                type="button"
                lang={code}
                aria-pressed={lang === code}
                onClick={() => setLang(code)}
                className={`min-h-9 cursor-pointer border-[1.5px] border-ink px-3 uppercase transition-colors ${
                  i === 0 ? 'rounded-l-full' : '-ml-[1.5px] rounded-r-full'
                } ${lang === code ? 'bg-ink text-white' : 'bg-transparent text-ink hover:bg-ground'}`}
              >
                {code}
              </button>
            ))}
        </div>
      </nav>
    </header>
  )
}
