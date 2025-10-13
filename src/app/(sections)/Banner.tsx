import Image from "next/image"
import s from "./Banner.module.css"
import { Button } from "../(components)/UI/Button"
import { ArrowRight } from "@geist-ui/icons"
import { Shield } from "@geist-ui/icons"

export function Banner() {
  return (
    <section className={s.banner}>
      <div className={s.content}>
        <div className={s.titleWrapper}>
          <h1>JÉSSICA BIRCK</h1>
          <h2>Advogada | OAB/RS 133.315</h2>
        </div>
        <p className={s.description}>
          Defendendo seus direitos com dedicação, conhecimento jurídico sólido e
          atendimento personalizado em todas as áreas do direito.
        </p>
        <div className={s.buttonWrapper}>
          <Button Icon={ArrowRight}>Entre em Contato</Button>
        </div>
        <ul className={s.itemsList}>
          <li>
            <Image src={"/balance.svg"} alt="Balance" width={20} height={20} />
            Expertise Jurídica
          </li>
          <li>
            <Shield />
            Atendimento Seguro
          </li>
          <li>
            <Image
              src={"/law-hammer.svg"}
              alt="Balance"
              width={20}
              height={20}
            />
            Todas as Áreas
          </li>
        </ul>
      </div>
      <Image
        alt="Estátua da deusa Thêmis"
        src={"/themis.png"}
        width={2000}
        height={2000}
        className={s.themis}
      />
    </section>
  )
}
