import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useLang } from '../context/LanguageContext'
import translations from '../i18n/translations'

export default function Testimonials() {
  const [ref, inView] = useInView({ threshold: 0, rootMargin: '0px 0px -10% 0px', triggerOnce: true })
  const [active, setActive] = useState(0)
  const [dragging, setDragging] = useState(false)
  const { lang, t } = useLang()

  const tx = translations.testimonials
  const items = tx.items

  useEffect(() => {
    if (dragging) return
    const timer = setInterval(() => {
      setActive(i => (i + 1) % items.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [dragging, items.length])

  return (
    <section
      style={{
        padding: '120px 48px',
        background: 'var(--bg-secondary)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute',
        top: '40px',
        left: '48px',
        fontFamily: 'var(--font-display)',
        fontSize: '20rem',
        color: 'rgba(201,168,76,0.03)',
        lineHeight: 1,
        pointerEvents: 'none',
        userSelect: 'none',
      }}>
        "
      </div>

      <div style={{ maxWidth: '1000px', margin: '0 auto' }} ref={ref}>
        <motion.div
          style={{ textAlign: 'center', marginBottom: '70px' }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="eyebrow">{t('testimonials', 'eyebrow')}</span>
          <h2 
            style={{
              fontSize: 'clamp(2.5rem, 4vw, 3.8rem)',
              fontWeight: 300,
              color: 'var(--ivory)',
              marginTop: '20px',
            }}
            dangerouslySetInnerHTML={{ __html: tx.heading[lang] }}
          />
        </motion.div>

        <div style={{ position: 'relative', minHeight: '280px' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              style={{ textAlign: 'center' }}
            >
              <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '32px' }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} style={{ color: 'var(--gold)', fontSize: '1.1rem' }}>★</span>
                ))}
              </div>

              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
                fontWeight: 300,
                color: 'var(--ivory)',
                lineHeight: 1.7,
                maxWidth: '780px',
                margin: '0 auto 40px',
                fontStyle: 'italic',
              }}>
                "{items[active].text[lang]}"
              </p>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: (['#c9a84c', '#4a9eff', '#50c878', '#c9a84c', '#ff7eb3'][active % 5]) + '20',
                  border: `1px solid ${(['#c9a84c', '#4a9eff', '#50c878', '#c9a84c', '#ff7eb3'][active % 5])}40`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-display)',
                  fontSize: '1rem',
                  color: (['#c9a84c', '#4a9eff', '#50c878', '#c9a84c', '#ff7eb3'][active % 5]),
                  fontWeight: 400,
                }}>
                  {items[active].name[lang].charAt(0)}
                </div>
                <div style={{ textAlign: 'left' }}>
                  <div style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9rem',
                    color: 'var(--ivory)',
                    fontWeight: 500,
                  }}>
                    {items[active].name[lang]}
                  </div>
                  <div style={{
                    fontSize: '0.75rem',
                    color: 'var(--ivory-dim)',
                    fontFamily: 'var(--font-body)',
                  }}>
                    {items[active].role[lang]} · {items[active].location[lang]}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          marginTop: '50px',
        }}>
          {items.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setActive(i)}
              animate={{
                width: i === active ? 32 : 8,
                backgroundColor: i === active ? 'var(--gold)' : 'rgba(201,168,76,0.2)'
              }}
              whileHover={{ scale: 1.2, backgroundColor: 'rgba(201,168,76,0.5)' }}
              style={{
                height: '8px',
                borderRadius: '4px',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
              }}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px',
            marginTop: '60px',
          }}
        >
          {items.slice(0, 3).map((t, i) => (
            <motion.div
              key={i}
              onClick={() => setActive(i)}
              animate={{
                backgroundColor: active === i ? 'rgba(201,168,76,0.07)' : 'rgba(255,255,255,0.02)',
                borderColor: active === i ? 'rgba(201,168,76,0.25)' : 'var(--border-subtle)',
              }}
              whileHover={{ scale: 1.02, borderColor: 'rgba(201,168,76,0.25)' }}
              style={{
                padding: '20px 24px',
                border: '1px solid',
                cursor: 'pointer',
              }}
              data-hover
            >
              <div style={{ display: 'flex', gap: '2px', marginBottom: '10px' }}>
                {Array.from({ length: 5 }).map((_, j) => (
                  <span key={j} style={{ color: 'var(--gold)', fontSize: '0.65rem' }}>★</span>
                ))}
              </div>
              <p style={{
                fontSize: '0.78rem',
                color: 'var(--ivory-dim)',
                lineHeight: 1.6,
                fontStyle: 'italic',
                marginBottom: '12px',
                overflow: 'hidden',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
              }}>
                "{t.text[lang]}"
              </p>
              <div style={{
                fontSize: '0.72rem',
                color: (['#c9a84c', '#4a9eff', '#50c878', '#c9a84c', '#ff7eb3'][i % 5]),
                fontFamily: 'var(--font-body)',
                fontWeight: 500,
              }}>
                — {t.name[lang]}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
