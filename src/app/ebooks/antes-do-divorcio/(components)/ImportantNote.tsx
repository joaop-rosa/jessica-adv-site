import { GoAlert as AlertCircle } from "react-icons/go"
import s from "./ImportantNote.module.css"

export function ImportantNote() {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.iconWrapper}>
          <div className={s.iconBox}>
            <AlertCircle className={s.icon} />
          </div>
        </div>

        <h2 className={s.title}>Importante saber</h2>

        <div className={s.divider}></div>

        <div className={s.alertBox}>
          <p className={s.text}>
            Este e-book tem{" "}
            <span className={s.highlight}>caráter informativo e educativo</span>
            .
          </p>
          <p className={s.text}>
            Ele não substitui uma consulta jurídica, mas prepara você para tomar
            decisões mais conscientes e buscar orientação no momento certo.
          </p>
          <p className={s.textBold}>
            Cada caso é único e deve ser analisado individualmente.
          </p>
        </div>
      </div>
    </section>
  )
}
