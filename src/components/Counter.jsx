import { useEffect, useRef, useState } from 'react'

// Animated count-up that triggers when scrolled into view, and re-animates if
// the value changes afterwards (e.g. live stats arriving from the API after the
// card is already on screen). Respects prefers-reduced-motion.
export default function Counter({ value, duration = 1600, format }) {
  const [display, setDisplay] = useState(0)
  const [inView, setInView] = useState(false)
  const ref = useRef(null)

  // Reveal once: flip inView when the element scrolls into view.
  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.3 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  // Animate to `value` once visible, and again whenever `value` changes (so a
  // late-arriving live figure doesn't stay frozen at its initial value).
  useEffect(() => {
    if (!inView) return
    const reduce =
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setDisplay(value)
      return
    }
    let raf
    const start = performance.now()
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // easeOutCubic
      setDisplay(value * eased)
      if (progress < 1) raf = requestAnimationFrame(tick)
      else setDisplay(value)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value, duration])

  const formatted = format ? format(display) : Math.round(display).toLocaleString()
  return <span ref={ref}>{formatted}</span>
}
