import { useI18n } from '../i18n/index.jsx'
import { PRIVACY } from '../data/privacy.js'

export default function Privacy() {
  const { t, lang } = useI18n()
  const doc = PRIVACY[lang] || PRIVACY.en

  return (
    <>
      <section className="page-hero page-hero--center">
        <div className="container">
          <span className="eyebrow">{t('nav.privacy')}</span>
          <h1>{t('footer.privacy')}</h1>
          <p className="open-letter__addressed">{doc.updated}</p>
        </div>
      </section>

      <section className="section">
        <div className="container legal-doc">
          {/* Template / review notice — remove once finalised by counsel. */}
          <div className="legal-note" role="note">
            <strong>⚠ {doc.templateNote}</strong>
          </div>

          <p className="lead">{doc.intro}</p>

          {doc.sections.map((sec) => (
            <section className="legal-section" key={sec.heading}>
              <h2>{sec.heading}</h2>
              {sec.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              {sec.list && (
                <ul>
                  {sec.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <p className="legal-governing">{doc.governingNote}</p>
        </div>
      </section>
    </>
  )
}
