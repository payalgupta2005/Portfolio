import { useState } from 'react'
import Icon from './Icon'
import Reveal from './Reveal'
import { profile } from '../data/profile'
import '../styles/Contact.css'

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// .env me VITE_FORMSPREE_ID ho to wo use hoga, warna ye ID
const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID || 'xwlljqlk'
const FORMSPREE_URL = `https://formspree.io/f/${FORMSPREE_ID}`

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errMsg, setErrMsg] = useState('')
  const [trap, setTrap] = useState('') // honeypot: bots hi bharte hain
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    const er = {}
    if (form.name.trim().length < 2) er.name = 'Please enter your name.'
    if (!emailRe.test(form.email)) er.email = 'Please enter a valid email.'
    if (form.message.trim().length < 10) er.message = 'Message should be at least 10 characters.'
    setErrors(er)
    if (Object.keys(er).length) return

    // Honeypot bhara hai to bot hai: chupchap success dikha do, bhejo mat
    if (trap) {
      setStatus('success')
      return
    }

    setStatus('sending')
    setErrMsg('')
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(), // Formspree isse reply-to bana deta hai
          message: form.message.trim(),
          _subject: `Portfolio message from ${form.name.trim()}`,
        }),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        const data = await res.json().catch(() => ({}))
        setErrMsg(data?.errors?.map((x) => x.message).join(', ') || 'Something went wrong. Please try again.')
        setStatus('error')
      }
    } catch {
      setErrMsg('Network error. Please check your internet and try again.')
      setStatus('error')
    }
  }

  const field = (k, label, extra) => (
    <div className="field">
      {extra ? (
        <textarea rows="5" placeholder={label} value={form[k]} onChange={set(k)} aria-label={label}
          aria-invalid={!!errors[k]} />
      ) : (
        <input type={k === 'email' ? 'email' : 'text'} placeholder={label} value={form[k]}
          onChange={set(k)} aria-label={label} aria-invalid={!!errors[k]} />
      )}
      {errors[k] && <small role="alert">{errors[k]}</small>}
    </div>
  )

  const sending = status === 'sending'

  return (
    <section id="contact">
      <div className="container">
        <h2 className="sec-title grad-text">Get In Touch</h2>
        <Reveal className="contact-box">
          <div className="c-left">
            <h3>Let's Talk</h3>
            <p>Have an idea or a question? Send me a message — I'd love to hear from you.</p>
            <ul>
              <li><span className="c-ic"><Icon name="mail" /></span><div><b>Email</b><a href={`mailto:${profile.email}`}>{profile.email}</a></div></li>
              <li><span className="c-ic"><Icon name="phone" /></span><div><b>Phone</b><a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a></div></li>
              <li><span className="c-ic"><Icon name="pin" /></span><div><b>Location</b><span>{profile.location}</span></div></li>
            </ul>
            <div className="c-social">
              <a href={profile.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp"><Icon name="whatsapp" /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin" /></a>
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github" /></a>
            </div>
          </div>
          <form className="c-right" onSubmit={submit} noValidate>
            <h3>Send a Message</h3>

            {/* Honeypot: insaan ko dikhta nahi */}
            <input
              type="text"
              name="_gotcha"
              className="hp"
              tabIndex="-1"
              autoComplete="off"
              aria-hidden="true"
              value={trap}
              onChange={(e) => setTrap(e.target.value)}
            />

            {field('name', 'Your Name')}
            {field('email', 'Email Address')}
            {field('message', 'How can I help you?', true)}
            <button className="btn btn-send" type="submit" disabled={sending}>
              {sending ? 'Sending…' : <>Send Message <Icon name="send" size={18} /></>}
            </button>

            {status === 'success' && (
              <p className="ok" role="status"><Icon name="check" size={16} /> Thanks! Your message has been sent. I'll get back to you soon.</p>
            )}
            {status === 'error' && (
              <p className="err" role="alert">{errMsg}</p>
            )}
          </form>
        </Reveal>
        <Reveal className="map" delay={100}>
          <iframe title="Location map" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Faridabad,Haryana,India&output=embed" />
          <div className="map-card">
            <b>Faridabad</b><span>Haryana, India</span>
            <a className="btn btn-map" target="_blank" rel="noreferrer"
              href="https://www.google.com/maps/search/?api=1&query=Faridabad,Haryana">
              <Icon name="ext" size={16} /> Open in Maps
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}