import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { experience } from '../data'
import { Split, Reveal, Counter } from './ui'

export function About() {
  return (
    <section className="sec band" id="about" data-tone="dark">
      <Split as="h2" text="MORE THAN JUST CODE." className="big" />
      <div className="about-grid">
        <Reveal className="prose">
          <p className="big-p">I am a Java Full Stack Developer passionate about building practical, scalable, and user-focused web applications.</p>
          <p>My experience includes developing backend applications using Java and Spring Boot, creating REST APIs, implementing authentication and authorization, managing databases, and integrating modern frontend technologies such as React.js and Angular.</p>
          <p>I enjoy solving real-world development problems and turning ideas into functional applications.</p>
        </Reveal>
        <Reveal delay={0.1} className="facts">
          <div><b><Counter to={1.8} decimals={1} suffix="+" /></b><span>Years of experience</span></div>
          <div><b>Spring Boot</b><span>Backend applications</span></div>
          <div><b>REST + JWT</b><span>APIs and authentication</span></div>
          <div><b>React, Angular</b><span>Frontend integration</span></div>
        </Reveal>
      </div>
    </section>
  )
}

function Login360({ e }) {
  return (
    <div className="xcard">
      <div className="xdev">
        <p className="xlabel">Application development</p>
        <ul>{e.dev.map((p) => <li key={p}>{p}</li>)}</ul>
        <div className="feat"><b>Featured contribution: certificate download portal</b>{e.featured}</div>
      </div>
      <div className="xmentor">
        <p className="xlabel">Technical mentoring</p>
        <span className="num">100+</span>
        <ul>{e.mentor.map((p) => <li key={p}>{p}</li>)}</ul>
      </div>
    </div>
  )
}

export function Timeline() {
  const ref = useRef()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 70%'] })
  const h = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  return (
    <section className="sec band" id="experience" data-tone="light">
      <Split as="h2" text="EXPERIENCE." className="big" />
      <div className="timeline" ref={ref}>
        <div className="track"><motion.div className="fill" style={{ height: h }} /></div>
        {experience.map((e) => (
          <Reveal key={e.org} className={`tl-item ${e.wide ? 'wide' : ''}`}>
            <span className="dot" />
            <p className="mono">{e.when}</p>
            <h3>{e.org}</h3>
            <p className="tl-role">{e.role}</p>
            {e.wide ? <Login360 e={e} /> : <ul>{e.points.map((p) => <li key={p}>{p}</li>)}</ul>}
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export function Education() {
  return (
    <section className="sec band edu" data-tone="dark">
      <Split as="h2" text="EDUCATION." className="big" />
      <Reveal className="edu-grid">
        <div><h3>Bachelor of Engineering, Computer Science and Engineering</h3><p>Sri Shanmugha College of Engineering and Technology</p><p className="mono">2020 to 2024 · CGPA 8.22</p></div>
        <div><h3>Java J2EE Certification</h3><p>Accord Info Matrix, Chennai</p><p className="mono">2024</p></div>
      </Reveal>
    </section>
  )
}
