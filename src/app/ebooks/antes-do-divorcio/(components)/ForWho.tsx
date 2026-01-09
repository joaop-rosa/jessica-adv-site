import { CTAButton } from "./UI/CTAButton"
import { EbookSection } from "./UI/EbookSection"
import s from "./ForWho.module.css"

export function ForWho() {
  const targetAudience = [
    "Está pensando em se separar, mas sente medo do que vem depois",
    "Tem filhos e não sabe como ficam guarda, convivência e pensão",
    "Depende financeiramente, total ou parcialmente, do companheiro",
    'Já ouviu frases como "depois a gente resolve" ou "isso não é seu direito"',
    "Quer se proteger antes de tomar qualquer decisão definitiva",
  ]

  return (
    <EbookSection title="Para quem é este e-book?">
      <p className={s.subtitle}>Este guia é para você que:</p>

      <ul className={s.list}>
        {targetAudience.map((item, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          <li key={index} className={s.listItem}>
            <div className={s.bullet}></div>
            <span className={s.itemText}>{item}</span>
          </li>
        ))}
      </ul>

      <div className={s.highlightBox}>
        <p className={s.boxText}>
          Se você sente que precisa de{" "}
          <span className={s.highlightText}>
            clareza, segurança e orientação
          </span>
          , este material é para você.
        </p>
      </div>

      <div className={s.buttonWrapper}>
        <CTAButton>Quero Adquirir</CTAButton>
      </div>
    </EbookSection>
  )
}
