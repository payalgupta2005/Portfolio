import { useState } from 'react'
import Reveal from './Reveal'
import { useInView, useCountUp } from '../hooks'
import { profile } from '../data/profile'
import { projects } from '../data/projects'
import { skills } from '../data/skills'
import { experience } from '../data/experience'
import '../styles/About.css'

function Stat({ end, label }) {
  const [ref, seen] = useInView(0.4)
  const n = useCountUp(end, seen)
  return (
    <div ref={ref} className="stat">
      <b className="grad-text">{n}</b>
      <span>{label}</span>
    </div>
  )
}

export default function About() {
  const [imgOk, setImgOk] = useState(true)
  // skills ab flat array hai, to seedha length le lo
  const techCount = skills.length
  return (
    <section id="about" className="alt">
      <div className="container">
        <h2 className="sec-title grad-text">About Me</h2>
        <div className="about-grid">
          <Reveal className="about-left">
            <div className="photo">
              {imgOk ? (
                <img src={profile.photo} alt={`${profile.name} portrait`} loading="lazy"
                  onError={() => setImgOk(false)} />
              ) : (
                <div className="photo-ph" role="img" aria-label="Photo placeholder">PG</div>
              )}
            </div>
            <div className="stats">
              <Stat end={projects.length} label="Projects" />
              <Stat end={techCount} label="Technologies" />
              <Stat end={experience.length} label="Roles Held" />
            </div>
          </Reveal>
          <Reveal className="about-card" delay={150}>
            <p>
              I am a Full Stack Developer with hands-on experience building production web
              applications using C#, ASP.NET Web API, React.js, and MySQL. I am skilled in RESTful
              APIs, JWT authentication, role-based authorization, and stored procedures, with strong
              frontend-backend integration skills.
            </p>
            <p>
              I work as a Software Developer at Bluglint Solutions on skilljobz.com. I joined as an
              intern in June 2026 and built the Admin CMS with ASP.NET Web Forms, including
              session-based login and Role, User, Company, Job, and Application modules. I
              develop JWT-secured APIs for user and company profiles, job postings, drafts, and
              applications, along with CRON jobs for automatic draft deletion, and I build the React
              interfaces for login, registration, and recruiter profiles.
            </p>
            <p>
              On the frontend, I work with React.js, JavaScript, HTML5, and CSS3 to build responsive
              interfaces such as Home, Navbar, Jobs, and Company card layouts. On the backend, I use
              ASP.NET Core and ASP.NET MVC to design REST APIs backed by MySQL and SQL. I use Git and
              GitHub for version control, and Postman and Swagger to test and document the APIs I
              build, so that the frontend and backend fit together smoothly.
            </p>
            <p>
              Beyond my day-to-day work, I have built Uniscaler, a college comparison platform
              developed as a freelance project, where I created REST APIs for college and course
              information, student inquiries, and a college search and filtering experience. I also
              built Foodie Fest, a food ordering web app in React.js with a state-driven cart and
              restaurant search, filtering, and sorting. These projects helped me strengthen my full
              stack and frontend skills.
            </p>
            <p>
              I completed my BCA from Maharshi Dayanand University in 2026 with a CGPA of 8.9 and secured a place on the university merit list            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}