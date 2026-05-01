import React, { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useLang } from '../context/LanguageContext'
import translations from '../i18n/translations'

/**
 * RESTORED TILT CARD DESIGN
 * Reverting to the 3D interactive tilt cards as requested.
 */
function TiltCard({ item, index, visualIndex, inView, lang, viewBtn }) {
  const cardRef = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), { stiffness: 300, damping: 30 })

  const visual = collectionVisuals[visualIndex % collectionVisuals.length]

  const handleMouseMove = (e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleMouseLeave = () => { x.set(0); y.set(0); }

  return (
    <motion.div style={{ perspective: '1000px' }} variants={{ initial: { opacity: 0, y: 60 }, animate: { opacity: 1, y: 0, transition: { delay: index * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] } } }} initial="initial" animate={inView ? "animate" : "initial"}>
      <motion.div ref={cardRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} whileHover={{ scale: 1.03, borderColor: visual.accentColor + '40' }}
        style={{ rotateX, rotateY, background: visual.gradient, border: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden', cursor: 'pointer', position: 'relative', transformStyle: 'preserve-3d', borderRadius: '2px' }} data-hover
      >
        <div style={{ position: 'absolute', top: '20px', left: '20px', background: visual.tagColor + '20', border: `1px solid ${visual.tagColor}40`, color: visual.tagColor, fontSize: '0.6rem', letterSpacing: '2px', textTransform: 'uppercase', padding: '4px 12px', fontFamily: 'var(--font-body)', fontWeight: 500, zIndex: 2 }}>
          {item.tag[lang]}
        </div>
        <div style={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
          <motion.div style={{ position: 'absolute', width: '120px', height: '60px', background: `radial-gradient(ellipse, ${visual.accentColor}20 0%, transparent 70%)`, filter: 'blur(20px)' }} />
          <motion.div whileHover={{ y: -8, rotateZ: 2, transition: { type: 'spring', stiffness: 200 } }}>{visual.svg}</motion.div>
        </div>
        <div style={{ padding: '24px', borderTop: `1px solid ${visual.accentColor}20` }}>
          <div style={{ fontSize: '0.65rem', letterSpacing: '3px', textTransform: 'uppercase', color: visual.accentColor, marginBottom: '8px', fontFamily: 'var(--font-body)' }}>{item.category[lang]}</div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 400, color: 'var(--ivory)', marginBottom: '16px' }}>{item.name[lang]}</h3>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

const collectionVisuals = [
  {
    price: '₹4,999', originalPrice: '₹7,500', tagColor: '#c9a84c', accentColor: '#4a9eff',
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    svg: (
      <svg viewBox="0 0 200 80" width="160">
        <circle cx="60" cy="40" r="28" fill="none" stroke="#4a9eff" strokeWidth="1.5" opacity="0.8"/>
        <circle cx="140" cy="40" r="28" fill="none" stroke="#4a9eff" strokeWidth="1.5" opacity="0.8"/>
        <line x1="88" y1="40" x2="112" y2="40" stroke="#4a9eff" strokeWidth="1.5"/>
        <line x1="32" y1="34" x2="4" y2="28" stroke="#4a9eff" strokeWidth="1.5"/>
        <line x1="168" y1="34" x2="196" y2="28" stroke="#4a9eff" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    price: '₹6,499', originalPrice: '₹9,999', tagColor: '#c9a84c', accentColor: '#c9a84c',
    gradient: 'linear-gradient(135deg, #1a1205 0%, #2a1c05 50%, #3d2a08 100%)',
    svg: (
      <svg viewBox="0 0 200 80" width="160">
        <rect x="8" y="12" width="80" height="56" rx="28" fill="none" stroke="#c9a84c" strokeWidth="2"/>
        <rect x="112" y="12" width="80" height="56" rx="28" fill="none" stroke="#c9a84c" strokeWidth="2"/>
        <path d="M88 40 Q100 32 112 40" fill="none" stroke="#c9a84c" strokeWidth="1.5"/>
        <line x1="8" y1="30" x2="2" y2="22" stroke="#c9a84c" strokeWidth="2"/>
        <line x1="192" y1="30" x2="198" y2="22" stroke="#c9a84c" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    price: '₹5,299', originalPrice: '₹8,000', tagColor: '#e07', accentColor: '#ff4466',
    gradient: 'linear-gradient(135deg, #0d0d0d 0%, #1a0a0a 50%, #200808 100%)',
    svg: (
      <svg viewBox="0 0 200 80" width="160">
        <path d="M8 40 Q10 12 48 12 Q86 12 88 40" fill="none" stroke="#ff4466" strokeWidth="2"/>
        <line x1="8" y1="40" x2="88" y2="40" stroke="#ff4466" strokeWidth="1.5"/>
        <path d="M112 40 Q114 12 152 12 Q190 12 192 40" fill="none" stroke="#ff4466" strokeWidth="2"/>
        <line x1="112" y1="40" x2="192" y2="40" stroke="#ff4466" strokeWidth="1.5"/>
        <path d="M88 40 Q100 32 112 40" fill="none" stroke="#ff4466" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    price: '₹3,799', originalPrice: '₹5,500', tagColor: '#50c878', accentColor: '#50c878',
    gradient: 'linear-gradient(135deg, #050f0a 0%, #081a0d 50%, #0a2010 100%)',
    svg: (
      <svg viewBox="0 0 200 80" width="160">
        <circle cx="60" cy="40" r="30" fill="none" stroke="#50c878" strokeWidth="2"/>
        <circle cx="140" cy="40" r="30" fill="none" stroke="#50c878" strokeWidth="2"/>
        <line x1="90" y1="40" x2="110" y2="40" stroke="#50c878" strokeWidth="2"/>
        <line x1="30" y1="40" x2="4" y2="32" stroke="#50c878" strokeWidth="2"/>
        <line x1="170" y1="40" x2="196" y2="32" stroke="#50c878" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    price: '₹5,999', originalPrice: '₹8,500', tagColor: '#4a9eff', accentColor: '#4a9eff',
    gradient: 'linear-gradient(135deg, #0a1a2a 0%, #102a40 50%, #1a3a5a 100%)',
    svg: (
      <svg viewBox="0 0 200 80" width="160">
        <path d="M10 20 L90 20 L80 60 L20 60 Z" fill="none" stroke="#4a9eff" strokeWidth="1.5" opacity="0.8"/>
        <path d="M110 20 L190 20 L180 60 L120 60 Z" fill="none" stroke="#4a9eff" strokeWidth="1.5" opacity="0.8"/>
        <path d="M90 30 Q100 25 110 30" fill="none" stroke="#4a9eff" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    price: '₹4,499', originalPrice: '₹6,999', tagColor: '#ff7eb3', accentColor: '#ff7eb3',
    gradient: 'linear-gradient(135deg, #1a0a1a 0%, #2a102a 50%, #3a1a3a 100%)',
    svg: (
      <svg viewBox="0 0 200 80" width="160">
        <path d="M20 20 C40 10 70 10 90 30 L80 60 C60 70 30 70 20 60 Z" fill="none" stroke="#ff7eb3" strokeWidth="1.5"/>
        <path d="M110 30 C130 10 160 10 180 20 L180 60 C170 70 140 70 120 60 Z" fill="none" stroke="#ff7eb3" strokeWidth="1.5"/>
        <path d="M90 35 Q100 30 110 35" fill="none" stroke="#ff7eb3" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    price: '₹3,999', originalPrice: '₹5,999', tagColor: '#c9a84c', accentColor: '#c9a84c',
    gradient: 'linear-gradient(135deg, #1a1a0a 0%, #2a2a10 50%, #3a3a1a 100%)',
    svg: (
      <svg viewBox="0 0 200 80" width="160">
        <rect x="15" y="25" width="70" height="30" rx="4" fill="none" stroke="#c9a84c" strokeWidth="2"/>
        <rect x="115" y="25" width="70" height="30" rx="4" fill="none" stroke="#c9a84c" strokeWidth="2"/>
        <path d="M85 40 L115 40" stroke="#c9a84c" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    price: '₹6,999', originalPrice: '₹9,999', tagColor: '#50c878', accentColor: '#50c878',
    gradient: 'linear-gradient(135deg, #0a2a1a 0%, #10402a 50%, #1a5a3a 100%)',
    svg: (
      <svg viewBox="0 0 200 80" width="160">
        <path d="M10 25 Q10 15 50 15 Q90 15 90 25 L85 55 Q50 65 15 55 Z" fill="none" stroke="#50c878" strokeWidth="2"/>
        <path d="M110 25 Q110 15 150 15 Q190 15 190 25 L185 55 Q150 65 115 55 Z" fill="none" stroke="#50c878" strokeWidth="2"/>
        <path d="M90 30 Q100 25 110 30" fill="none" stroke="#50c878" strokeWidth="1.5"/>
      </svg>
    ),
  },
]

export default function Collections() {
  const [ref, inView] = useInView({ threshold: 0, rootMargin: '0px 0px -10% 0px', triggerOnce: true })
  const { lang, t } = useLang()
  const tx = translations.collections
  const [activeFilter, setActiveFilter] = useState('all')

  const filterKeys = Object.keys(tx.filters)

  return (
    <section id="collections" style={{ padding: '120px 48px', background: 'var(--bg-secondary)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }} ref={ref}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
            <span className="eyebrow">{t('collections', 'eyebrow')}</span>
            <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.8rem)', fontWeight: 300, color: 'var(--ivory)', marginTop: '20px' }}>
              {lang === 'en' ? <>Our <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Collections</em></> : <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>{tx.heading[lang]}</em>}
            </h2>
          </motion.div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '24px',
        }}>
          {tx.items
            .map((item, originalIndex) => ({ ...item, originalIndex }))
            .filter(item => {
              if (activeFilter === 'all') return true;
              const filterLabel = tx.filters[activeFilter].en.toLowerCase();
              return item.category.en.toLowerCase().includes(filterLabel) ||
                     item.category.en.toLowerCase() === filterLabel;
            })
            .map((item, i) => (
              <TiltCard key={item.originalIndex} item={item} index={i} visualIndex={item.originalIndex} inView={inView} lang={lang} viewBtn={tx.viewBtn[lang]} />
            ))
          }
        </div>


        {/* --- Authorised Dealers Section (Marquee Style) --- */}
        <div style={{ marginTop: '120px', borderTop: '1px solid var(--border-subtle)', paddingTop: '80px' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span className="eyebrow">{tx.partners.eyebrow[lang]}</span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 300, color: 'var(--ivory)', marginTop: '16px' }}>{tx.partners.heading[lang]}</h2>
          </motion.div>

          {/* Lenses Marquee */}
          <div style={{ marginBottom: '60px' }}>
            <h4 style={{ color: 'rgba(201,168,76,0.6)', letterSpacing: '4px', textTransform: 'uppercase', fontSize: '0.65rem', textAlign: 'center', marginBottom: '32px', fontFamily: 'var(--font-body)' }}>{tx.partners.lenses[lang]}</h4>
            <div style={{ overflow: 'hidden', position: 'relative', padding: '20px 0' }}>
               <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '150px', background: 'linear-gradient(to right, var(--bg-secondary), transparent)', zIndex: 2 }} />
               <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '150px', background: 'linear-gradient(to left, var(--bg-secondary), transparent)', zIndex: 2 }} />
               <motion.div animate={{ x: [0, -1500] }} transition={{ duration: 25, repeat: Infinity, ease: 'linear' }} style={{ display: 'flex', gap: '80px', width: 'max-content', alignItems: 'center' }}>
                 {[...tx.lensCompanies, ...tx.lensCompanies, ...tx.lensCompanies].map((brand, i) => (
                   <div key={i} style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 300, color: 'rgba(242, 237, 228, 0.2)', whiteSpace: 'nowrap', letterSpacing: '4px', textTransform: 'uppercase' }}>{brand}</div>
                 ))}
               </motion.div>
            </div>
          </div>

          {/* Frames Marquee */}
          <div>
            <h4 style={{ color: 'rgba(201,168,76,0.6)', letterSpacing: '4px', textTransform: 'uppercase', fontSize: '0.65rem', textAlign: 'center', marginBottom: '32px', fontFamily: 'var(--font-body)' }}>{tx.partners.frames[lang]}</h4>
            <div style={{ overflow: 'hidden', position: 'relative', padding: '20px 0' }}>
               <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '150px', background: 'linear-gradient(to right, var(--bg-secondary), transparent)', zIndex: 2 }} />
               <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '150px', background: 'linear-gradient(to left, var(--bg-secondary), transparent)', zIndex: 2 }} />
               <motion.div animate={{ x: [-1500, 0] }} transition={{ duration: 35, repeat: Infinity, ease: 'linear' }} style={{ display: 'flex', gap: '80px', width: 'max-content', alignItems: 'center' }}>
                 {[...tx.frameCompanies, ...tx.frameCompanies, ...tx.frameCompanies].map((brand, i) => (
                   <div key={i} style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 300, color: 'rgba(242, 237, 228, 0.2)', whiteSpace: 'nowrap', letterSpacing: '4px', textTransform: 'uppercase' }}>{brand}</div>
                 ))}
               </motion.div>
            </div>
          </div>
        </div>

      </div>
      <style>{`@media (max-width: 768px) { #collections { padding: 80px 24px !important; } }`}</style>
    </section>
  )
}
