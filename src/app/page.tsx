"use client"

import { Banner } from "./(sections)/Banner"
import { SocialProof } from "./(sections)/SocialProof"
import s from "./page.module.css"
import { Footer } from "./(components)/Footer"
import { Services } from "./(sections)/Services"
import { BeforeDivorce } from "./(sections)/BeforeDivorce"

export default function Home() {
  return (
    <div className={s.page}>
      <Banner />
      <Services />
      <div className={s.divider} />
      <BeforeDivorce />
      <div className={s.divider} />
      <SocialProof />
      <Footer />
    </div>
  )
}
