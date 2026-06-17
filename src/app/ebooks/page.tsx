import { redirect } from "next/navigation"
import { ROUTES } from "@/constants/routes"

export default function Ebooks() {
  return redirect(ROUTES.BEFORE_DIVORCE_EBOOK)
}
