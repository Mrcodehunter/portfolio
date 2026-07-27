import { Link } from "react-router-dom";

import "./Footer.css";
import { PROFILE, NAV_ITEMS } from "./../data/resume";
import { GitHubIcon, LinkedInIcon, ScholarIcon, MailIcon } from "./Icons";

const SOCIALS = [
  { label: "GitHub", href: PROFILE.links.github, Icon: GitHubIcon },
  { label: "LinkedIn", href: PROFILE.links.linkedin, Icon: LinkedInIcon },
  { label: "Google Scholar", href: PROFILE.links.scholar, Icon: ScholarIcon },
  { label: "Email", href: `mailto:${PROFILE.email}`, Icon: MailIcon },
];

export default function Footer() {
  return (
    <footer className="ftr">
      <div className="shell ftr-inner">
        <div className="ftr-brand">
          <div className="ftr-name">{PROFILE.name}</div>
          <p className="ftr-blurb">{PROFILE.tagline}</p>
          <a className="link-arrow" href={`mailto:${PROFILE.email}`}>
            {PROFILE.email}
          </a>
        </div>

        <nav className="ftr-nav" aria-label="Footer">
          <div className="eyebrow">Pages</div>
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ftr-social">
          <div className="eyebrow">Elsewhere</div>
          <ul>
            {SOCIALS.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                >
                  <Icon width={14} height={14} />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="shell ftr-base">
        <span>
          © {new Date().getFullYear()} {PROFILE.name}
        </span>
        <span className="mono">{PROFILE.location}</span>
      </div>
    </footer>
  );
}
