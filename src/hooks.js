import { useEffect, useRef, useState } from 'react'

export function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setSeen(true); io.disconnect() }
    }, { threshold })
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])
  return [ref, seen]
}

export function useCountUp(end, run, dur = 1400) {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!run) return
    let start, raf
    const step = (t) => {
      if (start === undefined) start = t
      const p = Math.min((t - start) / dur, 1)
      setN(Math.round(end * p))
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [end, run, dur])
  return n
}
