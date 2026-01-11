import type { ElementType } from "react"
import s from "./InfoGrid.module.css"

interface InfoGridItem {
  icon: ElementType
  text: string
}

interface InfoGridProps {
  items: InfoGridItem[]
}

export function InfoGrid({ items }: InfoGridProps) {
  return (
    <div className={s.grid}>
      {items.map((item, index) => {
        const Icon = item.icon
        return (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          <div key={index} className={s.card}>
            <div className={s.cardIconBox}>
              <Icon className={s.cardIcon} />
            </div>
            <span className={s.cardText}>{item.text}</span>
          </div>
        )
      })}
    </div>
  )
}
