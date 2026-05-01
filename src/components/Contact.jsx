import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useLang } from '../context/LanguageContext'
import translations from '../i18n/translations'

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0, rootMargin: '0px 0px -10% 0px', triggerOnce: true })
  const [formData, setFormData] = useState({ name: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const { lang, t } = useLang()

  const tx = translations.contact

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Construct WhatsApp message
    const whatsappNumber = "919994206952"
    const message = `*New Appointment Request - Nirmal OPTICALS*%0A%0A` +
      `*Name:* ${formData.name}%0A` + 
      `*Phone:* ${formData.phone}%0A` +
      `*Service:* ${formData.service || 'General Inquiry'}%0A` +
      `*Message:* ${formData.message || 'N/A'}`
    
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank')
    
    setSubmitted(true)
  }

  const baseInputStyle = {
    width: '100%',
    background: 'rgba(255,255,255,0.02)',
    border: '1px solid var(--border-subtle)',
    color: 'var(--ivory)',
    fontFamily: 'var(--font-body)',
    fontSize: '0.9rem',
    padding: '16px 20px',
    outline: 'none',
    borderRadius: 0,
  }

  const inputVariants = {
    initial: { background: 'rgba(255,255,255,0.02)', borderColor: 'var(--border-subtle)' },
    focus: { background: 'rgba(201,168,76,0.04)', borderColor: 'rgba(201,168,76,0.4)', transition: { duration: 0.3 } },
    hover: { borderColor: 'rgba(201,168,76,0.2)' }
  }

  return (
    <section id="contact" style={{
      padding: '120px 48px',
      background: 'var(--bg-primary)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }} ref={ref}>
        <motion.div
          style={{ textAlign: 'center', marginBottom: '80px' }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="eyebrow">{t('contact', 'eyebrow')}</span>
          <h2 
            style={{
              fontSize: 'clamp(2.5rem, 4vw, 3.8rem)',
              fontWeight: 300,
              color: 'var(--ivory)',
              marginTop: '20px',
            }}
            dangerouslySetInnerHTML={{ __html: tx.heading[lang] }}
          />
          <p style={{
            color: 'var(--ivory-dim)',
            fontSize: '1rem',
            maxWidth: '450px',
            margin: '20px auto 0',
            lineHeight: 1.8,
          }}>
            {t('contact', 'subtext')}
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr',
          gap: '80px',
          alignItems: 'start',
        }}>
          {/* Store Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Nirmal+Opticals+Poora+mosque+commercial+complex+Tirupathur"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                background: 'var(--bg-primary)',
                border: '1px solid var(--border)',
                height: '320px',
                marginBottom: '40px',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer'
              }}
            >
              <img 
                src="/map-location-centered.png" 
                alt="Nirmal Opticals Final Location" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                onMouseLeave={e => e.target.style.transform = 'scale(1)'}
              />
              <div style={{
                position: 'absolute',
                bottom: 0, left: 0, right: 0,
                padding: '20px',
                background: 'linear-gradient(to top, rgba(10,10,26,0.9), transparent)',
                color: 'var(--gold)',
                fontSize: '0.75rem',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                textAlign: 'center',
                fontFamily: 'var(--font-body)'
              }}>
                {t('contact', 'viewOnMaps')}
              </div>
            </a>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              {[
                {
                  icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 1C6.134 1 3 4.134 3 8c0 5.25 7 11 7 11s7-5.75 7-11c0-3.866-3.134-7-7-7z" stroke="#c9a84c" strokeWidth="1.3"/><circle cx="10" cy="8" r="2.5" stroke="#c9a84c" strokeWidth="1.3"/></svg>,
                  label: t('contact', 'address'),
                  value: t('contact', 'addressVal'),
                },
                {
                  icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 3h3l1.5 4-2 1.5c1 2 3 4 5 5l1.5-2L17 13v3c0 1-1 2-2 2C7 18 2 11 2 5c0-1 1-2 2-2z" stroke="#c9a84c" strokeWidth="1.3" strokeLinejoin="round"/></svg>,
                  label: t('contact', 'phone'),
                  value: t('contact', 'phoneVal'),
                },
                {
                  icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2" y="4" width="16" height="12" rx="2" stroke="#c9a84c" strokeWidth="1.3"/><path d="M2 7l8 5 8-5" stroke="#c9a84c" strokeWidth="1.3"/></svg>,
                  label: t('contact', 'email'),
                  value: 'info@nirmalopticals.com',
                },
                {
                  icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="#c9a84c" strokeWidth="1.3"/><path d="M10 5v5l3 2" stroke="#c9a84c" strokeWidth="1.3" strokeLinecap="round"/></svg>,
                  label: t('contact', 'hours'),
                  value: t('contact', 'hoursVal'),
                },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3 + i * 0.08, duration: 0.6 }} style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ width: '40px', height: '40px', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{item.icon}</div>
                  <div>
                    <div style={{ fontSize: '0.65rem', letterSpacing: '2.5px', textTransform: 'uppercase', color: 'var(--gold)', fontFamily: 'var(--font-body)', marginBottom: '6px' }}>{item.label}</div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--ivory-dim)', lineHeight: 1.7, whiteSpace: 'pre-line' }}>{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.3 }}>
            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: 'center', padding: '80px 40px', border: '1px solid rgba(201,168,76,0.2)', background: 'rgba(201,168,76,0.03)' }}>
                <div style={{ fontSize: '3rem', marginBottom: '20px' }}>✓</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--gold)', marginBottom: '16px' }}>{t('contact', 'successTitle')}</h3>
                <p style={{ color: 'var(--ivory-dim)', lineHeight: 1.7 }}>{t('contact', 'successText')}</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 300, color: 'var(--ivory)', marginBottom: '8px' }}>{t('contact', 'formTitle')}</div>

                <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.65rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '8px', fontFamily: 'var(--font-body)' }}>{t('contact', 'fullName')}</label>
                    <motion.input required variants={inputVariants} initial="initial" whileFocus="focus" whileHover="hover" style={baseInputStyle} placeholder={t('contact', 'namePlaceholder')} value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.65rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '8px', fontFamily: 'var(--font-body)' }}>{t('contact', 'phoneNumber')}</label>
                    <motion.input required type="tel" variants={inputVariants} initial="initial" whileFocus="focus" whileHover="hover" style={baseInputStyle} placeholder={tx.phoneVal[lang]} value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.65rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '8px', fontFamily: 'var(--font-body)' }}>{t('contact', 'serviceLabel')}</label>
                  <motion.select variants={inputVariants} initial="initial" whileFocus="focus" whileHover="hover" style={{ ...baseInputStyle, appearance: 'none' }} value={formData.service} onChange={e => setFormData({...formData, service: e.target.value})}>
                    <option value="" style={{ background: '#0d0d1a' }}>{t('contact', 'servicePlaceholder')}</option>
                    {Object.entries(tx.services).map(([key, node]) => (
                      <option key={key} value={key} style={{ background: '#0d0d1a' }}>{node[lang]}</option>
                    ))}
                  </motion.select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.65rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '8px', fontFamily: 'var(--font-body)' }}>{t('contact', 'messageLabel')}</label>
                  <motion.textarea rows={4} variants={inputVariants} initial="initial" whileFocus="focus" whileHover="hover" style={{ ...baseInputStyle, resize: 'vertical', minHeight: '100px' }} placeholder={t('contact', 'messagePlaceholder')} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} />
                </div>

                <motion.button type="submit" className="btn-primary" whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} style={{ width: '100%', justifyContent: 'center', marginTop: '8px', cursor: 'pointer' }}>
                  <span>{t('contact', 'submitBtn')}</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </motion.button>

                <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.25)', textAlign: 'center', lineHeight: 1.5 }}>{t('contact', 'noSpam')}</p>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #contact > div > div:last-child { grid-template-columns: 1fr !important; gap: 50px !important; }
          #contact { padding: 80px 24px !important; }
          .form-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
