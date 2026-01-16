import { useEffect, useRef, useState } from "react";
import "./Publications.css";

const PUBLICATIONS = [
  {
    title: "Classification of Social Media Users Based on Temporal Behaviors and Interests",
    authors: "Murad Hossen, Tamanna Afrose, Atashi Mani Ghosh, Md. Musfique Anwar",
    venue: "Communication and Intelligent Systems (Lecture Notes in Networks and Systems, vol 204)",
    year: 2021,
    blurb:
      "Proposed a temporal modeling approach to track and classify users' topical interests over time using a fading time-window on social activity streams. Experiments on real Twitter data demonstrated that users within the same category exhibit similar temporal patterns in the evolution of their interests.",
    links: [
      { label: "PDF", href: "https://link.springer.com/chapter/10.1007/978-981-16-1089-9_72", external: true },
      { label: "DOI", href: "https://doi.org/10.1007/978-981-16-1089-9_72", external: true },
    ],
    tags: ["Machine Learning", "Social Media", "Temporal Modeling"],
  },
  {
    title: "Heart Diseases Prediction Using Multiple Machine Learning Techniques",
    authors: "Tamanna Afrose, Murad Hossen, Md. Imdadul Islam",
    venue: "2022 4th International Conference on Sustainable Technologies for Industry 4.0 (STI)",
    year: 2022,
    blurb:
      "Developed a heart disease prediction model based on ten clinical parameters using multiple machine learning techniques, including K-means, FCM, SVM, FIS, LR, MLR, and Neural Networks. Combined hybrid models achieved improved performance, attaining over 94% detection accuracy for the combination of FCM, K-means, SVM, MLR, FIS, and NN.",
    links: [
      { label: "PDF", href: "https://ieeexplore.ieee.org/document/10103237", external: true },
      { label: "DOI", href: "https://doi.org/10.1109/STI56238.2022.10103237", external: true },
    ],
    tags: ["Machine Learning", "Healthcare", "Classification"],
  },
];

export default function Publications() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Sort newest first
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
                <article className={`pub-card ${visible ? 'pub-card-visible' : ''}`} key={i} style={{ animationDelay: `${i * 0.2}s` }}>
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
