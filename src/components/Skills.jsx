import Reveal from './Reveal'
import { skills } from '../data/skills'
import '../styles/Skills.css'

export default function Skills() {
  return (
    <section id="tech-stack">
      <div className="container">
        <h2 className="sec-title grad-text">Technological Arsenal</h2>
        <div className="skill-grid">
          {skills.map((s, i) => {
            const Icon = s.icon
            return (
              <Reveal key={s.name} delay={(i % 6) * 80}>
                <div className="skill-card">
                  <Icon className="skill-icon" style={{ color: s.color }} />
                  <strong>{s.name}</strong>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}