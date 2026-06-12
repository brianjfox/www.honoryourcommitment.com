import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/index.jsx'

const STORAGE_KEY = 'phyc-privacy-notice'

/* A first-visit privacy notice (not a tracking-consent gate). The site uses
   no advertising or tracking cookies — only functional local storage for the
   language preference — so this informs rather than blocks. Dismissal is
   remembered in local storage. */
export default function PrivacyNotice() {
  const { t } = useI18n()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (window.localStorage.getItem(STORAGE_KEY) !== 'dismissed') {
      setVisible(true)
    }
  }, [])

  const dismiss = () => {
    window.localStorage.setItem(STORAGE_KEY, 'dismissed')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="privacy-notice" role="region" aria-label={t('nav.privacy')}>
      <div className="privacy-notice__inner">
        <p className="privacy-notice__text">
          {t('privacyNotice.text')}{' '}
          <Link to="/privacy" onClick={dismiss}>
            {t('privacyNotice.learnMore')}
          </Link>
        </p>
        <button type="button" className="btn btn--gold" onClick={dismiss}>
          {t('privacyNotice.accept')}
        </button>
      </div>
    </div>
  )
}
