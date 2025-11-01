import Image from "next/image"
import s from "./Footer.module.css"
import { MediaButton } from "./UI/MediaButton"

export function Footer() {
  return (
    <footer className={s.footer}>
      <Image
        className={s.logo}
        src="/logo-center.png"
        alt="Logo"
        width={940}
        height={240}
      />
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
