import { useEffect, useState } from 'react'

// Returns the id of the section currently in view, for highlighting the nav.
export function useActiveSection(ids: readonly string[]): string {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length > 0) setActive(visible[0].target.id)
      },
      // A section counts as active when it crosses the upper third of the screen.
      { rootMargin: '-30% 0px -65% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [ids])

  return active
}
