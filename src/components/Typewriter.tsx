import { useEffect, useState } from 'react'

type Props = {
  // One word is typed once; several words are typed and deleted in a loop.
  words: string[]
  typeSpeed?: number // ms per letter while typing
  deleteSpeed?: number // ms per letter while deleting
  pause?: number // ms the full word stays before it is deleted
}

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export default function Typewriter({ words, typeSpeed = 120, deleteSpeed = 60, pause = 1800 }: Props) {
  const [wordIndex, setWordIndex] = useState(0)
  const [length, setLength] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const reduced = prefersReducedMotion()

  const word = words[wordIndex % words.length]
  const loop = words.length > 1

  // Start over when the words change, e.g. after switching the language.
  const wordsKey = words.join('|')
  useEffect(() => {
    setWordIndex(0)
    setLength(0)
    setDeleting(false)
  }, [wordsKey])

  useEffect(() => {
    if (reduced) return
    let delay = deleting ? deleteSpeed : typeSpeed
    if (!deleting && length === word.length) {
      if (!loop) return // single word: stay typed
      delay = pause
    }
    const timer = setTimeout(() => {
      if (!deleting && length < word.length) setLength(length + 1)
      else if (!deleting) setDeleting(true)
      else if (length > 0) setLength(length - 1)
      else {
        setDeleting(false)
        setWordIndex((i) => (i + 1) % words.length)
      }
    }, delay)
    return () => clearTimeout(timer)
  }, [length, deleting, word, loop, reduced, typeSpeed, deleteSpeed, pause, words.length])

  // People who turned off animations in their system settings see the first word directly.
  const shown = reduced ? words[0] : word.slice(0, length)

  return (
    <span aria-label={words[0]} role="text">
      <span aria-hidden="true">{shown}</span>
      <span aria-hidden="true" className="typewriter-cursor">|</span>
    </span>
  )
}
