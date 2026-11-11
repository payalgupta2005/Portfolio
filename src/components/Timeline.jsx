import { useRef } from 'react'
import { FaBuilding, FaBriefcase, FaCalendarAlt } from 'react-icons/fa'
import Reveal from './Reveal'
import { experience } from '../data/experience'
import '../styles/Experience.css'

function ExpCard({ item }) {
  const ref = useRef(null)

  // Mouse ke position ke hisaab se box tilt hota hai
  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    el.style.setProperty('--ry', `${x * 6}deg`)
    el.style.setProperty('--rx', `${-y * 6}deg`)
  }

  const onLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--ry', '0deg')
    el.style.setProperty('--rx', '0deg')
  }

  return (
    <div className="exp-tilt" onMouseMove={onMove} onMouseLeave={onLeave}>
      <div className="exp-card" ref={ref}>
        <div className="exp-left">
          <FaBuilding className="exp-building" />
          <h4>{item.company}</h4>
          <span className="exp-date">
            <FaCalendarAlt /> {item.period}
          </span>
        </div>

        <div className="exp-badge">
          <FaBriefcase />
        </div>

        <div className="exp-right">
          <h3>{item.role}</h3>
          <ul>
            {item.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default function Timeline() {
  return (
    <section id="experience">
      <div className="container">
        <h2 className="sec-title grad-text">Career Journey</h2>
        <div className="exp-list">
          {experience.map((item, i) => (
            <Reveal key={item.role} delay={i * 120}>
              <ExpCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}