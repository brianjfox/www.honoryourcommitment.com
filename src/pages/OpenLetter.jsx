import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/index.jsx'
import ActionsBanner from '../components/ActionsBanner.jsx'

export default function OpenLetter() {
  const { t } = useI18n()

  return (
    <>
      <section className="page-hero page-hero--center">
        <div className="container">
          <span className="eyebrow">{t('openLetter.eyebrow')}</span>
          <h1>{t('openLetter.title')}</h1>
          <p className="open-letter__addressed">{t('openLetter.addressedTo')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <article className="open-letter">
            <div className="open-letter__date">{t('openLetter.date')}</div>

            {t('openLetter.body').map((para, i) => (
              <p key={i} className={i === 0 ? 'open-letter__salutation' : ''}>
                {para}
              </p>
            ))}

            <h3 className="open-letter__demands-title">
              {t('openLetter.demandsTitle')}
            </h3>
            <ol className="open-letter__demands">
              {t('petition.demands').map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ol>

            <p className="open-letter__signoff">{t('openLetter.signoff')}</p>
            <p className="open-letter__signname">{t('openLetter.signoffName')}</p>

            <div className="open-letter__cta">
              <Link to="/petition" className="btn btn--gold btn--lg">
                {t('openLetter.cta')}
              </Link>
            </div>
          </article>
        </div>
      </section>

      <ActionsBanner />
    </>
  )
}
