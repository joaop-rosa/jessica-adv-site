"use client"

import cn from "classnames"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FaInstagram, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa"
import { INSTAGRAM_LINK, MAPS_LINK, WHATSAPP_LINK } from "@/constants/links"
import { ROUTES } from "@/constants/routes"
import s from "./Footer.module.css"

export function Footer() {
  const pathname = usePathname()
  const isBeforeDivorcePage = pathname?.includes(ROUTES.BEFORE_DIVORCE_EBOOK)
  const isHomePage = pathname === ROUTES.HOME || pathname === "/"

  return (
    <footer
      className={cn(s.footer, { [s.beforeDivorceFooter]: isBeforeDivorcePage })}
    >
      <div className={s.container}>
        <div className={s.mainStructure}>
          <div className={s.logoWrapper}>
            <Link
              href={ROUTES.HOME}
              onClick={(e) => {
                if (isHomePage) {
                  e.preventDefault()
                  window.scrollTo({ top: 0, behavior: "smooth" })
                  window.history.replaceState(
                    null,
                    "",
                    window.location.pathname,
                  )
                }
              }}
            >
              <Image
                className={s.logo}
                src="/logo-left.png"
                alt="Jéssica Birck Advogada Logo"
                width={940}
                height={240}
              />
            </Link>
          </div>

          <div className={s.linksWrapper}>
            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={s.linkItem}
            >
              <FaInstagram className={s.icon} />
              <span>Instagram</span>
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={s.linkItem}
            >
              <FaWhatsapp className={s.icon} />
              <span>WhatsApp</span>
            </a>
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={s.linkItem}
            >
              <FaMapMarkerAlt className={s.icon} />
              <span>Escritório</span>
            </a>
          </div>
        </div>
      </div>

      <div className={s.divider} />

      <div className={s.container}>
        <div className={s.copyrightWrapper}>
          <p className={s.copyright}>
            © {new Date().getFullYear()} Jéssica Birck. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
