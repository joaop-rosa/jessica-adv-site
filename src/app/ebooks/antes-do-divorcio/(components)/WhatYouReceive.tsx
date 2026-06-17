import { FaRegClock as Clock } from "react-icons/fa"
import { FiFileText as FileText } from "react-icons/fi"
import { LuBookMarked as BookMarked } from "react-icons/lu"
import { MdOutlineFileDownload as Download } from "react-icons/md"
import { CTAButton } from "./UI/CTAButton"
import { EbookSection } from "./UI/EbookSection"
import { InfoGrid } from "./UI/InfoGrid"
import s from "./WhatYouReceive.module.css"

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
