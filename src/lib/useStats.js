import { useEffect, useState } from 'react'
import { API_BASE } from '../config.js'

// Fetch live aggregate stats from the API once. Returns the stats object, or
// null while loading / on failure — callers fall back to static sample data so
// the UI never renders blank or broken.
export function useStats() {
  const [stats, setStats] = useState(null)
  useEffect(() => {
    let alive = true
    fetch(`${API_BASE}/api/stats`)
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (alive && d) setStats(d)
      })
      .catch(() => {})
    return () => {
      alive = false
    }
  }, [])
  return stats
}
