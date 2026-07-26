import "./Experience.css";
import { EXPERIENCE } from "./../data/resume";
import useReveal from "./../hooks/useReveal";

export default function Experience() {
  const [sectionRef, visible] = useReveal();

  return (
    <section id="experience" className="exp-section" ref={sectionRef}>
      <div className="exp-grid">
        <h1 className="exp-title">Experience</h1>
        <div className="exp-right">
          {EXPERIENCE.map((job, i) => (
            <div
              className={`exp-item ${visible ? "exp-item-visible" : ""}`}
              key={`${job.company}-${job.period}`}
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <div className="exp-header">
                <div className="exp-main">
                  <div>
                    <h3 className="exp-role">{job.role}</h3>
                    <div className="exp-company">
                      {job.company}
                      {job.client && <span className="exp-client"> · {job.client}</span>}
                    </div>
                  </div>
                </div>

                <div className="exp-meta">
                  <span className="exp-period">{job.period}</span>
                  <span className="exp-location">{job.location}</span>
                </div>
              </div>

              <ul className="exp-bullets">
                {job.bullets.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
