import { useState } from 'react'
import Reveal from './Reveal'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import { projects } from '../data/projects'
import '../styles/Projects.css'

const categories = ['All', ...new Set(projects.map((p) => p.category))]

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const [selected, setSelected] = useState(null)
  const shown = filter === 'All' ? projects : projects.filter((p) => p.category === filter)
  return (
    <section id="projects" className="alt">
      <div className="container">
        <h2 className="sec-title grad-text">Featured Projects</h2>
        <div className="filters" role="group" aria-label="Filter projects">
          {categories.map((c) => (
            <button key={c} className={filter === c ? 'on' : ''} aria-pressed={filter === c}
              onClick={() => setFilter(c)}>{c}</button>
          ))}
        </div>
        <div className="p-grid">
          {shown.map((p, i) => (
            <Reveal key={p.id} delay={i * 100}>
              <ProjectCard project={p} onOpen={setSelected} />
            </Reveal>
          ))}
        </div>
      </div>
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
