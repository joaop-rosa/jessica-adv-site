import {
  MdLightbulbOutline as Lightbulb,
  MdOutlineShield as Shield,
} from "react-icons/md"
import { EbookSection } from "./UI/EbookSection"
import s from "./HowItHelps.module.css"
import { CTAButton } from "./UI/CTAButton"
import { InfoGrid } from "./UI/InfoGrid"

export function HowItHelps() {
  const icon = Shield
  const benefits = [
    {
      icon,
      text: "Evita decisões impulsivas que geram prejuízos financeiros",
    },
    {
      icon,
      text: "Entende seus direitos antes de abrir mão de qualquer coisa",
    },
    {
      icon,
      text: "Chega mais segura a uma consulta jurídica",
    },
    {
      icon,
      text: "Reduz o risco de conflitos desnecessários",
    },
    {
      icon,
      text: "Ganha clareza para decidir com consciência",
    },
  ]

  return (
    <EbookSection
      title="Como este e-book pode te ajudar na prática"
      icon={Lightbulb}
      className={s.section}
    >
      <div className={s.quoteBox}>
        <p className={s.quoteText}>
          Este não é um material para{" "}
          <span className={s.highlightText}>
            "convencer você a se divorciar"
          </span>
          .
        </p>
        <p className={s.quoteText}>
          É um guia para te proteger, independentemente da decisão que você
          tomar.
        </p>
      </div>

      <p className={s.listSubtitle}>Ao ler este e-book, você:</p>

      <InfoGrid items={benefits} />

      <div className={s.finalCard}>
        <p className={s.finalText}>
          Informação no momento certo
          <span className={s.boldText}> economiza</span>{" "}
          <span className={s.boldText}>tempo</span>,
          <span className={s.boldText}> desgaste emocional</span> e
          <span className={s.boldText}> dinheiro</span>.
        </p>
      </div>

      <div className={s.buttonWrapper}>
        <CTAButton>Quero Adquirir</CTAButton>
      </div>
    </EbookSection>
  )
}
