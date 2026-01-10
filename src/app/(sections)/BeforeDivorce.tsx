import Link from "next/link"
import { ROUTES } from "@/constants/routes"
import { CTAButton } from "../ebooks/antes-do-divorcio/(components)/UI/CTAButton"
import s from "./BeforeDivorce.module.css"

export function BeforeDivorce() {
  return (
    <section className={s.section}>
      <div className={s.bgOverlay}>
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
        <Link href={ROUTES.BEFORE_DIVORCE_EBOOK}>
          <CTAButton size="sm">Saber mais</CTAButton>
        </Link>
      </div>
    </section>
  )
}
