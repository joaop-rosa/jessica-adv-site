"use client"

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
