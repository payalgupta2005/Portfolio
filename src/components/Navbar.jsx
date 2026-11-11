import { useEffect, useState } from 'react'
import Icon from './Icon'
import { profile } from '../data/profile'
import '../styles/Navbar.css'

const links = [
  ['home', 'Home'], ['about', 'About'], ['tech-stack', 'Tech Stack'], ['projects', 'Projects'],
  ['experience', 'Experience'], ['education', 'Education'], ['contact', 'Contact'],
]

export default function Navbar({ theme, onToggleTheme }) {
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    links.forEach(([id]) => { const el = document.getElementById(id); if (el) io.observe(el) })
    return () => io.disconnect()
  }, [])

  return (
    <header className="nav">
      <div className="container nav-in">
        <a href="#home" className="logo grad-text">{profile.name}</a>
        <nav className={`nav-links ${open ? 'open' : ''}`} aria-label="Main">
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} className={active === id ? 'active' : ''}
              aria-current={active === id ? 'true' : undefined} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <button className="icon-btn" onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} />
          </button>
          <button className="icon-btn burger" onClick={() => setOpen(!open)}
            aria-label="Toggle menu" aria-expanded={open}>
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </div>
    </header>
  )
}
