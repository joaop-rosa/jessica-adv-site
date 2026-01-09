import { MdOutlineFileDownload as Download } from "react-icons/md"
import { FiFileText as FileText } from "react-icons/fi"
import { FaRegClock as Clock } from "react-icons/fa"
import { LuBookMarked as BookMarked } from "react-icons/lu"
import { EbookSection } from "./UI/EbookSection"
import s from "./WhatYouReceive.module.css"
import { CTAButton } from "./UI/CTAButton"
import { InfoGrid } from "./UI/InfoGrid"

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
    <EbookSection
      title="O que você recebe ao comprar"
      icon={Download}
      className={s.section}
    >
      <InfoGrid items={items} />

      <div className={s.buttonWrapper}>
        <CTAButton>Quero Adquirir</CTAButton>
      </div>
    </EbookSection>
  )
}
