"use client"

import Image from "next/image"
import s from "./Header.module.css"
import classNames from "classnames"
import { useEffect, useState } from "react"
import { MediaButton } from "./UI/MediaButton"
import { usePathname } from "next/navigation"
import { ROUTES } from "@/constants/routes"
import Link from "next/link"

export function Header() {
  const [isOnTop, setIsOnTop] = useState(true)
  const pathname = usePathname()

  const isBeforeDivorcePage = pathname?.includes(ROUTES.BEFORE_DIVORCE_EBOOK)

  useEffect(() => {
    function handleScroll() {
      setIsOnTop(window.scrollY === 0)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={classNames(s.header, {
        [s.stickyHeader]: !isOnTop,
        [s.beforeDivorceHeader]: isBeforeDivorcePage,
      })}
    >
      <div className={s.content}>
        <Link href={ROUTES.HOME}>
          <Image
            className={s.logo}
            src="/logo-header.png"
            alt="Logo"
            width={691}
            height={126}
            fetchPriority="high"
          />
        </Link>

        <div className={s.mediaButtons}>
          <MediaButton type="instagram" />
          <MediaButton type="maps" />
          <MediaButton type="whatsapp" />
        </div>
      </div>
    </header>
  )
}
