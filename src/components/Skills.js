import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiBootstrap,
  SiDotnet,
  SiMysql,
  SiGit,
  SiGithub,
  SiPostman,
} from "react-icons/si";
import { FaServer } from "react-icons/fa";
import "./Skills.css";

const skills = [
  { name: "HTML5 & CSS3", icon: <SiHtml5 />, level: 9, color: "#e34f26" },
  { name: "JavaScript (ES6+)", icon: <SiJavascript />, level: 8, color: "#f7df1e" },
  { name: "React.js", icon: <SiReact />, level: 8, color: "#61dafb" },
  { name: "Bootstrap", icon: <SiBootstrap />, level: 7, color: "#7952b3" },
  { name: "ASP.NET / .NET 9", icon: <SiDotnet />, level: 7, color: "#a855f7" },
  { name: "C# / REST APIs", icon: <FaServer />, level: 7, color: "#ec4899" },
  { name: "MySQL / SQL Server", icon: <SiMysql />, level: 7, color: "#00758f" },
  { name: "Git & GitHub", icon: <SiGit />, level: 8, color: "#f05032" },
  { name: "Postman & Swagger", icon: <SiPostman />, level: 7, color: "#ff6c37" },
  { name: "OOP & DSA", icon: <SiGithub />, level: 8, color: "#e0e0e0" },
];

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <p className="section-eyebrow">What I work with</p>
        <h2 className="section-title">
          My <span>Skills</span>
        </h2>

        <div className="skills__grid">
          {skills.map((s) => (
            <div className="skills__row" key={s.name}>
              <span className="skills__icon" style={{ color: s.color }}>
                {s.icon}
              </span>
              <span className="skills__name">{s.name}</span>
              <span className="skills__dots">
                {Array.from({ length: 10 }).map((_, i) => (
                  <span
                    key={i}
                    className={`skills__dot ${i < s.level ? "is-filled" : ""}`}
                    style={i < s.level ? { background: s.color } : undefined}
                  />
                ))}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
