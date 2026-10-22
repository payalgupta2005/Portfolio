import React from "react";
import "./Experience.css";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Bluglint Solutions",
    period: "June 2026 – Present",
    project: {
      name: "SkillJobz",
      url: "https://skilljobz.com/",
      type: "Job Portal Platform",
    },
    tech: "React.js, ASP.NET Web API (.NET Framework 4.8), ASP.NET Web Forms, MySQL",
    points: [
      "Architected and developed a full-stack job portal with a React.js frontend, ASP.NET Web API (C#) backend, and Web Forms Admin CMS, enabling job seekers to search and apply for jobs and recruiters to post jobs and manage applicants.",
      "Designed secure REST APIs for registration, login/logout, and OTP-based email and phone verification, with JWT access/refresh token authentication, token rotation, password encryption, and role-based authorization.",
      "Built end-to-end modules for user profiles, job postings with draft support, screening questionnaires, applications, saved jobs, and company profiles using stored-procedure-driven CRUD with JWT ownership checks.",
      "Developed paginated and filtered endpoints for recruiter applicant views and job listings, with server-side validation and secure multipart file uploads (resume, profile photo, logos).",
      "Designed MySQL schemas, master-data tables, and stored procedures; imported and validated bulk reference data (states, cities, courses, universities, job titles).",
      "Built an independent Admin CMS from scratch for user, role, content, and configuration management; collaborated with the frontend developer and team lead on API contracts and Git/GitHub-based delivery.",
    ],
  },
  {
    role: "Freelance Full Stack Developer",
    company: "Uniscaler",
    period: "Dec 2025 – May 2026",
    project: {
      name: "Uniscaler",
      url: "https://uniscaler.in/",
      type: "Educational Portal & College Discovery Platform",
    },
    tech: "React.js, .NET, REST APIs, HTML5, CSS3, Git, GitHub",
    points: [
      "Contributed to development and maintenance of a production educational portal connecting students and institutions through college discovery and guidance workflows.",
      "Developed responsive, reusable React.js components for college search, stream-based filtering, course exploration, partner directories, and student success showcases.",
      "Implemented navigation and UI modules for Engineering, Medical, Management, and IT streams with location-based filtering; built sliders, carousels, and multi-tier course insights (BBA Plus, BCA Plus, MBA Plus, vocational).",
      "Integrated .NET backend services for institutional data, course offerings, and inquiry/newsletter workflows via REST APIs; debugged frontend–backend integration, routing, and component state issues.",
    ],
  },
  {
    role: "Software Development Intern",
    company: "Bluestock Fintech",
    period: "[TODO: Month Year – Month Year] (3 months)",
    points: [
      "Developed a full-stack website with responsive user interfaces connected to backend services.",
      "Designed and built RESTful APIs and integrated them with the frontend for dynamic data handling.",
      "Tested API endpoints, debugged integration issues, and followed Git-based version control practices.",
    ],
  },
];

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="experience-container">
        <h2 className="section-title">
          My <span>Experience</span>
        </h2>

        {experiences.map((exp) => (
          <div className="experience-card" key={exp.company}>
            <div className="experience-header">
              <FaBriefcase className="icon" />

              <div>
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>

                <div className="experience-info">
                  <span>
                    <FaCalendarAlt /> {exp.period}
                  </span>
                </div>

                {exp.project && (
                  <p className="experience-project">
                    Project:{" "}
                    <a
                      href={exp.project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {exp.project.name}
                    </a>{" "}
                    — {exp.project.type}
                  </p>
                )}

                {exp.tech && (
                  <p className="experience-tech">
                    <strong>Tech:</strong> {exp.tech}
                  </p>
                )}
              </div>
            </div>

            <div className="experience-content">
              <ul>
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;