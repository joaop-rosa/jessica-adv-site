import { FaCheck as Check } from "react-icons/fa6"
import { IoBookOutline as BookOpen } from "react-icons/io5"
import s from "./WhatYouWillFind.module.css"
import { CTAButton } from "./UI/CTAButton"

export function WhatYouWillFind() {
  const topics = [
    "O que realmente muda (e o que não muda) quando ocorre a separação",
    "Quais são os erros mais comuns cometidos antes e durante o divórcio",
    "Como funcionam guarda dos filhos e pensão alimentícia na prática",
    'Por que não existe "percentual fixo" de pensão e como isso é analisado',
    "Como a dependência financeira é tratada juridicamente",
    "O que NÃO fazer para não se prejudicar",
    "Um checklist prático antes de sair de casa",
    "Perguntas essenciais que você deve fazer ao seu advogado",
    "Cuidados importantes no pós-divórcio",
  ]

  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.headerIconWrapper}>
          <div className={s.iconBox}>
            <BookOpen className={s.bookIcon} />
          </div>
        </div>

        <h2 className={s.title}>O que você vai encontrar neste e-book</h2>

        <div className={s.divider}></div>

        <p className={s.description}>
          Um guia claro, direto e humano, escrito por uma advogada de família,
          com foco em prevenção de erros e proteção de direitos.
        </p>

        <p className={s.subtitle}>Você vai aprender:</p>

        <ul className={s.list}>
          {topics.map((topic, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <li key={index} className={s.listItem}>
              <div className={s.checkBox}>
                <Check className={s.checkIcon} strokeWidth={3} />
              </div>
              <span className={s.itemText}>{topic}</span>
            </li>
          ))}
        </ul>

        <div className={s.bottomCard}>
          <p className={s.cardText}>
            Tudo em linguagem simples,{" "}
            <span className={s.boldText}>sem juridiquês</span> e sem promessas
            irreais.
          </p>
        </div>

        <div className={s.buttonWrapper}>
          <CTAButton>Quero Adquirir</CTAButton>
        </div>
      </div>
    </section>
  )
}
