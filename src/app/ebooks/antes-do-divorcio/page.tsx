"use client"

import { Banner } from "./(components)/Banner"
import { ForWho } from "./(components)/ForWho"
import { HowItHelps } from "./(components)/HowItHelps"
import { WhatYouWillFind } from "./(components)/WhatYouWillFind"
import s from "./page.module.css"

export default function AntesDoDivorcio() {
  return (
    <div className={s.page}>
      <Banner />
      <ForWho />
      <WhatYouWillFind />
      <HowItHelps />
    </div>
  )
}
