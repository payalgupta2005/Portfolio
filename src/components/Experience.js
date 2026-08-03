import React from "react";
import "./Experience.css";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="experience-container">

        <h2 className="section-title">
          My <span>Experience</span>
        </h2>

        <div className="experience-card">

          <div className="experience-header">
            <FaBriefcase className="icon" />

            <div>
              <h3>Software Development Intern</h3>

              <h4>Bluglint Solutions</h4>

              <div className="experience-info">
                <span>
                  <FaCalendarAlt /> June 2026 – Present
                </span>

              </div>
            </div>
          </div>

          <div className="experience-content">

            <ul>

              <li>
                Built a full-stack Job Portal enabling job seekers to search
                and apply for jobs, while recruiters can post jobs and manage
                applicants using <strong>React.js</strong>,
                <strong> ASP.NET Web Forms</strong>, and
                <strong> MySQL</strong>.
              </li>

              <li>
                Developed dynamic job listings and applicant workflows by
                integrating REST APIs, allowing candidates to apply to
                companies and recruiters to view and manage candidate profiles.
              </li>

              <li>
                Implemented REST APIs for user authentication, password
                encryption, login/logout, and security question verification.
              </li>

              <li>
                Developed responsive frontend components including
                <strong> Navbar</strong>,
                <strong> Hero Section</strong>,
                <strong> Job Listings</strong>,
                <strong> Login/Register</strong>,
                <strong> About</strong>, and
                <strong> Footer</strong> using React.js.
              </li>

            </ul>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;