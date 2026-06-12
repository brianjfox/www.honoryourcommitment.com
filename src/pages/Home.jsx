import { useI18n } from '../i18n/index.jsx'
import CTAGroup from '../components/CTAGroup.jsx'
import StatsBar from '../components/StatsBar.jsx'
import WaitingTimeline from '../components/WaitingTimeline.jsx'
import ActionsBanner from '../components/ActionsBanner.jsx'

export default function Home() {
  const { t } = useI18n()

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero__overlay" aria-hidden="true" />
        <div className="container hero__inner">
          <span className="eyebrow">{t('home.hero.eyebrow')}</span>
          <h1 className="hero__title">{t('home.hero.headline')}</h1>
          <p className="hero__sub">{t('home.hero.subhead')}</p>
          <CTAGroup size="lg" variant="outline" />
        </div>
      </section>

      {/* Live statistics */}
      <StatsBar />

      {/* Why this matters */}
      <section className="section">
        <div className="container">
          <div className="section__head center">
            <span className="eyebrow">{t('home.why.eyebrow')}</span>
            <h2>{t('home.why.title')}</h2>
          </div>
          <div className="grid grid-3">
            {t('home.why.cols').map((col, i) => (
              <div className="card card--accent" key={i}>
                <span className="card__num" aria-hidden="true">
                  0{i + 1}
                </span>
                <h3>{col.title}</h3>
                <p>{col.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The five-year wait */}
      <section className="section section--soft" id="still-waiting">
        <div className="container">
          <div className="section__head center">
            <span className="eyebrow">{t('home.fiveYear.eyebrow')}</span>
            <h2>{t('home.fiveYear.title')}</h2>
            <p className="lead measure" style={{ marginInline: 'auto' }}>
              {t('home.fiveYear.intro')}
            </p>
          </div>
          <WaitingTimeline />
        </div>
      </section>

      {/* Portugal expects compliance */}
      <section className="section">
        <div className="container compliance">
          <div className="compliance__text">
            <span className="eyebrow">{t('home.compliance.eyebrow')}</span>
            <h2>{t('home.compliance.title')}</h2>
            <p className="lead">{t('home.compliance.intro')}</p>
            <p className="compliance__conclusion">
              {t('home.compliance.conclusion')}
            </p>
          </div>
          <ul className="compliance__list">
            {t('home.compliance.items').map((item, i) => (
              <li key={i}>
                <span className="compliance__check" aria-hidden="true">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Closing */}
      <section className="section section--tight closing">
        <div className="container center">
          <h2>{t('home.closing.title')}</h2>
          <p className="lead measure" style={{ marginInline: 'auto' }}>
            {t('home.closing.body')}
          </p>
          <div style={{ marginTop: '1.6rem' }}>
            <CTAGroup size="lg" />
          </div>
        </div>
      </section>

      <ActionsBanner />
    </>
  )
}
