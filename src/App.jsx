import React, {
  useState,
  useEffect,
  useRef,
  lazy,
  Suspense,
  useCallback,
} from 'react'
import { useReducedMotion } from 'framer-motion'
import Navbar from './components/Navbar'

// Lazy-load all heavy sections so they only parse/execute when needed
const Hero        = lazy(() => import('./components/Hero'))
const Features    = lazy(() => import('./components/Features'))
const Collections = lazy(() => import('./components/Collections'))
const Services    = lazy(() => import('./components/Services'))
const WhyUs       = lazy(() => import('./components/WhyUs'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const Contact     = lazy(() => import('./components/Contact'))
const Footer      = lazy(() => import('./components/Footer'))

// Lightweight section fallback — no heavy spinner
function SectionFallback() {
  return <div style={{ minHeight: '200px' }} />
}

export default function App() {
  const prefersReduced = useReducedMotion()

  // ── Scroll progress bar (native, no Framer overhead) ──────────────────────
  const progressRef = useRef(null)

  useEffect(() => {
    const bar = progressRef.current
    if (!bar) return

    let rafId = null

    const onScroll = () => {
      if (rafId) return
      rafId = requestAnimationFrame(() => {
        rafId = null
        const docH = document.documentElement.scrollHeight - window.innerHeight
        const pct   = docH > 0 ? (window.scrollY / docH) * 100 : 0
        bar.style.transform = `scaleX(${pct / 100})`
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  // ── Custom cursor — single shared rAF loop ─────────────────────────────────
  const cursorRef   = useRef(null)
  const followerRef = useRef(null)
  const pos         = useRef({ x: -100, y: -100 })
  const follower    = useRef({ x: -100, y: -100 })
  const followerSize = useRef(36)
  const rafCursor   = useRef(null)

  const loopCursor = useCallback(() => {
    rafCursor.current = requestAnimationFrame(loopCursor)

    const dot  = cursorRef.current
    const ring = followerRef.current
    if (!dot || !ring) return

    // Lerp follower toward cursor
    follower.current.x += (pos.current.x - follower.current.x) * 0.12
    follower.current.y += (pos.current.y - follower.current.y) * 0.12

    const half = followerSize.current / 2
    dot.style.transform  = `translate(${pos.current.x - 5}px, ${pos.current.y - 5}px)`
    ring.style.transform = `translate(${follower.current.x - half}px, ${follower.current.y - half}px)`
    ring.style.width     = `${followerSize.current}px`
    ring.style.height    = `${followerSize.current}px`
  }, [])

  const [isTouch, setIsTouch] = useState(false)
  
  useEffect(() => {
    setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0)
  }, [])

  useEffect(() => {
    if (prefersReduced || isTouch) return // skip cursor loop for reduced-motion or touch users

    const onMove = (e) => {
      pos.current.x = e.clientX
      pos.current.y = e.clientY
    }

    const grow   = () => { followerSize.current = 60 }
    const shrink = () => { followerSize.current = 36 }

    const bindHoverables = () => {
      document.querySelectorAll('a, button, [data-hover]').forEach(el => {
        el.addEventListener('mouseenter', grow)
        el.addEventListener('mouseleave', shrink)
      })
    }

    window.addEventListener('mousemove', onMove, { passive: true })

    // Watch for new interactive elements
    const mo = new MutationObserver(bindHoverables)
    mo.observe(document.body, { childList: true, subtree: true })
    bindHoverables()

    rafCursor.current = requestAnimationFrame(loopCursor)

    return () => {
      window.removeEventListener('mousemove', onMove)
      mo.disconnect()
      if (rafCursor.current) cancelAnimationFrame(rafCursor.current)
    }
  }, [prefersReduced, isTouch, loopCursor])

  return (
    <>
      {/* Custom cursor — raw DOM refs, zero Framer overhead */}
      {!prefersReduced && !isTouch && (
        <>
          <div ref={cursorRef}   className="cursor" />
          <div ref={followerRef} className="cursor-follower" />
        </>
      )}

      {/* Scroll progress bar — native scaleX, GPU-composited */}
      <div
        ref={progressRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, #9a7a2e, #c9a84c, #e8c96a)',
          transformOrigin: '0%',
          transform: 'scaleX(0)',
          zIndex: 9997,
          willChange: 'transform',
        }}
      />

      <Navbar />

      {/* Hero loads eagerly; sections below fold load lazily */}
      <Suspense fallback={<SectionFallback />}>
        <Hero />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <Features />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <Collections />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <Services />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <WhyUs />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <Testimonials />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <Contact />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <Footer />
      </Suspense>
    </>
  )
}
