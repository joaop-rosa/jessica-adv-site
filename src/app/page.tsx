"use client"

import { Footer } from "./(components)/Footer"
import { Banner } from "./(sections)/Banner"
import { BeforeDivorce } from "./(sections)/BeforeDivorce"
import { Services } from "./(sections)/Services"
import { SocialProof } from "./(sections)/SocialProof"
import s from "./page.module.css"

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
