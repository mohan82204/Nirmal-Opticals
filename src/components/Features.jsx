import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useLang } from '../context/LanguageContext'
import translations from '../i18n/translations'

const featureIcons = [
  (<svg width="36" height="36" viewBox="0 0 36 36" fill="none"><circle cx="18" cy="18" r="8" stroke="#c9a84c" strokeWidth="1.5"/><circle cx="18" cy="18" r="2" fill="#c9a84c"/><path d="M4 18C4 18 9 8 18 8s14 10 14 10-5 10-14 10S4 18 4 18z" stroke="#c9a84c" strokeWidth="1.5" strokeLinejoin="round"/></svg>),
  (<svg width="36" height="36" viewBox="0 0 36 36" fill="none"><rect x="4" y="12" width="28" height="16" rx="2" stroke="#c9a84c" strokeWidth="1.5"/><path d="M14 12V10a4 4 0 018 0v2" stroke="#c9a84c" strokeWidth="1.5"/><circle cx="18" cy="20" r="3" stroke="#c9a84c" strokeWidth="1.5"/></svg>),
  (<svg width="36" height="36" viewBox="0 0 36 36" fill="none"><path d="M18 4l3.5 7 7.5 1-5.5 5.5 1.5 7.5L18 22l-7 3.5 1.5-7.5L7 13l7.5-1L18 4z" stroke="#c9a84c" strokeWidth="1.5" strokeLinejoin="round"/></svg>),
  (<svg width="36" height="36" viewBox="0 0 36 36" fill="none"><path d="M6 18c0-6.627 5.373-12 12-12s12 5.373 12 12-5.373 12-12 12S6 24.627 6 18z" stroke="#c9a84c" strokeWidth="1.5"/><path d="M18 12v6l4 2" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round"/></svg>),
  (<svg width="36" height="36" viewBox="0 0 36 36" fill="none"><path d="M10 18c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8-8-3.582-8-8z" stroke="#c9a84c" strokeWidth="1.5"/><path d="M6 18H4M32 18h-2M18 6V4M18 32v-2" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round"/><circle cx="18" cy="18" r="2" fill="#c9a84c"/></svg>),
  (<svg width="36" height="36" viewBox="0 0 36 36" fill="none"><path d="M8 28l4-12 6 8 4-6 6 10" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><rect x="4" y="6" width="28" height="22" rx="2" stroke="#c9a84c" strokeWidth="1.5"/></svg>),
]

export default function Features() {
  const [ref, inView] = useInView({ threshold: 0, rootMargin: '0px 0px -10% 0px', triggerOnce: true })
  const { lang } = useLang()
  const tx = translations.features

  return (
    <section id="features" style={{ padding: '120px 48px', background: 'linear-gradient(to bottom, var(--bg-primary), var(--bg-secondary))' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          ref={ref}
          style={{ textAlign: 'center', marginBottom: '80px' }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="eyebrow">{tx.eyebrow[lang]}</span>
          <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.8rem)', fontWeight: 300, color: 'var(--ivory)', marginTop: '20px', lineHeight: 1.1 }}>
            {tx.heading[lang].split('Exceptional').join('')}
            {lang === 'en'
              ? <>Crafted for <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Exceptional</em> Vision</>
              : <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>{tx.heading[lang]}</em>
            }
          </h2>
          <p style={{ color: 'var(--ivory-dim)', fontSize: '1rem', maxWidth: '500px', margin: '20px auto 0', lineHeight: 1.8 }}>
            {tx.subtext[lang]}
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {tx.items.map((item, i) => (
            <FeatureCard key={i} item={item} icon={featureIcons[i]} index={i} inView={inView} lang={lang} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { #features { padding: 80px 24px !important; } }
      `}</style>
    </section>
  )
}

function FeatureCard({ item, icon, index, inView, lang }) {
  const cardVariants = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0, transition: { delay: index * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
    hover: { background: 'rgba(201, 168, 76, 0.05)', borderColor: 'rgba(201,168,76,0.25)', transition: { duration: 0.4 } },
  }
  const accentVariants = { initial: { opacity: 0 }, hover: { opacity: 1, transition: { duration: 0.4 } } }
  const iconVariants   = { initial: { y: 0 }, hover: { y: -4, transition: { duration: 0.3 } } }

  return (
    <motion.div
      variants={cardVariants} initial="initial" animate={inView ? 'animate' : 'initial'} whileHover="hover"
      style={{ padding: '40px 36px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-subtle)', cursor: 'pointer', position: 'relative', overflow: 'hidden' }}
      data-hover
    >
      <motion.div variants={accentVariants} style={{ position: 'absolute', top: 0, left: 0, width: '40px', height: '40px', borderTop: '1px solid var(--gold)', borderLeft: '1px solid var(--gold)' }} />
      <motion.div variants={accentVariants} style={{ position: 'absolute', bottom: 0, right: 0, width: '40px', height: '40px', borderBottom: '1px solid var(--gold)', borderRight: '1px solid var(--gold)' }} />

      <motion.div variants={iconVariants}>{icon}</motion.div>

      <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(201,168,76,0.4)', marginTop: '24px', marginBottom: '8px' }}>
        {item.tamil[lang]}
      </div>
      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 400, color: 'var(--ivory)', marginBottom: '12px', lineHeight: 1.2 }}>
        {item.title[lang]}
      </h3>
      <p style={{ color: 'var(--ivory-dim)', fontSize: '0.9rem', lineHeight: 1.7, fontWeight: 300 }}>
        {item.desc[lang]}
      </p>

      <motion.div variants={accentVariants} style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />
    </motion.div>
  )
}
