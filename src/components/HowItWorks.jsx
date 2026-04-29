import { motion } from 'framer-motion'

const STEPS = [
  {
    number: '01',
    title:  'Pick Your Kurtos',
    desc:   'Sweet or savory, chocolate or loaded — choose what you’re craving. Everything is made fresh, live on flame.',
  },
  {
    number: '02',
    title:  'Tap & Order',
    desc:   'Hit order and WhatsApp opens instantly with your item and price. No typing, no waiting.',
  },
  {
    number: '03',
    title:  'Get It Hot',
    desc:   'Confirm your order and location. Your hot kurtos is prepared fresh and sent out fast — even late night.',
  },
]

export default function HowItWorks() {
  return (
    <section
      className="section-pad"
      style={{ background: '#1A0A05' }}
    >
      <div className="section-container">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
        >
          <p
            className="font-sans font-normal uppercase text-caramel mb-3"
            style={{ fontSize: '0.72rem', letterSpacing: '0.25em' }}
          >
            How It Works
          </p>
          <h2
            className="font-serif font-light text-cream leading-tight"
            style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.85rem)' }}
          >
            3 Steps to
            <br />
            <em className="italic text-caramel">Hot Kurtos</em>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Connector line — desktop only */}
          <div
            className="hidden md:block absolute"
            style={{
              top:        '2.8rem',
              left:       'calc(16.6% + 1.75rem)',
              right:      'calc(16.6% + 1.75rem)',
              height:     '1px',
              background: 'linear-gradient(90deg, #C07830, rgba(192,120,48,0.12), #C07830)',
              pointerEvents: 'none',
            }}
            aria-hidden="true"
          />

          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.65, delay: i * 0.14, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-center px-4"
            >
              {/* Number circle */}
              <motion.div
                className="mx-auto mb-7 flex items-center justify-center relative z-10"
                style={{
                  width:        '3.5rem',
                  height:       '3.5rem',
                  borderRadius: '50%',
                  border:       '1px solid rgba(192,120,48,0.38)',
                  background:   'rgba(192,120,48,0.06)',
                }}
                whileHover={{
                  scale:     1.1,
                  boxShadow: '0 0 0 10px rgba(192,120,48,0.08)',
                }}
                transition={{ duration: 0.25 }}
              >
                <span
                  className="font-serif font-light text-caramel"
                  style={{ fontSize: '1.1rem' }}
                >
                  {step.number}
                </span>
              </motion.div>

              <h3
                className="font-serif font-normal text-cream mb-3"
                style={{ fontSize: '1.38rem' }}
              >
                {step.title}
              </h3>

              <p
                className="font-sans font-light"
                style={{
                  color:      'rgba(246,237,217,0.4)',
                  fontSize:   '0.82rem',
                  lineHeight: '1.85',
                }}
              >
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
