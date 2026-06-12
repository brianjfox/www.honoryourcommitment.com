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

const eurB = (n) => '€' + (n / 1e9).toFixed(2) + 'B'
const eurM = (n) => '€' + (n / 1e6).toFixed(1) + 'M'

export default function EconomicImpact() {
  const { t } = useI18n()
  const s = CAMPAIGN_STATS
  const typeLabels = t('form.investmentTypes')
  const routeIndex = { realestate: 0, capital: 1, fund: 2, business: 3, culture: 4 }

  const metrics = [
    {
      label: t('impact.metrics.capital'),
      value: s.capitalInvested,
      format: eurB,
    },
    {
      label: t('impact.metrics.avgWait'),
      value: s.avgWait,
      format: (n) => n.toFixed(1) + ' ' + t('impact.metrics.avgWaitUnit'),
    },
    { label: t('impact.metrics.beyondStatutory'), value: s.beyondStatutory },
    { label: t('impact.metrics.families'), value: s.familiesAffected },
    {
      label: t('impact.metrics.feesPaid'),
      value: s.feesPaid,
      format: eurM,
    },
    { label: t('impact.metrics.jobs'), value: s.jobsSupported },
  ]

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
            <BarChart
              data={CAPITAL_BY_COUNTRY.map((d) => ({
                label: d.country,
                value: d.value,
              }))}
              valueFormat={(v) => '€' + v + 'M'}
            />
          </div>

          <div className="card">
            <h3>{t('impact.byYearTitle')}</h3>
            <BarChart
              data={PENDING_BY_YEAR.map((d) => ({
                label: d.year,
                value: d.value,
              }))}
            />
          </div>

          <div className="card dashboard-grid__wide">
            <h3>{t('impact.byTypeTitle')}</h3>
            <BarChart
              data={INVESTMENT_BY_ROUTE.map((d) => ({
                label: typeLabels[routeIndex[d.route]] ?? d.route,
                value: d.value,
              }))}
              valueFormat={(v) => v + '%'}
            />
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
