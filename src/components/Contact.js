import React, { useState } from "react";
import { FiSend } from "react-icons/fi";
import "./Contact.css";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mdaqqlpw";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section contact">
      <span className="glow" style={{ bottom: "-10%", left: "10%", width: 360, height: 360, background: "#a855f7" }} />
      <div className="container">
        <p className="section-eyebrow">Let's talk</p>
        <h2 className="section-title">
          <span>Contact</span>
        </h2>

        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
            />
          </div>

          <div className="contact__field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@email.com"
            />
          </div>

          <div className="contact__field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
            />
          </div>

          <button className="btn btn-primary contact__submit" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send a message"} <FiSend />
          </button>

          {status === "success" && (
            <p className="contact__status contact__status--ok">
              Thanks! Your message has been delivered — I'll reply soon.
            </p>
          )}
          {status === "error" && (
            <p className="contact__status contact__status--err">
              Something went wrong. Please try again or email me directly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
