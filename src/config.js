// Base URL of the API. Override at build time with VITE_API_BASE; defaults to
// the production API host.
export const API_BASE = (
  import.meta.env.VITE_API_BASE || 'https://api.honoryourcommitment.com'
).replace(/\/$/, '')
