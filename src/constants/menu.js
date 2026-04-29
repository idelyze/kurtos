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
    category: 'Veg',
    color: '#4A1F0F',
    accent: '#A65A2E',
    items: [
      {
        name: 'Cheese Corn Kurtos',
        price: 169,
        desc: 'Creamy cheese and corn filling inside hot, crispy kurtos.',
      },
      {
        name: 'Paneer Schezwan Kurtos',
        price: 179,
        desc: 'Spicy paneer with schezwan sauce, loaded inside fresh hot kurtos.',
      },
      {
        name: 'Paneer Makhani Kurtos',
        price: 179,
        desc: 'Rich makhani paneer filling, creamy and satisfying.',
      },
      {
        name: 'Paneer Tandoori Kurtos',
        price: 179,
        desc: 'Smoky tandoori paneer wrapped in crispy hot kurtos.',
      },
      {
        name: 'Paneer Extravaganza',
        price: 189,
        desc: 'Loaded paneer mix with sauces and toppings. Heavy, filling, and bold.',
      },
    ],
  },
  {
    category: 'Non-Veg',
    color: '#2C1208',
    accent: '#5C2E14',
    items: [
      {
        name: 'Chicken Schezwan Kurtos',
        price: 179,
        desc: 'Spicy chicken schezwan filling inside hot crispy kurtos.',
      },
      {
        name: 'Chicken Makhani Kurtos',
        price: 179,
        desc: 'Creamy butter chicken style filling, rich and satisfying.',
      },
      {
        name: 'Chicken Tandoori Kurtos',
        price: 179,
        desc: 'Smoky tandoori chicken wrapped in hot kurtos.',
      },
      {
        name: 'Chicken Extravaganza',
        price: 189,
        desc: 'Loaded chicken mix with sauces and toppings. Heavy, bold, and filling.',
      },
    ],
  },
  {
    category: 'Desserts',
    color: '#6B3A10',
    accent: '#D4882B',
    items: [
      {
        name: 'Snow White Kurtos Rings',
        price: 179,
        desc: 'Sweet creamy dessert rings with soft texture and light sweetness.',
      },
      {
        name: 'Choco Fantasy Kurtos Rings',
        price: 179,
        desc: 'Chocolate-loaded dessert rings for a rich sweet craving.',
      },
    ],
  },
  {
    category: 'Mocktails',
    color: '#7A4020',
    accent: '#C8934A',
    items: [
      {
        name: 'Mint Mojito',
        price: 119,
        desc: 'Fresh mint, lime, and soda. Cool and refreshing.',
      },
      {
        name: 'Blueberry Mojito',
        price: 119,
        desc: 'Sweet blueberry twist with a refreshing mint base.',
      },
      {
        name: 'Green Apple Mojito',
        price: 119,
        desc: 'Tangy green apple flavor with soda freshness.',
      },
      {
        name: 'Watermelon Mojito',
        price: 119,
        desc: 'Light watermelon flavor, refreshing and smooth.',
      },
    ],
  },
]

// ─────────────────────────────────────────
//  STORE INFO
// ─────────────────────────────────────────

export const STORE = {
  city:    'Bhopal, Madhya Pradesh',
  hours:   '4:30 PM – 4:30 AM, Daily',
  phone:   '+91 98765 43210',
  ordering:'WhatsApp & Zomato',
}
