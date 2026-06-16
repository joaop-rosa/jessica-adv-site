"use client"

import { LazyMotion } from "framer-motion"
import type { ReactNode } from "react"

const loadFeatures = () =>
  import("./framer-features").then((res) => res.default)

export function AnimationProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      {children}
    </LazyMotion>
  )
}
