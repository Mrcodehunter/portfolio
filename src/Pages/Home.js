import "./Home.css";
import profileImage from "./../Assets/profile.jpg";
import { PROFILE, BIO } from "./../data/resume";
import { MailIcon, ScholarIcon, GitHubIcon, LinkedInIcon, DocIcon } from "./../components/Icons";

const SOCIALS = [
  { key: "email", href: `mailto:${PROFILE.email}`, label: "Email", Icon: MailIcon },
  { key: "scholar", href: PROFILE.links.scholar, label: "Google Scholar", Icon: ScholarIcon },
  { key: "github", href: PROFILE.links.github, label: "GitHub", Icon: GitHubIcon },
  { key: "linkedin", href: PROFILE.links.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { key: "cv", href: PROFILE.cv, label: "CV", Icon: DocIcon },
];

export default function Home() {
  return (
    <section id="home" className="home-section">
      <div className="home-grid">
        {/* LEFT: Biography */}
        <article className="home-content">
          <h2 className="bio-title">Biography</h2>
          <div className="bio">
            {BIO.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </article>

        {/* RIGHT: Portrait, identity and profile links */}
        <aside className="home-image">
          <img className="home-hero-img" src={profileImage} alt={PROFILE.name} />
          <div className="home-profile-info">
            <h1 className="home-name">{PROFILE.name}</h1>
            <div className="home-role">{PROFILE.role}</div>
            <div className="home-company">{PROFILE.tagline}</div>
            <div className="home-location">{PROFILE.location}</div>

            <nav className="home-icons" aria-label="Profile links">
              {SOCIALS.map(({ key, href, label, Icon }) => (
                <a
                  key={key}
                  className="icon-btn"
                  href={href}
                  target={key === "email" ? undefined : "_blank"}
                  rel={key === "email" ? undefined : "noopener noreferrer"}
                  aria-label={label}
                  title={label}
                >
                  <Icon />
                </a>
              ))}
            </nav>
          </div>
        </aside>
      </div>
    </section>
  );
}
