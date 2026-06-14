import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/index.jsx'

export default function Footer() {
  const { t } = useI18n()
  const year = 2026

  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <span className="brand brand--footer">
            <span className="brand__mark" aria-hidden="true">
              <span className="brand__shield" />
            </span>
            <span className="brand__text">
              <span className="brand__line1">Portugal Must</span>
              <span className="brand__line2">Honor Its Commitments</span>
            </span>
          </span>
          <p className="site-footer__tagline">{t('footer.tagline')}</p>
        </div>

        <div className="site-footer__col">
          <h4>{t('footer.quickLinks')}</h4>
          <ul className="site-footer__links">
            <li>
              <Link to="/">{t('nav.home')}</Link>
            </li>
            <li>
              <Link to="/impact">{t('nav.impact')}</Link>
            </li>
            <li>
              <Link to="/media">{t('nav.media')}</Link>
            </li>
            <li>
              <Link to="/open-letter">{t('nav.openLetter')}</Link>
            </li>
          </ul>
        </div>

        <div className="site-footer__col">
          <h4>{t('footer.actions')}</h4>
          <ul className="site-footer__links">
            <li>
              <Link to="/petition">{t('cta.sign')}</Link>
            </li>
            <li>
              <Link to="/register">{t('cta.register')}</Link>
            </li>
            <li>
              <Link to="/legal">{t('cta.join')}</Link>
            </li>
          </ul>
        </div>

        <div className="site-footer__col site-footer__disclaimer">
          <h4>{t('footer.disclaimerTitle')}</h4>
          <p>{t('footer.disclaimer')}</p>
        </div>
      </div>

      <div className="site-footer__bar">
        <div className="container site-footer__bar-inner">
          <span>
            © {year} {t('brand.name')}. {t('footer.rights')}
          </span>
          <span className="site-footer__legal">
            <Link to="/privacy">{t('footer.privacy')}</Link>
            <span aria-hidden="true">·</span>
            <Link to="/terms">{t('footer.terms')}</Link>
          </span>
        </div>
      </div>
    </footer>
  )
}
