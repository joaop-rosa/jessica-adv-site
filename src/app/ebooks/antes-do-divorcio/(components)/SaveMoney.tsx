import { GoAlert as AlertTriangle } from "react-icons/go"
import { LuPiggyBank as PiggyBank } from "react-icons/lu"

import s from "./SaveMoney.module.css"
import { CTAButton } from "./UI/CTAButton"

export function SaveMoney() {
  const commonMistakes = [
    "Assinar acordos sem entender",
    "Sair de casa sem orientação",
    "Abrir mão de bens por medo ou pressão",
    "Não organizar documentos e provas",
  ]

  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.iconWrapper}>
          <div className={s.iconBox}>
            <PiggyBank className={s.piggyIcon} />
          </div>
        </div>

        <h2 className={s.title}>
          Como este e-book pode te fazer economizar dinheiro
        </h2>

        <div className={s.divider}></div>

        <p className={s.intro}>
          Muitas mulheres perdem dinheiro no divórcio por:
        </p>

        <div className={s.grid}>
          {commonMistakes.map((mistake, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <div key={index} className={s.card}>
              <div className={s.alertWrapper}>
                <AlertTriangle className={s.alertIcon} />
              </div>
              <span className={s.cardText}>{mistake}</span>
            </div>
          ))}
        </div>

        <div className={s.infoBox}>
          <p className={s.infoText}>
            O valor deste e-book é muito menor do que o custo de corrigir um
            erro cometido por falta de informação.
          </p>
        </div>

        <div className={s.ctaBox}>
          <p className={s.ctaText}>
            Aqui, você investe em <span className={s.highlight}>prevenção</span>
            , não em conserto de prejuízos.
          </p>
        </div>

        <div className={s.buttonWrapper}>
          <CTAButton>Quero Adquirir</CTAButton>
        </div>
      </div>
    </section>
  )
}
