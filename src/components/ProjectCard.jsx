import Icon from './Icon'
import ImageSlider from './ImageSlider'

export default function ProjectCard({ project: p, onOpen }) {
  const has = (u) => u && u !== '#'
  const hasImages = p.images && p.images.length > 0
  return (
    <article className="p-card">
      <div className="p-thumb">
        {hasImages ? (
          <ImageSlider images={p.images} alt={p.title} />
        ) : (
          <div className="p-ph" aria-hidden="true">{p.title.charAt(0)}</div>
        )}
        <span className="p-badge">{p.period}</span>
      </div>
      <div className="p-body">
        <h3>{p.title}</h3>
        <p className="p-org">{p.org}</p>
        <div className="tags">
          {p.tech.slice(0, 3).map((t) => <span key={t}>{t}</span>)}
          {p.tech.length > 3 && <span>+{p.tech.length - 3}</span>}
        </div>
        <p className="p-desc">{p.short}</p>
        <div className="p-actions">
          <button className="btn btn-grad grow" onClick={() => onOpen(p)}>
            <Icon name="info" size={18} /> View Details
          </button>
          {has(p.live) && (
            <a className="icon-btn sq" href={p.live} target="_blank" rel="noreferrer" aria-label={`${p.title} live`}>
              <Icon name="ext" />
            </a>
          )}
          {has(p.github) && (
            <a className="icon-btn sq" href={p.github} target="_blank" rel="noreferrer" aria-label={`${p.title} GitHub`}>
              <Icon name="github" />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}