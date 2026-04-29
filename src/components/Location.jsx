import { motion } from 'framer-motion'
import { waLink, ZOMATO_URL, STORE } from '../constants/menu'

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  },
})

export default function Location() {
  const storeRows = [
    { label: 'City',     value: STORE.city    },
    { label: 'Hours',    value: STORE.hours   },
    { label: 'Phone',    value: STORE.phone   },
    { label: 'Ordering', value: STORE.ordering },
  ]

  return (
    <section id="location" className="section-pad bg-cream-light">
      <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* ── Left: info ── */}
        <div>
          <motion.p
            variants={fadeUp(0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="text-overline mb-3"
          >
            Visit Us
          </motion.p>

          <motion.h2
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="font-serif font-light text-espresso leading-tight mb-8"
            style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.85rem)' }}
          >
            Come Grab
            <br />
            <em className="italic">Your Kurtos</em>
          </motion.h2>

          {/* Store detail rows */}
          <motion.div
            variants={fadeUp(0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="mb-8"
          >
            {storeRows.map(({ label, value }) => (
              <div
                key={label}
                className="flex gap-4 py-3"
                style={{ borderBottom: '1px solid rgba(92,46,20,0.07)' }}
              >
                <span
                  className="font-sans uppercase text-muted flex-shrink-0"
                  style={{ fontSize: '0.62rem', letterSpacing: '0.14em', width: '72px', paddingTop: '2px' }}
                >
                  {label}
                </span>
                <span
                  className="font-sans text-espresso-mid"
                  style={{ fontSize: '0.88rem' }}
                >
                  {value}
                </span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={fadeUp(0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="flex flex-wrap gap-3"
          >
            <a
              href={waLink('Hi! Can you share more details about your location and delivery areas?')}
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat & Order
            </a>

            <a
              href={ZOMATO_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-zomato"
            >
              Order Now on Zomato
            </a>
          </motion.div>
        </div>

        {/* ── Right: map placeholder ── */}
        <motion.div
          variants={fadeUp(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="relative rounded-2xl overflow-hidden flex items-center justify-center"
          style={{
            aspectRatio: '1',
            background:  'linear-gradient(155deg, rgba(92,46,20,0.06) 0%, rgba(139,79,42,0.12) 100%)',
            border:      '1px solid rgba(92,46,20,0.1)',
          }}
        >
          {/* Grid decoration */}
          <svg
            className="absolute inset-0 w-full h-full opacity-[0.06]"
            viewBox="0 0 400 400"
            aria-hidden="true"
          >
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <line key={`h${i}`} x1="0" y1={i * 72} x2="400" y2={i * 72} stroke="#5C2E14" strokeWidth="1" />
            ))}
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <line key={`v${i}`} x1={i * 72} y1="0" x2={i * 72} y2="400" stroke="#5C2E14" strokeWidth="1" />
            ))}
            <path d="M60 260 Q200 80 340 200" stroke="#8B4F2A" strokeWidth="2" fill="none" />
            <path
              d="M80 310 Q180 150 350 260"
              stroke="#C07830"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="6 4"
            />
          </svg>

          {/* Pin & info */}
          <div className="relative z-10 text-center px-8">
            {/* Map pin */}
            <motion.div
              className="mx-auto mb-4 flex items-center justify-center"
              style={{
                width:        '44px',
                height:       '44px',
                borderRadius: '50% 50% 50% 0',
                transform:    'rotate(-45deg)',
                background:   '#C07830',
                boxShadow:    '0 8px 24px rgba(192,120,48,0.4)',
              }}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div
                style={{
                  width:        '16px',
                  height:       '16px',
                  background:   '#F6EDD9',
                  borderRadius: '50%',
                  transform:    'rotate(45deg)',
                }}
              />
            </motion.div>

            <p
              className="font-sans font-medium text-bark mb-1"
              style={{ fontSize: '0.88rem' }}
            >
              Bhopal, Madhya Pradesh
            </p>
            <p
              className="font-sans text-muted mb-5"
              style={{ fontSize: '0.72rem' }}
            >
              DM on WhatsApp for exact location & quick directions
            </p>

            <a
              href={waLink('Hi! Can you share your exact location / address for navigation?')}
              target="_blank"
              rel="noreferrer"
              className="font-sans uppercase no-underline"
              style={{
                padding:       '0.48rem 1.2rem',
                background:    'rgba(192,120,48,0.1)',
                border:        '1px solid rgba(192,120,48,0.25)',
                borderRadius:  '100px',
                color:         '#8B4F2A',
                fontSize:      '0.68rem',
                letterSpacing: '0.08em',
                transition:    'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(192,120,48,0.18)'
                e.target.style.borderColor = '#C07830'
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(192,120,48,0.1)'
                e.target.style.borderColor = 'rgba(192,120,48,0.25)'
              }}
            >
              Get Location →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
