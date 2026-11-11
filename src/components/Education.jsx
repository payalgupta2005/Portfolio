import { FaGraduationCap, FaCalendarAlt } from 'react-icons/fa'
import Reveal from './Reveal'
import { education } from '../data/experience'
import '../styles/Education.css'

export default function Education() {
  return (
    <section id="education" className="alt">
      <div className="container">
        <h2 className="sec-title grad-text">Education</h2>
        <div className="edu-timeline">
          {education.map((e, i) => (
            <div
              key={e.title}
              className={`edu-item ${i % 2 === 0 ? 'left' : 'right'}`}
            >
              <span className="edu-dot" />
              <Reveal delay={i * 120}>
                <div className="edu-card">
                  <h3>
                    <FaGraduationCap className="edu-icon" /> {e.title}
                  </h3>
                  <div className="edu-meta">
                    <span className="edu-inst">{e.place}</span>
                    <span className="edu-date">
                      <FaCalendarAlt /> {e.period}
                    </span>
                  </div>
                  <ul className="edu-points">
                    {e.points.map((p, j) => (
                      <li key={j}>{p}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}