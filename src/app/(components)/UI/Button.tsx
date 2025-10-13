import type { ComponentType, PropsWithChildren } from "react"
import s from "./Button.module.css"

type ButtonProps = PropsWithChildren<{
  type?: "submit" | "button"
  Icon?: ComponentType<{ className: string }>
}>

export function Button({ children, type = "button", Icon }: ButtonProps) {
  return (
    <button className={s.button} type={type}>
      {children}
      {Icon && <Icon className={s.icon} />}
    </button>
  )
}
