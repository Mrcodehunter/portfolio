import { useEffect, useRef, useState } from "react";
import "./navbar.css";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Projects", href: "#projects" },
  { label: "Publications", href: "#publications" },
  { label: "Posts", href: "#posts" },
  { label: "CV", href: "/cv.pdf", external: true },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [query, setQuery] = useState("");
  const clearTimer = useRef(null);
  const [theme, setTheme] = useState(() => localStorage.getItem("theme-mode") || "light");

  useEffect(() => {
    document.documentElement.classList.toggle("theme-dark", theme === "dark");
    localStorage.setItem("theme-mode", theme);
  }, [theme]);


  // Smooth anchor scrolling
  useEffect(() => {
    const handler = (e) => {
      const a = e.target.closest && e.target.closest("a[href^='#']");
      if (!a) return;
      const href = a.getAttribute("href");
      if (!href || href === "#") return;
      const el = document.querySelector(href);
      if (el) { e.preventDefault(); setOpen(false); el.scrollIntoView({ behavior: "smooth", block: "start" }); }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  // Theme: only light/dark; icon flips to stay visible
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("theme-dark", theme === "dark");
    localStorage.setItem("theme-mode", theme);
  }, [theme]);

  // Scrollspy
  useEffect(() => {
    const ids = NAV_ITEMS.filter(n => n.href.startsWith("#")).map(n => n.href.slice(1));
    const io = new IntersectionObserver((entries) => {
      const top = entries.filter(e => e.isIntersecting).sort((a,b)=>a.boundingClientRect.top-b.boundingClientRect.top)[0];
      if (top?.target?.id) setActive("#" + top.target.id);
    }, { rootMargin: "-40% 0px -55% 0px", threshold: [0,.25,.5,.75] });
    ids.forEach(id => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

  // Highlight helpers (unchanged)
  const removeHighlights = () => {
    document.querySelectorAll("mark.__navhl").forEach(m => {
      const p = m.parentNode; if (!p) return;
      p.replaceChild(document.createTextNode(m.textContent || ""), m);
      p.normalize();
    });
  };
  const highlightIn = (root, q, maxMarks = 80) => {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        const p = node.parentElement; if (!p || /^(SCRIPT|STYLE|NOSCRIPT|IFRAME|SVG)$/.test(p.tagName)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      },
    });
    const re = new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi");
    let n, marks = 0; const nodes = [];
    while (walker.nextNode()) { nodes.push(walker.currentNode); if (nodes.length > 2000) break; }
    for (n of nodes) {
      const text = n.nodeValue; if (!re.test(text)) continue; re.lastIndex = 0;
      const frag = document.createDocumentFragment(); let last = 0, m;
      while ((m = re.exec(text)) && marks < maxMarks) {
        const before = text.slice(last, m.index); if (before) frag.appendChild(document.createTextNode(before));
        const mark = document.createElement("mark"); mark.className="__navhl"; mark.textContent=m[0]; frag.appendChild(mark);
        last = m.index + m[0].length; marks++;
      }
      frag.appendChild(document.createTextNode(text.slice(last)));
      const p = n.parentNode; if (p) p.replaceChild(frag, n);
      if (marks >= maxMarks) break;
    }
  };

  // Full-page search
  const onSearchSubmit = (e) => {
    e.preventDefault();
    const q = query.trim(); if (!q) return;
    removeHighlights(); if (clearTimer.current) clearTimeout(clearTimer.current);

    const sections = NAV_ITEMS.filter(n => n.href.startsWith("#"))
      .map(n => document.querySelector(n.href)).filter(Boolean);
    const lower = q.toLowerCase();
    let first = null;
    for (const sec of sections) {
      const text = (sec.innerText || sec.textContent || "").toLowerCase();
      if (text.includes(lower)) { first = sec; break; }
    }

    highlightIn(document.querySelector("main") || document.body, q, 80);
    if (first) {
      first.scrollIntoView({ behavior: "smooth", block: "start" }); // ✅ no URL change
      setActive("#" + first.id);
    }

  };

  // Choose icon: sun when dark (visible); moon when light
  const ThemeIcon = () =>
    theme === "dark" ? (
      // Sun icon
      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 4a1 1 0 0 1-1-1V1h2v2a1 1 0 0 1-1 1zm0 16a1 1 0 0 1 1 1v2h-2v-2a1 1 0 0 1 1-1zM4 11H1v2h3a1 1 0 1 0 0-2zm19 0h-3a1 1 0 1 0 0 2h3v-2zM6.343 5.757 4.93 4.343 3.515 5.757l1.414 1.414L6.343 5.757zM19.07 18.485l1.414 1.414 1.414-1.414-1.414-1.414-1.414 1.414zM18.485 4.93 17.07 6.343l1.414 1.414 1.415-1.414L18.485 4.93zM5.515 17.657l1.414-1.414 1.414 1.414-1.414 1.414-1.414-1.414zM12 6.5A5.5 5.5 0 1 0 17.5 12 5.506 5.506 0 0 0 12 6.5z"/>
      </svg>
    ) : (
      // Moon icon
      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
      </svg>
    );

  return (
    <header className="nav-header">
      <nav className="nav-bar">
        <a href="/" className="brand">Murad Hossen</a>

        <ul className="nav-links">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              {item.external ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="nav-link">{item.label}</a>
              ) : (
                <a href={item.href} className={`nav-link ${active === item.href ? "active" : ""}`}>{item.label}</a>
              )}
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          {/* Search with magnifier */}
          <form className="nav-search" onSubmit={onSearchSubmit} role="search">
            <input
              type="search"
              placeholder="Search page…"
              value={query}
              onChange={(e) => { setQuery(e.target.value); removeHighlights(); }}
              aria-label="Search"
            />
            <button type="submit" aria-label="Search">
              <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M10 4a6 6 0 1 1 0 12A6 6 0 0 1 10 4m0-2a8 8 0 1 0 5.293 13.707l4 4 1.414-1.414-4-4A8 8 0 0 0 10 2z"/>
              </svg>
            </button>
          </form>

          <button
            className="theme-trigger"
            aria-label="Toggle theme"
            aria-pressed={theme === "dark"}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <ThemeIcon />
          </button>

        </div>

        <button className="burger" aria-label="Toggle menu" onClick={() => setOpen(v => !v)}>
          <span /><span /><span />
        </button>
      </nav>

      {open && (
        <div className="mobile-menu">
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`nav-link ${active === item.href ? "active" : ""}`}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}

            <li className="mobile-controls">
              {/* Mobile search */}
              <form className="nav-search" onSubmit={(e)=>{ onSearchSubmit(e); setOpen(false); }}>
                <input
                  type="search"
                  placeholder="Search page…"
                  value={query}
                  onChange={(e) => { setQuery(e.target.value); removeHighlights(); }}
                  aria-label="Search"
                />
                <button type="submit" aria-label="Search">
                  <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M10 4a6 6 0 1 1 0 12A6 6 0 0 1 10 4m0-2a8 8 0 1 0 5.293 13.707l4 4 1.414-1.414-4-4A8 8 0 0 0 10 2z"/>
                  </svg>
                </button>
              </form>

              <button
                className="theme-trigger"
                aria-label="Toggle theme"
                aria-pressed={theme === "dark"}
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <ThemeIcon />
              </button>

            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
