import "./Skills.css";
import { SKILLS } from "./../data/resume";
import useReveal from "./../hooks/useReveal";

export default function Skills() {
  const [sectionRef, visible] = useReveal();

  return (
    <section id="skills" className="sk-section" ref={sectionRef}>
      <h1 className="sk-title">Skills</h1>
      <div className="sk-grid">
        <div className="sk-cards">
          {SKILLS.map((group, i) => (
            <article
              className={`sk-card ${visible ? "sk-card-visible" : ""}`}
              key={group.group}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <h3 className="sk-card-title">{group.group}</h3>
              <ul className="sk-tags">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
