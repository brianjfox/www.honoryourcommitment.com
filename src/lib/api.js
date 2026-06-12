import { API_BASE } from '../config.js'

// POST JSON to the API. Throws an Error with a `.code` set to the API's error
// string (e.g. 'captcha_failed', 'rate_limited', 'validation_failed') so the
// caller can show a specific message.
export async function postJSON(path, body) {
  let res
  try {
    res = await fetch(`${API_BASE}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
  } catch {
    const err = new Error('network')
    err.code = 'network'
    throw err
  }

  let data = null
  try {
    data = await res.json()
  } catch {
    /* non-JSON response */
  }

  if (!res.ok || (data && data.ok === false)) {
    const err = new Error((data && data.error) || `http_${res.status}`)
    err.code = (data && data.error) || `http_${res.status}`
    throw err
  }
  return data
}
