import React, { useEffect, useRef, useState } from "react";
import "./Experience.css"; 

const EXPERIENCES = [
  {
    role: "Software Engineer Consultant (KPMG Technology Service)",
    company: "Cefalo Bangladesh Ltd.",
    period: "Aug 2022 — Present",
    location: "Dhaka, BD",
    bullets: [
      "Built nTAAP - an Azure App Services-based automation platform that orchestrates robust workflows, cutting over 95% of manual, repetitive work and significantly accelerating service delivery",
      "Architected an event-driven microservices system using Azure Service Bus and Redis for decoupled communication and high performance",
      "Designed and integrated a Cosmos Graph DB solution, developing a custom adapter and complex Gremlin queries to enable efficient querying of dynamic data relationships",
      "Architected a full-stack RBAC framework, integrating Azure Entra ID with a custom database to enforce granular authentication and authorization",
      "Led the test automation strategy by designing unit tests with xUnit, achieving more than 90% line and branch coverage, and architecting the end-to-end test process",
      "Orchestrated the Azure App Service operational backbone, managing identity, secrets, performance, and logging through integrated services including Entra ID, Key Vault, Application Insights, and Log Analytics",
      ],
  },
  {
    role: "Trainee Software Engineer",
    company: "Cefalo Bangladesh Ltd.",
    period: "Mar 2022 — Aug 2022",
    location: "Dhaka, BD",
    bullets: [
      "Developed TechTalk, a full-stack blogging platform with React frontend and RESTful APIs using .NET/Node.js, implementing secure authentication middleware for user verification and resource management",
      "Accelerated proficiency in various technologies through hands-on development and mentorship from specialized trainers",
    ],
  },
  {
    role: "Teaching Assistant",
    company: "Jahangirnagar University — CSE",
    period: "Sep 2020 — Aug 2022",
    location: "Savar, BD",
    bullets: [
      "Led specialized technical training programs focused on C, C++, Data Structures, and Algorithms to build a strong competitive programming posture for the institution, accumulating 200+ trainees over two years",
      "Managed the training lifecycle by coordinating sessions, designing practice contests, and analyzing performance metrics to ensure continuous skill development",
    ],
  },
];

export default function Experience() {
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

    const node = sectionRef.current;
    if (node) observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
      observer.disconnect();
    };
  }, []);

  return (
    <section id="experience" className="exp-section" ref={sectionRef}>
      <div className="exp-grid">
        <h1 className="exp-title">Experience</h1>
        <div className="exp-right">
          {EXPERIENCES.map((job, i) => (
            <div className={`exp-item ${visible ? 'exp-item-visible' : ''}`} key={i} style={{ animationDelay: `${i * 0.2}s` }}>
              <div className="exp-header">
                {/* Role/Company Group */}
                <div className="exp-main">
                  <div>
                    <h3 className="exp-role">{job.role}</h3>
                    <div className="exp-company">{job.company}</div>
                  </div>
                </div>

                {/* Meta: Date & Location */}
                <div className="exp-meta">
                  <span className="exp-period">{job.period}</span>
                  <span className="exp-location">{job.location}</span>
                </div>
              </div>

              {/* Description Bullets */}
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
