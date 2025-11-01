import { ServicesCard } from "../(components)/ServicesCard"
import s from "./Services.module.css"
import {
  LiaBalanceScaleSolid,
  LiaBriefcaseSolid,
  LiaFileContractSolid,
  LiaHandshakeSolid,
  LiaUserFriendsSolid,
  LiaUserShieldSolid,
} from "react-icons/lia"

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
]

export function Services() {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <h2 className={s.title}>Áreas de Atuação</h2>
        <h4 className={s.description}>
          Oferecemos assessoria jurídica especializada com atendimento 100%
          online para todo o Brasil.
        </h4>
        <div className={s.cardsWrapper}>
          {CARDS.map(({ Icon, title, description }) => (
            <ServicesCard
              key={title}
              Icon={Icon}
              title={title}
              description={description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
