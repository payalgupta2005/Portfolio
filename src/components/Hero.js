import React from "react";
import { FiDownload } from "react-icons/fi";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { SiReact, SiDotnet, SiHtml5 } from "react-icons/si";
import "./Hero.css";
import Profile from "../assets/profile2.jpeg";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <span className="glow" style={{ top: "-10%", left: "-8%", width: 420, height: 420, background: "#a855f7" }} />
      <span className="glow" style={{ top: "20%", right: "-10%", width: 380, height: 380, background: "#ec4899" }} />

      <div className="container hero__inner">
        <div className="hero__text">
          <p className="section-eyebrow">Welcome to my portfolio</p>
          <h1>
            Hi, I'm <span className="hero__name">Payal</span>
          </h1>
          <p className="hero__role">Full Stack Developer</p>
          <p className="hero__desc">
            Building responsive, user-friendly web applications with React.js,
            ASP.NET and MySQL — crafted with clean code and precision.
          </p>

          <div className="hero__actions">
            <a
              className="btn btn-primary"
              href={process.env.PUBLIC_URL + "/Payal_Gupta_Resume.pdf"}
              download="Payal_Gupta_Resume.pdf"
            >
              Download Resume <FiDownload />
            </a>

            <div className="hero__socials">
              <a href="https://github.com/payalgupta2005" target="_blank" rel="noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/payal-gupta2005/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="mailto:payalgupta020405@gmail.com" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__ring">
            <img src={Profile} alt="Payal Gupta" className="hero__avatar" />
          </div>
          <span className="hero__badge hero__badge--1">
            <SiReact />
          </span>
          <span className="hero__badge hero__badge--2">
            <SiHtml5 />
          </span>
          <span className="hero__badge hero__badge--3">
            <SiDotnet />
          </span>
        </div>
      </div>
    </section>
  );
}
