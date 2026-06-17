import type { Metadata } from "next"
import { Crimson_Pro, Lato } from "next/font/google"
import "./globals.css"
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
  title: "Jéssica Birck | Advogada",
  description:
    "Especialista em Direito de Família no RS: Divórcio, Pensão Alimentícia, Inventário e Guarda. Atendimento acolhedor e focado na sua segurança jurídica.",
  keywords: [
    "Advogado",
    "Advogada",
    "Advogada de Família",
    "Advogado de Família",
    "Advogada em Rolante",
    "Advogado em Rolante",
    "Advogada Divórcio RS",
    "Advogado Divórcio RS",
    "Direito de Família",
    "Inventário",
  ],
  openGraph: {
    title: "Jéssica Birck | Advogada de Família",
    description:
      "Atendimento jurídico especializado, acolhedor e focado em segurança para o Direito de Família.",
    locale: "pt_BR",
    type: "website",
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
      lang="en"
      className={`${lato.variable} ${crimsonPro.variable}`}
      data-scroll-behavior="smooth"
    >
      <body suppressHydrationWarning>
        <AnimationProvider>
          <Header />
          {children}
        </AnimationProvider>
      </body>
    </html>
  )
}
