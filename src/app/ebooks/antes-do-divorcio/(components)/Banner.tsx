import s from "./Banner.module.css"
import { CTAButton } from "./UI/CTAButton"
export function Banner() {
  return (
    <section className={s.heroSection}>
      {/* Subtle decorative background */}
      <div className={s.bgOverlay}>
        <div className={s.blobTopRight}></div>
        <div className={s.blobBottomLeft}></div>
      </div>

      <div className={s.container}>
        <h1 className={s.title}>
          O que toda mulher precisa saber antes do divórcio
        </h1>

        <div className={s.subtitleContainer}>
          <p>Você não está exagerando.</p>
          <p>Você não está fraca.</p>
          <p>
            E você não está errada por querer entender tudo antes de decidir.
          </p>
        </div>

        <div className={s.divider}></div>

        <div className={s.descriptionContainer}>
          <p>
            O divórcio é uma das decisões mais difíceis da vida de uma mulher —
            e, infelizmente, muitas só descobrem que erraram depois que o
            prejuízo já aconteceu.
          </p>
          <p className={s.highlightText}>
            Este e-book foi criado para evitar exatamente isso.
          </p>
        </div>

        <CTAButton>Quero Adquirir</CTAButton>
      </div>
    </section>
  )
}
