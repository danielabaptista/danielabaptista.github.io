import { createContext, useContext, useEffect, useState } from 'react'
import { de } from './content/de'
import { en } from './content/en'
import type { Content, Lang } from './content/types'

const contents: Record<Lang, Content> = { en, de }
const STORAGE_KEY = 'lang'

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'en' || saved === 'de') return saved
  } catch {
    // storage unavailable, fall through to the browser language
  }
  return navigator.language.toLowerCase().startsWith('de') ? 'de' : 'en'
}

type LanguageState = { lang: Lang; setLang: (lang: Lang) => void; t: Content }

const LanguageContext = createContext<LanguageState | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang)
  const t = contents[lang]

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = t.meta.pageTitle
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description)
  }, [lang, t])

  function setLang(next: Lang) {
    setLangState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // not saved; the choice still applies for this visit
    }
  }

  return <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage(): LanguageState {
  const value = useContext(LanguageContext)
  if (!value) throw new Error('useLanguage must be used inside LanguageProvider')
  return value
}
