import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/index.jsx'
import { CASES } from '../data/cases.js'

const CURRENT_YEAR = 2026
const MAX_WAIT = CURRENT_YEAR - 2018 // longest bar baseline

// Interactive "Still Waiting" record: filter the anonymized cases by country,
// application year, and investment type; each card visualizes the wait length.
export default function WaitingTimeline() {
  const { t } = useI18n()
  const [country, setCountry] = useState('all')
  const [year, setYear] = useState('all')
  const [type, setType] = useState('all')

  const countries = useMemo(
    () => Array.from(new Set(CASES.map((c) => c.country))).sort(),
    []
  )
  const years = useMemo(
    () => Array.from(new Set(CASES.map((c) => c.appliedYear))).sort(),
    []
  )
  const types = useMemo(
    () => Array.from(new Set(CASES.map((c) => c.type))),
    []
  )

  const typeLabels = t('form.investmentTypes')
  const typeIndex = {
    realestate: 0,
    capital: 1,
    fund: 2,
    business: 3,
    culture: 4,
    other: 5,
  }
  const typeLabel = (key) => typeLabels[typeIndex[key]] ?? key

  const filtered = CASES.filter(
    (c) =>
      (country === 'all' || c.country === country) &&
      (year === 'all' || String(c.appliedYear) === String(year)) &&
      (type === 'all' || c.type === type)
  )

  return (
    <div className="timeline">
      <div className="timeline__filters">
        <div className="field">
          <label htmlFor="flt-country">{t('home.fiveYear.filterCountry')}</label>
          <select
            id="flt-country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="all">{t('home.fiveYear.all')}</option>
            {countries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="flt-year">{t('home.fiveYear.filterYear')}</label>
          <select
            id="flt-year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          >
            <option value="all">{t('home.fiveYear.all')}</option>
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="flt-type">{t('home.fiveYear.filterType')}</label>
          <select
            id="flt-type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="all">{t('home.fiveYear.all')}</option>
            {types.map((ty) => (
              <option key={ty} value={ty}>
                {typeLabel(ty)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="timeline__empty">{t('home.fiveYear.noResults')}</p>
      ) : (
        <ul className="timeline__list">
          {filtered.map((c) => {
            const wait = CURRENT_YEAR - c.appliedYear
            const pct = Math.min((wait / MAX_WAIT) * 100, 100)
            return (
              <li className="waitcard" key={c.id}>
                <div className="waitcard__head">
                  <span className="waitcard__since">
                    {t('home.fiveYear.waitingSince')} {c.appliedYear}
                  </span>
                  <span className="waitcard__years">
                    {wait} {t('home.fiveYear.yearsWaiting')}
                  </span>
                </div>
                <div className="waitcard__bar" aria-hidden="true">
                  <span
                    className="waitcard__bar-fill"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <div className="waitcard__meta">
                  <span className="tag">{c.country}</span>
                  <span className="tag tag--gold">{typeLabel(c.type)}</span>
                </div>
                <p className="waitcard__story">“{c.story}”</p>
              </li>
            )
          })}
        </ul>
      )}

      <p className="timeline__note">
        {t('home.fiveYear.anonymized')}{' '}
        <Link to="/register">{t('cta.register')} →</Link>
      </p>
    </div>
  )
}
