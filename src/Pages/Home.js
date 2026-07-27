import { Link } from "react-router-dom";

import "./Home.css";
import portrait from "./../Assets/profile.jpg";
import {
  PROFILE,
  HEADLINE,
  HERO_SUMMARY,
  HIGHLIGHTS,
  PROJECTS,
  SKILLS,
  EXPERIENCE,
} from "./../data/resume";
import useDocumentTitle from "./../hooks/useDocumentTitle";
import { ArrowUpRightIcon } from "./../components/Icons";

export default function Home() {
  useDocumentTitle();

  const featured = PROJECTS.filter((p) => p.featured);
  const currentRole = EXPERIENCE[0];

  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="shell hero">
        <div className="hero-body">
          <p className="eyebrow">{PROFILE.location}</p>
          <h1 className="hero-title">{HEADLINE}</h1>
          <p className="hero-summary">{HERO_SUMMARY}</p>

          <div className="hero-actions">
            <Link className="btn btn-primary" to="/projects">
              View projects
            </Link>
            <a
              className="btn"
              href={PROFILE.cv}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
              <ArrowUpRightIcon width={14} height={14} />
            </a>
          </div>
        </div>

        <div className="hero-portrait">
          <img src={portrait} alt={PROFILE.name} width="320" height="320" />
        </div>
      </section>

      {/* ---------------- Stats ---------------- */}
      <section className="shell">
        <ul className="stats">
          {HIGHLIGHTS.map((h) => (
            <li key={h.label}>
              <div className="stat-value">{h.value}</div>
              <div className="stat-label">{h.label}</div>
            </li>
          ))}
        </ul>
      </section>

      {/* ---------------- Selected work ---------------- */}
      <section className="shell home-section">
        <div className="section-head">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="section-title">Things I have built</h2>
          </div>
          <Link className="link-arrow" to="/projects">
            All projects →
          </Link>
        </div>

        <div className="home-work">
          {featured.map((p) => (
            <article className="card home-work-item" key={p.title}>
              <div className="home-work-head">
                <h3>{p.title}</h3>
                <span className="mono">{p.year}</span>
              </div>
              <p className="home-work-desc">{p.description}</p>
              <ul className="tag-list">
                {p.tech.slice(0, 6).map((t) => (
                  <li className="tag" key={t}>
                    {t}
                  </li>
                ))}
              </ul>
              {p.links.length > 0 && (
                <div className="home-work-links">
                  {p.links.map((l) => (
                    <a
                      key={l.href}
                      className="link-arrow"
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {l.label}
                      <ArrowUpRightIcon width={13} height={13} />
                    </a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* ---------------- Capabilities ---------------- */}
      <section className="shell home-section">
        <div className="section-head">
          <div>
            <p className="eyebrow">Toolkit</p>
            <h2 className="section-title">What I work with</h2>
          </div>
          <Link className="link-arrow" to="/about">
            Full background →
          </Link>
        </div>

        <div className="home-skills">
          {SKILLS.map((group) => (
            <div className="home-skill-group" key={group.group}>
              <h3 className="eyebrow">{group.group}</h3>
              <ul className="tag-list">
                {group.items.map((item) => (
                  <li className="tag" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- Latest role ---------------- */}
      <section className="shell home-section">
        <div className="section-head">
          <div>
            <p className="eyebrow">Most recent role</p>
            <h2 className="section-title">{currentRole.company}</h2>
          </div>
          <Link className="link-arrow" to="/about">
            Full history →
          </Link>
        </div>

        <div className="card home-role">
          <div className="home-role-head">
            <h3>{currentRole.role}</h3>
            <span className="mono">{currentRole.period}</span>
          </div>
          {currentRole.client && <p className="mono">{currentRole.client}</p>}
          <ul className="home-role-bullets">
            {currentRole.bullets.slice(0, 3).map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------------- Contact CTA ---------------- */}
      <section className="shell">
        <div className="home-cta">
          <div>
            <h2 className="section-title">Let’s talk</h2>
            <p className="home-cta-text">
              Open to conversations about backend, cloud and AI agent work.
            </p>
          </div>
          <Link className="btn btn-primary" to="/contact">
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
