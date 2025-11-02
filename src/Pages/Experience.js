import "./Experience.css";
import experienceImage from "./../Assets/workexperience.png"

const EXPERIENCES = [
  {
    role: "Software Engineer",
    company: "Cefalo Bangladesh",
    period: "Mar 2022 — Oct 2025",
    location: "Dhaka, BD",
    bullets: [
      "Built nTAAP—an Azure App Services–based automation platform with robust workflows—cutting ~95% of repetitive manual work and speeding up service delivery.",
      "Designed event-driven microservices with Service Bus and Redis for decoupled communication and performance.",
      "Implemented RBAC-based AuthN/AuthZ integrating Entra ID; enforced least-privilege and auditability.",
    ],
  },
  {
    role: "Consultant (Cloud)",
    company: "KPMG (Nordic Technology Service)",
    period: "Aug 2022 — Oct 2025",
    location: "Remote",
    bullets: [
      "Advised on automation strategy, platform reliability, and observability (App Insights, Log Analytics).",
      "Hardened APIs (rate limits, JWT/OIDC, CORS) and standardized telemetry for compliance and SLO tracking.",
    ],
  },
  {
    role: "Teaching Assistant",
    company: "Jahangirnagar University — CSE",
    period: "Sep 2020 — Aug 2022",
    location: "Savar, BD",
    bullets: [
      "Led training on C/C++, Data Structures, and Algorithms.",
      "Organized practice contests and analyzed performance metrics for continuous improvement.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="exp2">
      <div className="exp2-grid">
        {/* LEFT: circular image + keyword */}
        <aside className="exp2-left">
          <img
            className="exp2-photo"
            src={experienceImage}           /* replace with your path */
            alt="Profile"
          />
          <div className="exp2-keyword">Experience</div>
        </aside>

        {/* RIGHT: timeline/cards */}
        <div className="exp2-right">
          <ol className="exp2-timeline">
            {EXPERIENCES.map((job, i) => (
              <li className="exp2-item" key={i}>
                <article className="exp2-card">
                  <header className="exp2-head">
                    <h3 className="exp2-role">{job.role}</h3>
                    <div className="exp2-meta">
                      <span className="exp2-company">{job.company}</span>
                      <span className="exp2-sep">•</span>
                      <span className="exp2-period">{job.period}</span>
                      {job.location && (
                        <>
                          <span className="exp2-sep hide-sm">•</span>
                          <span className="hide-sm">{job.location}</span>
                        </>
                      )}
                    </div>
                  </header>

                  {job.bullets?.length > 0 && (
                    <ul className="exp2-list">
                      {job.bullets.map((b, idx) => (
                        <li key={idx}>{b}</li>
                      ))}
                    </ul>
                  )}
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
