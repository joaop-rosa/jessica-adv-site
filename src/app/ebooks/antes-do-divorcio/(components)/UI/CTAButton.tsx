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
      data-gtm="begin_checkout"
      data-gtm-item="o_que_toda_mulher_precisa_saber_antes_do_divorcio"
    >
      {children}
      <LiaArrowRightSolid className={s.arrowIcon} />
    </Link>
  )
}
