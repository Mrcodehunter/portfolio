import "./About.css";
import { BIO, EXPERIENCE, EDUCATION, COMPETITIVE, LEADERSHIP } from "./../data/resume";
import useDocumentTitle from "./../hooks/useDocumentTitle";
import { ArrowUpRightIcon } from "./../components/Icons";

export default function About() {
  useDocumentTitle("About");

  return (
    <div className="shell page">
      <header>
        <p className="eyebrow">About</p>
        <h1 className="page-title">Background</h1>
        <div className="about-bio">
          {BIO.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </header>

      {/* ---------------- Experience ---------------- */}
      <section className="about-section">
        <div className="section-head">
          <h2 className="section-title">Experience</h2>
        </div>

        <ol className="timeline">
          {EXPERIENCE.map((job) => (
            <li className="timeline-item" key={`${job.company}-${job.period}`}>
              <div className="timeline-meta">
                <span className="mono">{job.period}</span>
                <span className="timeline-location">{job.location}</span>
              </div>

              <div className="timeline-body">
                <h3 className="timeline-role">{job.role}</h3>
                <div className="timeline-company">
                  {job.company}
                  {job.client && <span className="timeline-client"> · {job.client}</span>}
                </div>
                <ul className="timeline-bullets">
                  {job.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* ---------------- Education ---------------- */}
      <section className="about-section">
        <div className="section-head">
          <h2 className="section-title">Education</h2>
        </div>

        <div className="about-grid">
          {EDUCATION.map((item) => (
            <article className="card" key={item.degree}>
              <div className="about-card-head">
                <h3>{item.degree}</h3>
                <span className="mono">{item.period}</span>
              </div>
              <p className="about-card-sub">{item.institution}</p>
              <div className="about-card-foot">
                <span className="tag">{item.result}</span>
                <span className="mono">{item.location}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ---------------- Achievements ---------------- */}
      <section className="about-section">
        <div className="section-head">
          <h2 className="section-title">Competitive programming</h2>
        </div>

        <ul className="award-list">
          {COMPETITIVE.map((item) => (
            <li className="award" key={item.event}>
              <div className="award-rank">{item.achievement}</div>
              <div className="award-body">
                <div className="award-event">{item.event}</div>
                {item.details && <div className="award-details">{item.details}</div>}
                {item.links?.length > 0 && (
                  <div className="award-links">
                    {item.links.map((l) => (
                      <a
                        key={l.url}
                        className="link-arrow"
                        href={l.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {l.label}
                        <ArrowUpRightIcon width={12} height={12} />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* ---------------- Leadership ---------------- */}
      <section className="about-section">
        <div className="section-head">
          <h2 className="section-title">Teaching &amp; community</h2>
        </div>

        <div className="about-grid">
          {LEADERSHIP.map((item) => (
            <article className="card" key={item.role}>
              <h3>{item.role}</h3>
              <p className="about-card-sub">{item.event}</p>
              <p className="about-card-text">{item.details}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
