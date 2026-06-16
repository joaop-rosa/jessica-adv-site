import { useEffect, useState } from "react"

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  useEffect(() => {
    const intersectingSections = new Set<string>()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            intersectingSections.add(entry.target.id)
          } else {
            intersectingSections.delete(entry.target.id)
          }
        })

        if (intersectingSections.size === 0) {
          setActiveSection(null)
        } else {
          const active = sectionIds.find((id) => intersectingSections.has(id))
          if (active) {
            setActiveSection(active)
          }
        }
      },
      { rootMargin: "-20% 0px -75% 0px", threshold: 0 }
    )

    for (const id of sectionIds) {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    }

    return () => {
      observer.disconnect()
    }
  }, [sectionIds])

  return activeSection
}
