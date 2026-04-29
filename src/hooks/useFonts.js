import { useState, useEffect } from 'react'

/**
 * useFonts
 *
 * Returns `true` once the Google Fonts declared in index.html have loaded
 * (or after a 2 s timeout — whichever comes first).
 *
 * Useful for preventing a flash of unstyled serif text in the hero.
 *
 * Example:
 *   const fontsReady = useFonts(['Cormorant Garamond', 'Jost'])
 *   if (!fontsReady) return null
 */
export function useFonts(fontNames = ['Cormorant Garamond', 'Jost']) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (typeof document === 'undefined' || !document.fonts) {
      setReady(true)
      return
    }

    const checks = fontNames.map((name) =>
      document.fonts.load(`300 1em "${name}"`)
    )

    // Resolve when all fonts load OR after 2 seconds
    const timeout = setTimeout(() => setReady(true), 2000)

    Promise.all(checks)
      .then(() => {
        clearTimeout(timeout)
        setReady(true)
      })
      .catch(() => {
        clearTimeout(timeout)
        setReady(true) // Graceful degradation — render anyway
      })

    return () => clearTimeout(timeout)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return ready
}
