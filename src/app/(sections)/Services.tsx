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

export function Services() {
  const mainService = CARDS[0]
  const secondaryServices = CARDS.slice(1)

  return (
    <section id="especialidades" className={s.section}>
      <div className={s.container}>
        <div className={s.coreSpecialty}>
          <div className={s.imageWrapper}>
            <Image
              src="/services-image.jpeg"
              alt="Direito de Família"
              fill
              style={{ objectFit: "cover", objectPosition: "top" }}
            />
          </div>
          <div className={s.coreContent}>
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
          </div>
        </div>

        <div className={s.secondaryAreas}>
          <div className={s.secondaryHeader}>
            <h4 className={s.secondaryTitleBlock}>Outras frentes de atuação</h4>
          </div>
          <div className={s.secondaryGrid}>
            {secondaryServices.map(({ Icon, title, description }) => (
              <div key={title} className={s.secondaryItem}>
                <Icon className={s.secondaryIcon} />
                <h4 className={s.secondaryTitle}>{title}</h4>
                <p className={s.secondaryDescription}>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
