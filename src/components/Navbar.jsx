import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { waLink } from '../constants/menu'

const NAV_LINKS = [
  { label: 'Menu',      href: '#menu' },
  { label: 'Our Story', href: '#our-story' },
  { label: 'Location',  href: '#location' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on resize → desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="fixed top-0 left-0 right-0 z-[200]"
        style={{
          padding:        scrolled ? '1rem 2.5rem' : '1.6rem 2.5rem',
          background:     scrolled ? 'rgba(246, 237, 217, 0.96)' : 'transparent',
          backdropFilter: scrolled ? 'blur(14px)'                 : 'none',
          borderBottom:   scrolled ? '1px solid rgba(92,46,20,.1)' : 'none',
          transition:     'all 0.4s cubic-bezier(0.25,0.46,0.45,0.94)',
        }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="font-serif text-xl font-light tracking-tight no-underline"
            style={{
              color:      scrolled ? '#1A0A05' : '#F6EDD9',
              transition: 'color 0.4s ease',
            }}
          >
            Kurtos Kalacs
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="font-sans font-normal uppercase no-underline"
                style={{
                  fontSize:       '0.72rem',
                  letterSpacing:  '0.14em',
                  color:          scrolled ? 'rgba(44,18,8,0.65)' : 'rgba(246,237,217,0.6)',
                  transition:     'color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#C07830')}
                onMouseLeave={(e) =>
                  (e.target.style.color = scrolled
                    ? 'rgba(44,18,8,0.65)'
                    : 'rgba(246,237,217,0.6)')
                }
              >
                {label}
              </a>
            ))}

            <a
              href={waLink("Hi! I'd like to place an order at Kurtos Kalacs.")}
              target="_blank"
              rel="noreferrer"
              className="font-sans font-normal uppercase no-underline whitespace-nowrap"
              style={{
                padding:       '0.55rem 1.35rem',
                borderRadius:  '100px',
                fontSize:      '0.72rem',
                letterSpacing: '0.1em',
                background:    scrolled ? '#1A0A05' : 'rgba(246,237,217,0.12)',
                color:         '#F6EDD9',
                border:        scrolled ? 'none' : '1px solid rgba(246,237,217,0.22)',
                backdropFilter:'blur(6px)',
                transition:    'all 0.3s ease',
              }}
            >
              Order Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2 cursor-pointer bg-transparent border-none"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block h-px w-6"
                style={{
                  background:  scrolled ? '#1A0A05' : '#F6EDD9',
                  transition:  'all 0.3s ease',
                  transformOrigin: 'center',
                  transform:
                    mobileOpen
                      ? i === 0 ? 'rotate(45deg) translateY(6px)'
                      : i === 2 ? 'rotate(-45deg) translateY(-6px)'
                      : 'scaleX(0)'
                      : 'none',
                }}
              />
            ))}
          </button>
        </div>
      </motion.nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-0 right-0 z-[190] md:hidden"
            style={{
              background:     'rgba(246,237,217,0.97)',
              backdropFilter: 'blur(16px)',
              borderBottom:   '1px solid rgba(92,46,20,0.1)',
              padding:        '1.5rem 2rem',
            }}
          >
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="block font-sans uppercase no-underline py-3 border-b"
                style={{
                  fontSize:      '0.82rem',
                  letterSpacing: '0.12em',
                  color:         '#2C1208',
                  borderColor:   'rgba(92,46,20,0.08)',
                }}
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </a>
            ))}
            <a
              href={waLink("Hi! I'd like to place an order at Kurtos Kalacs.")}
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp mt-4"
              onClick={() => setMobileOpen(false)}
            >
              Order on WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
