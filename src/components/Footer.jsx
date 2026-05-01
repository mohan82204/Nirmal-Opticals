import React from 'react'
import { motion } from 'framer-motion'
import { useLang } from '../context/LanguageContext'
import translations from '../i18n/translations'

export default function Footer() {
  const { lang, t } = useLang()
  const tx = translations.footer

  const footerLinkCategories = [
    { key: 'collections', items: tx.links.collections },
    { key: 'services',    items: tx.links.services },
  ]

  return (
    <footer style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border-subtle)',
      padding: '80px 48px 40px',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Top */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr repeat(2, 1fr)',
          gap: '60px',
          marginBottom: '60px',
        }}>
          {/* Brand column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <svg width="36" height="20" viewBox="0 0 36 20">
                <circle cx="9" cy="10" r="8" fill="none" stroke="#c9a84c" strokeWidth="1.5" />
                <circle cx="27" cy="10" r="8" fill="none" stroke="#c9a84c" strokeWidth="1.5" />
                <line x1="17" y1="10" x2="19" y2="10" stroke="#c9a84c" strokeWidth="1.5" />
                <line x1="1" y1="10" x2="0" y2="6" stroke="#c9a84c" strokeWidth="1.5" />
                <line x1="35" y1="10" x2="36" y2="6" stroke="#c9a84c" strokeWidth="1.5" />
              </svg>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 400, color: 'var(--ivory)', lineHeight: 1 }}>Nirmal</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.55rem', letterSpacing: '4px', color: 'var(--gold)', textTransform: 'uppercase', fontWeight: 500 }}>OPTICALS</div>
              </div>
            </div>
            <p style={{ color: 'var(--ivory-dim)', fontSize: '0.85rem', lineHeight: 1.8, marginBottom: '28px', fontWeight: 300 }}>
              {t('footer', 'tagline')}
            </p>
            {/* Social icons */}
            <div style={{ display: 'flex', gap: '12px' }}>
              {[
                { name: 'Instagram', url: '#', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
                { name: 'WhatsApp', url: 'https://wa.me/919994206952', path: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z' },
              ].map(social => (
                <motion.a key={social.name} href={social.url} target={social.url !== '#' ? '_blank' : undefined} whileHover={{ scale: 1.1, borderColor: 'rgba(201,168,76,0.5)' }} style={{ width: '36px', height: '36px', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center' }} data-hover>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#c9a84c"><path d={social.path} /></svg>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinkCategories.map(cat => (
            <div key={cat.key}>
              <h4 style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '24px', fontWeight: 500 }}>
                {tx.columns[cat.key][lang]}
              </h4>
              <ul style={{ listStyle: 'none' }}>
                {Object.keys(cat.items).map(linkKey => (
                  <li key={linkKey} style={{ marginBottom: '12px' }}>
                    <motion.a href="#" initial={{ color: 'var(--ivory-dim)' }} whileHover={{ color: 'var(--ivory)' }} style={{ fontSize: '0.85rem', textDecoration: 'none', fontWeight: 300 }}>
                      {cat.items[linkKey][lang]}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'var(--border-subtle)', marginBottom: '30px' }} />

        {/* Bottom bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.78rem', fontWeight: 300 }}>
            {t('footer', 'copyright')}
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            {['privacy', 'terms', 'refund'].map(key => (
              <motion.a key={key} href="#" initial={{ color: 'rgba(255,255,255,0.2)' }} whileHover={{ color: 'rgba(242, 237, 228, 0.6)' }} style={{ fontSize: '0.75rem', textDecoration: 'none' }}>
                {tx[key][lang]}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { footer > div > div:first-child { grid-template-columns: 1fr 1fr !important; gap: 40px !important; } footer { padding: 60px 24px 30px !important; } }
        @media (max-width: 480px) { footer > div > div:first-child { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  )
}
