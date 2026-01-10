import s from "./HamburgerIcon.module.css"
import cn from "classnames"

interface HamburgerIconProps {
  onClick: () => void
  isOpen: boolean
}

export function HamburgerIcon({ onClick, isOpen }: HamburgerIconProps) {
  return (
    <button
      type="button"
      className={cn(s.container, { [s.open]: isOpen })}
      onClick={onClick}
    >
      <div className={s.line} />
      <div className={s.line} />
      <div className={s.line} />
    </button>
  )
}
