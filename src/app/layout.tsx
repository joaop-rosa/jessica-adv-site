import type { Metadata } from "next"
import { Crimson_Pro, Lato } from "next/font/google"
import "./globals.css"
import { GoogleTagManager } from "@next/third-parties/google"
import { AnimationProvider } from "@/contexts/AnimationProvider"
import { Header } from "./(components)/Header"

const lato = Lato({
  variable: "--font-lato",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
})

const crimsonPro = Crimson_Pro({
  variable: "--font-crimson",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://jessicabirck.adv.br"),
  title: {
    default: "Jéssica Birck | Advogada de Família e Divórcio - OAB/RS",
    template: "%s | Jéssica Birck",
  },
  description:
    "Advocacia especializada em Direito de Família: Divórcio, Pensão Alimentícia, Guarda e Inventário. Atendimento acolhedor presencial no RS e 100% online para todo o Brasil.",
  keywords: [
    "Advogada",
    "Advogado",
    "Advogada de Família",
    "Advogado de Família",
    "Advogada em Rolante",
    "Advogado em Rolante",
    "Advogada Rolante",
    "Advogado Rolante",
    "Jessica Advogada",
    "Jessica Birck",
    "Jessica Birck Advogada",
    "Advogada Divórcio RS",
    "Advogado Divórcio RS",
    "Direito de Família RS",
    "Inventário RS",
    "Pensão Alimentícia",
    "Guarda de Filhos",
    "Advocacia Online Brasil",
    "Direito de Família",
  ],
  authors: [
    { name: "Jéssica Sabrina Birck", url: "https://jessicabirck.adv.br" },
  ],
  creator: "Jéssica Sabrina Birck",
  publisher: "Jéssica Sabrina Birck",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Jéssica Birck | Advogada de Família e Divórcio",
    description:
      "Advocacia especializada em Direito de Família: Divórcio, Pensão Alimentícia, Guarda e Inventário. Atendimento presencial no RS e 100% online para todo o Brasil.",
    url: "https://jessicabirck.adv.br",
    siteName: "Jéssica Birck Advocacia",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jéssica Birck - Advogada | OAB/RS 133.315",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jéssica Birck | Advogada de Família e Divórcio",
    description:
      "Advocacia especializada em Direito de Família no RS e atendimento online em todo o Brasil.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://jessicabirck.adv.br",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${lato.variable} ${crimsonPro.variable}`}
      data-scroll-behavior="smooth"
    >
      <GoogleTagManager gtmId="GTM-5RBTC7R3" />
      <body suppressHydrationWarning>
        <AnimationProvider>
          <Header />
          {children}
        </AnimationProvider>
      </body>
    </html>
  )
}
