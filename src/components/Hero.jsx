import { useEffect, useState } from 'react'
import Icon from './Icon'
import { profile } from '../data/profile'
import '../styles/Hero.css'

function useTyping(words) {
  const [t, setT] = useState('')
  const [del, setDel] = useState(false)
  const [i, setI] = useState(0)
  useEffect(() => {
    const w = words[i]
    let d = del ? 45 : 90
    if (!del && t === w) d = 1300
    const id = setTimeout(() => {
      if (!del && t === w) setDel(true)
      else if (del && t === '') { setDel(false); setI((i + 1) % words.length) }
      else setT(del ? w.slice(0, t.length - 1) : w.slice(0, t.length + 1))
    }, d)
    return () => clearTimeout(id)
  }, [t, del, i, words])
  return t
}

export default function Hero() {
  const typed = useTyping(profile.roles)
  const [first, ...rest] = profile.name.split(' ')
  return (
    <section id="home" className="hero">
      <span className="blob b1" /><span className="blob b2" /><span className="blob b3" />
      <div className="container hero-in">
        <p className="welcome">WELCOME TO MY DIGITAL WORLD</p>
        <h1>Hi, I'm <span className="n1">{first}</span> <span className="n2">{rest.join(' ')}</span></h1>
        <p className="role grad-text" aria-live="polite">{typed}<i className="caret" /></p>
        <p className="intro">{profile.intro}</p>
        <div className="cta">
          <a href={profile.whatsapp} target="_blank" rel="noreferrer" className="btn btn-wa">
            <Icon name="whatsapp" /> Let's Chat
          </a>
          <a href={profile.resume} download="PayalGupta_FullStack_Developer_Resume.pdf" className="btn btn-cv">
            <Icon name="download" /> Resume
          </a>
        </div>
        <div className="socials">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github" /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin" /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email"><Icon name="mail" /></a>
        </div>
      </div>
    </section>
  )
}