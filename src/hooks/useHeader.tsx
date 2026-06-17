import { ROUTES } from "@/constants/routes"

export function useHeader() {
  return [
    {
      name: "Áreas de Atuação",
      route: "/#areas-de-atuacao",
    },
    {
      name: "Presença Digital",
      route: "/#presenca-digital",
    },
    {
      name: "Ebooks",
      route: ROUTES.EBOOKS,
    },
  ]
}
