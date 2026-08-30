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
    "@graph": [
      {
        "@type": ["LegalService", "Attorney", "LocalBusiness"],
        "@id": "https://jessicabirck.adv.br/#organization",
        name: "Jéssica Birck | Advocacia de Família",
        alternateName: [
          "Jéssica Birck Advogada",
          "Escritório de Advocacia Jéssica Birck",
          "Jéssica Sabrina Birck",
        ],
        image: "https://jessicabirck.adv.br/logo-header.png",
        logo: "https://jessicabirck.adv.br/logo-header.png",
        description:
          "Advocacia especializada e acolhedora em Direito de Família. Atendimento presencial no Rio Grande do Sul e 100% online para todo o Brasil. Atuação em divórcio, pensão alimentícia, guarda e inventário.",
        url: "https://jessicabirck.adv.br",
        telephone: "+5551998431851",
        priceRange: "$$",
        legalName: "Jéssica Sabrina Birck",
        taxID: "OAB/RS 133.315",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Rolante",
          addressRegion: "RS",
          addressCountry: "BR",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -29.6517,
          longitude: -50.5764,
        },
        areaServed: [
          {
            "@type": "Country",
            name: "Brasil",
          },
          {
            "@type": "State",
            name: "Rio Grande do Sul",
          },
          {
            "@type": "City",
            name: "Rolante",
          },
          {
            "@type": "AdministrativeArea",
            name: "Vale do Paranhana",
          },
        ],
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
          "https://maps.app.goo.gl/m2afvegsLFHYHm9J6",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Serviços Jurídicos em Direito de Família e Sucessões",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Direito de Família e Divórcio",
                description:
                  "Assessoria jurídica em divórcios consensuais e litigiosos, partilha de bens, pensão alimentícia e guarda de filhos.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Inventário e Usucapião",
                description:
                  "Abertura e condução de inventário judicial e extrajudicial em cartório, partilha de herança e regularização de imóveis.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Consultoria e Contratos",
                description:
                  "Elaboração e análise de contratos, pactos antenupciais e acordos prévios com total segurança jurídica.",
              },
            },
          ],
        },
      },
      {
        "@type": "Person",
        "@id": "https://jessicabirck.adv.br/#person",
        name: "Jéssica Sabrina Birck",
        jobTitle: "Advogada Especialista em Direito de Família",
        worksFor: {
          "@id": "https://jessicabirck.adv.br/#organization",
        },
        sameAs: [
          "https://www.instagram.com/jessicabirck.adv",
          "https://www.facebook.com/jessicasabrina.birck",
        ],
      },
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
