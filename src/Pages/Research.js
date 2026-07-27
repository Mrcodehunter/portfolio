import "./Research.css";
import { PUBLICATIONS, PROFILE } from "./../data/resume";
import useDocumentTitle from "./../hooks/useDocumentTitle";
import { ArrowUpRightIcon } from "./../components/Icons";

export default function Research() {
  useDocumentTitle("Research");

  const papers = [...PUBLICATIONS].sort((a, b) => (b.year || 0) - (a.year || 0));

  return (
    <div className="shell page">
      <header>
        <p className="eyebrow">Research</p>
        <h1 className="page-title">Publications</h1>
        <p className="lede">
          Peer-reviewed work in applied machine learning, from my M.Sc. and B.Sc. at
          Jahangirnagar University.
        </p>
        <a
          className="link-arrow res-scholar"
          href={PROFILE.links.scholar}
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Scholar profile
          <ArrowUpRightIcon width={13} height={13} />
        </a>
      </header>

      <ol className="res-list">
        {papers.map((p) => (
          <li className="res" key={p.title}>
            <div className="res-year mono">{p.year}</div>

            <div className="res-body">
              <h2 className="res-title">{p.title}</h2>
              <p className="res-authors">{p.authors}</p>
              <p className="res-venue">{p.venue}</p>
              <p className="res-abstract">{p.blurb}</p>

              <ul className="tag-list res-tags">
                {p.tags.map((t) => (
                  <li className="tag" key={t}>
                    {t}
                  </li>
                ))}
              </ul>

              <div className="res-links">
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
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
