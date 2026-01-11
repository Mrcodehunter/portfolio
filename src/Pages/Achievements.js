import "./Achievements.css";

const COMPETITIVE = [
  {
    achievement: "1st Place (Global)",
    event: "CodeChef October Challenge 2018 (Division 2)",
    details: "Ranked 1st out of 13,073 participants",
    link: "https://www.codechef.com/rankings/OCT18B",
    linkLabel: "View Contest",
  },
  {
    achievement: "3rd Place",
    event: "Cub Hunting Programming Contest 2019",
    details: null,
    link: "https://toph.co/c/cub-hunting-programming-contest-2019/standings",
    linkLabel: "View Standings",
  },
  {
    achievement: "19th Place",
    event: "ICPC Dhaka Regional 2019",
    details: "Team: JU 3divides3",
    link: "https://icpc.global/regionals/finder/Dhaka-2019",
    linkLabel: "ICPC Regional",
  },
  {
    achievement: "23rd Place",
    event: "ICPC Dhaka Regional 2020",
    details: "Team: JU Amigos",
    link: "https://icpc.global/regionals/finder/Dhaka-2020",
    linkLabel: "ICPC Regional",
  },
  {
    achievement: "25th Place",
    event: "ICPC Dhaka Regional Preliminary 2019",
    details: "Team: JU 3divides3",
    link: "https://icpc.global/regionals/finder/Dhaka-2019",
    linkLabel: "ICPC Regional",
  },
  {
    achievement: "Competitive Programming",
    event: "Participated in 20+ regional, national, and inter-university programming contests",
    details: "Solved over 1,500+ programming problems across multiple online judges",
    links: [
      { url: "https://codeforces.com/profile/CoDeHuNtEr", label: "Codeforces Profile" },
      { url: "https://www.codechef.com/users/mrcodehunter", label: "CodeChef Profile" },
    ],
  },
];

const LEADERSHIP = [
  {
    role: "Problem Setter and Judge",
    event: "Multiple Programming Contests",
    details: "Served as problem setter and judge for various regional, national, and inter-university programming contests",
    link: null,
    linkLabel: null,
  },
  {
    role: "Competitive Programming Trainer",
    event: "Jahangirnagar University — CSE",
    details: "Led specialized technical training programs focused on C, C++, Data Structures, and Algorithms, accumulating 200+ trainees over two years. Managed training lifecycle by coordinating sessions, designing practice contests, and analyzing performance metrics",
    link: null,
    linkLabel: null,
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="ach-section">
      <div className="ach-grid">
        {/* LEFT: Image + Title Centered */}
        <div className="ach-left">
          <img 
            className="ach-hero-img" 
            src="/avatar.jpg" 
            alt="Achievements" 
          />
          <h1 className="ach-title">Achievements</h1>
        </div>

        {/* RIGHT: Achievement Cards */}
        <div className="ach-right">
          <div className="ach-cards">
            {/* Competitive Programming */}
            <article className="ach-card">
              <h3 className="ach-card-title">Competitive Programming</h3>
              <ul className="ach-list">
                {COMPETITIVE.map((item, i) => (
                  <li key={i} className="ach-item">
                    <div className="ach-item-header">
                      <span className="ach-achievement">{item.achievement}</span>
                      {item.details && <span className="ach-details">• {item.details}</span>}
                    </div>
                    <div className="ach-event">{item.event}</div>
                    {item.link && (
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="ach-link"
                      >
                        {item.linkLabel}
                      </a>
                    )}
                    {item.links && (
                      <div className="ach-links">
                        {item.links.map((linkItem, idx) => (
                          <a 
                            key={idx}
                            href={linkItem.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="ach-link"
                          >
                            {linkItem.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </article>

            {/* Leadership & Community */}
            {LEADERSHIP.length > 0 && (
              <article className="ach-card">
                <h3 className="ach-card-title">Leadership & Community</h3>
                <ul className="ach-list">
                  {LEADERSHIP.map((item, i) => (
                    <li key={i} className="ach-item">
                      <div className="ach-item-header">
                        <span className="ach-achievement">{item.role}</span>
                      </div>
                      <div className="ach-event">{item.event}</div>
                      {item.details && <div className="ach-item-details">{item.details}</div>}
                      {item.link && (
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="ach-link"
                        >
                          {item.linkLabel}
                        </a>
                      )}
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
