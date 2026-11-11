import { useEffect } from 'react'
import Icon from './Icon'
import ImageSlider from './ImageSlider'

export default function ProjectModal({ project: p, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [onClose])

  const has = (u) => u && u !== '#'
  const hasImages = p.images && p.images.length > 0
  return (
    <div className="modal-bg" onClick={onClose}>
      <div className="modal" role="dialog" aria-modal="true" aria-label={p.title} onClick={(e) => e.stopPropagation()}>
        <button className="icon-btn modal-x" onClick={onClose} aria-label="Close" autoFocus><Icon name="close" /></button>
        <h3 className="grad-text">{p.title}</h3>
        <p className="p-org">{p.org} · {p.period}</p>
        {hasImages && (
          <div className="m-slider">
            <ImageSlider images={p.images} alt={p.title} interval={3500} />
          </div>
        )}
        <p className="m-desc">{p.description}</p>
        <h4>Key Features</h4>
        <ul>{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
        <h4>Tech Used</h4>
        <div className="tags">{p.tech.map((t) => <span key={t}>{t}</span>)}</div>
        <div className="p-actions">
          {has(p.live) && <a className="btn btn-blue" href={p.live} target="_blank" rel="noreferrer"><Icon name="ext" size={18} /> Live Demo</a>}
          {has(p.github) && <a className="btn btn-grad" href={p.github} target="_blank" rel="noreferrer"><Icon name="github" size={18} /> GitHub</a>}
        </div>
      </div>
    </div>
  )
}