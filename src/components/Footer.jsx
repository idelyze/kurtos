import { waLink, ZOMATO_URL, WA_NUMBER } from '../constants/menu'

const FOOTER_COLS = [
  {
    title: 'Order',
    links: [
      { label: 'Order on WhatsApp', href: `https://wa.me/${WA_NUMBER}` },
      { label: 'Zomato',        href: ZOMATO_URL                    },
      { label: 'View Menu',     href: '#menu'                       },
    ],
  },
  {
    title: 'Brand',
    links: [
      { label: 'About Kurtos',      href: '#our-story' },
      { label: 'How It Works',   href: '#'          },
      { label: 'Partner With Us', href: '#'          },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'Instagram',   href: 'https://instagram.com' },
      { label: 'WhatsApp',    href: `https://wa.me/${WA_NUMBER}` },
      { label: 'Quick Help',  href: waLink('Hi! I have a question about Kurtos Kalacs.') },
    ],
  },
]

const socialLinks = [
  { label: 'W', href: `https://wa.me/${WA_NUMBER}`, title: 'WhatsApp' },
  { label: 'IG', href: 'https://instagram.com',     title: 'Instagram' },
]

export default function Footer() {
  return (
    <footer
      className="px-10 pt-16 pb-8"
      style={{ background: '#080300' }}
    >
      <div className="section-container">

        {/* Top grid */}
        <div
          className="grid gap-10 mb-12 pb-8"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            borderBottom:        '1px solid rgba(246,237,217,0.05)',
          }}
        >
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div
              className="font-serif font-light text-cream mb-4"
              style={{ fontSize: '1.5rem' }}
            >
              Kurtos Kalacs
            </div>

            <p
              className="font-sans font-light mb-6"
              style={{
                color:      'rgba(246,237,217,0.27)',
                fontSize:   '0.82rem',
                lineHeight: '1.85',
                maxWidth:   '220px',
              }}
            >
              Freshly baked kurtos, straight off the flame. Crispy outside, soft inside, loaded your way — sweet or savory, always served hot in Bhopal.
            </p>

            {/* Social icons */}
            <div className="flex gap-2">
              {socialLinks.map(({ label, href, title }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={title}
                  className="font-sans flex items-center justify-center no-underline"
                  style={{
                    width:        '36px',
                    height:       '36px',
                    borderRadius: '50%',
                    border:       '1px solid rgba(246,237,217,0.12)',
                    color:        'rgba(246,237,217,0.4)',
                    fontSize:     '0.7rem',
                    letterSpacing:'0.02em',
                    transition:   'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#C07830'
                    e.currentTarget.style.color = '#C07830'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(246,237,217,0.12)'
                    e.currentTarget.style.color = 'rgba(246,237,217,0.4)'
                  }}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {FOOTER_COLS.map(({ title, links }) => (
            <div key={title}>
              <p
                className="font-sans uppercase mb-5"
                style={{
                  color:         'rgba(246,237,217,0.22)',
                  fontSize:      '0.62rem',
                  letterSpacing: '0.2em',
                }}
              >
                {title}
              </p>

              <nav>
                {links.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noreferrer' : undefined}
                    className="block font-sans font-light no-underline mb-[0.55rem]"
                    style={{
                      color:         'rgba(246,237,217,0.4)',
                      fontSize:      '0.82rem',
                      letterSpacing: '0.02em',
                      transition:    'color 0.18s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#C07830')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(246,237,217,0.4)')}
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 flex-wrap">
          <p
            className="font-sans"
            style={{ color: 'rgba(246,237,217,0.18)', fontSize: '0.72rem' }}
          >
            © {new Date().getFullYear()} Kurtos Kalacs — Bhopal, India.
          </p>
          <p
            className="font-sans"
            style={{ color: 'rgba(246,237,217,0.18)', fontSize: '0.72rem' }}
          >
            From Hungary to Bhopal — Fresh till 4:30 AM 🔥
          </p>
        </div>
      </div>
    </footer>
  )
}
