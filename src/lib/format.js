// Compact euro formatting that reads correctly at any real magnitude
// (€0, €50k, €12.4M, €1.28B) — figures come straight from the database, so we
// can't assume a fixed scale.
export function eurCompact(n) {
  if (n >= 1e9) return '€' + (n / 1e9).toFixed(2) + 'B'
  if (n >= 1e6) return '€' + (n / 1e6).toFixed(1) + 'M'
  if (n >= 1e3) return '€' + Math.round(n / 1e3) + 'k'
  return '€' + Math.round(n)
}
