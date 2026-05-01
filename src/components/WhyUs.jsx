import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useLang } from '../context/LanguageContext'
import translations from '../i18n/translations'

function CountUp({ end, duration = 2, suffix = '' }) {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView({ threshold: 0, rootMargin: '0px 0px -10% 0px', triggerOnce: true })

  useEffect(() => {
    if (!inView) return
    let startTime = null
    const animate = (time) => {
      if (!startTime) startTime = time
      const progress = Math.min((time - startTime) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [inView, end, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

const brands = ['Ray-Ban', 'Calvin Klein', 'Oakley', 'Versace', 'Carrera', 'Scott', 'Gucci', 'Tommy Hilfiger', 'Police', 'Vogue', 'Puma', 'Arcadio', 'Fastrack']
const lensBrands = ['Zylus', 'Zeiss', 'Essilor', 'Hoya', 'Nova', 'Asahi-Lite', 'Invicta']

export default function WhyUs() {
  const [ref, inView] = useInView({ threshold: 0, rootMargin: '0px 0px -10% 0px', triggerOnce: true })
  const { lang, t } = useLang()
  const tx = translations.whyus

  return (
    <section id="whyus" style={{ padding: '120px 48px', background: 'linear-gradient(to bottom, var(--bg-secondary), var(--bg-primary))' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }} ref={ref}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center', marginBottom: '100px' }}>
          <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
            <span className="eyebrow">{t('whyus', 'eyebrow')}</span>
            <h2 style={{ fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)', fontWeight: 300, color: 'var(--ivory)', marginTop: '24px', lineHeight: 1.15 }}>
              {tx.heading1[lang]} <br />
              <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>{tx.headingEm[lang]}</em> {tx.heading2[lang]}
            </h2>
            <p style={{ color: 'var(--ivory-dim)', fontSize: '0.95rem', lineHeight: 1.9, marginTop: '24px', fontWeight: 300 }}>{t('whyus', 'para1')}</p>
            <p style={{ color: 'var(--ivory-dim)', fontSize: '0.95rem', lineHeight: 1.9, marginTop: '16px', fontWeight: 300 }}>{t('whyus', 'para2')}</p>

          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
            <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px', background: 'var(--border-subtle)', border: '1px solid var(--border-subtle)' }}>
              {[
                { num: 34, suffix: '+', label: tx.stats.years[lang] },
                { num: 5000, suffix: '+', label: tx.stats.customers[lang] },
                { num: 1500, suffix: '+', label: tx.stats.frames[lang] },
                { num: 4, suffix: '.9★', label: tx.stats.rating[lang] },
              ].map((stat, i) => (
                <div key={i} style={{ padding: '48px 40px', background: 'var(--bg-primary)', position: 'relative' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 300, color: 'var(--gold)', lineHeight: 1 }}>
                    <CountUp end={stat.num} suffix={stat.suffix} />
                  </div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--ivory-dim)', marginTop: '12px' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) { 
          #whyus { padding: 80px 24px !important; } 
          #whyus > div > div:first-child { grid-template-columns: 1fr !important; gap: 40px !important; } 
          .stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
