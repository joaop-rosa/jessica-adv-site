"use client"

import cn from "classnames"
import { m } from "framer-motion"
import { useState } from "react"
import type { IconType } from "react-icons"
import s from "./ServicesCard.module.css"

export function ServicesCard({
  Icon,
  title,
  description,
  isMain = false,
}: {
  Icon: IconType
  title: string
  description: string
  isMain?: boolean
}) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    // biome-ignore lint/a11y/useSemanticElements: We need a div for layout purposes
    <div
      className={cn(s.container, { [s.mainCard]: isMain })}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          setIsFlipped(!isFlipped)
        }
      }}
      role="button"
      tabIndex={0}
    >
      <m.div
        className={s.flipInner}
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0.2, 0.2, 1] }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className={s.front}>
          <div className={s.inner}>
            <Icon className={s.icon} />
            <h4 className={s.frontTitle}>{title}</h4>
          </div>
        </div>
        <div className={s.back}>
          <div className={s.inner}>
            <h4 className={s.backTitle}>{title}</h4>
            <p className={s.description}>{description}</p>
          </div>
        </div>
      </m.div>
    </div>
  )
}
