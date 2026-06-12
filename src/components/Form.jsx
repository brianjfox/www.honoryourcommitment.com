import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/index.jsx'

/* Lightweight controlled-form helpers. `handleSubmit(validate, submitFn)`
   validates, then awaits `submitFn(values)` (a real API call). On success it
   shows the success state; on failure it records `submitError` (the API error
   code) for the page to render. */

export function useForm(initial) {
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState(null)

  const set = (name) => (e) => {
    const val =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setValues((v) => ({ ...v, [name]: val }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const handleSubmit = (validate, submitFn) => async (e) => {
    e.preventDefault()
    const errs = validate ? validate(values) : {}
    setErrors(errs)
    if (Object.keys(errs).filter((k) => errs[k]).length > 0) {
      const first = document.querySelector('[aria-invalid="true"]')
      if (first) first.focus()
      return
    }
    setSubmitting(true)
    setSubmitError(null)
    try {
      if (submitFn) await submitFn(values)
      setSubmitted(true)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch (err) {
      setSubmitError(err?.code || 'server_error')
    } finally {
      setSubmitting(false)
    }
  }

  return {
    values,
    set,
    errors,
    setErrors,
    submitted,
    submitting,
    submitError,
    handleSubmit,
  }
}

export function Field({
  label,
  name,
  type = 'text',
  value,
  onChange,
  error,
  required,
  hint,
  placeholder,
  autoComplete,
}) {
  const id = `f-${name}`
  return (
    <div className="field">
      <label htmlFor={id}>
        {label} {required && <span className="req">*</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={error ? `${id}-err` : hint ? `${id}-hint` : undefined}
      />
      {hint && !error && (
        <div className="hint" id={`${id}-hint`}>
          {hint}
        </div>
      )}
      {error && (
        <div className="hint" id={`${id}-err`} style={{ color: '#9c2b2b' }}>
          {error}
        </div>
      )}
    </div>
  )
}

export function Select({
  label,
  name,
  value,
  onChange,
  error,
  required,
  children,
}) {
  const id = `f-${name}`
  return (
    <div className="field">
      <label htmlFor={id}>
        {label} {required && <span className="req">*</span>}
      </label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={error ? `${id}-err` : undefined}
      >
        {children}
      </select>
      {error && (
        <div className="hint" id={`${id}-err`} style={{ color: '#9c2b2b' }}>
          {error}
        </div>
      )}
    </div>
  )
}

export function Textarea({
  label,
  name,
  value,
  onChange,
  error,
  required,
  hint,
}) {
  const id = `f-${name}`
  return (
    <div className="field">
      <label htmlFor={id}>
        {label} {required && <span className="req">*</span>}
      </label>
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={error ? `${id}-err` : hint ? `${id}-hint` : undefined}
      />
      {hint && !error && (
        <div className="hint" id={`${id}-hint`}>
          {hint}
        </div>
      )}
      {error && (
        <div className="hint" id={`${id}-err`} style={{ color: '#9c2b2b' }}>
          {error}
        </div>
      )}
    </div>
  )
}

export function Checkbox({ label, name, checked, onChange }) {
  const id = `f-${name}`
  return (
    <label className="checkbox" htmlFor={id}>
      <input
        id={id}
        name={name}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <span>{label}</span>
    </label>
  )
}

/* Required GDPR consent control. The box is never pre-ticked — valid consent
   under the GDPR must be a clear, affirmative action. The consent statement
   is followed by an inline link to the Privacy Policy (point-of-collection
   transparency). `text` is the purpose-specific consent sentence. */
export function ConsentField({ name, text, checked, onChange, error }) {
  const { t } = useI18n()
  const id = `f-${name}`
  return (
    <div className="field consent-field">
      <label className="checkbox" htmlFor={id}>
        <input
          id={id}
          name={name}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          required
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={error ? `${id}-err` : undefined}
        />
        <span>
          {text} <Link to="/privacy">{t('form.privacyPolicy')}</Link>.{' '}
          <span className="req">*</span>
        </span>
      </label>
      {error && (
        <div className="hint" id={`${id}-err`} style={{ color: '#9c2b2b' }}>
          {error}
        </div>
      )}
    </div>
  )
}

/* Honeypot field — hidden off-screen from humans. Bots that auto-fill every
   input will populate it; the API silently drops any submission where it's
   non-empty. Sent to the API as `botcheck`. */
export function Honeypot({ value, onChange }) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        left: '-5000px',
        width: '1px',
        height: '1px',
        overflow: 'hidden',
      }}
    >
      <label>
        Leave this field empty
        <input
          type="text"
          name="botcheck"
          tabIndex={-1}
          autoComplete="off"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  )
}

// Map an API error code to a translated, user-facing message.
export function submitErrorMessage(t, code) {
  if (code === 'captcha_failed') return t('form.captchaError')
  if (code === 'rate_limited') return t('form.rateError')
  if (code === 'network') return t('form.networkError')
  return t('form.submitError')
}

// Shared success panel shown after any form submission.
export function FormSuccess({ title, body, children }) {
  return (
    <div className="form-success" role="status">
      <div className="form-success__check" aria-hidden="true">
        ✓
      </div>
      <h3>{title}</h3>
      <p>{body}</p>
      {children}
    </div>
  )
}

// Convenience validators built against the active dictionary.
export function useValidators() {
  const { t } = useI18n()
  return {
    required: (v) => (v && String(v).trim() ? undefined : t('form.required')),
    email: (v) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v || ''))
        ? undefined
        : t('form.invalidEmail'),
  }
}
