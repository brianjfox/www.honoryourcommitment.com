import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useI18n } from '../i18n/index.jsx'

const KNOWN_TYPES = ['signature', 'case', 'claimant']

/* After someone clicks the confirmation link in their email, the API redirects
   to the site with ?confirmed=<type>&status=<confirmed|invalid_or_used>. This
   reads those params once, shows a tailored banner, and strips them from the
   URL so a refresh doesn't re-show it. */
export default function ConfirmBanner() {
  const { t } = useI18n()
  const [params, setParams] = useSearchParams()
  const [notice, setNotice] = useState(null)

  useEffect(() => {
    const confirmed = params.get('confirmed')
    if (!confirmed) return
    setNotice({ type: confirmed, status: params.get('status') })
    const next = new URLSearchParams(params)
    next.delete('confirmed')
    next.delete('status')
    setParams(next, { replace: true })
    // run once on mount; the redirect lands a single time
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!notice) return null

  const { type, status } = notice
  const ok = status === 'confirmed' || status === 'already_confirmed'
  const known = KNOWN_TYPES.includes(type)
  let key
  if (status === 'confirmed') key = known ? `confirm.${type}` : 'confirm.generic'
  else if (status === 'already_confirmed')
    key = known ? `confirm.already.${type}` : 'confirm.already.generic'
  else key = 'confirm.invalid'

  return (
    <div
      className={'confirm-banner ' + (ok ? 'is-ok' : 'is-info')}
      role="status"
      aria-live="polite"
    >
      <div className="container confirm-banner__inner">
        <span className="confirm-banner__icon" aria-hidden="true">
          {ok ? '✓' : 'i'}
        </span>
        <span className="confirm-banner__msg">{t(key)}</span>
        <button
          type="button"
          className="confirm-banner__close"
          onClick={() => setNotice(null)}
          aria-label={t('confirm.dismiss')}
        >
          ×
        </button>
      </div>
    </div>
  )
}
