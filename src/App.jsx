import { useEffect } from 'react'
import { MotionConfig } from 'motion/react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Cursor } from './components/ui'
import Nav from './components/Nav'
import Hero from './components/Hero'
import { About, Timeline, Education } from './components/About'
import { Projects, Skills } from './components/Work'
import Contact from './components/Contact'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const lenis = new Lenis({ anchors: true })
    lenis.on('scroll', ScrollTrigger.update)
    const tick = (t) => lenis.raf(t * 1000)
    gsap.ticker.add(tick); gsap.ticker.lagSmoothing(0)
    return () => { gsap.ticker.remove(tick); lenis.destroy() }
  }, [])
  return (
    <MotionConfig reducedMotion="user">
      <Cursor /><Nav />
      <main>
        <Hero /><About /><Timeline /><Projects /><Skills /><Education />
      </main>
      <Contact />
    </MotionConfig>
  )
}
