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
              I am a Full Stack Developer with 1+ year of hands-on experience in full-time
              development and freelance projects, building scalable, production-ready web
              applications. My core stack includes React.js, C#, ASP.NET Web API, ASP.NET Core,
              and MySQL, with strong expertise in RESTful APIs, JWT authentication, role-based
              authorization, and stored procedures.
            </p>
            <p>
              I work as a Full Stack Developer at Bluglint Solutions on skilljobz.com, a job portal
              platform. I design and develop secure REST APIs for user, recruiter, and company
              profiles, job postings, draft jobs, and job applications using ASP.NET Web API and a
              stored-procedure-driven MySQL backend. I built the Admin CMS with ASP.NET Web Forms,
              including session-based authentication and modules for Roles, Users, Companies, Jobs,
              and Applications, implemented automated CRON jobs for expired draft cleanup, and
              developed React.js interfaces for login, registration, and recruiter profiles with
              seamless API integration.
            </p>
            <p>
              Alongside my full-time role, I work as a freelance Full Stack Developer on Uniscaler
              (uniscaler.in), an educational portal and college discovery platform. I developed
              REST APIs for college and university data, courses, and student inquiry workflows,
              and built responsive React.js interfaces with college search, filtering, and student
              login. I also gained early industry experience as a Software Development Intern at
              Bluestock Fintech, where I built a full-stack website and integrated RESTful APIs
              with the frontend.
            </p>
            <p>
              On the frontend, I work with React.js, JavaScript (ES6+), HTML5, CSS3, React Router,
              React Hooks, Tailwind CSS, and Bootstrap to build responsive, user-friendly
              interfaces. On the backend, I use C#, ASP.NET Web API, ASP.NET Core, ASP.NET MVC,
              ADO.NET, Entity Framework Core, and Dependency Injection with MySQL and SQL Server.
              I follow secure development practices such as JWT authentication, refresh token
              rotation, OTP verification, and input validation, and I use Git, GitHub, Postman,
              and Swagger for version control, API testing, and documentation.
            </p>
            <p>
              Beyond my professional work, I built Foodie Fest, a food ordering web app in React.js
              with a state-driven cart and restaurant search, filtering, and sorting. I completed my
              BCA from Maharshi Dayanand University in 2026 with a CGPA of 8.9, secured a place on
              the university merit list, and completed the GenAI Ready Naari Program (40 hours).
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}