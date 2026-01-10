import "./Projects.css";

const PROJECTS = [
  {
    title: "nTAAP – Cloud Automation Platform",
    blurb:
      "Azure App Services–driven automation with robust workflows to cut manual toil and speed up delivery.",
    tech: ["Azure", "App Service", "Service Bus", "Redis", "RBAC"],
    links: [
      { label: "Case Study", href: "#" },
      { label: "Code", href: "#", external: true },
    ],
  },
  {
    title: "TechTalk – Blogging Platform",
    blurb:
      "Full-stack blog with auth, editor, and REST APIs; built for fast iteration and clean DX.",
    tech: ["React", ".NET", "Node.js", "PostgreSQL"],
    links: [
      { label: "Live", href: "#" },
      { label: "Frontend", href: "https://github.com/Mrcodehunter/tech-talk", external: true },
      { label: "API", href: "https://github.com/Mrcodehunter/Cefalo.TechTalk.Api", external: true },
    ],
  },
  {
    title: "Observability Starter",
    blurb:
      "Reusable tracing/metrics/audit starter wired into pipelines for reliable releases.",
    tech: ["OpenTelemetry", "App Insights", "Azure DevOps"],
    links: [{ label: "Docs", href: "#" }],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="prj">
      <div className="prj-grid">
        {/* LEFT: circular image + keyword */}
        <aside className="prj-left">
          <img className="prj-photo" src="/avatar.jpg" alt="Profile" />
          <div className="prj-keyword">Projects</div>
        </aside>

        {/* RIGHT: cards */}
        <div className="prj-right">
          <h2 className="prj-title">Selected Projects</h2>

          <div className="prj-cards">
            {PROJECTS.map((p, i) => (
              <article className="prj-card" key={i}>
                <header className="prj-head">
                  <h3 className="prj-name">{p.title}</h3>
                </header>

                <p className="prj-blurb">{p.blurb}</p>

                {p.tech?.length > 0 && (
                  <ul className="prj-tags">
                    {p.tech.map((t, idx) => (
                      <li key={idx}>{t}</li>
                    ))}
                  </ul>
                )}

                {p.links?.length > 0 && (
                  <div className="prj-links">
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
