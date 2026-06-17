"use client"

import type { Variants } from "framer-motion"
import { m } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  FaGlobeAmericas,
  FaInstagram,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa"
import { INSTAGRAM_LINK, MAPS_LINK, WHATSAPP_LINK } from "@/constants/links"
import { ROUTES } from "@/constants/routes"
import s from "./Banner.module.css"

export function Banner() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const imageVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1 },
    },
  }

  const badgeVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 1, duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section className={s.banner}>
      <Image
        src="/stone-texture.png"
        alt="Textura de pedra"
        fill
        priority
        className={s.backgroundImage}
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />
      <div className={s.backgroundOverlay} />

      <div className={s.container}>
        <m.div
          className={s.textContent}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <m.div className={s.headerInfo} variants={itemVariants}>
            <h1 className={s.titleH1}>JÉSSICA BIRCK</h1>
            <div className={s.subtitleWrapper}>
              <span className={s.subtitleText}>ADVOGADA</span>
              <span className={s.subtitleSeparator}>|</span>
              <span className={s.subtitleText}>OAB/RS 133.315</span>
            </div>
          </m.div>

          <m.h2 className={s.heroStatement} variants={itemVariants}>
            Advocacia especializada e acolhedora em Direito de Família.
          </m.h2>

          <m.div className={s.buttonGroup} variants={itemVariants}>
            <a
              href={WHATSAPP_LINK}
              className={s.primaryButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className={s.primaryIcon} />
              Falar com a Dra. Jéssica
            </a>
            <div className={s.secondaryButtons}>
              <a href="#areas-de-atuacao" className={s.secondaryButton}>
                Conhecer Áreas de Atuação
              </a>
              <Link
                href={ROUTES.BEFORE_DIVORCE_EBOOK}
                className={s.secondaryButton}
              >
                Acessar Ebooks
              </Link>
            </div>
            <div className={s.bannerFooter}>
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={s.subtleLink}
              >
                <FaInstagram className={s.subtleIcon} />
                Siga no Instagram
              </a>
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={s.subtleLink}
              >
                <FaMapMarkerAlt className={s.subtleIcon} />
                Escritório Físico
              </a>
            </div>
          </m.div>
        </m.div>

        <div className={s.imageWrapper}>
          <m.div
            className={s.imageContainer}
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <m.div
              initial={{ scale: 1.05 }}
              animate={{ scale: 1.0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className={s.imageMotionWrapper}
            >
              <Image
                src="/banner-image.jpeg"
                alt="Jéssica Birck - Advogada"
                fill
                sizes="(max-width: 1064px) 100vw, 50vw"
                fetchPriority="high"
                priority
                style={{ objectFit: "cover", objectPosition: "center 15%" }}
              />
            </m.div>
          </m.div>

          <m.div
            className={s.badge}
            variants={badgeVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className={s.badgeIconWrapper}>
              <FaGlobeAmericas />
            </div>
            <div className={s.badgeTextContainer}>
              <span className={s.badgeTitle}>Atendimento em todo o Brasil</span>
              <span className={s.badgeSubtitle}>100% Online e Seguro</span>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  )
}
