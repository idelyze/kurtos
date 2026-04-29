import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  },
})

const FACTS = [
  { label: 'Origin',    value: 'Transylvania, 1400s'   },
  { label: 'Method',    value: 'Open Flame Rotisserie'  },
  { label: 'First in',  value: 'Central India'          },
  { label: 'Made',      value: 'Fresh to Order'         },
]

// Chimney cake SVG for the image pane
function CakeSVG() {
  return (
    <svg width="155" height="240" viewBox="0 0 155 240" fill="none" aria-hidden="true">
      <rect x="70" y="8" width="14" height="212" rx="7" fill="#C07830" opacity="0.92" />
      {Array.from({ length: 11 }, (_, i) => (
        <ellipse
          key={i}
          cx="77"
          cy={26 + i * 19}
          rx={58 - i * 2.8}
          ry={9 - i * 0.3}
          stroke={i % 2 === 0 ? 'rgba(246,237,217,0.82)' : 'rgba(212,136,43,0.72)'}
          strokeWidth={3.3}
          opacity={1 - i * 0.073}
        />
      ))}
    </svg>
  )
}

export default function WhatIsKurtos() {
  return (
    <section
      id="our-story"
      className="section-pad bg-cream"
    >
      <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20 items-center">

        {/* ── Left: visual pane ── */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="relative"
        >
          {/* Main image block */}
          <div
            className="relative overflow-hidden rounded"
            style={{
              aspectRatio: '0.74',
              background:  'linear-gradient(155deg, #8B4F2A 0%, #2C1208 100%)',
            }}
          >
            {/* Background spiral texture */}
            <div className="absolute inset-0 opacity-[0.12]">
              <svg width="100%" height="100%" viewBox="0 0 300 405">
                {Array.from({ length: 11 }, (_, i) => (
                  <ellipse
                    key={i}
                    cx="150"
                    cy={25 + i * 34}
                    rx={105 - i * 5}
                    ry={14}
                    stroke="#F6EDD9"
                    strokeWidth={2.5}
                    fill="none"
                    opacity={1 - i * 0.08}
                  />
                ))}
              </svg>
            </div>

            {/* Hero cake SVG */}
            <div className="absolute inset-0 flex items-center justify-center">
              <CakeSVG />
            </div>

            {/* Flame badge */}
            <div
              className="absolute bottom-5 left-5 font-sans"
              style={{
                background:     'rgba(246,237,217,0.08)',
                backdropFilter: 'blur(10px)',
                border:         '1px solid rgba(246,237,217,0.15)',
                borderRadius:   '8px',
                padding:        '0.6rem 1rem',
                color:          '#F6EDD9',
                fontSize:       '0.7rem',
                letterSpacing:  '0.05em',
              }}
            >
              🔥 Hand-rolled on open flame
            </div>
          </div>

          {/* 700+ Years stat bubble */}
          <div
            className="stat-bubble absolute -top-5 -right-5 w-28 h-28"
          >
            <div className="text-center">
              <div
                className="font-serif font-light text-bark leading-none"
                style={{ fontSize: '2.2rem' }}
              >
                700+
              </div>
              <div
                className="font-sans uppercase text-muted mt-1"
                style={{ fontSize: '0.58rem', letterSpacing: '0.1em', lineHeight: 1.4 }}
              >
                Years Old<br />Recipe
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Right: text ── */}
        <div>
          <motion.p
            variants={fadeUp(0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="text-overline mb-4"
          >
            What is Kurtos Kalacs?
          </motion.p>

          <motion.h2
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="font-serif font-light text-espresso leading-tight mb-6"
            style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.85rem)' }}
          >
            Europe's Oldest
            <br />
            <em className="italic text-bark">Pastry Tradition</em>
            <br />
            Reimagined
          </motion.h2>

          <motion.p
            variants={fadeUp(0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="text-body text-bark mb-5"
          >
            Kürtős Kalács (pronounced "Kur-tosh Ka-lach") is Hungary's most
            beloved street food — a cylindrical cake baked over an open flame,
            crispy on the outside, delightfully soft within.
          </motion.p>

          <motion.p
            variants={fadeUp(0.22)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="text-body text-bark mb-10"
          >
            The dough is hand-wrapped around a wooden spit, rolled in sugar,
            then slow-roasted until it caramelizes into a golden crust. Each bite
            collapses into warm, layered ribbons.
          </motion.p>

          {/* Fact grid */}
          <motion.div
            variants={fadeUp(0.34)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-2 gap-3"
          >
            {FACTS.map(({ label, value }) => (
              <div
                key={label}
                className="p-4 rounded-lg"
                style={{
                  background:  'rgba(92,46,20,0.05)',
                  borderLeft:  '2px solid #C07830',
                }}
              >
                <span
                  className="font-sans uppercase text-muted block mb-1"
                  style={{ fontSize: '0.6rem', letterSpacing: '0.14em' }}
                >
                  {label}
                </span>
                <span
                  className="font-sans font-medium text-espresso-mid"
                  style={{ fontSize: '0.88rem' }}
                >
                  {value}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
