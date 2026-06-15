import { useI18n } from '../i18n/index.jsx'
import Counter from './Counter.jsx'
import { useStats } from '../lib/useStats.js'
import { eurCompact } from '../lib/format.js'

export default function StatsBar() {
  const { t } = useI18n()
  const live = useStats()
  // Live figures from /api/stats (confirmed records only); 0 until loaded.
  const v = (key) => (live && live[key] != null ? live[key] : 0)

  const items = [
    { label: t('stats.signatures'), value: v('signatures') },
    { label: t('stats.cases'), value: v('cases') },
    { label: t('stats.countries'), value: v('countries') },
    { label: t('stats.years'), value: v('combinedYears') },
    {
      label: t('stats.capital'),
      value: v('capitalInvested'),
      format: eurCompact,
    },
  ]

  return (
    <section className="statsbar" aria-label={t('stats.title')}>
      <div className="container">
        <div className="statsbar__grid">
          {items.map((it) => (
            <div className="statsbar__item" key={it.label}>
              <div className="statsbar__num">
                <Counter value={it.value} format={it.format} />
                {!it.format && <span className="statsbar__plus">+</span>}
              </div>
              <div className="statsbar__label">{it.label}</div>
            </div>
          ))}
        </div>
        <p className="statsbar__note">{t('stats.updated')}</p>
      </div>
    </section>
  )
}
