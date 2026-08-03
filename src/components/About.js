import React from "react";
import { FiCode, FiServer, FiCpu } from "react-icons/fi";
import "./About.css";

const points = [
  { icon: <FiCode />, label: "Full-Stack Web Development" },
  { icon: <FiServer />, label: "REST API & Database Design" },
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
              <span className="about__card-value">Software Development Intern</span>
            </div>
            <div className="about__card-row">
              <span className="about__card-label">Company</span>
              <span className="about__card-value">Bluglint Solutions</span>
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
              Software Development Intern experienced in building full-stack
              applications with React.js, ASP.NET Web Forms, and MySQL.
            </p>
            <p>
              I enjoy turning ideas into responsive, user-friendly interfaces
              and reliable APIs — with strong fundamentals in data structures,
              algorithms, and object-oriented design.
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
