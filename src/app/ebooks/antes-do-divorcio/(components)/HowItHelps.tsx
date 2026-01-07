import {
  MdLightbulbOutline as Lightbulb,
  MdOutlineShield as Shield,
} from "react-icons/md"
import s from "./HowItHelps.module.css"
import { CTAButton } from "./UI/CTAButton"

export function HowItHelps() {
  const benefits = [
    "Evita decisões impulsivas que geram prejuízos financeiros",
    "Entende seus direitos antes de abrir mão de qualquer coisa",
    "Chega mais segura a uma consulta jurídica",
    "Reduz o risco de conflitos desnecessários",
    "Ganha clareza para decidir com consciência",
  ]

  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.headerIconWrapper}>
          <div className={s.iconBox}>
            <Lightbulb className={s.lightbulbIcon} />
          </div>
        </div>

        <h2 className={s.title}>Como este e-book pode te ajudar na prática</h2>

        <div className={s.divider}></div>

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

        <div className={s.benefitsGrid}>
          {benefits.map((benefit, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <div key={index} className={s.benefitCard}>
              <div className={s.cardIconBox}>
                <Shield className={s.shieldIcon} />
              </div>
              <span className={s.cardText}>{benefit}</span>
            </div>
          ))}
        </div>

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
      </div>
    </section>
  )
}
