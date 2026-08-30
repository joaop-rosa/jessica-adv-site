import type { Metadata } from "next"
import { Footer } from "@/app/(components)/Footer"
import { Banner } from "./(components)/Banner"
import { FinalMessage } from "./(components)/FinalMessage"
import { ForWho } from "./(components)/ForWho"
import { HowItHelps } from "./(components)/HowItHelps"
import { ImportantNote } from "./(components)/ImportantNote"
import { SaveMoney } from "./(components)/SaveMoney"
import { WhatYouReceive } from "./(components)/WhatYouReceive"
import { WhatYouWillFind } from "./(components)/WhatYouWillFind"
import s from "./page.module.css"

export const metadata: Metadata = {
  title: "Guia Antes do Divórcio | Ebook Exclusivo Jéssica Birck",
  description:
    "Descubra o passo a passo seguro para planejar seu divórcio, proteger seu patrimônio e garantir a tranquilidade dos seus filhos com respaldo jurídico especializado.",
  openGraph: {
    title: "Guia Antes do Divórcio | Jéssica Birck",
    description:
      "Tudo o que você precisa saber antes de tomar a decisão do divórcio: direitos, filhos, patrimônio e planejamento.",
    type: "article",
    locale: "pt_BR",
  },
  alternates: {
    canonical: "https://jessicabirck.adv.br/ebooks/antes-do-divorcio",
  },
}

export default function AntesDoDivorcio() {
  return (
    <div className={s.page}>
      <Banner />
      <ForWho />
      <WhatYouWillFind />
      <HowItHelps />
      <SaveMoney />
      <ImportantNote />
      <WhatYouReceive />
      <FinalMessage />
      <Footer />
    </div>
  )
}
