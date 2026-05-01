import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'

/**
 * HeroCanvas — Three.js WebGL scene in its own lazy-loaded chunk.
 *
 * Perf optimisations:
 *  - devicePixelRatio capped at 1.5
 *  - Particle count reduced 120 → 40
 *  - antialias disabled (imperceptible at normal DPR)
 *  - Geometry segment counts trimmed
 *  - All geometries, materials & renderer disposed on unmount
 *  - IntersectionObserver pauses the rAF loop when off-screen
 */
export default function HeroCanvas() {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const width  = mount.clientWidth
    const height = mount.clientHeight

    // ── Scene / Camera ─────────────────────────────────────────
    const scene  = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100)
    camera.position.set(0, 0, 5)

    const renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: true,
      powerPreference: 'high-performance',
    })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)

    // ── Lighting ───────────────────────────────────────────────
    scene.add(new THREE.AmbientLight(0xffffff, 1.2))

    const goldLight = new THREE.PointLight(0xc9a84c, 8, 20)
    goldLight.position.set(3, 3, 3)
    scene.add(goldLight)

    const blueLight = new THREE.PointLight(0x88ccff, 4, 20)
    blueLight.position.set(-3, -2, 2)
    scene.add(blueLight)

    const rimLight = new THREE.DirectionalLight(0xfff5cc, 3)
    rimLight.position.set(0, 5, -5)
    scene.add(rimLight)

    // Front fill light — key to making the model visible on dark bg
    const fillLight = new THREE.DirectionalLight(0xffffff, 2.5)
    fillLight.position.set(0, 0, 8)
    scene.add(fillLight)

    // Top accent for shine on the gold frames
    const topLight = new THREE.SpotLight(0xffd700, 5, 30, Math.PI / 6)
    topLight.position.set(0, 6, 4)
    scene.add(topLight)

    // ── Materials ──────────────────────────────────────────────
    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xd4a843,
      metalness: 0.9,
      roughness: 0.08,
      envMapIntensity: 1.5,
    })

    const lensMat = new THREE.MeshPhysicalMaterial({
      color: 0x2a3a5a,       // dark blue-grey tint instead of near-black
      metalness: 0.1,
      roughness: 0.05,
      transmission: 0.7,
      transparent: true,
      opacity: 0.55,         // more opaque so it reads against the bg
      thickness: 0.8,
      ior: 1.5,
      reflectivity: 0.6,
    })

    // Collect every geometry for bulk disposal
    const geos = []

    // ── Glasses ────────────────────────────────────────────────
    const glassesGroup = new THREE.Group()

    const makeFrame = (x) => {
      const g = new THREE.Group()

      const outerRing = new THREE.TorusGeometry(0.7, 0.065, 12, 48)
      geos.push(outerRing)
      g.add(new THREE.Mesh(outerRing, goldMat))

      const lensGeo = new THREE.CircleGeometry(0.635, 48)
      geos.push(lensGeo)
      g.add(new THREE.Mesh(lensGeo, lensMat))

      g.position.x = x
      return g
    }

    glassesGroup.add(makeFrame(-0.85))
    glassesGroup.add(makeFrame(0.85))

    // Bridge — connects inner edges of both frames (inner edge = frame_center - radius = ±0.85 - 0.70 = ±0.15)
    const bridgePath = new THREE.CatmullRomCurve3(
      new THREE.QuadraticBezierCurve3(
        new THREE.Vector3(-0.15, 0.05, 0),
        new THREE.Vector3(0, 0.22, 0),
        new THREE.Vector3(0.15, 0.05, 0),
      ).getPoints(20)
    )
    const bridgeGeo = new THREE.TubeGeometry(bridgePath, 20, 0.04, 6, false)
    geos.push(bridgeGeo)
    glassesGroup.add(new THREE.Mesh(bridgeGeo, goldMat))

    // Arms — must start from the OUTER edge of each frame ring
    // Frame centers: x = ±0.85, torus outer edge = 0.85 + 0.70 + 0.065 ≈ 1.615
    const makeArm = (side) => {
      const pts = [
        new THREE.Vector3(side * 1.55,  0.0,   0.0),   // outer frame junction
        new THREE.Vector3(side * 1.80,  0.0,   0.0),   // extend straight out
        new THREE.Vector3(side * 2.10, -0.05, -0.4),   // begin curving back
        new THREE.Vector3(side * 2.30, -0.18, -1.1),
        new THREE.Vector3(side * 2.30, -0.40, -1.6),   // tip behind ear
      ]
      const armGeo = new THREE.TubeGeometry(
        new THREE.CatmullRomCurve3(pts), 24, 0.035, 6, false
      )
      geos.push(armGeo)
      return new THREE.Mesh(armGeo, goldMat)
    }
    glassesGroup.add(makeArm(1))
    glassesGroup.add(makeArm(-1))

    // Nose pads — kept in the bridge gap between the two frames (x well within ±0.15)
    const padGeo = new THREE.SphereGeometry(0.05, 6, 6)
    geos.push(padGeo)
    const lPad = new THREE.Mesh(padGeo, goldMat)
    const rPad = new THREE.Mesh(padGeo, goldMat)
    lPad.position.set(-0.12, -0.18, 0.12)
    rPad.position.set( 0.12, -0.18, 0.12)
    glassesGroup.add(lPad, rPad)

    const padBridgeGeo = new THREE.TubeGeometry(
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(-0.12, -0.15, 0.12),
        new THREE.Vector3(  0,   -0.12, 0.12),
        new THREE.Vector3( 0.12, -0.15, 0.12),
      ]), 8, 0.025, 6, false
    )
    geos.push(padBridgeGeo)
    glassesGroup.add(new THREE.Mesh(padBridgeGeo, goldMat))

    glassesGroup.position.y = 0.2
    
    // Scale for mobile
    const scale = window.innerWidth < 768 ? 0.6 : 1
    glassesGroup.scale.set(scale, scale, scale)
    
    scene.add(glassesGroup)

    // ── Particles (40, down from 120) ─────────────────────────
    const PARTICLE_COUNT = 40
    const particleGeo    = new THREE.BufferGeometry()
    geos.push(particleGeo)
    const positions = new Float32Array(PARTICLE_COUNT * 3)
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 12
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    const particleMat = new THREE.PointsMaterial({
      color: 0xc9a84c,
      size: 0.025,
      transparent: true,
      opacity: 0.5,
      sizeAttenuation: true,
    })
    const particles = new THREE.Points(particleGeo, particleMat)
    scene.add(particles)

    // ── Mouse tracking ─────────────────────────────────────────
    let mouseX = 0, mouseY = 0, targetX = 0, targetY = 0

    const onMouseMove = (e) => {
      mouseX =  (e.clientX / window.innerWidth  - 0.5) * 2
      mouseY = -(e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMouseMove, { passive: true })

    // ── Animation — paused when off-screen ────────────────────
    let animId  = null
    let time    = 0
    let visible = true

    const tick = () => {
      if (!visible) { animId = null; return }
      animId = requestAnimationFrame(tick)
      time  += 0.008

      targetX += (mouseX - targetX) * 0.05
      targetY += (mouseY - targetY) * 0.05

      glassesGroup.rotation.y  = targetX * 0.4 + Math.sin(time * 0.6) * 0.08
      glassesGroup.rotation.x  = -targetY * 0.2 + Math.cos(time * 0.4) * 0.04
      glassesGroup.position.y  = 0.2 + Math.sin(time * 0.8) * 0.08

      particles.rotation.y += 0.001
      particles.rotation.x += 0.0005

      goldLight.position.x = Math.sin(time * 0.5) * 4
      goldLight.position.z = Math.cos(time * 0.5) * 4

      renderer.render(scene, camera)
    }

    // Pause / resume via IntersectionObserver
    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting
        if (visible && !animId) tick()
      },
      { threshold: 0 }
    )
    io.observe(mount)
    tick()

    // ── Resize ─────────────────────────────────────────────────
    const onResize = () => {
      const w = mount.clientWidth
      const h = mount.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
      
      const s = window.innerWidth < 768 ? 0.6 : 1
      glassesGroup.scale.set(s, s, s)
    }
    window.addEventListener('resize', onResize, { passive: true })

    // ── Cleanup ────────────────────────────────────────────────
    return () => {
      io.disconnect()
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
      if (animId) cancelAnimationFrame(animId)

      geos.forEach(g => g.dispose())
      goldMat.dispose()
      lensMat.dispose()
      particleMat.dispose()
      renderer.dispose()
      renderer.forceContextLoss()

      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div
      ref={mountRef}
      style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}
    />
  )
}
