import React from "react";
import { FiCode, FiServer, FiCpu } from "react-icons/fi";
import "./About.css";

const points = [
  { icon: <FiCode />, label: "Full-Stack Web Development (React.js & ASP.NET)" },
  { icon: <FiServer />, label: "Secure REST APIs & MySQL Database Design" },
  { icon: <FiCpu />, label: "Problem Solving (DSA & OOP)" },
];

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <p className="section-eyebrow">Get to know me</p>
        <h2 className="section-title">
          About <span>Me</span>
        </h2>

        <div className="about__grid">
          <div className="about__card">
            <div className="about__card-row">
              <span className="about__card-label">Currently</span>
              <span className="about__card-value">Full Stack Developer</span>
            </div>
            <div className="about__card-row">
              <span className="about__card-label">Company</span>
              <span className="about__card-value">Bluglint Solutions</span>
            </div>
            <div className="about__card-row">
              <span className="about__card-label">Experience</span>
              <span className="about__card-value">1.5 Years (Internship, Freelance & Full-Time)</span>
            </div>
            <div className="about__card-row">
              <span className="about__card-label">Education</span>
              <span className="about__card-value">BCA, MDU Haryana — CGPA 8.9</span>
            </div>
            <div className="about__card-row">
              <span className="about__card-label">Based in</span>
              <span className="about__card-value">Haryana, India</span>
            </div>
          </div>

          <div className="about__text">
            <h3>
              I'm <span className="about__highlight">Payal Gupta</span>
            </h3>
            <p>
              Full Stack Developer with 1.5 years of hands-on experience across
              an internship, a freelance production project, and a full-time
              role at Bluglint Solutions, where I build SkillJobz, a job portal
              using React.js, ASP.NET Web API (C#), and MySQL.
            </p>
            <p>
              I work on secure JWT-based authentication, stored-procedure-driven
              backends, and admin CMS development, and I enjoy turning ideas
              into responsive, user-friendly interfaces backed by reliable APIs.
              I have strong fundamentals in data structures, algorithms, and
              object-oriented design.
            </p>
            <p>
              I'm looking for a Full Stack / .NET + React Developer role where I
              can build secure, scalable web applications.
            </p>

            <div className="about__points">
              {points.map((p) => (
                <div className="about__point" key={p.label}>
                  <span className="about__point-icon">{p.icon}</span>
                  {p.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}