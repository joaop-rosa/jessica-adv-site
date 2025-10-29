import type { ComponentType, PropsWithChildren } from "react"
import s from "./Button.module.css"
import Link from "next/link"

type ButtonProps = PropsWithChildren<{
  type?: "submit" | "button"
  Icon?: ComponentType<{ className: string }>
  href?: string
}>

export function Button({ children, type = "button", Icon, href }: ButtonProps) {
  if (href) {
    return (
      <Link
        href={href}
        className={s.button}
        type={type}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
        {Icon && <Icon className={s.icon} />}
      </Link>
    )
  }

  return (
    <button className={s.button} type={type}>
      {children}
      {Icon && <Icon className={s.icon} />}
    </button>
  )
}
