"use client"

import { useEffect, useRef } from "react"
import { animate, motion, useMotionValue, useTransform, useInView } from "framer-motion"

interface AnimatedCounterProps {
  from?: number
  to: number
  duration?: number
}

export function AnimatedCounter({ from = 0, to, duration = 2 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const count = useMotionValue(from)
  
  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration, ease: "easeOut" })
      return controls.stop
    }
  }, [inView, count, to, duration])

  const display = useTransform(count, (latest) => 
    Math.floor(latest).toLocaleString("pt-BR")
  )

  return <motion.span ref={ref}>{display}</motion.span>
}
