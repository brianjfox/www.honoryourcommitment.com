import { useI18n } from '../i18n/index.jsx'
import Counter from '../components/Counter.jsx'
import BarChart from '../components/BarChart.jsx'
import ActionsBanner from '../components/ActionsBanner.jsx'
import { useStats } from '../lib/useStats.js'

// Compact euro formatting that reads well at any real magnitude (€0, €50k,
// €12.4M, €1.28B) — the figures come straight from the database, so we can't
// assume they're always in the billions.
function eurCompact(n) {
  if (n >= 1e9) return '€' + (n / 1e9).toFixed(2) + 'B'
  if (n >= 1e6) return '€' + (n / 1e6).toFixed(1) + 'M'
  if (n >= 1e3) return '€' + Math.round(n / 1e3) + 'k'
  return '€' + Math.round(n)
}

export default function EconomicImpact() {
  const { t } = useI18n()
  const live = useStats()
  // All figures come from /api/stats (confirmed records only). Until the fetch
  // resolves we show 0 — never invented placeholder numbers.
  const v = (k) => (live && live[k] != null ? live[k] : 0)

  const metrics = [
    { label: t('impact.metrics.capital'), value: v('capitalInvested'), format: eurCompact },
    {
      label: t('impact.metrics.avgWait'),
      value: v('avgWait'),
      format: (n) => Number(n).toFixed(1) + ' ' + t('impact.metrics.avgWaitUnit'),
    },
    { label: t('impact.metrics.beyondStatutory'), value: v('beyondStatutory') },
    { label: t('impact.metrics.families'), value: v('familiesAffected') },
    { label: t('stats.countries'), value: v('countries') },
    { label: t('stats.cases'), value: v('cases') },
  ]

  // Chart breakdowns, all from the live aggregates (empty until loaded).
  const byCountry = (live?.capitalByCountry || []).map((d) => ({
    label: d.country,
    value: d.value,
  }))
  const byYear = (live?.pendingByYear || []).map((d) => ({
    label: d.year,
    value: d.value,
  }))
  const routeTotal =
    (live?.investmentByRoute || []).reduce((a, d) => a + d.value, 0) || 1
  const byRoute = (live?.investmentByRoute || []).map((d) => ({
    label: d.route,
    value: Math.round((d.value / routeTotal) * 100),
  }))

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">{t('impact.eyebrow')}</span>
          <h1>{t('impact.title')}</h1>
          <p className="lead">{t('impact.intro')}</p>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="metrics-grid">
            {metrics.map((m) => (
              <div className="metric-card" key={m.label}>
                <div className="metric-card__value">
                  <Counter value={m.value} format={m.format} />
                </div>
                <div className="metric-card__label">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container dashboard-grid">
          <div className="card">
            <h3>{t('impact.byCountryTitle')}</h3>
            <BarChart data={byCountry} valueFormat={(x) => '€' + x + 'M'} />
          </div>

          <div className="card">
            <h3>{t('impact.byYearTitle')}</h3>
            <BarChart data={byYear} />
          </div>

          <div className="card dashboard-grid__wide">
            <h3>{t('impact.byTypeTitle')}</h3>
            <BarChart data={byRoute} valueFormat={(x) => x + '%'} />
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <p className="lead measure" style={{ marginInline: 'auto' }}>
            {t('impact.note')}
          </p>
        </div>
      </section>

      <ActionsBanner />
    </>
  )
}
