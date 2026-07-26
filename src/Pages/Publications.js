import "./Publications.css";
import { PUBLICATIONS } from "./../data/resume";
import useReveal from "./../hooks/useReveal";

export default function Publications() {
  const [sectionRef, visible] = useReveal();

  // Newest first
  const pubs = [...PUBLICATIONS].sort((a, b) => (b.year || 0) - (a.year || 0));

  return (
    <section id="publications" className="pub-section" ref={sectionRef}>
      <h1 className="pub-title">Publications</h1>
      <div className="pub-grid">
        <div className="pub-right">
          {pubs.length === 0 ? (
            <p className="pub-empty">No publications added yet.</p>
          ) : (
            <div className="pub-list">
              {pubs.map((p, i) => (
                <article
                  className={`pub-card ${visible ? "pub-card-visible" : ""}`}
                  key={p.title}
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  <header className="pub-head">
                    <h3 className="pub-name">{p.title}</h3>
                    <div className="pub-meta">
                      <span className="pub-authors">{p.authors}</span>
                      <span className="pub-sep">•</span>
                      <span className="pub-venue">{p.venue}</span>
                      {p.year && (
                        <>
                          <span className="pub-sep">•</span>
                          <span className="pub-year">{p.year}</span>
                        </>
                      )}
                    </div>
                  </header>

                  {p.blurb && <p className="pub-blurb">{p.blurb}</p>}

                  {(p.tags?.length ?? 0) > 0 && (
                    <ul className="pub-tags">
                      {p.tags.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  )}

                  {(p.links?.length ?? 0) > 0 && (
                    <div className="pub-links">
                      {p.links.map((l) => (
                        <a
                          key={l.href}
                          href={l.href}
                          target={l.external ? "_blank" : undefined}
                          rel={l.external ? "noopener noreferrer" : undefined}
                          className="pub-link-btn"
                        >
                          {l.label}
                        </a>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
