import { useI18n } from '../i18n/index.jsx'
import Counter from '../components/Counter.jsx'
import ActionsBanner from '../components/ActionsBanner.jsx'
import { PRESS_RELEASES, COVERAGE, INTERVIEWS } from '../data/media.js'
import { CAMPAIGN_STATS } from '../data/cases.js'

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

      {/* Press releases */}
      <section className="section">
        <div className="container">
          <h2>{t('media.pressReleases')}</h2>
          <div className="media-list">
            {PRESS_RELEASES.map((pr) => (
              <article className="card media-item" key={pr.id}>
                <time className="media-item__date">
                  {formatDate(pr.date, lang)}
                </time>
                <h3>{pr.title}</h3>
                <p>{pr.summary}</p>
                <a className="media-item__link" href={`#${pr.id}`}>
                  {t('media.download')} ↓
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage + interviews */}
      <section className="section section--soft">
        <div className="container grid grid-2">
          <div>
            <h2>{t('media.coverage')}</h2>
            <ul className="link-list">
              {COVERAGE.map((c) => (
                <li key={c.id}>
                  <span className="link-list__meta">
                    {c.outlet} · {formatDate(c.date, lang)}
                  </span>
                  <a href={`#${c.id}`}>{c.title}</a>
                  <span className="link-list__cta">{t('media.readArticle')} →</span>
                </li>
              ))}
            </ul>
          </div>
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
