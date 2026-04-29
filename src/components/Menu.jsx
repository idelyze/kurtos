import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MENU, ZOMATO_URL } from '../constants/menu'
import MenuCard from './MenuCard'

export default function Menu() {
  const [activeTab, setActiveTab] = useState(MENU[0].category)

  const activeCategory = MENU.find((c) => c.category === activeTab)

  return (
    <section id="menu" className="section-pad bg-cream">
      <div className="section-container">

        {/* ── Section header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65 }}
          >
            <p className="text-overline mb-3">Our Menu</p>
            <h2
              className="font-serif font-light text-espresso leading-tight"
              style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.85rem)' }}
            >
              Choose Your
              <br />
              <em className="italic">Chimney Cake</em>
            </h2>
          </motion.div>

          {/* Zomato CTA — naturally integrated, not dominant */}
          <motion.a
            href={ZOMATO_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-zomato self-start md:self-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {/* Zomato flame icon */}
            <svg width="13" height="13" viewBox="0 0 24 24" fill="white" aria-hidden="true">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            </svg>
            Order on Zomato
          </motion.a>
        </div>

        {/* ── Category tabs ── */}
        <motion.div
          className="flex flex-wrap gap-2 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {MENU.map(({ category }) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`tab-btn ${
                activeTab === category ? 'tab-btn-active' : 'tab-btn-inactive'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* ── Menu grid with AnimatePresence ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {activeCategory?.items.map((item, i) => (
              <MenuCard
                key={item.name}
                item={item}
                color={activeCategory.color}
                accent={activeCategory.accent}
                index={i}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ── Bottom note ── */}
        <motion.p
          className="text-center font-sans font-light text-muted mt-10"
          style={{ fontSize: '0.78rem' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          All cakes made fresh to order. Customisations available — just ask on WhatsApp.
        </motion.p>
      </div>
    </section>
  )
}
