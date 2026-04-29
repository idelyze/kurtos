import { motion } from 'framer-motion'
import HeroCanvas from './HeroCanvas'
import { waLink } from '../constants/menu'

// ── SVG chimney cake illustration ─────────────────────────────────────────────
function ChimneyIllustration({ size = 190 }) {
  const rings = Array.from({ length: 10 }, (_, i) => i)
  return (
    <svg
      width={size}
      height={Math.round(size * 1.42)}
      viewBox="0 0 160 228"
      fill="none"
      aria-hidden="true"
    >
      {/* Spit / handle */}
      <rect x="73" y="6" width="14" height="200" rx="7" fill="#C07830" opacity="0.9" />
      {/* Dough spirals */}
      {rings.map((i) => (
        <ellipse
          key={i}
          cx="80"
          cy={26 + i * 19}
          rx={58 - i * 2.6}
          ry={9.5 - i * 0.35}
          stroke={i % 2 === 0 ? 'rgba(246,237,217,0.82)' : 'rgba(212,136,43,0.72)'}
          strokeWidth={3.2}
          opacity={1 - i * 0.075}
        />
      ))}
      {/* Sugar glaze drop */}
      <ellipse cx="80" cy="215" rx="42" ry="6" fill="rgba(192,120,48,0.18)" />
      {/* Wordmark */}
      <text
        x="80" y="226"
        textAnchor="middle"
        fill="rgba(246,237,217,0.35)"
        fontSize="8"
        fontFamily="Cormorant Garamond, serif"
      >
        Kürtős Kalács
      </text>
    </svg>
  )
}

// ── Badge pill ─────────────────────────────────────────────────────────────────
function Badge({ children, className = '' }) {
  return (
    <span
      className={`font-sans font-normal uppercase whitespace-nowrap ${className}`}
      style={{
        padding:       '0.28rem 0.85rem',
        borderRadius:  '100px',
        fontSize:      '0.62rem',
        letterSpacing: '0.09em',
      }}
    >
      {children}
    </span>
  )
}

// ── Entrance animation variants ────────────────────────────────────────────────
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] } },
}

// ──────────────────────────────────────────────────────────────────────────────

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(155deg, #0D0603 0%, #2C1208 28%, #5C2E14 62%, #8B4F2A 100%)',
      }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 65% 38%, rgba(192,120,48,0.13) 0%, transparent 55%)',
        }}
      />

      {/* Canvas particles — lazy (no SSR issue, pure DOM) */}
      <HeroCanvas />

      {/* ── Content grid ── */}
      <div className="relative z-10 max-w-6xl mx-auto w-full px-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center py-32 md:py-0">

        {/* LEFT — copy */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.p
            variants={fadeUp}
            className="text-caramel font-sans font-normal uppercase mb-6"
            style={{ fontSize: '0.72rem', letterSpacing: '0.28em' }}
          >
            Central India's First — Bhopal's Finest
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="font-serif font-light text-cream leading-none mb-6"
            style={{ fontSize: 'clamp(2.6rem, 5.5vw, 4.4rem)', letterSpacing: '-0.01em' }}
          >
            Hungarian
            <br />
            <em className="italic text-caramel">Chimney Cakes</em>
            <br />
            in the Heart
            <br />
            of India
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="font-sans font-light mb-10"
            style={{
              color:      'rgba(246,237,217,0.5)',
              fontSize:   '0.95rem',
              lineHeight: '1.9',
              maxWidth:   '370px',
            }}
          >
            Hand-rolled on an open flame. Caramelized to a golden crust.
            Filled with your choice of flavour. A centuries-old Budapest street
            food — now in Bhopal.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <a href="#menu" className="btn-primary">
              View Menu
            </a>
            <a
              href={waLink("Hi! I'd like to order a Kurtos Kalacs chimney cake.")}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              {/* WhatsApp icon */}
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Order on WhatsApp
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT — floating product orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="hidden md:flex justify-center items-center"
        >
          <div
            className="animate-float relative flex items-center justify-center"
            style={{
              width:        '360px',
              height:       '360px',
              borderRadius: '50%',
              background:   'radial-gradient(circle at 35% 30%, #D4882B, #8B4F2A 48%, #2C1208)',
              boxShadow:    '0 50px 120px rgba(0,0,0,0.62), 0 0 80px rgba(192,120,48,0.14)',
            }}
          >
            <ChimneyIllustration size={185} />

            {/* Est. badge */}
            <span
              className="absolute font-sans font-normal uppercase text-cream"
              style={{
                top:           '9%',
                right:         '-7%',
                background:    '#C07830',
                borderRadius:  '100px',
                padding:       '0.35rem 0.95rem',
                fontSize:      '0.62rem',
                letterSpacing: '0.1em',
                boxShadow:     '0 8px 24px rgba(0,0,0,0.3)',
              }}
            >
              Est. Bhopal 2024
            </span>

            {/* Authentic badge */}
            <span
              className="absolute font-sans text-cream"
              style={{
                bottom:         '14%',
                left:           '-13%',
                background:     'rgba(246,237,217,0.08)',
                backdropFilter: 'blur(12px)',
                border:         '1px solid rgba(246,237,217,0.15)',
                borderRadius:   '10px',
                padding:        '0.5rem 0.9rem',
                fontSize:       '0.62rem',
                letterSpacing:  '0.04em',
                whiteSpace:     'nowrap',
              }}
            >
              🇭🇺 Authentic Hungarian Recipe
            </span>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-8 left-1/2 animate-scroll-bounce flex flex-col items-center gap-2"
        style={{ transform: 'translateX(-50%)' }}
        aria-hidden="true"
      >
        <span
          className="font-sans uppercase"
          style={{ color: 'rgba(246,237,217,0.28)', fontSize: '0.6rem', letterSpacing: '0.22em' }}
        >
          Scroll
        </span>
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
          <path
            d="M10 4v12M4 10l6 6 6-6"
            stroke="rgba(246,237,217,0.28)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </section>
  )
}
