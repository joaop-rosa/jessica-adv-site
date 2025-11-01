import Image from "next/image"
import s from "./Banner.module.css"
import { Button } from "../(components)/UI/Button"
import {
  LiaArrowRightSolid,
  LiaSuitcaseSolid,
  LiaCommentDotsSolid,
} from "react-icons/lia"
import { useMediaQuery } from "react-responsive"
import { ImHammer2 } from "react-icons/im"
import { WHATSAPP_LINK } from "@/constants/links"
import cn from "classnames"

export function Banner() {
  const isTablet = useMediaQuery({ query: "(max-width: 768px)" })

  return (
    <section className={s.banner}>
      <div className={s.backgroundScreen} />
      <div className={s.container}>
        <div className={s.content}>
          {isTablet ? (
            <Image
              fetchPriority="high"
              priority
              alt="Jéssica Birck Advogada | OAB/RS 133.315"
              src={"/logo-center.png"}
              className={s.logo}
              width={940}
              height={240}
            />
          ) : (
            <Image
              fetchPriority="high"
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
              <LiaSuitcaseSolid />
              Atuação Estratégica
            </li>
            <li>
              <LiaCommentDotsSolid />
              Atendimento Personalizado
            </li>
            <li>
              <ImHammer2 />
              Advocacia Especializada
            </li>
          </ul>
        </div>

        {!isTablet && (
          <div className={cn(s.themis, { [s.themisEnabled]: !isTablet })}>
            <Image
              fetchPriority="high"
              priority
              alt="Estátua da deusa Thêmis"
              src={"/themis.png"}
              width={1250}
              height={1536}
            />
          </div>
        )}
      </div>
    </section>
  )
}
