import { GoAlert as AlertCircle } from "react-icons/go"
import { EbookSection } from "./UI/EbookSection"
import s from "./ImportantNote.module.css"

export function ImportantNote() {
  return (
    <EbookSection
      title="Importante saber"
      className={s.section}
      icon={AlertCircle}
    >
      <div className={s.alertBox}>
        <p className={s.text}>
          Este e-book tem{" "}
          <span className={s.highlight}>caráter informativo e educativo</span>.
        </p>
        <p className={s.text}>
          Ele não substitui uma consulta jurídica, mas prepara você para tomar
          decisões mais conscientes e buscar orientação no momento certo.
        </p>
        <p className={s.textBold}>
          Cada caso é único e deve ser analisado individualmente.
        </p>
      </div>
    </EbookSection>
  )
}
