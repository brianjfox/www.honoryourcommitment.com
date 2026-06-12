import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { useI18n } from '../i18n/index.jsx'
import LanguageSwitcher from './LanguageSwitcher.jsx'

const NAV = [
  { to: '/', key: 'nav.home', end: true },
  { to: '/petition', key: 'nav.petition' },
  { to: '/register', key: 'nav.register' },
  { to: '/impact', key: 'nav.impact' },
  { to: '/legal', key: 'nav.legal' },
  { to: '/media', key: 'nav.media' },
  { to: '/open-letter', key: 'nav.openLetter' },
]

export default function Header() {
  const { t } = useI18n()
  const [open, setOpen] = useState(false)
  const location = useLocation()

  // Close the mobile menu on navigation.
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link to="/" className="brand" aria-label={t('brand.name')}>
          <span className="brand__mark" aria-hidden="true">
            <span className="brand__shield" />
          </span>
          <span className="brand__text">
            <span className="brand__line1">Portugal Must</span>
            <span className="brand__line2">Honor Its Commitments</span>
          </span>
        </Link>

        <nav className="site-nav" aria-label="Primary">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                'site-nav__link' + (isActive ? ' site-nav__link--active' : '')
              }
            >
              {t(item.key)}
            </NavLink>
          ))}
        </nav>

        <div className="site-header__right">
          <LanguageSwitcher />
          <Link to="/petition" className="btn btn--gold site-header__cta">
            {t('cta.signShort')}
          </Link>
          <button
            type="button"
            className="hamburger"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={'hamburger__box' + (open ? ' is-open' : '')}>
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={'mobile-menu' + (open ? ' is-open' : '')}>
        <nav aria-label="Mobile">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                'mobile-menu__link' + (isActive ? ' is-active' : '')
              }
            >
              {t(item.key)}
            </NavLink>
          ))}
        </nav>
        <div className="mobile-menu__cta">
          <Link to="/petition" className="btn btn--gold btn--block">
            {t('cta.sign')}
          </Link>
          <Link to="/register" className="btn btn--outline btn--block">
            {t('cta.register')}
          </Link>
        </div>
      </div>
      {open && (
        <button
          className="mobile-menu__scrim"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        />
      )}
    </header>
  )
}
