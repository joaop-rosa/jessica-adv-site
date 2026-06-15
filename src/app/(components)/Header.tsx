"use client"

import cn from "classnames"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { type Dispatch, type SetStateAction, useEffect, useState } from "react"
import { ROUTES } from "@/constants/routes"
import { useNoScroll } from "@/hooks/useNoScroll"
import s from "./Header.module.css"
import { HamburgerIcon } from "./UI/HamburgerIcon"
import { MediaButton } from "./UI/MediaButton"
import "@/app/globals.css"
import { useMediaQuery } from "react-responsive"
import { useHeader } from "@/hooks/useHeader"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isTablet = useMediaQuery({ query: "(max-width: 768px)" })
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const isBeforeDivorcePage = pathname?.includes(ROUTES.BEFORE_DIVORCE_EBOOK)
  const isHomePage = pathname === ROUTES.HOME || pathname === "/"

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 50)
    }

    handleScroll()

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // biome-ignore lint/correctness/useExhaustiveDependencies: We only want to close the menu when the pathname changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(s.header, {
        [s.scrolled]: isScrolled,
        [s.hiddenAtTop]: isHomePage && !isScrolled,
        [s.beforeDivorceHeader]: isBeforeDivorcePage,
      })}
    >
      <div
        className={cn(s.content, {
          [s.contentMobileMenuOpen]: isMobileMenuOpen,
        })}
      >
        <Link
          className={s.logoWrapper}
          href={ROUTES.HOME}
          onClick={(e) => {
            if (isHomePage) {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
          }}
        >
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
      <MediaButton type="whatsapp" className={s.whatsappPill} />
    </div>
  )
}

function DesktopContent() {
  const headerLinks = useHeader()

  return (
    <nav className={s.rightNav}>
      <div className={s.headerLinks}>
        {headerLinks.map((link) => (
          <HeaderLink key={link.route} route={link.route} text={link.name} />
        ))}
      </div>
      <MediaButtons />
    </nav>
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
