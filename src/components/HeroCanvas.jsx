import { useEffect, useRef } from 'react'

/**
 * HeroCanvas
 *
 * Lightweight canvas particle system — floating amber/mahogany dots that
 * drift upward like embers from a chimney.
 *
 * Rules:
 *  - No library dependency (raw Canvas 2D API)
 *  - Responsive: resizes with the container
 *  - Mobile-safe: uses requestAnimationFrame, never blocks the main thread
 *  - Destroyed cleanly on unmount
 */
export default function HeroCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animId

    // Particle pool
    const COUNT = window.innerWidth < 768 ? 30 : 55
    const particles = []

    const colours = [
      'rgba(192, 120, 48,',   // caramel
      'rgba(139, 79, 42,',    // mahogany
      'rgba(212, 136, 43,',   // gold
      'rgba(246, 237, 217,',  // cream (rare sparks)
    ]

    const makeParticle = (w, h) => ({
      x:   Math.random() * w,
      y:   Math.random() * h,
      r:   Math.random() * 2.4 + 0.6,
      vx:  (Math.random() - 0.5) * 0.3,
      vy:  -(Math.random() * 0.45 + 0.07),
      a:   Math.random() * 0.38 + 0.06,
      col: colours[Math.floor(Math.random() * colours.length)],
    })

    let w, h

    const resize = () => {
      w = canvas.width  = canvas.offsetWidth
      h = canvas.height = canvas.offsetHeight
    }
    resize()

    // Seed particles spread across full height
    for (let i = 0; i < COUNT; i++) {
      particles.push(makeParticle(w, h))
    }

    const tick = () => {
      ctx.clearRect(0, 0, w, h)

      particles.forEach((p) => {
        ctx.save()
        ctx.globalAlpha = p.a
        ctx.fillStyle   = `${p.col}1)`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()

        p.x += p.vx
        p.y += p.vy

        // Wrap vertically — re-enter from bottom with fresh x
        if (p.y < -10) {
          p.y = h + 10
          p.x = Math.random() * w
        }
        // Wrap horizontally
        if (p.x < -10) p.x = w + 10
        if (p.x > w + 10) p.x = -10
      })

      animId = requestAnimationFrame(tick)
    }

    tick()

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    return () => {
      cancelAnimationFrame(animId)
      ro.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  )
}
