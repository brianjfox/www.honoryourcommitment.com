import { useState } from 'react'
import { useI18n } from '../i18n/index.jsx'
import {
  useForm,
  useValidators,
  Field,
  Select,
  Textarea,
  ConsentField,
  Honeypot,
  FormSuccess,
  submitErrorMessage,
} from '../components/Form.jsx'
import { COUNTRIES, APPLICATION_YEARS } from '../data/countries.js'
import { postJSON } from '../lib/api.js'
import Turnstile from '../components/Turnstile.jsx'
import ActionsBanner from '../components/ActionsBanner.jsx'
import CTAGroup from '../components/CTAGroup.jsx'

export default function LegalAction() {
  const { t, lang } = useI18n()
  const v = useValidators()
  const [token, setToken] = useState(null)
  const form = useForm({
    fullName: '',
    email: '',
    country: '',
    appYear: '',
    message: '',
    consent: false,
    botcheck: '',
  })

  const validate = (vals) => ({
    fullName: v.required(vals.fullName),
    email: v.email(vals.email),
    country: v.required(vals.country),
    consent: vals.consent ? undefined : t('form.consentRequired'),
  })

  const submit = (vals) =>
    postJSON('/api/claimants', {
      fullName: vals.fullName.trim(),
      email: vals.email.trim(),
      country: vals.country,
      applicationYear: vals.appYear ? parseInt(vals.appYear, 10) : undefined,
      message: vals.message.trim() || undefined,
      consentProcessing: vals.consent,
      locale: lang,
      turnstileToken: token || undefined,
      botcheck: vals.botcheck || '',
    })

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">{t('legal.eyebrow')}</span>
          <h1>{t('legal.title')}</h1>
          <p className="lead">{t('legal.purposeBody')}</p>
        </div>
      </section>

      {/* How it works */}
      <section className="section section--soft">
        <div className="container">
          <div className="section__head center">
            <h2>{t('legal.stepsTitle')}</h2>
          </div>
          <div className="grid grid-3">
            {t('legal.steps').map((step, i) => (
              <div className="card step-card" key={i}>
                <span className="step-card__num">{i + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="section">
        <div className="container form-page">
          {form.submitted ? (
            <FormSuccess
              title={t('legal.successTitle')}
              body={t('legal.successBody')}
            >
              <p className="form-success__note">{t('form.checkEmail')}</p>
              <div style={{ marginTop: '1.2rem' }}>
                <CTAGroup variant="outline" />
              </div>
            </FormSuccess>
          ) : (
            <form
              className="card"
              onSubmit={form.handleSubmit(validate, submit)}
              noValidate
            >
              <h2>{t('legal.formTitle')}</h2>
              <Field
                label={t('form.fullName')}
                name="fullName"
                value={form.values.fullName}
                onChange={form.set('fullName')}
                error={form.errors.fullName}
                required
                autoComplete="name"
              />
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
              <div className="field-row">
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
                <Select
                  label={t('form.applicationYear')}
                  name="appYear"
                  value={form.values.appYear}
                  onChange={form.set('appYear')}
                >
                  <option value="">{t('form.selectYear')}</option>
                  {APPLICATION_YEARS.map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </Select>
              </div>
              <Textarea
                label={t('form.message')}
                name="message"
                value={form.values.message}
                onChange={form.set('message')}
              />

              <ConsentField
                name="consent"
                text={t('legal.consentProcessing')}
                checked={form.values.consent}
                onChange={form.set('consent')}
                error={form.errors.consent}
              />

              <Honeypot
                value={form.values.botcheck}
                onChange={form.set('botcheck')}
              />
              <Turnstile onVerify={setToken} onExpire={() => setToken(null)} />

              {form.submitError && (
                <p className="form-error" role="alert">
                  {submitErrorMessage(t, form.submitError)}
                </p>
              )}

              <button
                type="submit"
                className="btn btn--gold btn--lg btn--block"
                disabled={form.submitting}
              >
                {form.submitting ? t('form.submitting') : t('legal.submit')}
              </button>

              <p className="form-disclaimer">{t('legal.disclaimer')}</p>
            </form>
          )}
        </div>
      </section>

      <ActionsBanner />
    </>
  )
}
