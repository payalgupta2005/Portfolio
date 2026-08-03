import React, { useEffect, useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import "./Navbar.css";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
   { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const handleNav = () => setOpen(false);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        <a href="#home" className="navbar__logo">
          Payal<span>&lt;/&gt;</span>
        </a>

        <nav className="navbar__links">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <button
          className="navbar__toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <HiX size={24} /> : <HiMenuAlt4 size={24} />}
        </button>
      </div>

      <div className={`navbar__overlay ${open ? "is-open" : ""}`}>
        <div className="navbar__overlay-card navbar__overlay-head">
          <div className="navbar__brand">
            <span className="navbar__avatar">PG</span>
            <span>Payal Gupta</span>
          </div>
          <button
            className="navbar__close"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <HiX size={22} />
          </button>
        </div>

        <div className="navbar__overlay-card navbar__overlay-links">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={handleNav}>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
