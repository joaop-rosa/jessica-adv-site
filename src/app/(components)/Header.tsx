"use client"

import Image from "next/image"
import s from "./Header.module.css"
import cn from "classnames"
import { type Dispatch, type SetStateAction, useEffect, useState } from "react"
import { MediaButton } from "./UI/MediaButton"
import { usePathname } from "next/navigation"
import { ROUTES } from "@/constants/routes"
import Link from "next/link"
import { HamburgerIcon } from "./UI/HamburgerIcon"
import { useNoScroll } from "@/hooks/useNoScroll"
import "@/app/globals.css"
import { useMediaQuery } from "react-responsive"
import { useHeader } from "@/hooks/useHeader"

export function Header() {
  const [isOnTop, setIsOnTop] = useState(true)
  const pathname = usePathname()
  const isTablet = useMediaQuery({ query: "(max-width: 768px)" })
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
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

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(s.header, {
        [s.stickyHeader]: !isOnTop,
        [s.beforeDivorceHeader]: isBeforeDivorcePage,
      })}
    >
      <div
        className={cn(s.content, {
          [s.contentMobileMenuOpen]: isMobileMenuOpen,
        })}
      >
        <Link className={s.logoWrapper} href={ROUTES.HOME}>
          <Image
            className={s.logo}
            src="/logo-header.png"
            alt="Logo"
            width={691}
            height={126}
            fetchPriority="high"
          />
        </Link>

        {isTablet ? (
          <MobileContent
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />
        ) : (
          <DesktopContent />
        )}
      </div>
    </header>
  )
}

function HeaderLink({ route, text }: { route: string; text: string }) {
  const pathname = usePathname()

  return (
    <Link
      className={cn(s.link, { [s.linkActive]: pathname?.includes(route) })}
      href={route}
    >
      {text}
    </Link>
  )
}

function MediaButtons() {
  return (
    <div className={s.mediaButtons}>
      <MediaButton type="instagram" />
      <MediaButton type="maps" />
      <MediaButton type="whatsapp" />
    </div>
  )
}

function DesktopContent() {
  const headerLinks = useHeader()

  return (
    <>
      <div className={s.headerLinks}>
        {headerLinks.map((link) => (
          <HeaderLink key={link.route} route={link.route} text={link.name} />
        ))}
      </div>
      <MediaButtons />
    </>
  )
}

function MobileContent({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: {
  isMobileMenuOpen: boolean
  setIsMobileMenuOpen: Dispatch<SetStateAction<boolean>>
}) {
  const headerLinks = useHeader()
  const [isMenuMounted, setIsMenuMounted] = useState(false)

  useNoScroll(isMobileMenuOpen)

  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsMenuMounted(true)
    } else {
      setTimeout(() => {
        setIsMenuMounted(false)
      }, 300)
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <div className={s.hamburgerWrapper}>
        <HamburgerIcon
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          isOpen={isMobileMenuOpen}
        />
      </div>

      {isMenuMounted && (
        <div
          className={cn(s.mobileMenu, {
            [s.mobileMenuContentOpen]: isMobileMenuOpen,
          })}
        >
          <div className={s.headerMobileLinks}>
            {headerLinks.map((link) => (
              <HeaderLink
                key={link.route}
                route={link.route}
                text={link.name}
              />
            ))}
          </div>
          <MediaButtons />
        </div>
      )}
    </>
  )
}
