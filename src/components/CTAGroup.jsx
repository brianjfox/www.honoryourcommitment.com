import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/index.jsx'

// The three primary actions. Used in the hero and reused elsewhere.
export default function CTAGroup({ size = '', variant = 'mixed' }) {
  const { t } = useI18n()
  const lg = size === 'lg' ? ' btn--lg' : ''

  return (
    <div className="cta-group">
      <Link to="/petition" className={`btn btn--gold${lg}`}>
        {t('cta.sign')}
      </Link>
      <Link
        to="/register"
        className={`btn ${variant === 'mixed' ? 'btn--navy' : 'btn--outline'}${lg}`}
      >
        {t('cta.register')}
      </Link>
      <Link to="/legal" className={`btn btn--outline${lg}`}>
        {t('cta.join')}
      </Link>
    </div>
  )
}
