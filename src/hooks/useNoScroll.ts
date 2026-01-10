import { useEffect } from "react"

export function useNoScroll(noScroll: boolean) {
  useEffect(() => {
    if (noScroll) {
      document.body.classList.add("noScroll")
    } else {
      document.body.classList.remove("noScroll")
    }
  }, [noScroll])
}
