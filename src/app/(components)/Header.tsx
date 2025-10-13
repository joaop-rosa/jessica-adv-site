import Image from "next/image"
import s from "./Header.module.css"

export function Header() {
  return (
    <header className={s.header}>
      <Image
        className={s.logo}
        src="/logo.png"
        alt="Logo"
        width={1766}
        height={500}
      />
      {/* Menu */}
    </header>
  )
}
