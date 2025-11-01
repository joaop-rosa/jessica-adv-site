"use client"

import { Banner } from "./(sections)/Banner"
import { SocialMedias } from "./(sections)/SocialMedias"
import s from "./page.module.css"
import { Footer } from "./(components)/Footer"
import { Services } from "./(sections)/Services"

export default function Home() {
  return (
    <div className={s.page}>
      <Banner />
      <Services />
      <SocialMedias />
      <Footer />
    </div>
  )
}
