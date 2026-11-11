import Icon from './Icon'
import { profile } from '../data/profile'
import '../styles/Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="f-social">
        <a href={profile.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp"><Icon name="whatsapp" size={24} /></a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin" size={24} /></a>
        <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github" size={24} /></a>
      </div>
      <span className="f-line" />
      <h3 className="grad-text">{profile.name.toUpperCase()}</h3>
      <p>© {new Date().getFullYear()} All rights reserved. Made with <span className="heart">♥</span></p>
    </footer>
  )
}
