import Image from "next/image"
import s from "./Footer.module.css"
import { MediaButton } from "./UI/MediaButton"
import { ROUTES } from "@/constants/routes"
import cn from "classnames"
import { usePathname } from "next/navigation"
import Link from "next/link"

export function Footer() {
  const pathname = usePathname()

  const isBeforeDivorcePage = pathname?.includes(ROUTES.BEFORE_DIVORCE_EBOOK)

  return (
    <footer
      className={cn(s.footer, { [s.beforeDivorceFooter]: isBeforeDivorcePage })}
    >
      <Link href={ROUTES.HOME}>
        <Image
          className={s.logo}
          src="/logo-center.png"
          alt="Logo"
          width={940}
          height={240}
        />
      </Link>

      <div className={s.medias}>
        <MediaButton type="instagram" hasText />
        <MediaButton type="whatsapp" hasText />
        <MediaButton type="maps" hasText />
      </div>
      <p className={s.copyright}>
        © {new Date().getFullYear()} Jéssica Birck. Todos os direitos
        reservados.
      </p>
    </footer>
  )
}
