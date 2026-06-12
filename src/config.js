// Base URL of the API. Override at build time with VITE_API_BASE; defaults to
// the production API host.
export const API_BASE = (
  import.meta.env.VITE_API_BASE || 'https://api.honoryourcommitment.com'
).replace(/\/$/, '')

// Cloudflare Turnstile site key (public — safe to ship). Override with
// VITE_TURNSTILE_SITE_KEY (e.g. a test key for local development).
export const TURNSTILE_SITE_KEY =
  import.meta.env.VITE_TURNSTILE_SITE_KEY || '0x4AAAAAADjdHsjdgec8b_Sr'
