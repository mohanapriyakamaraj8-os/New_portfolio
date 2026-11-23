import { useRef, useState, useEffect, useLayoutEffect } from 'react'
import { motion, useMotionValue, useSpring, useInView, animate } from 'motion/react'

export function Cursor() {
  const x = useMotionValue(-100), y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 500, damping: 40 }), sy = useSpring(y, { stiffness: 500, damping: 40 })
  const [big, setBig] = useState(false)
  useEffect(() => {
    const mv = (e) => { x.set(e.clientX); y.set(e.clientY); setBig(!!e.target.closest?.('a,button,[data-hover]')) }
    window.addEventListener('mousemove', mv)
    return () => window.removeEventListener('mousemove', mv)
  }, [x, y])
  return <motion.div className="cursor" aria-hidden style={{ x: sx, y: sy }} animate={{ scale: big ? 3.5 : 1 }} />
}

export function Magnetic({ children }) {
  const ref = useRef()
  const x = useMotionValue(0), y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 200, damping: 15 }), sy = useSpring(y, { stiffness: 200, damping: 15 })
  const move = (e) => {
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - r.left - r.width / 2) * 0.3); y.set((e.clientY - r.top - r.height / 2) * 0.3)
  }
  return <motion.span ref={ref} className="mag" style={{ x: sx, y: sy }} onMouseMove={move} onMouseLeave={() => { x.set(0); y.set(0) }}>{children}</motion.span>
}

// Content is visible by default. Only elements still below the fold at load are hidden
// until they scroll into view, so if JS or animation fails, nothing stays invisible.
function useReveal() {
  const ref = useRef()
  const [state, setState] = useState('idle')
  useLayoutEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) { setState('go'); return }
    setState('pre')
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setState('go'); io.disconnect() } }, { rootMargin: '0px 0px -8% 0px' })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return [ref, state]
}

export function Split({ text, delay = 0, as: Tag = 'span', className = '' }) {
  const [ref, state] = useReveal()
  let n = 0
  return (
    <Tag ref={ref} className={`split ${state} ${className}`} style={{ '--d': `${delay}s` }}>
      <span className="sr">{text}</span>
      {text.split(' ').map((w, wi) => (
        <span key={wi} className="word" aria-hidden="true">
          {[...w].map((c) => <span key={n} className="mask"><span className="ch" style={{ '--i': n++ }}>{c}</span></span>)}{' '}
        </span>
      ))}
    </Tag>
  )
}

export function Reveal({ children, delay = 0, className = '' }) {
  const [ref, state] = useReveal()
  return <div ref={ref} className={`rv ${state} ${className}`} style={{ '--d': `${delay}s` }}>{children}</div>
}

export function Counter({ to, suffix = '', decimals = 0 }) {
  const ref = useRef()
  const inView = useInView(ref, { once: true })
  const [v, setV] = useState(0)
  useEffect(() => {
    if (!inView) return
    const c = animate(0, to, { duration: 2, ease: 'easeOut', onUpdate: setV })
    return () => c.stop()
  }, [inView, to])
  return <span ref={ref}>{v.toFixed(decimals)}{suffix}</span>
}
