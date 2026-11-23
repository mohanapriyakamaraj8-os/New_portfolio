import { profile } from '../data'
import { Split, Magnetic } from './ui'

export default function Contact() {
  return (
    <footer className="sec band contact" id="contact" data-tone="light">
      <Split as="h2" text="HAVE A PROJECT IN MIND?" className="big" />
      <Split as="h2" text="LET'S BUILD SOMETHING GREAT." className="big accent" delay={0.4} />
      <div className="ctas">
        <Magnetic><a className="btn solid" href={`mailto:${profile.email}?subject=Let's%20work%20together`} data-hover>{profile.email}</a></Magnetic>
        <Magnetic><a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer" data-hover>LinkedIn</a></Magnetic>
        <Magnetic><a className="btn" href={profile.portfolio} target="_blank" rel="noreferrer" data-hover>Portfolio</a></Magnetic>
      </div>
      <p className="mono copy">© {new Date().getFullYear()} {profile.name}</p>
    </footer>
  )
}
