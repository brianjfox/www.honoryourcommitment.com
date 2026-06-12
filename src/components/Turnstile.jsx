import { useEffect, useRef } from 'react'
import { TURNSTILE_SITE_KEY } from '../config.js'

// Load the Cloudflare Turnstile script once, shared across all widgets.
let scriptPromise = null
function loadTurnstile() {
  if (scriptPromise) return scriptPromise
  scriptPromise = new Promise((resolve, reject) => {
    if (window.turnstile) return resolve()
    const s = document.createElement('script')
    s.src =
      'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'
    s.async = true
    s.defer = true
    s.onload = () => resolve()
    s.onerror = () => reject(new Error('turnstile-script-failed'))
    document.head.appendChild(s)
  })
  return scriptPromise
}

/* Renders a Cloudflare Turnstile (Managed) widget. Calls onVerify(token) when
   solved and onExpire() when the token expires or errors, so the form can
   clear it. The token is submitted to the API as `turnstileToken`. */
export default function Turnstile({ onVerify, onExpire }) {
  const ref = useRef(null)
  const widgetId = useRef(null)

  useEffect(() => {
    let cancelled = false
    loadTurnstile()
      .then(() => {
        if (cancelled || !ref.current || !window.turnstile) return
        widgetId.current = window.turnstile.render(ref.current, {
          sitekey: TURNSTILE_SITE_KEY,
          theme: 'light',
          callback: (token) => onVerify && onVerify(token),
          'expired-callback': () => onExpire && onExpire(),
          'error-callback': () => onExpire && onExpire(),
        })
      })
      .catch(() => {
        /* script blocked / offline — form submit will surface a captcha error */
      })

    return () => {
      cancelled = true
      try {
        if (widgetId.current && window.turnstile) {
          window.turnstile.remove(widgetId.current)
        }
      } catch {
        /* ignore */
      }
    }
    // onVerify/onExpire are stable state setters; render once.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div className="turnstile" ref={ref} />
}
