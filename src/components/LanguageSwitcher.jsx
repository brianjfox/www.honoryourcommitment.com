import { useState, useRef, useEffect } from 'react'
import { useI18n, LANGUAGES } from '../i18n/index.jsx'

export default function LanguageSwitcher() {
  const { lang, setLang } = useI18n()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  return (
    <div className="langswitch" ref={ref}>
      <button
        type="button"
        className="langswitch__btn"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span aria-hidden="true" className="langswitch__globe">
          🌐
        </span>
        <span>{LANGUAGES[lang].name}</span>
        <span aria-hidden="true" className="langswitch__caret">
          ▾
        </span>
      </button>
      {open && (
        <ul className="langswitch__menu" role="listbox" aria-label="Language">
          {Object.values(LANGUAGES).map((l) => (
            <li key={l.code} role="option" aria-selected={l.code === lang}>
              <button
                type="button"
                className={
                  'langswitch__opt' +
                  (l.code === lang ? ' langswitch__opt--active' : '')
                }
                onClick={() => {
                  setLang(l.code)
                  setOpen(false)
                }}
              >
                <span className="langswitch__flag">{l.flag}</span>
                {l.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
