import "./Contact.css";
import { PROFILE } from "./../data/resume";
import {
  MailIcon,
  PhoneIcon,
  LocationIcon,
  ScholarIcon,
  GitHubIcon,
  LinkedInIcon,
  DocIcon,
} from "./../components/Icons";

const ENTRIES = [
  { Icon: MailIcon, label: PROFILE.email, href: `mailto:${PROFILE.email}`, aria: "Email" },
  {
    Icon: PhoneIcon,
    label: PROFILE.phone,
    href: `tel:${PROFILE.phone.replace(/[^+\d]/g, "")}`,
    aria: "Phone",
  },
  { Icon: LocationIcon, label: PROFILE.location, href: null, aria: "Location" },
  { Icon: GitHubIcon, label: "GitHub", href: PROFILE.links.github, aria: "GitHub", external: true },
  {
    Icon: LinkedInIcon,
    label: "LinkedIn",
    href: PROFILE.links.linkedin,
    aria: "LinkedIn",
    external: true,
  },
  {
    Icon: ScholarIcon,
    label: "Google Scholar",
    href: PROFILE.links.scholar,
    aria: "Google Scholar",
    external: true,
  },
  { Icon: DocIcon, label: "Curriculum Vitae (PDF)", href: PROFILE.cv, aria: "CV", external: true },
];

export default function Contact() {
  return (
    <section id="contact" className="ct-section">
      <h1 className="ct-title">Contact</h1>
      <div className="ct-grid">
        <div className="ct-right">
          <div className="ct-links-container">
            <ul className="ct-links">
              {ENTRIES.map(({ Icon, label, href, aria, external }) => (
                <li key={aria}>
                  <span className="ct-icon">
                    <Icon />
                  </span>
                  {href ? (
                    <a
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      aria-label={aria}
                      className="ct-link-text"
                    >
                      {label}
                    </a>
                  ) : (
                    <span className="ct-link-text">{label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
