import { MdOutlineFileDownload as Download } from "react-icons/md"
import { FiFileText as FileText } from "react-icons/fi"
import { FaRegClock as Clock } from "react-icons/fa"
import { LuBookMarked as BookMarked } from "react-icons/lu"
import s from "./WhatYouReceive.module.css"
import { CTAButton } from "./UI/CTAButton"

export function WhatYouReceive() {
  const items = [
    {
      icon: FileText,
      text: "E-book digital em PDF",
    },
    {
      icon: Clock,
      text: "Leitura imediata após a compra",
    },
    {
      icon: Download,
      text: "Conteúdo claro, organizado e fácil de consultar",
    },
    {
      icon: BookMarked,
      text: "Material que você pode reler sempre que precisar",
    },
  ]

  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.iconWrapper}>
          <div className={s.iconBox}>
            <Download className={s.mainIcon} />
          </div>
        </div>

        <h2 className={s.title}>O que você recebe ao comprar</h2>

        <div className={s.divider}></div>

        <div className={s.grid}>
          {items.map((item, index) => {
            const Icon = item.icon
            return (
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              <div key={index} className={s.card}>
                <div className={s.cardIconBox}>
                  <Icon className={s.cardIcon} />
                </div>
                <span className={s.cardText}>{item.text}</span>
              </div>
            )
          })}
        </div>

        <div className={s.buttonWrapper}>
          <CTAButton>Quero Adquirir</CTAButton>
        </div>
      </div>
    </section>
  )
}
