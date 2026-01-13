import "./Home.css";
import profileImage from "./../Assets/profile.jpg"

export default function Home() {
  return (
    <section id="home" className="home-section">
      <div className="home-grid">
        {/* LEFT: Biography Content */}
        <article className="home-content">
          <h2 className="bio-title">Biography</h2>
          <div className="bio">
            <p>
              Murad Hossen is a Software Engineer at Cefalo Bangladesh Ltd., specializing in building robust, scalable web and cloud applications. He worked for Cefalo on KPMG's automation project as a consultant, focusing on Azure-centric automation and integration projects.
            </p>
            <p>
              With expertise across multiple programming languages and frameworks, Murad works across the full stack—from frontend development to backend systems and cloud services. He has architected event-driven microservices, designed database solutions, and implemented authentication frameworks, with proficiency in DevOps practices and cloud services.
            </p>
            <p>
              Murad holds an M.Sc. and B.Sc. in Computer Science & Engineering from Jahangirnagar University. His academic background is complemented by notable achievements in competitive programming, with recognition across various online judges, ICPC, and IUPC competitions. Previously, he served as a Teaching Assistant, mentoring over 200 students in competitive programming.
            </p>
            <p>
              Passionate about continuous learning and AI-driven system design, Murad aspires to progress into higher-impact roles where he can own complex systems and contribute to scalable, user-centered products.
            </p>
          </div>
        </article>

        {/* RIGHT: Image, Name, Designation, and Icons */}
        <aside className="home-image">
          <img
            className="home-hero-img"
            src={profileImage}
            alt="Murad Hossen"
          />
          <div className="home-profile-info">
            <h1 className="home-name">Murad Hossen</h1>
            <div className="home-role">Software Engineer</div>
            <div className="home-company">Cefalo Bangladesh Ltd.</div>
            
            <nav className="home-icons" aria-label="Profile links">
              <a className="icon-btn" href="mailto:muradhossen.official2016@gmail.com" aria-label="Email" title="Email">
                <svg viewBox="0 0 24 24" width="18" height="18"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2
                2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5Z"/></svg>
              </a>
              <a className="icon-btn" href="https://scholar.google.com/citations?user=BT3a-6QAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" aria-label="Google Scholar" title="Google Scholar">
                <svg viewBox="0 0 24 24" width="18" height="18"><path d="M12 3 1 8l11 5 9-4.09V17h2V8L12 3Zm-1 13.5-7-3.18V18c0 .83.67 1.5 1.5 1.5H17v-2H6.91c-.51 0-.91-.4-.91-.9v-2.28l5 2.27c.62.28 1.38.28 2 0Z"/></svg>
              </a>
              <a className="icon-btn" href="https://github.com/Mrcodehunter" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
                <svg viewBox="0 0 24 24" width="18" height="18"><path d="M12 .5A12 12 0 0 0 0 12.8c0 5.4 3.4 10 8.2 11.6.6.1.8-.3.8-.6v-2c-3.3.8-4-1.4-4-1.4-.6-1.4-1.5-1.8-1.5-1.8-1.2-.8.1-.8.1-.8 1.3.1 2 1.4 2 1.4 1.2 2 3.1 1.4 3.8 1 .1-.9.5-1.4.9-1.7-2.7-.3-5.5-1.4-5.5-6.2 0-1.4.5-2.6 1.3-3.5-.1-.3-.6-1.8.1-3.7 0 0 1-.3 3.6 1.3 1-.3 2-.4 3-.4s2 .1 3 .4c2.6-1.6 3.6-1.3 3.6-1.3.7 1.9.3 3.4.1 3.7.8.9 1.3 2.1 1.3 3.5 0 4.9-2.8 5.9-5.5 6.2.5.4 1 1.2 1 2.4v3.5c0 .3.2.7.8.6A12.3 12.3 0 0 0 24 12.8 12 12 0 0 0 12 .5Z"/></svg>
              </a>
              <a className="icon-btn" href="https://www.linkedin.com/in/codehunter/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
                <svg viewBox="0 0 24 24" width="18" height="18"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.44-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.44v6.3zM5.34 7.44c-1.14 0-2.07-.93-2.07-2.08 0-1.15.93-2.08 2.07-2.08 1.15 0 2.08.93 2.08 2.08 0 1.15-.93 2.08-2.08 2.08zM7.11 20.45H3.58V9h3.53v11.45z"/></svg>
              </a>
              <a className="icon-btn" href="/CV.pdf" target="_blank" rel="noopener noreferrer" aria-label="CV" title="CV">
                <svg viewBox="0 0 24 24" width="18" height="18"><path d="M14 2H6a2 2 0 0 0-2 2v16a2
                2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Zm0 2 4 4h-4zM8 12h8v2H8zm0 4h8v2H8z"/></svg>
              </a>
            </nav>
          </div>
        </aside>
      </div>
    </section>
  );
}
