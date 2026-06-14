import { useI18n } from '../i18n/index.jsx'
import Counter from '../components/Counter.jsx'
import BarChart from '../components/BarChart.jsx'
import ActionsBanner from '../components/ActionsBanner.jsx'
import {
  CAMPAIGN_STATS,
  CAPITAL_BY_COUNTRY,
  PENDING_BY_YEAR,
  INVESTMENT_BY_ROUTE,
} from '../data/cases.js'
import { useStats } from '../lib/useStats.js'

const eurB = (n) => '€' + (n / 1e9).toFixed(2) + 'B'

export default function EconomicImpact() {
  const { t } = useI18n()
  const live = useStats()
  const s = CAMPAIGN_STATS
  const v = (k) => (live && live[k] != null ? live[k] : s[k])
  const typeLabels = t('form.investmentTypes')
  const routeIndex = { realestate: 0, capital: 1, fund: 2, business: 3, culture: 4 }

  const metrics = [
    { label: t('impact.metrics.capital'), value: v('capitalInvested'), format: eurB },
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

  // Charts: live breakdowns when present, else static samples.
  const byCountry = (live?.capitalByCountry || CAPITAL_BY_COUNTRY).map((d) => ({
    label: d.country,
    value: d.value,
  }))
  const byYear = (live?.pendingByYear || PENDING_BY_YEAR).map((d) => ({
    label: d.year,
    value: d.value,
  }))
  let byRoute
  if (live?.investmentByRoute) {
    const total = live.investmentByRoute.reduce((a, d) => a + d.value, 0) || 1
    byRoute = live.investmentByRoute.map((d) => ({
      label: d.route,
      value: Math.round((d.value / total) * 100),
    }))
  } else {
    byRoute = INVESTMENT_BY_ROUTE.map((d) => ({
      label: typeLabels[routeIndex[d.route]] ?? d.route,
      value: d.value,
    }))
  }

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
