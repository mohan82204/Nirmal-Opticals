import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-scroll'
import { useLang } from '../context/LanguageContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { lang, toggleLang, t } = useLang()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { key: 'home',        to: 'hero' },
    { key: 'collections', to: 'collections' },
    { key: 'services',    to: 'services' },
    { key: 'about',       to: 'whyus' },
    { key: 'contact',     to: 'contact' },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          padding: scrolled ? '16px 48px' : '28px 48px',
          background: scrolled ? 'rgba(6, 6, 14, 0.92)' : 'rgba(6, 6, 14, 0)',
          borderBottomColor: scrolled ? 'rgba(201, 168, 76, 0.1)' : 'rgba(201, 168, 76, 0)',
        }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 900,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backdropFilter: scrolled ? 'blur(24px)' : 'none',
          borderBottomWidth: '1px',
          borderBottomStyle: 'solid',
        }}
      >
        {/* Logo */}
        <motion.div style={{ display: 'flex', alignItems: 'center', gap: '10px' }} whileHover={{ scale: 1.02 }}>
          <svg width="36" height="20" viewBox="0 0 36 20">
            <circle cx="9"  cy="10" r="8" fill="none" stroke="#c9a84c" strokeWidth="1.5" />
            <circle cx="27" cy="10" r="8" fill="none" stroke="#c9a84c" strokeWidth="1.5" />
            <line x1="17" y1="10" x2="19" y2="10" stroke="#c9a84c" strokeWidth="1.5" />
            <line x1="1"  y1="10" x2="0"  y2="6"  stroke="#c9a84c" strokeWidth="1.5" />
            <line x1="35" y1="10" x2="36" y2="6"  stroke="#c9a84c" strokeWidth="1.5" />
          </svg>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 400, color: 'var(--ivory)', letterSpacing: '1px', lineHeight: 1 }}>Nirmal</div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.55rem', letterSpacing: '4px', color: 'var(--gold)', textTransform: 'uppercase', fontWeight: 500 }}>OPTICALS</div>
          </div>
        </motion.div>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-nav">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.key}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 + 0.3 }}
            >
              <Link
                to={link.to}
                smooth={true}
                duration={800}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.78rem',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: 'var(--ivory-dim)',
                  cursor: 'pointer',
                  transition: 'color 0.3s',
                  textDecoration: 'none',
                  fontWeight: 400,
                }}
                activeStyle={{ color: 'var(--gold)' }}
                onMouseEnter={e => e.target.style.color = 'var(--gold)'}
                onMouseLeave={e => e.target.style.color = 'var(--ivory-dim)'}
              >
                {t('nav', link.key)}
              </Link>
            </motion.div>
          ))}

          {/* ── Language Toggle ── */}
          <motion.button
            onClick={toggleLang}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            whileHover={{ scale: 1.05, borderColor: 'rgba(201,168,76,0.6)' }}
            whileTap={{ scale: 0.95 }}
            title={lang === 'ta' ? 'Switch to English' : 'தமிழில் மாற்று'}
            style={{
              background: 'rgba(201,168,76,0.06)',
              border: '1px solid rgba(201,168,76,0.3)',
              color: 'var(--gold)',
              padding: '9px 18px',
              fontSize: '0.72rem',
              letterSpacing: '1.5px',
              fontFamily: 'var(--font-body)',
              cursor: 'pointer',
              borderRadius: '2px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              transition: 'all 0.3s ease',
              flexShrink: 0,
              fontWeight: 500,
            }}
          >
            <span style={{ fontSize: '0.9rem' }}>{lang === 'ta' ? '🇮🇳' : '🇬🇧'}</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={lang}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2 }}
              >
                {lang === 'ta' ? 'EN' : 'தமிழ்'}
              </motion.span>
            </AnimatePresence>
          </motion.button>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
            <Link to="contact" smooth={true} duration={800} style={{ cursor: 'pointer' }}>
              <button className="btn-primary" style={{ padding: '10px 24px', fontSize: '0.72rem', cursor: 'pointer' }}>
                <span>{t('nav', 'bookEyeTest')}</span>
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Mobile hamburger */}
        <div style={{ display: 'none', alignItems: 'center', gap: '12px' }} className="mobile-right">
          {/* Mobile language toggle */}
          <button
            onClick={toggleLang}
            style={{
              background: 'rgba(201,168,76,0.1)',
              border: '1px solid rgba(201,168,76,0.3)',
              color: 'var(--gold)',
              padding: '5px 10px',
              fontSize: '0.65rem',
              fontFamily: 'var(--font-body)',
              cursor: 'pointer',
              letterSpacing: '1px',
            }}
          >
            {lang === 'ta' ? 'EN' : 'தமிழ்'}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '5px', padding: '4px' }}
            className="mobile-menu-btn"
          >
            {[0, 1, 2].map(i => (
              <motion.div
                key={i}
                style={{ width: '24px', height: '1px', background: 'var(--ivory)', transformOrigin: 'center' }}
                animate={
                  menuOpen
                    ? i === 0 ? { rotate: 45, y: 6 }
                    : i === 1 ? { opacity: 0 }
                    : { rotate: -45, y: -6 }
                    : { rotate: 0, y: 0, opacity: 1 }
                }
                transition={{ duration: 0.3 }}
              />
            ))}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            style={{
              position: 'fixed', top: 0, right: 0, bottom: 0, width: '280px',
              background: 'rgba(6, 6, 14, 0.98)',
              backdropFilter: 'blur(40px)',
              zIndex: 800,
              padding: '100px 40px 40px',
              display: 'flex', flexDirection: 'column', gap: '32px',
              borderLeft: '1px solid rgba(201, 168, 76, 0.1)',
            }}
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.key}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                <Link
                  to={link.to}
                  smooth={true}
                  duration={800}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.8rem', fontWeight: 300,
                    color: 'var(--ivory)', cursor: 'pointer',
                    display: 'block', textDecoration: 'none',
                  }}
                >
                  {t('nav', link.key)}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-right { display: flex !important; }
          nav { padding: 20px 24px !important; }
        }
      `}</style>
    </>
  )
}
