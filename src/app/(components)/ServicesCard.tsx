import type { IconType } from "react-icons"
import s from "./ServicesCard.module.css"

export function ServicesCard({
  Icon,
  title,
  description,
}: {
  Icon: IconType
  title: string
  description: string
}) {
  return (
    <div className={s.container}>
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
    </div>
  )
}
