import { useI18n } from '../i18n/index.jsx'
import Counter from './Counter.jsx'
import { CAMPAIGN_STATS } from '../data/cases.js'

const eur0 = (n) =>
  '€' +
  Math.round(n).toLocaleString(undefined, { maximumFractionDigits: 0 })

// Compact euro formatting for very large figures (e.g. €1.28B).
function eurCompact(n) {
  if (n >= 1e9) return '€' + (n / 1e9).toFixed(2) + 'B'
  if (n >= 1e6) return '€' + (n / 1e6).toFixed(0) + 'M'
  return eur0(n)
}

export default function StatsBar() {
  const { t } = useI18n()
  const s = CAMPAIGN_STATS

  const items = [
    { label: t('stats.signatures'), value: s.signatures },
    { label: t('stats.cases'), value: s.cases },
    { label: t('stats.countries'), value: s.countries },
    { label: t('stats.years'), value: s.combinedYears },
    {
      label: t('stats.capital'),
      value: s.capitalInvested,
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
