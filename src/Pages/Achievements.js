import "./Achievements.css";

const COMPETITIVE = [
  "15th place — ICPC Dhaka Regional 2020 (Team: jU Shantiniketon)",
  "17th place — ICPC Dhaka Regional 2020 Preliminary (Team: jU Shantiniketon)",
  "23rd place — ICPC Dhaka Preliminary 2022 (Team: jU Amigos)",
  "Participated in 20+ regional, national, and inter-university programming contests",
  "Ranked 1st (Global) out of 13,073 participants — CodeChef October Challenge 2018 (Division 2)",
  "Solved 1,350+ programming problems across multiple online judges",
];

const CERTIFICATES = [
  // Add items like:
  // "AZ-204: Developing Solutions for Microsoft Azure (Year)",
  // "DP-900: Microsoft Azure Data Fundamentals (Year)",
];

const OTHERS = [
  "Organizer, Problem Setter, and Judge — Cub Hunting Programming Contest 2019 (encouraging JU juniors in problem-solving)",
];

export default function Achievements() {
  return (
    <section id="achievements" className="ach">
      <div className="ach-grid">
        {/* LEFT: circular image + keyword */}
        <aside className="ach-left">
          <img className="ach-photo" src="/avatar.jpg" alt="Profile" /> {/* replace path or import */}
          <div className="ach-keyword">Achievements</div>
        </aside>

        {/* RIGHT: cards */}
        <div className="ach-right">
          <h2 className="ach-title">Selected Achievements</h2>

          <div className="ach-cards">
            {/* Competitive Programming */}
            <article className="ach-card">
              <h3 className="ach-name">Competitive Programming</h3>
              <ul className="ach-points">
                {COMPETITIVE.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </article>

            {/* Certificates */}
            <article className="ach-card">
              <h3 className="ach-name">Certificates</h3>
              {CERTIFICATES.length > 0 ? (
                <ul className="ach-points">
                  {CERTIFICATES.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="ach-empty">
                  No certificates added yet. {/* Add items in CERTIFICATES array above */}
                </p>
              )}
            </article>

            {/* Others */}
            <article className="ach-card">
              <h3 className="ach-name">Others</h3>
              <ul className="ach-points">
                {OTHERS.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
