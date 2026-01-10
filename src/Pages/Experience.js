import React from "react";
import "./Experience.css";
// Re-import the experience image
import experienceImage from "./../Assets/workexperience.png"; 

// Placeholder for logos. ideally you import these from your Assets folder
// import cefaloLogo from "../Assets/cefalo.png";
const DEFAULT_LOGO = "https://via.placeholder.com/60"; 

const EXPERIENCES = [
  {
    role: "Software Engineer",
    company: "Cefalo Bangladesh",
    logo: DEFAULT_LOGO, 
    period: "Mar 2022 — Oct 2025",
    location: "Dhaka, BD",
    bullets: [
      "Built nTAAP—an Azure App Services–based automation platform...",
      "Designed event-driven microservices with Service Bus and Redis...",
      "Implemented RBAC-based AuthN/AuthZ integrating Entra ID...",
    ],
  },
  {
    role: "Consultant (Cloud)",
    company: "KPMG (Nordic Technology Service)",
    logo: DEFAULT_LOGO,
    period: "Aug 2022 — Oct 2025",
    location: "Remote",
    bullets: [
      "Advised on automation strategy, platform reliability...",
      "Hardened APIs (rate limits, JWT/OIDC, CORS)...",
    ],
  },
  {
    role: "Teaching Assistant",
    company: "Jahangirnagar University — CSE",
    logo: DEFAULT_LOGO,
    period: "Sep 2020 — Aug 2022",
    location: "Savar, BD",
    bullets: [
      "Led training on C/C++, Data Structures, and Algorithms.",
      "Organized practice contests and analyzed performance metrics...",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="exp-section">
      <div className="exp-grid">
        {/* LEFT COLUMN: Image + Title Centered */}
        <div className="exp-left">
          <img 
            src={experienceImage} 
            alt="Experience" 
            className="exp-hero-img"
          />
          <h1 className="exp-title">Experience</h1>
        </div>

        {/* RIGHT COLUMN: Experience List */}
        <div className="exp-right">
          {EXPERIENCES.map((job, i) => (
            <div className="exp-item" key={i}>
              <div className="exp-header">
                {/* Logo + Role/Company Group */}
                <div className="exp-main">
                  <img 
                    src={job.logo} 
                    alt={`${job.company} logo`} 
                    className="exp-logo" 
                  />
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
