"use client"

import type { Variants } from "framer-motion"
import { motion } from "framer-motion"
import Image from "next/image"
import { FaInstagram } from "react-icons/fa"
import { AnimatedCounter } from "../(components)/UI/AnimatedCounter"
import s from "./SocialProof.module.css"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
}

export function SocialProof() {
  return (
    <section className={s.section}>
      <motion.div
        className={s.container}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className={s.textContent}>
          <motion.div variants={itemVariants} className={s.badge}>
            Presença Digital
          </motion.div>

          <motion.h2 variants={itemVariants} className={s.title}>
            Junte-se a uma comunidade que busca clareza e segurança jurídica.
          </motion.h2>

          <motion.div variants={itemVariants} className={s.metricsGrid}>
            <div className={s.metricCard}>
              <div className={s.metricNumber}>
                <AnimatedCounter to={40000} duration={2} />
              </div>
              <span className={s.metricLabel}>+ Seguidores</span>
            </div>

            <div className={s.metricCard}>
              <div className={s.metricNumber}>
                <AnimatedCounter to={1000000} duration={2.5} />
              </div>
              <span className={s.metricLabel}>+ Visualizações Mensais</span>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className={s.ctaWrapper}>
            <a
              href="https://www.instagram.com/jessicabirck.adv"
              target="_blank"
              rel="noopener noreferrer"
              className={s.ctaButton}
            >
              <FaInstagram className={s.buttonIcon} />
              Acompanhar no Instagram
            </a>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className={s.imageColumn}>
          <Image
            src="/instagram-image.jpeg"
            alt="Jéssica Birck no Instagram"
            fill
            style={{ objectFit: "cover", objectPosition: "center 20%" }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
