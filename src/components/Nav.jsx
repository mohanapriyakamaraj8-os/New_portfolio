import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { nav } from '../data'
import { Magnetic } from './ui'
import ThemeToggle from './ThemeToggle'

export default function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <header className={`nav ${open ? 'open' : ''}`}>
        <a href="#top" className="logo" data-hover>MK</a>
        <div className="nav-actions"><ThemeToggle /><Magnetic><button className="menu-btn" data-hover aria-expanded={open} onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}</button></Magnetic></div>
      </header>
      <AnimatePresence>
        {open && (
          <motion.nav className="overlay" aria-label="Main" initial={{ clipPath: 'circle(0% at 95% 4%)' }} animate={{ clipPath: 'circle(150% at 95% 4%)' }}
            exit={{ clipPath: 'circle(0% at 95% 4%)' }} transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}>
            {nav.map((l, i) => (
              <motion.a key={l} href={`#${l.toLowerCase()}`} data-hover onClick={() => setOpen(false)}
                initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { delay: 0.25 + i * 0.07 } }}>{l}</motion.a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
