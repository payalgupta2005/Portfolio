import React from "react";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a href="#home" className="footer__logo">
          Payal<span>&lt;/&gt;</span>
        </a>

        <nav className="footer__links">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="footer__socials">
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
      <p className="footer__copy">© {new Date().getFullYear()} Payal Gupta. All rights reserved.</p>
    </footer>
  );
}
