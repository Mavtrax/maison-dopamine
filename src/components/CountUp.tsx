import { useEffect, useRef, useState } from 'react'
import { animate, useReducedMotion } from 'framer-motion'
import { formatEuros } from '../lib/format'

interface CountUpProps {
  to: number
  durationSeconds?: number
  className?: string
}

export function CountUp({ to, durationSeconds = 1.8, className }: CountUpProps) {
  const reduceMotion = useReducedMotion()
  const [displayed, setDisplayed] = useState(reduceMotion ? to : 0)
  const previousTarget = useRef(0)

  useEffect(() => {
    if (reduceMotion) {
      setDisplayed(to)
      return
    }
    const controls = animate(previousTarget.current, to, {
      duration: durationSeconds,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (value) => setDisplayed(Math.round(value)),
    })
    previousTarget.current = to
    return () => controls.stop()
  }, [to, durationSeconds, reduceMotion])

  return <span className={className}>{formatEuros(displayed)}</span>
}
