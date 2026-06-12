# Portugal Must Honor Its Commitments

A professional advocacy, petition, and legal-action website representing Golden
Visa investors, residency applicants, and their families affected by excessive
administrative delays and retrospective changes to Portugal's citizenship and
residency framework.

Built with **React 18 + Vite** and **React Router**, with a dependency-free
custom i18n layer. Mobile-first, fast-loading, and accessible.

## The four objectives

1. **Collect petition signatures** for presentation to the Portuguese Government.
2. **Document individual cases** to build an evidence base.
3. **Build a claimant database** for potential collective legal action.
4. **Quantify the impact** — human, financial, and economic.

## Languages

English · Português · 中文 · Español. Language is auto-detected from the
browser, stored in `localStorage`, and switchable from the header. All copy
lives in `src/i18n/{en,pt,zh,es}.js` — English is the canonical key source and
the fallback for any missing key.

## Pages

| Route          | Page              |
| -------------- | ----------------- |
| `/`            | Home (hero, live stats, why it matters, the five-year wait timeline, compliance) |
| `/petition`    | Petition with demands + signature form |
| `/register`    | Register Your Case (claimant/evidence form) |
| `/impact`      | Economic Impact dashboard |
| `/legal`       | Join the Legal Action |
| `/media`       | Media Center |
| `/open-letter` | Open Letter to the Government |

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build

```bash
npm run build    # outputs to dist/
npm run preview  # preview the production build
```

`public/_redirects` ships an SPA fallback for Netlify-style hosts. On other
hosts, route all unknown paths to `index.html`.

## Design system

- White background, dark-blue primary (`--navy-*`), gold accents (`--gold-*`).
- Type: Libre Franklin (UI) + Source Serif 4 (long-form letter/quotes).
- Tokens and primitives in `src/styles/index.css`; components in
  `src/styles/components.css`.

## Privacy & consent (GDPR)

- **Privacy Policy** lives at `/privacy`. The content is in `src/data/privacy.js`,
  translated into all four languages, with English as the governing version.
  It is a **template** — every `[BRACKETED]` placeholder (legal name, address,
  contact emails) must be filled in, and it should be reviewed by a qualified
  EU data-protection lawyer before any real data is collected. A visible notice
  on the page flags this.
- **Consent at point of collection**: each form (petition, register, legal)
  has a required consent checkbox (`ConsentField` in `src/components/Form.jsx`)
  that links to the Privacy Policy and states the processing purpose. Per GDPR,
  these boxes are **never pre-ticked** — submission is blocked until consent is
  given. Optional consents (public display, contact updates) are separate.
- **No tracking**: the site uses no advertising/analytics cookies. The only
  browser storage is the language preference and the dismissal flag for the
  first-visit privacy notice banner (`src/components/PrivacyNotice.jsx`), both
  functional. That's why there's an informational notice, not a cookie-consent
  gate.

## Hosting (self-hosted, EU)

Recommended: an **EU-owned** VPS for the cleanest GDPR posture (avoids US CLOUD
Act exposure for litigation-related personal data) — e.g. **Hetzner**
(CPX21/CPX22, Ubuntu 24.04 LTS, Falkenstein/Nuremberg). Scaleway and OVHcloud
(both 🇫🇷) are alternatives. DigitalOcean works too — use **FRA1** or **AMS3**,
not London — but it's US-owned, so sign their DPA and document the transfer
assessment.

Typical deploy: build locally (`npm run build`), serve `dist/` behind Nginx
with HTTPS (Let's Encrypt), and route unknown paths to `index.html` for the SPA.
When the backend exists, run it (and its Postgres DB) on the same EU box.

## Connecting forms to a backend

Forms are fully built and validated client-side. Submission is simulated in
`src/components/Form.jsx` (`useForm` → `handleSubmit`). Replace the `setTimeout`
with a `fetch`/`POST` to your API (petition signatures, case registry, legal
claimants) to go live. The statistics shown come from `src/data/cases.js` —
point those at live counts when the backend exists.
