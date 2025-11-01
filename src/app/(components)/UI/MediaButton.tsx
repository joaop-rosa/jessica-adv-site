import { INSTAGRAM_LINK, MAPS_LINK, WHATSAPP_LINK } from "@/constants/links"
import Link from "next/link"
import { LiaMapMarkerSolid } from "react-icons/lia"
import { LiaInstagram } from "react-icons/lia"
import { LiaWhatsapp } from "react-icons/lia"
import s from "./MediaButton.module.css"

export function MediaButton({
  type,
  hasText = false,
}: {
  type: "maps" | "instagram" | "whatsapp"
  hasText?: boolean
}) {
  const typeMap = {
    maps: {
      link: MAPS_LINK,
      Icon: LiaMapMarkerSolid,
      text: "Endereço",
    },
    instagram: {
      link: INSTAGRAM_LINK,
      Icon: LiaInstagram,
      text: "Instagram",
    },
    whatsapp: {
      link: WHATSAPP_LINK,
      Icon: LiaWhatsapp,
      text: "WhatsApp",
    },
  }

  const Icon = typeMap[type].Icon

  return (
    <Link
      className={s.mediaButton}
      href={typeMap[type].link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className={s.mediaIcon} />
      {hasText && <span>{typeMap[type].text}</span>}
    </Link>
  )
}
