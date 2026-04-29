// ─────────────────────────────────────────
//  BRAND CONFIG
// ─────────────────────────────────────────

/** WhatsApp number — country code + number, no spaces or symbols */
export const WA_NUMBER = '919876543210'

/** Build a WhatsApp deep link with a pre-filled message */
export const waLink = (message) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`

/** Zomato restaurant link — replace with your actual Zomato URL */
export const ZOMATO_URL = 'https://www.zomato.com'

// ─────────────────────────────────────────
//  MENU DATA
// ─────────────────────────────────────────

/**
 * @typedef {Object} MenuItem
 * @property {string} name
 * @property {number} price  — in INR
 * @property {string} desc
 */

/**
 * @typedef {Object} MenuCategory
 * @property {string}     category
 * @property {string}     color     — dark gradient stop
 * @property {string}     accent    — light gradient stop
 * @property {MenuItem[]} items
 */

/** @type {MenuCategory[]} */
export const MENU = [
  {
    category: 'Classic',
    color:  '#7A4020',
    accent: '#C8934A',
    items: [
      {
        name:  'Original',
        price: 149,
        desc:  'Pure tradition. Crispy spiral dusted with vanilla sugar.',
      },
      {
        name:  'Cinnamon Sugar',
        price: 159,
        desc:  'Warm spiced cinnamon on our signature golden roll.',
      },
      {
        name:  'Vanilla Dream',
        price: 149,
        desc:  'Light vanilla essence with caramelised sugar crust.',
      },
    ],
  },
  {
    category: 'Chocolate',
    color:  '#2C1208',
    accent: '#5C2E14',
    items: [
      {
        name:  'Dark Chocolate',
        price: 179,
        desc:  'Rich Belgian dark chocolate draped over the warm spiral.',
      },
      {
        name:  'Nutella',
        price: 189,
        desc:  'Generous hazelnut fill with a light cocoa dusting.',
      },
      {
        name:  'Almond Crunch',
        price: 199,
        desc:  'Dark chocolate with roasted almond crumble on top.',
      },
    ],
  },
  {
    category: 'Premium',
    color:  '#6B3A10',
    accent: '#D4882B',
    items: [
      {
        name:  'Lotus Biscoff',
        price: 219,
        desc:  'Caramelised biscuit spread with cookie crumble.',
      },
      {
        name:  'Pistachio Rose',
        price: 229,
        desc:  'Rose water glaze with crushed pistachios.',
      },
      {
        name:  'Caramel Sea Salt',
        price: 219,
        desc:  'Salted caramel drizzle on a buttery golden base.',
      },
    ],
  },
]

// ─────────────────────────────────────────
//  STORE INFO
// ─────────────────────────────────────────

export const STORE = {
  city:    'Bhopal, Madhya Pradesh',
  hours:   '11 AM – 10 PM, Daily',
  phone:   '+91 98765 43210',
  ordering:'WhatsApp Preferred',
}
