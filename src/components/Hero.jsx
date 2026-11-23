import { Split, Magnetic } from './ui'

const layers = [['React.js', 'client'], ['Spring Security', 'JWT'], ['Spring Boot', 'REST API'], ['MySQL', 'Redis']]
const code = [
  ['s', '// REST endpoint'], ['i', '@GetMapping("/bookings")'], ['', 'public List<Booking> list() {'], ['', '  return service.findAll();'], ['', '}'],
]

export default function Hero() {
  return (
    <section className="hero" id="top" data-tone="light">
      <div className="hero-grid">
        <p className="mono hello rise">HELLO, I'M</p>
        <h1 className="h1c">
          <Split text="MOHANAPRIYA" className="n1" delay={0.05} />
          <Split text="KAMARAJ." className="n2" delay={0.25} />
        </h1>
        <p className="status rise" style={{ '--d': '.45s' }}><i className="pulse" aria-hidden="true" />JAVA | SPRING BOOT | REACT | JAVASCRIPT</p>
        <div className="intro">
          <p className="title rise" style={{ '--d': '.4s' }}>JAVA <span className="accent">FULL STACK</span><br />DEVELOPER</p>
          <p className="desc rise" style={{ '--d': '.5s' }}>Building scalable web applications and meaningful digital experiences with Java, Spring Boot, React.js and modern web technologies.</p>
          <div className="ctas rise" style={{ '--d': '.6s' }}>
            <Magnetic><a href="#work" className="btn solid caps" data-hover>Explore my work</a></Magnetic>
            <Magnetic><a href="#contact" className="btn caps" data-hover>Let's connect</a></Magnetic>
          </div>
        </div>
        <div className="visual rise" style={{ '--d': '.65s' }} aria-hidden="true">
          <ul className="layers">
            {layers.map(([a, b], k) => <li className="layer" style={{ '--k': k }} key={a}><span>{a}</span><small>{b}</small></li>)}
          </ul>
          <pre className="code">{code.map(([c, t], k) => <span className={`ln ${c}`} key={k}>{t}</span>)}</pre>
        </div>
      </div>
    </section>
  )
}
