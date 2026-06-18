import { useEffect, useState } from 'react'
import { useI18n } from '../i18n/index.jsx'
import Counter from '../components/Counter.jsx'
import ActionsBanner from '../components/ActionsBanner.jsx'
import { useStats } from '../lib/useStats.js'
import { eurCompact } from '../lib/format.js'
import { API_BASE } from '../config.js'

// Fetches a JSON endpoint once and returns the array it yields (via `pick`),
// or null while loading / on failure.
function useApiList(path, pick) {
  const [items, setItems] = useState(null)
  useEffect(() => {
    let alive = true
    fetch(`${API_BASE}${path}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (!alive) return
        const list = data && pick(data)
        if (Array.isArray(list)) setItems(list)
      })
      .catch(() => {})
    return () => {
      alive = false
    }
  }, [path])
  return items
}

// Fetches the daily-curated news feed from the API. Falls back to the static
// COVERAGE list if the feed is empty or unreachable, so the section never
// renders blank.
function useLiveCoverage() {
  const [items, setItems] = useState(null)
  useEffect(() => {
    let alive = true
    fetch(`${API_BASE}/api/news`)
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (!alive || !data || !Array.isArray(data.articles) || !data.articles.length)
          return
        setItems(
          data.articles.map((a) => ({
            id: a.url,
            outlet: a.source,
            date: a.publishedDate,
            title: a.title,
            url: a.url,
            summary: a.summary,
            external: true,
          }))
        )
      })
      .catch(() => {})
    return () => {
      alive = false
    }
  }, [])
  return items
}

function formatDate(iso, lang) {
  try {
    return new Intl.DateTimeFormat(lang, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(new Date(iso))
  } catch {
    return iso
  }
}

export default function MediaCenter() {
  const { t, lang } = useI18n()
  const live = useStats()
  // Live figures from /api/stats (confirmed records only); 0 until loaded.
  const v = (k) => (live && live[k] != null ? live[k] : 0)

  // First-party press releases — served from the API; the section is hidden
  // entirely when there are none.
  const pressReleases = useApiList('/api/press-releases', (d) => d.items) || []

  // Live, daily-curated coverage. The section is hidden when there's none —
  // no static placeholders (which would link nowhere).
  const coverageItems = useLiveCoverage() || []

  const stats = [
    { label: t('stats.signatures'), value: v('signatures') },
    { label: t('stats.cases'), value: v('cases') },
    { label: t('stats.countries'), value: v('countries') },
    {
      label: t('stats.capital'),
      value: v('capitalInvested'),
      format: eurCompact,
    },
  ]

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">{t('media.eyebrow')}</span>
          <h1>{t('media.title')}</h1>
          <p className="lead">{t('media.intro')}</p>
        </div>
      </section>

      {/* Campaign statistics */}
      <section className="section section--tight section--soft">
        <div className="container">
          <div className="section__head center">
            <h2>{t('media.statsTitle')}</h2>
          </div>
          <div className="metrics-grid metrics-grid--4">
            {stats.map((m) => (
              <div className="metric-card" key={m.label}>
                <div className="metric-card__value">
                  <Counter value={m.value} format={m.format} />
                  {!m.format && '+'}
                </div>
                <div className="metric-card__label">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press releases — only rendered when the API returns at least one. */}
      {pressReleases.length > 0 && (
        <section className="section">
          <div className="container">
            <h2>{t('media.pressReleases')}</h2>
            <div className="media-list">
              {pressReleases.map((pr) => (
                <article className="card media-item" key={pr.id}>
                  {pr.date && (
                    <time className="media-item__date">
                      {formatDate(pr.date, lang)}
                    </time>
                  )}
                  <h3>{pr.title}</h3>
                  <p>{pr.summary}</p>
                  {pr.url && (
                    <a
                      className="media-item__link"
                      href={pr.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t('media.readArticle')} →
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* News coverage — live feed only; hidden when there's none. */}
      {coverageItems.length > 0 && (
        <section className="section section--soft">
          <div className="container">
            <h2>{t('media.coverage')}</h2>
            <ul className="link-list">
              {coverageItems.map((c) => (
                <li key={c.id}>
                  <span className="link-list__meta">
                    {c.outlet}
                    {c.date ? ` · ${formatDate(c.date, lang)}` : ''}
                  </span>
                  <a
                    className="link-list__title"
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {c.title}
                  </a>
                  {c.summary && (
                    <p className="link-list__summary">
                      {c.summary}{' '}
                      <a
                        className="link-list__more"
                        href={c.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t('media.readMore')}
                      </a>
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Media enquiries */}
      <section className="section section--tight">
        <div className="container">
          <div className="card card--accent center contact-card">
            <h2>{t('media.contactTitle')}</h2>
            <p className="lead measure" style={{ marginInline: 'auto' }}>
              {t('media.contactBody')}
            </p>
            <a
              className="btn btn--navy btn--lg"
              href="mailto:press@honoryourcommitment.com"
            >
              {t('media.contactBtn')}
            </a>
          </div>
        </div>
      </section>

      <ActionsBanner />
    </>
  )
}
