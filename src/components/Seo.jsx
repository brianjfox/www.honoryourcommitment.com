import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useI18n } from '../i18n/index.jsx'
import { PRIVACY } from '../data/privacy.js'

// Canonical origin (apex). Keep in sync with the nginx canonical redirect.
export const SITE_URL = 'https://honoryourcommitment.com'

const OG_LOCALE = { en: 'en_US', pt: 'pt_PT', zh: 'zh_CN', es: 'es_ES' }

function upsertMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

const clamp = (s, n = 200) => {
  const t = String(s || '').replace(/\s+/g, ' ').trim()
  return t.length > n ? t.slice(0, n - 1).trimEnd() + '…' : t
}

/* Updates the document title and SEO/social meta on every route + language
   change. Titles and descriptions reuse the existing translated copy so the
   site's metadata is multilingual without duplicating content. */
export default function Seo() {
  const { t, lang } = useI18n()
  const { pathname } = useLocation()

  useEffect(() => {
    const site = t('brand.name')
    const routes = {
      '/': { title: null, desc: t('home.hero.subhead') },
      '/petition': { title: t('petition.title'), desc: t('petition.intro') },
      '/register': { title: t('register.title'), desc: t('register.purposeBody') },
      '/impact': { title: t('impact.title'), desc: t('impact.intro') },
      '/legal': { title: t('legal.title'), desc: t('legal.purposeBody') },
      '/media': { title: t('media.title'), desc: t('media.intro') },
      '/open-letter': {
        title: t('openLetter.title'),
        desc: t('seo.openLetterDesc'),
      },
      '/privacy': {
        title: t('footer.privacy'),
        desc: (PRIVACY[lang] || PRIVACY.en).intro,
      },
    }
    const r = routes[pathname] || routes['/']

    const title = r.title ? `${r.title} · ${site}` : `${site} — ${t('seo.tagline')}`
    const desc = clamp(r.desc)
    const url = SITE_URL + (pathname === '/' ? '/' : pathname)

    document.title = title
    upsertMeta('name', 'description', desc)
    upsertLink('canonical', url)

    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', desc)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:locale', OG_LOCALE[lang] || 'en_US')

    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', desc)
  }, [pathname, lang, t])

  return null
}
