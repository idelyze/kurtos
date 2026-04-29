import { useEffect } from 'react'

/**
 * useScrollReveal
 *
 * Watches every element that carries the `data-reveal` attribute and
 * adds `data-visible="true"` when it enters the viewport.
 *
 * Usage in JSX:
 *   <div data-reveal data-delay="0.2">…</div>
 *
 * In global.css handle the actual CSS:
 *   [data-reveal] { opacity:0; transform:translateY(32px); transition:… }
 *   [data-reveal][data-visible="true"] { opacity:1; transform:none; }
 *
 * Call this hook ONCE in App.jsx (or any top-level layout component).
 * It reattaches the observer whenever the DOM changes.
 */
export function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay
              ? parseFloat(entry.target.dataset.delay)
              : 0

            setTimeout(() => {
              entry.target.setAttribute('data-visible', 'true')
            }, delay * 1000)

            // Once visible — unobserve so it never reverses
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -48px 0px' }
    )

    els.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  })
}
