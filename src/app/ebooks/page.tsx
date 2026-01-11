"use client"

import { ROUTES } from "@/constants/routes"
import { redirect } from "next/navigation"

export default function Ebooks() {
  return redirect(ROUTES.BEFORE_DIVORCE_EBOOK)
}
