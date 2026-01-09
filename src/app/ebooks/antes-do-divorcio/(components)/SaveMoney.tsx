import { GoAlert as AlertTriangle } from "react-icons/go"
import { LuPiggyBank as PiggyBank } from "react-icons/lu"

import { EbookSection } from "./UI/EbookSection"
import s from "./SaveMoney.module.css"
import { CTAButton } from "./UI/CTAButton"
import { InfoGrid } from "./UI/InfoGrid"

export function SaveMoney() {
  const icon = AlertTriangle
  const commonMistakes = [
    {
      icon,
      text: "Assinar acordos sem entender",
    },
    {
      icon,
      text: "Sair de casa sem orientação",
    },
    {
      icon,
      text: "Abrir mão de bens por medo ou pressão",
    },
    {
      icon,
      text: "Não organizar documentos e provas",
    },
  ]

  return (
    <EbookSection
      title="Como este e-book pode te fazer economizar dinheiro"
      icon={PiggyBank}
      className={s.section}
    >
      <p className={s.intro}>
        Muitas mulheres perdem dinheiro no divórcio por:
      </p>

      <InfoGrid items={commonMistakes} />

      <div className={s.infoBox}>
        <p className={s.infoText}>
          O valor deste e-book é muito menor do que o custo de corrigir um erro
          cometido por falta de informação.
        </p>
      </div>

      <div className={s.ctaBox}>
        <p className={s.ctaText}>
          Aqui, você investe em <span className={s.highlight}>prevenção</span>,
          não em conserto de prejuízos.
        </p>
      </div>

      <div className={s.buttonWrapper}>
        <CTAButton>Quero Adquirir</CTAButton>
      </div>
    </EbookSection>
  )
}
