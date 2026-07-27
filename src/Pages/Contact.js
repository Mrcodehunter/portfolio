import "./Contact.css";
import { PROFILE } from "./../data/resume";
import useDocumentTitle from "./../hooks/useDocumentTitle";
import {
  MailIcon,
  PhoneIcon,
  LocationIcon,
  GitHubIcon,
  LinkedInIcon,
  ScholarIcon,
  DocIcon,
  ArrowUpRightIcon,
} from "./../components/Icons";

const DIRECT = [
  { Icon: MailIcon, label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
  {
    Icon: PhoneIcon,
    label: "Phone",
    value: PROFILE.phone,
    href: `tel:${PROFILE.phone.replace(/[^+\d]/g, "")}`,
  },
  { Icon: LocationIcon, label: "Location", value: PROFILE.location, href: null },
];

const ELSEWHERE = [
  { Icon: GitHubIcon, label: "GitHub", value: "Mrcodehunter", href: PROFILE.links.github },
  { Icon: LinkedInIcon, label: "LinkedIn", value: "codehunter", href: PROFILE.links.linkedin },
  { Icon: ScholarIcon, label: "Google Scholar", value: "Publications", href: PROFILE.links.scholar },
  { Icon: DocIcon, label: "CV", value: "Download PDF", href: PROFILE.cv },
];

function Row({ Icon, label, value, href }) {
  const external = href && !href.startsWith("mailto:") && !href.startsWith("tel:");

  return (
    <li className="ct-row">
      <span className="ct-icon">
        <Icon width={16} height={16} />
      </span>
      <span className="ct-label">{label}</span>
      {href ? (
        <a
          className="ct-value link"
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
        >
          {value}
          {external && <ArrowUpRightIcon width={12} height={12} />}
        </a>
      ) : (
        <span className="ct-value">{value}</span>
      )}
    </li>
  );
}

export default function Contact() {
  useDocumentTitle("Contact");

  return (
    <div className="shell page">
      <header>
        <p className="eyebrow">Contact</p>
        <h1 className="page-title">Get in touch</h1>
        <p className="lede">
          The fastest way to reach me is email. I read everything and reply to anything
          concrete.
        </p>
      </header>

      <div className="ct-grid">
        <section>
          <div className="section-head">
            <h2 className="section-title">Direct</h2>
          </div>
          <ul className="ct-list">
            {DIRECT.map((entry) => (
              <Row key={entry.label} {...entry} />
            ))}
          </ul>
        </section>

        <section>
          <div className="section-head">
            <h2 className="section-title">Elsewhere</h2>
          </div>
          <ul className="ct-list">
            {ELSEWHERE.map((entry) => (
              <Row key={entry.label} {...entry} />
            ))}
          </ul>
        </section>
      </div>

      <a className="btn btn-primary ct-cta" href={`mailto:${PROFILE.email}`}>
        Email me
      </a>
    </div>
  );
}
