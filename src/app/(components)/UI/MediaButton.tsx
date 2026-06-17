import cn from "classnames"
import Link from "next/link"
import { LiaInstagram, LiaMapMarkerSolid, LiaWhatsapp } from "react-icons/lia"
import { INSTAGRAM_LINK, MAPS_LINK, WHATSAPP_LINK } from "@/constants/links"
import s from "./MediaButton.module.css"

export function MediaButton({
  type,
  hasText = false,
  theme = "default",
  gtmLocation,
}: {
  type: "maps" | "instagram" | "whatsapp"
  hasText?: boolean
  theme?: "pill" | "default"
  gtmLocation?: string
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
      className={cn(s.mediaButton, { [s.pill]: theme === "pill" })}
      href={typeMap[type].link}
      target="_blank"
      rel="noopener noreferrer"
      data-gtm={`click_${type}`}
      data-gtm-location={gtmLocation}
    >
      <Icon className={s.mediaIcon} />
      {hasText && <span>{typeMap[type].text}</span>}
    </Link>
  )
}
