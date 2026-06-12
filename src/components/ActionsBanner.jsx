import { useI18n } from '../i18n/index.jsx'
import CTAGroup from './CTAGroup.jsx'

// Recurring call-to-action banner placed near the bottom of every page so
// each page guides visitors toward the three core actions.
export default function ActionsBanner() {
  const { t } = useI18n()
  return (
    <section className="section section--navy actions-banner">
      <div className="container center">
        <span className="eyebrow">{t('actionsBanner.title')}</span>
        <h2>{t('actionsBanner.subtitle')}</h2>
        <CTAGroup size="lg" variant="outline" />
      </div>
    </section>
  )
}
