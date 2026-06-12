import { useI18n } from '../i18n/index.jsx'
import {
  useForm,
  useValidators,
  Field,
  Select,
  Checkbox,
  ConsentField,
  FormSuccess,
} from '../components/Form.jsx'
import { COUNTRIES } from '../data/countries.js'
import { CAMPAIGN_STATS } from '../data/cases.js'
import ActionsBanner from '../components/ActionsBanner.jsx'
import CTAGroup from '../components/CTAGroup.jsx'

export default function Petition() {
  const { t } = useI18n()
  const v = useValidators()
  const form = useForm({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    processing: false,
    public: false,
    contact: false,
  })

  const validate = (vals) => ({
    firstName: v.required(vals.firstName),
    lastName: v.required(vals.lastName),
    email: v.email(vals.email),
    country: v.required(vals.country),
    processing: vals.processing ? undefined : t('form.consentRequired'),
  })

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">{t('petition.eyebrow')}</span>
          <h1>{t('petition.title')}</h1>
          <p className="lead">{t('petition.intro')}</p>
          <div className="page-hero__signed">
            <strong>{CAMPAIGN_STATS.signatures.toLocaleString()}+</strong>{' '}
            {t('stats.signatures').toLowerCase()}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container petition-layout">
          {/* Demands */}
          <div className="petition-demands card card--accent">
            <h2>{t('petition.demandsTitle')}</h2>
            <ol className="demands-list">
              {t('petition.demands').map((d, i) => (
                <li key={i}>
                  <span className="demands-list__num">{i + 1}</span>
                  <span>{d}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Form */}
          <div className="petition-form">
            {form.submitted ? (
              <FormSuccess
                title={t('petition.successTitle')}
                body={t('petition.successBody')}
              >
                <div style={{ marginTop: '1.2rem' }}>
                  <CTAGroup variant="outline" />
                </div>
              </FormSuccess>
            ) : (
              <form
                className="card"
                onSubmit={form.handleSubmit(validate)}
                noValidate
              >
                <h2>{t('petition.formTitle')}</h2>
                <div className="field-row">
                  <Field
                    label={t('form.firstName')}
                    name="firstName"
                    value={form.values.firstName}
                    onChange={form.set('firstName')}
                    error={form.errors.firstName}
                    required
                    autoComplete="given-name"
                  />
                  <Field
                    label={t('form.lastName')}
                    name="lastName"
                    value={form.values.lastName}
                    onChange={form.set('lastName')}
                    error={form.errors.lastName}
                    required
                    autoComplete="family-name"
                  />
                </div>
                <Field
                  label={t('form.email')}
                  name="email"
                  type="email"
                  value={form.values.email}
                  onChange={form.set('email')}
                  error={form.errors.email}
                  required
                  autoComplete="email"
                />
                <Select
                  label={t('form.country')}
                  name="country"
                  value={form.values.country}
                  onChange={form.set('country')}
                  error={form.errors.country}
                  required
                >
                  <option value="">{t('form.selectCountry')}</option>
                  {COUNTRIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </Select>

                <ConsentField
                  name="processing"
                  text={t('petition.consentProcessing')}
                  checked={form.values.processing}
                  onChange={form.set('processing')}
                  error={form.errors.processing}
                />
                <div className="field">
                  <Checkbox
                    label={t('petition.consentPublic')}
                    name="public"
                    checked={form.values.public}
                    onChange={form.set('public')}
                  />
                </div>
                <div className="field">
                  <Checkbox
                    label={t('petition.consentContact')}
                    name="contact"
                    checked={form.values.contact}
                    onChange={form.set('contact')}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn--gold btn--lg btn--block"
                  disabled={form.submitting}
                >
                  {form.submitting ? t('form.submitting') : t('petition.submit')}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <ActionsBanner />
    </>
  )
}
