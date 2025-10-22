"use client"

import Image from "next/image"
import s from "./Header.module.css"
import classNames from "classnames"
import { useEffect, useState } from "react"

export function Header() {
  const [isOnTop, setIsOnTop] = useState(true)

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
    <header className={classNames(s.header, { [s.stickyHeader]: !isOnTop })}>
      <Image
        className={s.logo}
        src="/logo.png"
        alt="Logo"
        width={1766}
        height={500}
      />
    </header>
  )
}
