import "./Publications.css";

const PUBLICATIONS = [
  {
    title: "Title of Your Paper",
    authors: "Your Name, Coauthor A, Coauthor B",
    venue: "Conference / Journal Name",
    year: 2025,
    blurb:
      "One-line summary of what this work contributes or explores.",
    links: [
      { label: "PDF", href: "#", external: true },
      { label: "DOI", href: "#", external: true },
      { label: "Code", href: "#", external: true },
    ],
    tags: ["Systems", "Automation"],
  },
  {
    title: "Another Publication Title",
    authors: "Your Name, Someone Else",
    venue: "Workshop @ BigConf",
    year: 2024,
    blurb:
      "Short description (optional).",
    links: [{ label: "PDF", href: "#", external: true }],
    tags: ["Observability"],
  },
  // Add more...
];

export default function Publications() {
  // Sort newest first
  const pubs = [...PUBLICATIONS].sort((a, b) => (b.year || 0) - (a.year || 0));

  return (
    <section id="publications" className="pub">
      <div className="pub-grid">
        {/* LEFT: circular image + keyword */}
        <aside className="pub-left">
          <img className="pub-photo" src="/avatar.jpg" alt="Profile" /> {/* replace path or import */}
          <div className="pub-keyword">Publications</div>
        </aside>

        {/* RIGHT: publication list */}
        <div className="pub-right">
          <h2 className="pub-title">Selected Publications</h2>

          {pubs.length === 0 ? (
            <p className="pub-empty">No publications added yet.</p>
          ) : (
            <ol className="pub-list">
              {pubs.map((p, i) => (
                <li className="pub-item" key={i}>
                  <article className="pub-card">
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
                        {p.tags.map((t, idx) => (
                          <li key={idx}>{t}</li>
                        ))}
                      </ul>
                    )}

                    {(p.links?.length ?? 0) > 0 && (
                      <div className="pub-links">
                        {p.links.map((l, idx) => (
                          <a
                            key={idx}
                            href={l.href}
                            target={l.external ? "_blank" : undefined}
                            rel={l.external ? "noopener noreferrer" : undefined}
                            className="btn btn-sm"
                          >
                            {l.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </article>
                </li>
              ))}
            </ol>
          )}
        </div>
      </div>
    </section>
  );
}
