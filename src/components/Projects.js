import React, { useState } from "react";
import { FiGithub } from "react-icons/fi";
import "./Projects.css";

const CATEGORIES = ["All", "Frontend", "Backend"];

const projects = [
  {
    title: "EduMatrix — Educational Website",
    category: "Frontend",
    description:
      "A responsive educational website with pages for courses, study materials, quizzes, and resources — built with an intuitive, accessible interface across screen sizes.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    repo: "https://github.com/payalgupta2005",
  },
  {
    title: "Swiggy-Inspired Food Ordering App",
    category: "Frontend",
    description:
      "A responsive food ordering web app with dynamic restaurant listings and menus via REST APIs, multi-page navigation, search/filter, and cart persistence with localStorage.",
    tags: ["React.js", "REST API", "Tailwind CSS"],
    repo: "https://github.com/payalgupta2005/react-food-ordering-app",
  },
  {
    title: "Employee Management API",
    category: "Backend",
    description:
      "RESTful APIs with full CRUD operations for employee management, built on ASP.NET Core with SQL Server and Entity Framework Core using MVC architecture and OOP principles.",
    tags: ["ASP.NET Core", "C#", "SQL Server", "EF Core"],
    repo: "https://github.com/payalgupta2005/employee-crud-api",
  },
];

export default function Projects() {
  const [active, setActive] = useState("All");
  const visible =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <p className="section-eyebrow">A selection of my work</p>
        <h2 className="section-title">
          My <span>Projects</span>
        </h2>

        <div className="projects__filters">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              className={`projects__filter ${active === c ? "is-active" : ""}`}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="projects__grid">
          {visible.map((p) => (
            <article className="projects__card" key={p.title}>
              <div className="projects__card-top">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </div>
              <div className="projects__tags">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <a
                className="btn btn-outline projects__repo"
                href={p.repo}
                target="_blank"
                rel="noreferrer"
              >
                Repository <FiGithub />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
