import { useEffect, useRef, useState } from "react";
import "./Projects.css";

const PROJECTS = [
  {
    title: "nTAAP – Cloud Automation Platform",
    description:
      "Built an Azure App Services–based automation platform that orchestrates robust workflows, cutting over 95% of manual, repetitive work and significantly accelerating service delivery. Architected an event-driven microservices system using Azure Service Bus and Redis for decoupled communication and high performance. Designed and integrated a Cosmos Graph DB solution, developing a custom adapter and complex Gremlin queries to enable efficient querying of dynamic data relationships. Architected a full-stack RBAC framework, integrating Azure Entra ID with a custom database to enforce granular authentication and authorization.",
    tech: ["Azure App Service", "Azure Service Bus", "Redis", "Cosmos DB", "Azure Entra ID", "RBAC", "Gremlin", "xUnit"],
    links: [],
  },
  {
    title: "TechTalk – Full-Stack Blogging Platform",
    description:
      "Developed a full-stack blogging platform with React frontend and RESTful APIs using .NET/Node.js, implementing secure authentication middleware for user verification and resource management. Built for fast iteration and clean developer experience with comprehensive features including rich text editor, user management, and content organization.",
    tech: ["React", ".NET", "Node.js", "REST API", "Authentication", "PostgreSQL"],
    links: [
      { label: "Frontend", href: "https://github.com/Mrcodehunter/tech-talk", external: true },
      { label: "API", href: "https://github.com/Mrcodehunter/Cefalo.TechTalk.Api", external: true },
    ],
  },
];

export default function Projects() {
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="projects" className="prj-section" ref={sectionRef}>
      <h1 className="prj-title">Projects</h1>
      <div className="prj-grid">
        <div className="prj-right">
          <div className="prj-list">
            {PROJECTS.map((p, i) => (
              <article className={`prj-card ${visible ? 'prj-card-visible' : ''}`} key={i} style={{ animationDelay: `${i * 0.2}s` }}>
                <header className="prj-head">
                  <h3 className="prj-name">{p.title}</h3>
                </header>

                <p className="prj-description">{p.description}</p>

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
                        className="prj-link-btn"
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
