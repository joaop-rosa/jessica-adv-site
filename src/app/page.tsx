import dynamic from "next/dynamic"
import Script from "next/script"

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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Jéssica Birck | Advocacia",
    image: "https://jessicabirck.adv.br/logo-header.png",
    description:
      "Advocacia especializada e acolhedora em Direito de Família, atendendo Rolante, Vale do Paranhana e todo o Rio Grande do Sul. Especialista em divórcio, pensão alimentícia e inventário.",
    url: "https://jessicabirck.adv.br",
    telephone: "+5551998431851",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rolante",
      addressLocality: "Rolante",
      addressRegion: "RS",
      addressCountry: "BR",
    },
    areaServed: ["Rolante", "Taquara", "Igrejinha", "Rio Grande do Sul"],
    priceRange: "$$",
    legalName: "Jéssica Sabrina Birck",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "11:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "13:30",
        closes: "18:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/jessicabirck.adv",
      "https://www.facebook.com/jessicasabrina.birck",
    ],
  }

  return (
    <div className={s.page}>
      <Script
        id="schema-legal-service"
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: Required for JSON-LD
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
