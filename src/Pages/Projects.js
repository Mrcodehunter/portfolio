import "./Projects.css";
import { PROJECTS } from "./../data/resume";
import useReveal from "./../hooks/useReveal";

export default function Projects() {
  const [sectionRef, visible] = useReveal();

  return (
    <section id="projects" className="prj-section" ref={sectionRef}>
      <h1 className="prj-title">Projects</h1>
      <div className="prj-grid">
        <div className="prj-right">
          <div className="prj-list">
            {PROJECTS.map((p, i) => (
              <article
                className={`prj-card ${visible ? "prj-card-visible" : ""}`}
                key={p.title}
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <header className="prj-head">
                  <h3 className="prj-name">{p.title}</h3>
                  <div className="prj-year">
                    {p.year}
                    {p.featured && <span className="prj-badge">Featured</span>}
                  </div>
                </header>

                <p className="prj-description">{p.description}</p>

                {p.tech?.length > 0 && (
                  <ul className="prj-tags">
                    {p.tech.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                )}

                {p.links?.length > 0 && (
                  <div className="prj-links">
                    {p.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target={l.external ? "_blank" : undefined}
                        rel={l.external ? "noopener noreferrer" : undefined}
                        className="prj-link-btn"
                      >
                        {l.label}
                      </a>
                    ))}
                  </div>
                )}

                {p.note && <p className="prj-note">{p.note}</p>}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
