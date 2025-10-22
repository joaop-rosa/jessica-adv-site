"use client"

import Image from "next/image"
import s from "./Banner.module.css"
import { Button } from "../(components)/UI/Button"
import { LiaArrowRightSolid } from "react-icons/lia"
import { LiaShieldAltSolid } from "react-icons/lia"
import { useMediaQuery } from "react-responsive"
import { LiaBalanceScaleSolid } from "react-icons/lia"
import { ImHammer2 } from "react-icons/im"

export function Banner() {
  const isTablet = useMediaQuery({ query: "(max-width: 768px)" })

  return (
    <section className={s.banner}>
      <Image
        priority
        className={s.stoneBackground}
        src="/stone-texture.jpg"
        alt=""
        width={3000}
        height={3500}
      />
      <div className={s.stoneBackgroundScreen} />
      <div className={s.content}>
        <div className={s.titleWrapper}>
          <h1 className={s.title}>JÉSSICA BIRCK</h1>
          <h2 className={s.subtitle}>Advogada | OAB/RS 133.315</h2>
        </div>
        <p className={s.description}>
          Defendendo seus direitos com dedicação, conhecimento jurídico sólido e
          atendimento personalizado em todas as áreas do direito.
        </p>
        <div className={s.buttonWrapper}>
          <Button Icon={LiaArrowRightSolid}>Entre em Contato</Button>
        </div>
        <ul className={s.itemsList}>
          <li>
            <LiaBalanceScaleSolid />
            Expertise Jurídica
          </li>
          <li>
            <LiaShieldAltSolid />
            Atendimento Seguro
          </li>
          <li>
            <ImHammer2 />
            Todas as Áreas
          </li>
        </ul>
      </div>

      {!isTablet && (
        <div className={s.themis}>
          <Image
            priority
            alt="Estátua da deusa Thêmis"
            src={"/themis.png"}
            width={1250}
            height={1536}
          />
        </div>
      )}
    </section>
  )
}
