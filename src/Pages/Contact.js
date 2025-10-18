import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    const to = "you@example.com"; // <-- change
    const subject = encodeURIComponent(form.subject || `Message from ${form.name || "Website"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="ct">
      <div className="ct-grid">
        {/* LEFT: circular image + keyword */}
        <aside className="ct-left">
          <img className="ct-photo" src="/avatar.jpg" alt="Profile" /> {/* replace path */}
          <div className="ct-keyword">Contact</div>
        </aside>

        {/* RIGHT: contact form + quick links */}
        <div className="ct-right">
          <h2 className="ct-title">Get in touch</h2>

          <form className="ct-form" onSubmit={onSubmit}>
            <div className="ct-row">
              <label>
                <span>Name</span>
                <input
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={onChange}
                  required
                />
              </label>

              <label>
                <span>Email</span>
                <input
                  name="email"
                  type="email"
                  placeholder="you@domain.com"
                  value={form.email}
                  onChange={onChange}
                  required
                />
              </label>
            </div>

            <label className="ct-full">
              <span>Subject</span>
              <input
                name="subject"
                type="text"
                placeholder="Subject"
                value={form.subject}
                onChange={onChange}
              />
            </label>

            <label className="ct-full">
              <span>Message</span>
              <textarea
                name="message"
                rows="6"
                placeholder="Write your message..."
                value={form.message}
                onChange={onChange}
                required
              />
            </label>

            <div className="ct-actions">
              <button type="submit" className="btn btn-primary">Send</button>
              <a className="btn" href="mailto:you@example.com">Email directly</a>
            </div>
          </form>

          <ul className="ct-links" aria-label="Quick contacts">
            <li>
              <a href="mailto:you@example.com" aria-label="Email">
                {MailIcon()} <span>you@example.com</span>
              </a>
            </li>
            <li>
              <a href="https://scholar.google.com/citations?user=YOUR_ID" target="_blank" rel="noopener noreferrer" aria-label="Google Scholar">
                {ScholarIcon()} <span>Google Scholar</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/yourhandle" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                {GitHubIcon()} <span>GitHub</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/your-handle" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                {LinkedInIcon()} <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" aria-label="CV">
                {DocIcon()} <span>CV</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

/* --- tiny inline SVGs --- */
function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2
    2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5Z"/></svg>
  );
}
function ScholarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 3 1 8l11 5 9-4.09V17h2V8L12 3Zm-1 13.5-7-3.18V18c0 .83.67 1.5 1.5 1.5H17v-2H6.91c-.51 0-.91-.4-.91-.9v-2.28l5 2.27c.62.28 1.38.28 2 0Z"/></svg>
  );
}
function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .5A12 12 0 0 0 0 12.8c0 5.4 3.4 10 8.2 11.6.6.1.8-.3.8-.6v-2c-3.3.8-4-1.4-4-1.4-.6-1.4-1.5-1.8-1.5-1.8-1.2-.8.1-.8.1-.8 1.3.1 2 1.4 2 1.4 1.2 2 3.1 1.4 3.8 1 .1-.9.5-1.4.9-1.7-2.7-.3-5.5-1.4-5.5-6.2 0-1.4.5-2.6 1.3-3.5-.1-.3-.6-1.8.1-3.7 0 0 1-.3 3.6 1.3 1-.3 2-.4 3-.4s2 .1 3 .4c2.6-1.6 3.6-1.3 3.6-1.3.7 1.9.3 3.4.1 3.7.8.9 1.3 2.1 1.3 3.5 0 4.9-2.8 5.9-5.5 6.2.5.4 1 1.2 1 2.4v3.5c0 .3.2.7.8.6A12.3 12.3 0 0 0 24 12.8 12 12 0 0 0 12 .5Z"/></svg>
  );
}
function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.44-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.44v6.3zM5.34 7.44c-1.14 0-2.07-.93-2.07-2.08 0-1.15.93-2.08 2.07-2.08 1.15 0 2.08.93 2.08 2.08 0 1.15-.93 2.08-2.08 2.08zM7.11 20.45H3.58V9h3.53v11.45z"/></svg>
  );
}
function DocIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16a2
  2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Zm0 2 4 4h-4zM8 12h8v2H8zm0 4h8v2H8z"/></svg>
  );
}
