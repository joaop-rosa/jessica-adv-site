import { CTAButton } from "./UI/CTAButton"
import { CiHeart as Heart } from "react-icons/ci"

import s from "./FinalMessage.module.css"

export function FinalMessage() {
  return (
    <section className={s.section}>
      <div className={s.bgDecoration}>
        <div className={s.blobTop}></div>
        <div className={s.blobBottom}></div>
      </div>

      <div className={s.container}>
        <div className={s.iconWrapper}>
          <div className={s.iconBox}>
            <Heart className={s.heartIcon} />
          </div>
        </div>
        <div className={s.header}>
          <h2 className={s.title}>Uma última mensagem</h2>
        </div>

        <div className={s.divider}></div>

        <div className={s.card}>
          <p className={s.mainText}>Você não precisa decidir tudo hoje.</p>
          <p className={s.mainText}>
            Mas precisa decidir <span className={s.highlight}>bem</span>.
          </p>

          <div className={s.innerDivider}></div>

          <p className={s.subText}>
            Buscar informação é um ato de{" "}
            <span className={s.darkHighlight}>autocuidado</span>, não de
            fraqueza.
          </p>

          <div className={s.innerDivider}></div>

          <p className={s.finalText}>
            Se este e-book te ajudar a evitar um único erro,
            <br />
            <span className={s.finalHighlight}>
              ele já terá cumprido seu propósito.
            </span>
          </p>
        </div>

        <div className={s.ctaWrapper}>
          <p className={s.ctaTitle}>Clique abaixo para adquirir o e-book</p>
          <p className={s.ctaSubtitle}>(e tenha acesso imediato ao conteúdo)</p>
          <CTAButton>Quero Adquirir</CTAButton>
        </div>
      </div>
    </section>
  )
}
