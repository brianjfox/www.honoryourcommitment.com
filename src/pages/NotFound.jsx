import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/index.jsx'

export default function NotFound() {
  const { t } = useI18n()
  return (
    <section className="section center" style={{ minHeight: '50vh' }}>
      <div className="container">
        <h1>{t('notFound.title')}</h1>
        <p className="lead measure" style={{ marginInline: 'auto' }}>
          {t('notFound.body')}
        </p>
        <Link to="/" className="btn btn--navy btn--lg">
          {t('notFound.home')}
        </Link>
      </div>
    </section>
  )
}
