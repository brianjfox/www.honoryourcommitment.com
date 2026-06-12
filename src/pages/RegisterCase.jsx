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

export default function RegisterCase() {
  const { t, lang } = useI18n()
  const v = useValidators()
  const [token, setToken] = useState(null)
  const form = useForm({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    appYear: '',
    investType: '',
    amount: '',
    family: '',
    status: '',
    story: '',
    consent: false,
    botcheck: '',
  })

  const validate = (vals) => ({
    firstName: v.required(vals.firstName),
    lastName: v.required(vals.lastName),
    email: v.email(vals.email),
    country: v.required(vals.country),
    appYear: v.required(vals.appYear),
    investType: v.required(vals.investType),
    consent: vals.consent ? undefined : t('form.consentRequired'),
  })

  const submit = (vals) => {
    const amount = vals.amount !== '' ? Number(vals.amount) : undefined
    const family = vals.family !== '' ? parseInt(vals.family, 10) : undefined
    return postJSON('/api/cases', {
      firstName: vals.firstName.trim(),
      lastName: vals.lastName.trim(),
      email: vals.email.trim(),
      phone: vals.phone.trim() || undefined,
      country: vals.country,
      applicationYear: parseInt(vals.appYear, 10),
      investmentType: vals.investType,
      investmentAmount: Number.isFinite(amount) ? amount : undefined,
      familyMembers: Number.isFinite(family) ? family : undefined,
      status: vals.status || undefined,
      story: vals.story.trim() || undefined,
      consentProcessing: vals.consent,
      locale: lang,
      turnstileToken: token || undefined,
      botcheck: vals.botcheck || '',
    })
  }

  const investmentTypes = t('form.investmentTypes')
  const statuses = t('form.statuses')

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">{t('register.eyebrow')}</span>
          <h1>{t('register.title')}</h1>
          <p className="lead">{t('register.purposeBody')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container form-page">
          {form.submitted ? (
            <FormSuccess
              title={t('register.successTitle')}
              body={t('register.successBody')}
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
              <h2>{t('register.formTitle')}</h2>

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

              <div className="field-row">
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
                <Field
                  label={t('form.phone')}
                  name="phone"
                  type="tel"
                  value={form.values.phone}
                  onChange={form.set('phone')}
                  autoComplete="tel"
                />
              </div>

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

              <div className="field-row">
                <Select
                  label={t('form.applicationYear')}
                  name="appYear"
                  value={form.values.appYear}
                  onChange={form.set('appYear')}
                  error={form.errors.appYear}
                  required
                >
                  <option value="">{t('form.selectYear')}</option>
                  {APPLICATION_YEARS.map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </Select>
                <Select
                  label={t('form.investmentType')}
                  name="investType"
                  value={form.values.investType}
                  onChange={form.set('investType')}
                  error={form.errors.investType}
                  required
                >
                  <option value="">{t('form.selectType')}</option>
                  {investmentTypes.map((ty, i) => (
                    <option key={i} value={ty}>
                      {ty}
                    </option>
                  ))}
                </Select>
              </div>

              <div className="field-row">
                <Field
                  label={t('form.investmentAmount')}
                  name="amount"
                  type="number"
                  value={form.values.amount}
                  onChange={form.set('amount')}
                />
                <Field
                  label={t('form.familyMembers')}
                  name="family"
                  type="number"
                  value={form.values.family}
                  onChange={form.set('family')}
                />
              </div>

              <Select
                label={t('form.status')}
                name="status"
                value={form.values.status}
                onChange={form.set('status')}
              >
                <option value="">{t('form.selectType')}</option>
                {statuses.map((st, i) => (
                  <option key={i} value={st}>
                    {st}
                  </option>
                ))}
              </Select>

              <Textarea
                label={t('form.story')}
                name="story"
                value={form.values.story}
                onChange={form.set('story')}
                hint={t('form.storyHint')}
              />

              <ConsentField
                name="consent"
                text={t('register.consentProcessing')}
                checked={form.values.consent}
                onChange={form.set('consent')}
                error={form.errors.consent}
              />
              <p className="field-note">{t('register.confidential')}</p>

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
                {form.submitting ? t('form.submitting') : t('register.submit')}
              </button>
            </form>
          )}
        </div>
      </section>

      <ActionsBanner />
    </>
  )
}
