import "./Projects.css";
import { PROJECTS } from "./../data/resume";
import useDocumentTitle from "./../hooks/useDocumentTitle";
import { ArrowUpRightIcon } from "./../components/Icons";

export default function Projects() {
  useDocumentTitle("Projects");

  return (
    <div className="shell page">
      <header>
        <p className="eyebrow">Projects</p>
        <h1 className="page-title">Selected work</h1>
        <p className="lede">
          Platforms and systems I have designed and built — from an Azure automation
          platform serving a global consultancy to sandboxed AI agents.
        </p>
      </header>

      <ol className="prj-list">
        {PROJECTS.map((p, i) => (
          <li className="prj" key={p.title}>
            <div className="prj-index mono">{String(i + 1).padStart(2, "0")}</div>

            <div className="prj-body">
              <div className="prj-head">
                <h2 className="prj-name">{p.title}</h2>
                <div className="prj-meta">
                  {p.featured && <span className="prj-badge">Featured</span>}
                  <span className="mono">{p.year}</span>
                </div>
              </div>

              <p className="prj-desc">{p.description}</p>

              <ul className="tag-list prj-tech">
                {p.tech.map((t) => (
                  <li className="tag" key={t}>
                    {t}
                  </li>
                ))}
              </ul>

              <div className="prj-foot">
                {p.links.map((l) => (
                  <a
                    key={l.href}
                    className="link-arrow"
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {l.label}
                    <ArrowUpRightIcon width={13} height={13} />
                  </a>
                ))}
                {p.note && <span className="prj-note">{p.note}</span>}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
