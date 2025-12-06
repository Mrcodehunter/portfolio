import { useState } from "react";
import "./Contact.css";
// import contactImage from "../Assets/contact.png"; // Assume you have an image or use avatar

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    const to = "you@example.com"; 
    const subject = encodeURIComponent(form.subject || `Message from ${form.name || "Website"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="ct-section">
      <div className="ct-grid">
        {/* LEFT: Image + Title Centered */}
        <div className="ct-left">
           {/* Use a specific contact image or your avatar */}
          <img 
            className="ct-hero-img" 
            src="/avatar.jpg" 
            alt="Contact" 
          />
          <h1 className="ct-title">Contact</h1>
        </div>

        {/* RIGHT: Contact Form + Links */}
        <div className="ct-right">
          
          <div className="ct-card">
            <h2 className="ct-card-title">Send a Message</h2>
            <form className="ct-form" onSubmit={onSubmit}>
              <div className="ct-row">
                <div className="ct-group">
                  <label>Name</label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="ct-group">
                  <label>Email</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="you@domain.com"
                    value={form.email}
                    onChange={onChange}
                    required
                  />
                </div>
              </div>

              <div className="ct-group">
                <label>Subject</label>
                <input
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  value={form.subject}
                  onChange={onChange}
                />
              </div>

              <div className="ct-group">
                <label>Message</label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="How can we help you?"
                  value={form.message}
                  onChange={onChange}
                  required
                />
              </div>

              <button type="submit" className="ct-submit-btn">
                Send Message
              </button>
            </form>
          </div>

          {/* Social Links / Contact Info */}
          <div className="ct-links-container">
            <h3 className="ct-links-title">Connect with me</h3>
            <ul className="ct-links">
              <li>
                <a href="mailto:you@example.com" aria-label="Email">
                  {MailIcon()} <span>you@example.com</span>
                </a>
              </li>
              <li>
                <a href="https://scholar.google.com/" target="_blank" rel="noreferrer">
                  {ScholarIcon()} <span>Google Scholar</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/" target="_blank" rel="noreferrer">
                  {GitHubIcon()} <span>GitHub</span>
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
                  {LinkedInIcon()} <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

/* --- SVG Icons (Kept same) --- */
function MailIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>;
}
function ScholarIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 24a7 7 0 0 1-7-7c0-2.21 1.1-4.16 2.82-5.46a6.97 6.97 0 0 1-.22-1.79L1 7.25l11-4.75 11 4.75-6.6 2.5a6.99 6.99 0 0 1-.22 1.79A7.01 7.01 0 0 1 12 24z"/></svg>;
}
function GitHubIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>;
}
function LinkedInIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
}
function DocIcon() { return null; } // Not used in this version but can be kept
