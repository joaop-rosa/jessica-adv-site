import type { ElementType } from "react"
import s from "./EbookSection.module.css"

interface EbookSectionProps {
  title: string
  icon?: ElementType
  children: React.ReactNode
  className?: string
  theme?: "default" | "special"
}

export function EbookSection({
  title,
  icon: Icon,
  children,
  className,
  theme = "default",
}: EbookSectionProps) {
  return (
    <section className={`${s.section} ${className}`}>
      <div className={s.container}>
        {Icon && (
          <div className={s.iconWrapper}>
            <div className={s.iconBox}>
              <Icon className={s[theme]} />
            </div>
          </div>
        )}
        <h2 className={s.title}>{title}</h2>
        <div className={s.divider}></div>
        {children}
      </div>
    </section>
  )
}
