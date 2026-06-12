import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import en from './en.js'
import pt from './pt.js'
import zh from './zh.js'
import es from './es.js'

export const LANGUAGES = {
  en: { ...en.meta, code: 'en', flag: 'EN' },
  pt: { ...pt.meta, code: 'pt', flag: 'PT' },
  zh: { ...zh.meta, code: 'zh', flag: '中' },
  es: { ...es.meta, code: 'es', flag: 'ES' },
}

const dictionaries = { en, pt, zh, es }
const STORAGE_KEY = 'phyc-lang'

function detectInitialLanguage() {
  if (typeof window === 'undefined') return 'en'
  const saved = window.localStorage.getItem(STORAGE_KEY)
  if (saved && dictionaries[saved]) return saved
  const nav = (window.navigator.language || 'en').slice(0, 2).toLowerCase()
  return dictionaries[nav] ? nav : 'en'
}

// Resolve a dotted key path ("home.hero.headline") against a dictionary,
// falling back to English, then to the raw key.
function resolve(dict, key) {
  const parts = key.split('.')
  let node = dict
  for (const p of parts) {
    if (node && typeof node === 'object' && p in node) {
      node = node[p]
    } else {
      return undefined
    }
  }
  return node
}

const I18nContext = createContext(null)

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(detectInitialLanguage)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang)
    document.documentElement.lang = lang
    document.documentElement.dir = LANGUAGES[lang]?.dir || 'ltr'
  }, [lang])

  const t = useCallback(
    (key) => {
      const val = resolve(dictionaries[lang], key)
      if (val !== undefined) return val
      const fallback = resolve(dictionaries.en, key)
      return fallback !== undefined ? fallback : key
    },
    [lang]
  )

  return (
    <I18nContext.Provider value={{ lang, setLang, t, languages: LANGUAGES }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}
