/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream:    '#F6EDD9',
        'cream-light': '#FBF7EF',
        espresso: '#1A0A05',
        'espresso-deep': '#080300',
        'espresso-mid': '#2C1208',
        bark:     '#5C2E14',
        mahogany: '#8B4F2A',
        caramel:  '#C07830',
        gold:     '#D4882B',
        muted:    '#9B8070',
      },
      fontFamily: {
        sans:  ["'Jost'", 'sans-serif'],
        serif: ["'Cormorant Garamond'", 'serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
        widest3: '0.28em',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
    },
  },
  plugins: [],
}
