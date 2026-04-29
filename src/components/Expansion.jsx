import { motion } from 'framer-motion'
import { waLink } from '../constants/menu'

const STATS = [
  { n: '1',  label: 'Cities Live'       },
  { n: '3+', label: 'Coming Next'       },
  { n: '∞',  label: 'Growth Mode'       },
]

export default function Expansion() {
  return (
    <section
      className="section-pad text-center"
      style={{ background: '#1A0A05' }}
    >
      <div className="section-container max-w-2xl">

        {/* "Coming Soon" pill */}
        <motion.div
          className="inline-block mb-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="font-sans font-normal uppercase text-caramel"
            style={{
              background:    'rgba(192,120,48,0.08)',
              border:        '1px solid rgba(192,120,48,0.18)',
              borderRadius:  '100px',
              padding:       '0.38rem 1.2rem',
              fontSize:      '0.65rem',
              letterSpacing: '0.2em',
            }}
          >
            Expanding Fast
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="font-serif font-light text-cream leading-tight mb-6"
          style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3.2rem)' }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.08 }}
        >
          Kurtos is Growing
          <br />
          <em className="italic text-caramel">Across Cities</em>
        </motion.h2>

        {/* Body */}
        <motion.p
          className="font-sans font-light mb-12 mx-auto"
          style={{
            color:      'rgba(246,237,217,0.36)',
            fontSize:   '0.92rem',
            lineHeight: '1.9',
            maxWidth:   '520px',
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.18 }}
        >
          Started in Bhopal, now scaling fast. More outlets, more cities, and more late-night cravings covered. We’re building a strong street-food brand — and opening doors for partners who want to grow with us.
        </motion.p>

        {/* Stats row */}
        <motion.div
          className="flex justify-center gap-12 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          {STATS.map(({ n, label }) => (
            <div key={label}>
              <div
                className="font-serif font-light text-caramel"
                style={{ fontSize: '2.6rem', lineHeight: 1 }}
              >
                {n}
              </div>
              <div
                className="font-sans uppercase mt-2"
                style={{
                  color:         'rgba(246,237,217,0.3)',
                  fontSize:      '0.62rem',
                  letterSpacing: '0.12em',
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.a
          href={waLink(
            "Hi! I'm interested in partnering with Kurtos. Please share franchise details and next steps."
          )}
          target="_blank"
          rel="noreferrer"
          className="inline-block font-sans font-normal uppercase no-underline text-caramel"
          style={{
            padding:       '0.8rem 2rem',
            border:        '1px solid rgba(192,120,48,0.32)',
            borderRadius:  '100px',
            fontSize:      '0.76rem',
            letterSpacing: '0.1em',
            transition:    'all 0.25s ease',
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.32 }}
          whileHover={{
            background:   'rgba(192,120,48,0.08)',
            borderColor:  '#C07830',
          }}
          whileTap={{ scale: 0.97 }}
        >
          Partner With Us →
        </motion.a>
      </div>
    </section>
  )
}
