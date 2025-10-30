import Image from "next/image"
import s from "./Banner.module.css"
import { Button } from "../(components)/UI/Button"
import { LiaArrowRightSolid } from "react-icons/lia"
import { LiaShieldAltSolid } from "react-icons/lia"
import { useMediaQuery } from "react-responsive"
import { LiaBalanceScaleSolid } from "react-icons/lia"
import { ImHammer2 } from "react-icons/im"
import { WHATSAPP_LINK } from "@/constants/links"

export function Banner() {
  const isTablet = useMediaQuery({ query: "(max-width: 768px)" })

  return (
    <section className={s.banner}>
      <div className={s.backgroundScreen} />
      <div className={s.content}>
        {isTablet ? (
          <Image
            priority
            alt="Jéssica Birck Advogada | OAB/RS 133.315"
            src={"/logo-center.png"}
            className={s.logo}
            width={940}
            height={240}
          />
        ) : (
          <Image
            priority
            alt="Jéssica Birck Advogada | OAB/RS 133.315"
            src={"/logo-left.png"}
            className={s.logo}
            width={863}
            height={194}
          />
        )}

        <div className={s.buttonWrapper}>
          <Button href={WHATSAPP_LINK} Icon={LiaArrowRightSolid}>
            Entre em contato
          </Button>
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
