"use client"

import { Banner } from "./(components)/Banner"
import { ForWho } from "./(components)/ForWho"
import s from "./page.module.css"

export default function AntesDoDivorcio() {
  return (
    <div className={s.page}>
      <Banner />
      <ForWho />
    </div>
  )
}
