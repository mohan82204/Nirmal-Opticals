import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useLang } from '../context/LanguageContext'
import translations from '../i18n/translations'

const serviceIcons = ['👁', '🔬', '💎', '🔧', '✨', '📦']
const serviceNums  = ['01','02','03','04','05','06']

export default function Services() {
  const [ref, inView] = useInView({ threshold: 0, rootMargin: '0px 0px -10% 0px', triggerOnce: true })
  const { lang, t } = useLang()
  const tx = translations.services

  return (
    <section id="services" style={{ padding: '120px 48px', background: 'var(--bg-primary)', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: '50%', width: '1px', height: '100%', background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.06), transparent)', transform: 'translateX(-50%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto' }} ref={ref}>
        <motion.div style={{ textAlign: 'center', marginBottom: '80px' }} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
          <span className="eyebrow">{t('services', 'eyebrow')}</span>
          <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.8rem)', fontWeight: 300, color: 'var(--ivory)', marginTop: '20px' }}>
            {lang === 'en'
              ? <>Complete Eye <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Care Services</em></>
              : <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>{tx.heading[lang]}</em>
            }
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1px', background: 'var(--border-subtle)', border: '1px solid var(--border-subtle)' }}>
          {tx.items.map((item, i) => (
            <ServiceCard key={i} item={item} icon={serviceIcons[i]} number={serviceNums[i]} index={i} inView={inView} lang={lang} priceLabel={tx.priceLabel[lang]} durationLabel={tx.durationLabel[lang]} />
          ))}
        </div>
      </div>

      <style>{`@media (max-width: 768px) { #services { padding: 80px 24px !important; } }`}</style>
    </section>
  )
}

function ServiceCard({ item, icon, number, index, inView, lang, priceLabel, durationLabel }) {
  const cardVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { delay: index * 0.08, duration: 0.6 } },
    hover: { background: 'rgba(201,168,76,0.04)', transition: { duration: 0.4 } },
  }
  const borderVariants = {
    initial: { width: '0%' },
    hover: { width: '100%', transition: { duration: 0.5, ease: 'easeOut' } },
  }

  return (
    <motion.div
      variants={cardVariants} initial="initial" animate={inView ? 'animate' : 'initial'} whileHover="hover"
      style={{ padding: '48px 40px', background: 'var(--bg-primary)', cursor: 'pointer', position: 'relative', overflow: 'hidden' }}
      data-hover
    >
      <motion.div variants={borderVariants} style={{ position: 'absolute', top: 0, left: 0, height: '2px', background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }} />

      <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', color: 'rgba(201,168,76,0.3)', fontWeight: 300, flexShrink: 0, paddingTop: '4px' }}>
          {number}
        </div>
        <div style={{ flex: 1 }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 400, color: 'var(--ivory)', marginBottom: '12px', lineHeight: 1.2 }}>
            {item.title[lang]}
          </h3>
          <p style={{ color: 'var(--ivory-dim)', fontSize: '0.88rem', lineHeight: 1.75, marginBottom: '24px', fontWeight: 300 }}>
            {item.desc[lang]}
          </p>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            {item.price[lang] && (
              <>
                <div>
                  <div style={{ fontSize: '0.6rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(201,168,76,0.5)', marginBottom: '4px' }}>{priceLabel}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.88rem', color: 'var(--gold)', fontWeight: 500 }}>{item.price[lang]}</div>
                </div>
                <div style={{ width: '1px', height: '30px', background: 'var(--border-subtle)' }} />
              </>
            )}
            <div>
              <div style={{ fontSize: '0.6rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(201,168,76,0.5)', marginBottom: '4px' }}>{durationLabel}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.88rem', color: 'var(--ivory-dim)', fontWeight: 400 }}>{item.duration[lang]}</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
