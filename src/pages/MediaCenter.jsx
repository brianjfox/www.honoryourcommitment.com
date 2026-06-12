import { useEffect, useState } from 'react'
import { useI18n } from '../i18n/index.jsx'
import Counter from '../components/Counter.jsx'
import ActionsBanner from '../components/ActionsBanner.jsx'
import { INTERVIEWS } from '../data/media.js'
import { CAMPAIGN_STATS } from '../data/cases.js'
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
  const s = CAMPAIGN_STATS

  // First-party press releases — served from the API; the section is hidden
  // entirely when there are none.
  const pressReleases = useApiList('/api/press-releases', (d) => d.items) || []

  // Live, daily-curated coverage. The section is hidden when there's none —
  // no static placeholders (which would link nowhere).
  const coverageItems = useLiveCoverage() || []

  const stats = [
    { label: t('stats.signatures'), value: s.signatures },
    { label: t('stats.cases'), value: s.cases },
    { label: t('stats.countries'), value: s.countries },
    {
      label: t('stats.capital'),
      value: s.capitalInvested,
      format: (n) => '€' + (n / 1e9).toFixed(2) + 'B',
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

      {/* Coverage + interviews */}
      <section className="section section--soft">
        <div className="container grid grid-2">
          {coverageItems.length > 0 && (
            <div>
              <h2>{t('media.coverage')}</h2>
              <ul className="link-list">
                {coverageItems.map((c) => (
                  <li key={c.id}>
                    <span className="link-list__meta">
                      {c.outlet}
                      {c.date ? ` · ${formatDate(c.date, lang)}` : ''}
                    </span>
                    <span className="tip">
                      <a href={c.url} target="_blank" rel="noopener noreferrer">
                        {c.title}
                      </a>
                      {c.summary && (
                        <span className="tip__bubble" role="tooltip">
                          <span className="tip__label">
                            {t('media.summaryLabel')}
                          </span>
                          {c.summary}
                        </span>
                      )}
                    </span>
                    <a
                      className="link-list__cta"
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t('media.readArticle')} →
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div>
            <h2>{t('media.interviews')}</h2>
            <ul className="link-list">
              {INTERVIEWS.map((iv) => (
                <li key={iv.id}>
                  <span className="link-list__meta">
                    {iv.speaker} · {formatDate(iv.date, lang)}
                  </span>
                  <a href={`#${iv.id}`}>{iv.title}</a>
                  <span className="link-list__cta">{t('media.watch')} ▶</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

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
