import React, { useState, useEffect, lazy, Suspense } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-scroll'
import { useLang } from '../context/LanguageContext'
import translations from '../i18n/translations'

const ThreeScene = lazy(() => import('./HeroCanvas'))

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0)
  const prefersReduced = useReducedMotion()
  const { lang, t } = useLang()

  const words = translations.hero.words[lang]

  useEffect(() => {
    if (prefersReduced) return
    const id = setInterval(() => setWordIndex(i => (i + 1) % words.length), 2500)
    return () => clearInterval(id)
  }, [prefersReduced, words.length])

  const fadeUp = prefersReduced
    ? {}
    : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }

  const stats = [
    { num: '34+',   node: translations.hero.stats.years },
    { num: '5000+', node: translations.hero.stats.customers },
    { num: '1500+',  node: translations.hero.stats.frames },
  ]

  return (
    <section
      id="hero"
      style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', transform: 'translateZ(0)' }}
    >
      <Suspense fallback={null}><ThreeScene /></Suspense>

      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 80% at 60% 50%, rgba(201,168,76,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '200px', background: 'linear-gradient(to top, var(--bg-primary), transparent)', pointerEvents: 'none' }} />

      <div style={{
        position: 'relative', zIndex: 2,
        maxWidth: '1200px', margin: '0 auto',
        padding: '0 48px', paddingTop: '120px',
        width: '100%',
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: '60px', alignItems: 'center',
      }}>
        {/* Left */}
        <div>
          <div className="hero-fade-in" style={{ '--delay': '0.4s' }}>
            <span className="eyebrow">{t('hero', 'eyebrow')}</span>
          </div>

          <motion.h1
            {...fadeUp}
            transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontSize: 'clamp(3.2rem, 6vw, 5.5rem)', fontWeight: 300, color: 'var(--ivory)', marginTop: '24px', lineHeight: 1.05 }}
          >
            {t('hero', 'headline')} <br />
            {t('hero', 'headlineWith')}{' '}
            <motion.span
              key={`${lang}-${wordIndex}`}
              initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
              animate={prefersReduced ? {} : { opacity: 1, y: 0 }}
              exit={prefersReduced ? {} : { opacity: 0, y: -20 }}
              transition={{ duration: 0.45 }}
              style={{ display: 'inline-block', color: 'var(--gold)', fontStyle: 'italic' }}
            >
              {words[wordIndex]}
            </motion.span>
          </motion.h1>

          <div className="hero-fade-in" style={{ '--delay': '0.9s' }}>
            <p style={{ marginTop: '24px', fontSize: '1.05rem', color: 'var(--ivory-dim)', maxWidth: '420px', lineHeight: 1.8, fontWeight: 300 }}>
              {t('hero', 'subtext')}
            </p>
          </div>

          <div className="hero-fade-in" style={{ '--delay': '1.1s', display: 'flex', gap: '16px', marginTop: '40px', flexWrap: 'wrap' }}>
            <Link to="collections" smooth duration={800} style={{ cursor: 'pointer' }}>
              <button className="btn-primary">
                <span>{t('hero', 'exploreBtn')}</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </Link>
            <Link to="services" smooth duration={800} style={{ cursor: 'pointer' }}>
              <button className="btn-outline"><span>{t('hero', 'servicesBtn')}</span></button>
            </Link>
          </div>

          <div className="hero-fade-in" style={{ '--delay': '1.4s', display: 'flex', gap: '40px', marginTop: '56px', paddingTop: '40px', borderTop: '1px solid var(--border-subtle)' }}>
            {stats.map(s => (
              <div key={s.num}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 300, color: 'var(--gold)', lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontSize: '0.72rem', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--ivory-dim)', marginTop: '6px', fontWeight: 400 }}>
                  {s.node[lang]}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right visual */}
        <div style={{ height: '500px', position: 'relative' }}>
          {[180, 240, 300].map((size, i) => (
            <div key={i} className={`hero-ring hero-ring-${i}`} style={{
              position: 'absolute', top: '50%', left: '50%',
              width: size, height: size,
              border: `1px solid rgba(201, 168, 76, ${0.08 - i * 0.02})`,
              borderRadius: '50%', marginLeft: -size / 2, marginTop: -size / 2,
            }} />
          ))}

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-fade-in" style={{
        '--delay': '2s',
        position: 'absolute', bottom: '40px', left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', zIndex: 2,
      }}>
        <span style={{ fontSize: '0.65rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--ivory-dim)' }}>
          {t('hero', 'scroll')}
        </span>
        <div className="scroll-line" />
      </div>

      <style>{`
        @media (max-width: 768px) {
          #hero > div > div { grid-template-columns: 1fr !important; padding: 0 24px !important; }
        }
      `}</style>
    </section>
  )
}
