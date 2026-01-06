import type { PropsWithChildren } from "react"
import s from "./CTAButton.module.css"
import { LiaArrowRightSolid } from "react-icons/lia"

export function CTAButton({ children }: PropsWithChildren) {
  const handleClick = () => {
    console.log("Redirecionando para compra...")
  }

  return (
    <button type="button" onClick={handleClick} className={s.ctaButton}>
      {children}
      <LiaArrowRightSolid className={s.arrowIcon} />
    </button>
  )
}
