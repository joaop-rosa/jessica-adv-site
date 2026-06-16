import dynamic from "next/dynamic"

import { Banner } from "./(sections)/Banner"
import { BeforeDivorce } from "./(sections)/BeforeDivorce"
import s from "./page.module.css"

const Footer = dynamic(() =>
  import("./(components)/Footer").then((mod) => mod.Footer),
)
const Services = dynamic(() =>
  import("./(sections)/Services").then((mod) => mod.Services),
)
const SocialProof = dynamic(() =>
  import("./(sections)/SocialProof").then((mod) => mod.SocialProof),
)

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
