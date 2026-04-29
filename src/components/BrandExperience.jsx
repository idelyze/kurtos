import { motion } from 'framer-motion'

const PANELS = [
  {
    label: 'The Wrap',
    sub:   'Hand-wrapped, live on the spit',
    bg:    'linear-gradient(150deg, #2C1208, #5C2E14)',
    span:  'lg:col-span-2 lg:row-span-2',
    large: true,
  },
  {
    label: 'On Flame',
    sub:   'Roasted on open flame. Never fried.',
    bg:    'linear-gradient(150deg, #0D0603, #2C1208)',
    span:  '',
    large: false,
  },
  {
    label: 'The Coat',
    sub:   'Sweet or savory, tossed while hot',
    bg:    'linear-gradient(150deg, #5C2E14, #8B4F2A)',
    span:  '',
    large: false,
  },
  {
    label: 'The Bite',
    sub:   'Crispy outside. Soft inside. Loaded with flavor',
    bg:    'linear-gradient(150deg, #8B4F2A, #D4882B)',
    span:  'lg:col-span-2',
    large: false,
  },
]

// Reusable chimney SVG watermark
function CakeWatermark({ size = 140 }) {
  return (
    <svg
      width={size}
      height={Math.round(size * 1.45)}
      viewBox="0 0 140 202"
      fill="none"
      className="opacity-[0.13]"
      aria-hidden="true"
    >
      <rect x="63" y="6" width="14" height="184" rx="7" fill="#F6EDD9" />
      {Array.from({ length: 9 }, (_, i) => (
        <ellipse
          key={i}
          cx="70"
          cy={24 + i * 19}
          rx={52 - i * 3}
          ry={9}
          stroke="#F6EDD9"
          strokeWidth="3"
          opacity={1 - i * 0.09}
        />
      ))}
    </svg>
  )
}

export default function BrandExperience() {
  return (
    <section className="section-pad bg-cream">
      <div className="section-container">

        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-overline mb-3">How It Hits</p>
          <h2
            className="font-serif font-light text-espresso leading-tight"
            style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.85rem)' }}
          >
            Fire-Baked.
            <br />
            <em className="italic">Never Fried</em>
          </h2>
        </motion.div>

        {/* Mosaic grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          style={{ gridAutoRows: '220px' }}
        >
          {PANELS.map((panel, i) => (
            <motion.div
              key={panel.label}
              className={`relative overflow-hidden rounded-xl flex items-end p-6 ${panel.span}`}
              style={{ background: panel.bg }}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.65, delay: i * 0.09, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ scale: 1.015 }}
            >
              {/* Watermark */}
              <div className="absolute inset-0 flex items-center justify-center">
                <CakeWatermark size={panel.large ? 180 : 115} />
              </div>

              {/* Text */}
              <div className="relative z-10">
                <p
                  className="font-serif font-light text-cream"
                  style={{ fontSize: panel.large ? '1.7rem' : '1.15rem', marginBottom: '0.22rem' }}
                >
                  {panel.label}
                </p>
                <p
                  className="font-sans font-light"
                  style={{ color: 'rgba(246,237,217,0.42)', fontSize: '0.7rem', letterSpacing: '0.06em' }}
                >
                  {panel.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
