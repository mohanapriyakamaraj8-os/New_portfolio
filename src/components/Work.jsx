import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useAnimation } from 'motion/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projects, skills } from '../data'
import { Split, Reveal } from './ui'

gsap.registerPlugin(ScrollTrigger)

const GAP = 24
const MOCKS = {
  lab: (<><div className="cal">{Array.from({ length: 28 }, (_, k) => <b key={k} className={k === 17 ? 'hot' : [2, 3, 9, 10, 11, 16, 22, 23].includes(k) ? 'on' : ''} />)}</div><div className="bars">{[60, 40, 85, 55, 70].map((h, k) => <u key={k} style={{ height: `${h}%` }} />)}</div></>),
  shop: <div className="grid6">{Array.from({ length: 6 }, (_, k) => <div key={k} className={k === 1 ? 'hot' : ''} />)}</div>,
  web: (<><div className="hb"><i /><i /><i className="l" /><em /></div><div className="blk" /></>),
  caf: <div className="rows"><div className="s" />{[0, 1, 2].map((k) => <div key={k} className="r"><i /><i className="l" /></div>)}</div>,
}

// Stylised preview. Set `image` on a project in data.js to show a real screenshot instead.
function Preview({ p }) {
  if (p.image) return <div className="pv"><img src={p.image} alt={`${p.name} screenshot`} loading="lazy" draggable="false" /></div>
  return (
    <div className="pv" aria-hidden="true">
      <div className="win"><header><span /><span /><span /><small>{p.mark}</small></header><div className="mb">{MOCKS[p.kind]}</div></div>
    </div>
  )
}

export function Projects() {
  const [i, setI] = useState(0)
  const [open, setOpen] = useState(false)
  const [m, setM] = useState({ step: 0, off: 0 })
  const vp = useRef()
  const first = useRef(true)
  const controls = useAnimation()
  const n = projects.length
  const spring = { type: 'spring', stiffness: 200, damping: 30 }

  useEffect(() => {
    const measure = () => {
      const s = vp.current?.querySelector('.slide')
      if (s) setM({ step: s.offsetWidth + GAP, off: (vp.current.clientWidth - s.offsetWidth) / 2 })
    }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(vp.current)
    return () => ro.disconnect()
  }, [])
  useEffect(() => {
    if (!m.step) return
    const x = m.off - i * m.step
    if (first.current) { controls.set({ x }); first.current = false } else controls.start({ x, transition: spring })
  }, [m]) // eslint-disable-line react-hooks/exhaustive-deps

  const go = (k) => {
    const t = Math.max(0, Math.min(n - 1, k))
    setI(t); setOpen(false)
    controls.start({ x: m.off - t * m.step, transition: spring })
  }
  return (
    <section className="sec band" id="work" data-tone="dark">
      <Split as="h2" text="SELECTED WORK." className="big" />
      <div className="carousel" tabIndex={0} role="group" aria-roledescription="carousel" aria-label="Featured projects"
        onKeyDown={(e) => { if (e.key === 'ArrowRight') go(i + 1); if (e.key === 'ArrowLeft') go(i - 1) }}>
        <div className="vp" ref={vp}>
          <motion.div className="track" animate={controls} drag="x" dragElastic={0.12}
            dragConstraints={{ left: m.off - (n - 1) * m.step, right: m.off }}
            onDragEnd={(_, { offset, velocity }) => {
              const d = offset.x < -70 || velocity.x < -500 ? 1 : offset.x > 70 || velocity.x > 500 ? -1 : 0
              go(i + d)
            }}>
            {projects.map((p, k) => {
              const on = k === i
              return (
                <article key={p.name} className={`slide ${on ? 'on' : ''}`} aria-label={`${k + 1} of ${n}: ${p.name}`}>
                  <div className="in" {...(on ? {} : { inert: '' })}>
                    <Preview p={p} />
                    <div className="p-info">
                      <h3>{p.name}</h3>
                      <p>{p.desc}</p>
                      <ul className="tags">{p.tech.map((t) => <li key={t}>{t}</li>)}</ul>
                      <div className="ctas">
                        <button className="btn solid" data-hover aria-expanded={on && open} onClick={() => setOpen(!open)}>{on && open ? 'Hide project' : 'View project'}</button>
                        {p.github && <a className="btn" href={p.github} target="_blank" rel="noreferrer" data-hover>GitHub</a>}
                      </div>
                      <AnimatePresence initial={false}>
                        {on && open && (
                          <motion.ul className="features" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}>
                            {p.features.map((f) => <li key={f}>{f}</li>)}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                  {!on && <button className="peek" data-hover aria-label={`Show ${p.name}`} onClick={() => go(k)} />}
                </article>
              )
            })}
          </motion.div>
        </div>
        <div className="c-ctrl">
          <span className="c-count" aria-live="polite">{String(i + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}</span>
          <div className="dots">{projects.map((q, k) => <button key={q.name} data-hover aria-label={`Show ${q.name}`} aria-current={k === i} onClick={() => go(k)} />)}</div>
          <button className="arrow" data-hover aria-label="Previous project" disabled={i === 0} onClick={() => go(i - 1)}>←</button>
          <button className="arrow" data-hover aria-label="Next project" disabled={i === n - 1} onClick={() => go(i + 1)}>→</button>
        </div>
      </div>
    </section>
  )
}

export function Skills() {
  const marquee = useRef()
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(marquee.current, { xPercent: -30, ease: 'none', scrollTrigger: { trigger: marquee.current, scrub: 1, start: 'top bottom', end: 'bottom top' } })
    })
    return () => ctx.revert()
  }, [])
  return (
    <section className="sec band skills" id="skills" data-tone="light">
      <div className="marquee" aria-hidden><div ref={marquee}>JAVA · SPRING BOOT · JAVA · SPRING BOOT · JAVA · SPRING BOOT ·</div></div>
      <Split as="h2" text="THE TOOLKIT." className="big" />
      <div className="skill-grid">
        {skills.map((g) => (
          <Reveal key={g.group} className="skill-group">
            <h3>{g.group}</h3>
            {g.big && <div className="hl">{g.big.map((b) => <motion.span key={b} whileHover={{ skewX: -8, x: 8 }} data-hover>{b}</motion.span>)}</div>}
            <ul className="tags">{g.items.map((t) => <motion.li key={t} whileHover={{ y: -4, backgroundColor: '#B8FF38', color: '#171717' }} data-hover>{t}</motion.li>)}</ul>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
