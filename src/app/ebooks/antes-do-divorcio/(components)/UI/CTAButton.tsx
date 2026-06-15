import cn from "classnames"
import Link from "next/link"
import type { PropsWithChildren } from "react"
import { LiaArrowRightSolid } from "react-icons/lia"
import { BEFORE_DIVORCE_EBOOK_PAYMENT_PAGE } from "@/constants/routes"
import s from "./CTAButton.module.css"

export function CTAButton({
  children,
  size,
}: PropsWithChildren<{ size?: "sm" }>) {
  return (
    <Link
      href={BEFORE_DIVORCE_EBOOK_PAYMENT_PAGE}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(s.ctaButton, { [s.ctaButtonSmall]: size === "sm" })}
    >
      {children}
      <LiaArrowRightSolid className={s.arrowIcon} />
    </Link>
  )
}
