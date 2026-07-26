import "./Achievements.css";
import { COMPETITIVE, LEADERSHIP } from "./../data/resume";
import useReveal from "./../hooks/useReveal";

function LinkRow({ links }) {
  if (!links?.length) return null;
  return (
    <div className="ach-links">
      {links.map((l) => (
        <a
          key={l.url}
          href={l.url}
          target="_blank"
          rel="noopener noreferrer"
          className="ach-link"
        >
          {l.label}
        </a>
      ))}
    </div>
  );
}

export default function Achievements() {
  const [sectionRef, visible] = useReveal();

  return (
    <section id="achievements" className="ach-section" ref={sectionRef}>
      <h1 className="ach-title">Achievements</h1>
      <div className="ach-grid">
        <div className="ach-right">
          <div className="ach-cards">
            {/* Competitive Programming */}
            <article
              className={`ach-card ${visible ? "ach-card-visible" : ""}`}
              style={{ animationDelay: "0s" }}
            >
              <h3 className="ach-card-title">Competitive Programming</h3>
              <ul className="ach-list">
                {COMPETITIVE.map((item) => (
                  <li key={item.event} className="ach-item">
                    <div className="ach-item-header">
                      <span className="ach-achievement">{item.achievement}</span>
                      {item.details && <span className="ach-details">• {item.details}</span>}
                    </div>
                    <div className="ach-event">{item.event}</div>
                    <LinkRow links={item.links} />
                  </li>
                ))}
              </ul>
            </article>

            {/* Leadership & Community */}
            {LEADERSHIP.length > 0 && (
              <article
                className={`ach-card ${visible ? "ach-card-visible" : ""}`}
                style={{ animationDelay: "0.3s" }}
              >
                <h3 className="ach-card-title">Leadership &amp; Community</h3>
                <ul className="ach-list">
                  {LEADERSHIP.map((item) => (
                    <li key={item.role} className="ach-item">
                      <div className="ach-item-header">
                        <span className="ach-achievement">{item.role}</span>
                      </div>
                      <div className="ach-event">{item.event}</div>
                      {item.details && <div className="ach-item-details">{item.details}</div>}
                      <LinkRow links={item.links} />
                    </li>
                  ))}
                </ul>
              </article>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
