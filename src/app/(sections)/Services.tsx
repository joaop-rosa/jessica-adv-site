"use client"

import type { Variants } from "framer-motion"
import { motion } from "framer-motion"
import Image from "next/image"
import {
  LiaBalanceScaleSolid,
  LiaBriefcaseSolid,
  LiaFileContractSolid,
  LiaHandshakeSolid,
  LiaHomeSolid,
  LiaUserFriendsSolid,
  LiaUserShieldSolid,
} from "react-icons/lia"
import { WHATSAPP_LINK } from "@/constants/links"
import s from "./Services.module.css"

const CARDS = [
  {
    Icon: LiaUserFriendsSolid,
    title: "Direito de Família",
    description:
      "Assessoria completa em divórcios, pensão alimentícia, guarda, regime de bens e outras questões familiares, protegendo seus direitos e de quem você ama.",
  },
  {
    Icon: LiaHandshakeSolid,
    title: "Inventário e Usucapião",
    description:
      "Conduzimos processos de inventário (judicial ou extrajudicial) e a regularização de imóveis através da usucapião, garantindo a transferência e o registro da propriedade.",
  },
  {
    Icon: LiaFileContractSolid,
    title: "Contratos",
    description:
      "Elaboração, análise e revisão de contratos (como aluguel, prestação de serviços e compra e venda) para garantir sua segurança jurídica em todos os negócios.",
  },
  {
    Icon: LiaBriefcaseSolid,
    title: "Direito Trabalhista",
    description:
      "Assessoria completa para trabalhadores (rescisão, horas extras, vínculo) e empresas (defesa, compliance e passivo trabalhista), atuando de forma preventiva e contenciosa.",
  },
  {
    Icon: LiaUserShieldSolid,
    title: "Direito Previdenciário",
    description:
      "Auxílio completo para planejar e solicitar sua aposentadoria (idade, tempo de contribuição, especial), além de benefícios como auxílio-doença e BPC/LOAS.",
  },
  {
    Icon: LiaBalanceScaleSolid,
    title: "Cível e Direito de Trânsito",
    description:
      "Atuação em ações de reparação (danos morais e materiais), cobranças, execuções e defesa em multas de trânsito, suspensão e cassação da CNH.",
  },
  {
    Icon: LiaHomeSolid,
    title: "Direito Imobiliário",
    description:
      "Assessoria completa na compra, venda e locação de imóveis, distratos, leilões e disputas envolvendo condomínios.",
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } 
  }
}

export function Services() {
  const mainService = CARDS[0]
  const secondaryServices = CARDS.slice(1)

  return (
    <section id="especialidades" className={s.section}>
      <motion.div 
        className={s.container}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
      >
        <div className={s.coreSpecialty}>
          <motion.div className={s.coreContent} variants={itemVariants}>
            <span className={s.tagline}>ESPECIALIDADE</span>
            <h3 className={s.coreTitle}>{mainService.title}</h3>
            <p className={s.coreDescription}>{mainService.description}</p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={s.coreLink}
            >
              Falar sobre o meu caso &rarr;
            </a>
          </motion.div>
          <motion.div className={s.imageWrapper} variants={itemVariants}>
            <Image
              src="/services-image.jpeg"
              alt="Direito de Família"
              fill
              style={{ objectFit: "cover", objectPosition: "top" }}
            />
          </motion.div>
        </div>

        <div className={s.secondaryAreas}>
          <div className={s.secondaryHeader}>
            <motion.h4 className={s.secondaryTitleBlock} variants={itemVariants}>
              Outras frentes de atuação
            </motion.h4>
          </div>
          <div className={s.secondaryGrid}>
            {secondaryServices.map(({ Icon, title, description }) => (
              <motion.div key={title} className={s.secondaryItem} variants={itemVariants}>
                <Icon className={s.secondaryIcon} />
                <h4 className={s.secondaryTitle}>{title}</h4>
                <p className={s.secondaryDescription}>{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
