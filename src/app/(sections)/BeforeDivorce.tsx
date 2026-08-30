import Link from "next/link"
import { LiaArrowRightSolid } from "react-icons/lia"
import { ROUTES } from "@/constants/routes"
import s from "./BeforeDivorce.module.css"

export function BeforeDivorce() {
  return (
    <section className={s.section}>
      <div className={s.bgOverlay} aria-hidden="true">
        <div className={s.blobTopRight}></div>
        <div className={s.blobBottomLeft}></div>
      </div>
      <div className={s.container}>
        <p className={s.preTitle}>LANÇAMENTO EXCLUSIVO</p>
        <h2 className={s.title}>
          O que toda mulher precisa saber antes do divórcio
        </h2>
        <p className={s.description}>
          Um guia para evitar os maiores erros no processo de divórcio e
          proteger seus direitos e seu futuro.
        </p>
        <Link
          href={ROUTES.BEFORE_DIVORCE_EBOOK}
          className={s.button}
          data-gtm="click_view_ebook"
          data-gtm-location="before_divorce_section"
        >
          Saber mais
          <LiaArrowRightSolid className={s.buttonIcon} />
        </Link>
      </div>
    </section>
  )
}
