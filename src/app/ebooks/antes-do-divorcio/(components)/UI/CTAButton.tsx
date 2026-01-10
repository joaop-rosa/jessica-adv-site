import type { PropsWithChildren } from "react"
import s from "./CTAButton.module.css"
import { LiaArrowRightSolid } from "react-icons/lia"
import cn from "classnames"

export function CTAButton({
  children,
  size,
}: PropsWithChildren<{ size?: "sm" }>) {
  const handleClick = () => {
    console.log("Redirecionando para compra...")
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn(s.ctaButton, { [s.ctaButtonSmall]: size === "sm" })}
    >
      {children}
      <LiaArrowRightSolid className={s.arrowIcon} />
    </button>
  )
}
