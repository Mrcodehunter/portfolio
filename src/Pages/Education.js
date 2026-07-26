import "./Education.css";
import { EDUCATION } from "./../data/resume";
import useReveal from "./../hooks/useReveal";

export default function Education() {
  const [sectionRef, visible] = useReveal();

  return (
    <section id="education" className="edu-section" ref={sectionRef}>
      <h1 className="edu-title">Education</h1>
      <div className="edu-grid">
        <div className="edu-list">
          {EDUCATION.map((item, i) => (
            <article
              className={`edu-card ${visible ? "edu-card-visible" : ""}`}
              key={item.degree}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="edu-head">
                <h3 className="edu-degree">{item.degree}</h3>
                <span className="edu-period">{item.period}</span>
              </div>
              <div className="edu-institution">{item.institution}</div>
              <div className="edu-foot">
                <span className="edu-result">{item.result}</span>
                <span className="edu-location">{item.location}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
