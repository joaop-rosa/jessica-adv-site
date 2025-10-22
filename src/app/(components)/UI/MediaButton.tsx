import { useCallback } from "react"

export function MediaButton({
  type,
}: {
  type: "maps" | "instagram" | "facebook" | "whatsapp"
}) {
  const renderMediaButton = useCallback(() => {
    if (type === "facebook") {
      return <a href="/" />
    }

    if (type === "maps") {
      return null
    }

    if (type === "instagram") {
      return null
    }

    if (type === "whatsapp") {
      return null
    }

    return null
  }, [type])

  return renderMediaButton()
}
