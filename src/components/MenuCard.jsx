import { motion } from 'framer-motion'
import { waLink, WA_NUMBER } from '../constants/menu'

/**
 * MenuCard
 *
 * @param {{ item: import('../constants/menu').MenuItem, color: string, accent: string, index: number }} props
 */
export default function MenuCard({ item, color, accent, index = 0 }) {
  const orderMessage = `Hi! I'd like to order *${item.name}* from Kurtos Kalacs.\nPrice: ₹${item.price}\n\nPlease confirm availability and delivery details.`

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.6,
        delay:    index * 0.08,
        ease:     [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ y: -6, boxShadow: '0 24px 60px rgba(26,10,5,0.18)' }}
      className="menu-card bg-cream-light rounded-xl overflow-hidden"
      style={{ border: '1px solid rgba(92,46,20,0.09)' }}
    >
      {/* ── Image / illustration pane ── */}
      <div
        className="relative flex items-center justify-center"
        style={{
          height:     '175px',
          background: `linear-gradient(150deg, ${color}90 0%, ${color} 100%)`,
        }}
      >
        {/* Chimney cake SVG */}
        <svg
          width="72"
          height="100"
          viewBox="0 0 72 100"
          fill="none"
          aria-hidden="true"
        >
          <rect x="31" y="4" width="10" height="84" rx="5" fill="#C07830" opacity="0.85" />
          {Array.from({ length: 7 }, (_, i) => (
            <ellipse
              key={i}
              cx="36"
              cy={17 + i * 12}
              rx={28 - i * 2}
              ry={5.5 - i * 0.25}
              stroke="rgba(246,237,217,0.72)"
              strokeWidth={2.4}
              opacity={1 - i * 0.1}
            />
          ))}
        </svg>

        {/* Price chip */}
        <span
          className="absolute top-3 right-3 font-sans font-medium text-cream"
          style={{
            background:     'rgba(246,237,217,0.12)',
            backdropFilter: 'blur(6px)',
            border:         '1px solid rgba(246,237,217,0.18)',
            borderRadius:   '100px',
            padding:        '0.2rem 0.72rem',
            fontSize:       '0.74rem',
          }}
        >
          ₹{item.price}
        </span>
      </div>

      {/* ── Content ── */}
      <div className="p-5">
        <h3
          className="font-serif font-normal text-espresso mb-1"
          style={{ fontSize: '1.28rem' }}
        >
          {item.name}
        </h3>

        <p
          className="font-sans font-light text-muted mb-5"
          style={{ fontSize: '0.8rem', lineHeight: '1.7' }}
        >
          {item.desc}
        </p>

        <motion.a
          href={waLink(orderMessage)}
          target="_blank"
          rel="noreferrer"
          className="btn-dark block text-center"
          whileTap={{ scale: 0.97 }}
          style={{ fontSize: '0.74rem' }}
        >
          Order via WhatsApp
        </motion.a>
      </div>
    </motion.div>
  )
}
