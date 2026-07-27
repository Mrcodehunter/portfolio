import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

import "./Header.css";
import { PROFILE, NAV_ITEMS } from "./../data/resume";
import useTheme from "./../hooks/useTheme";
import { SunIcon, MoonIcon, MenuIcon, CloseIcon } from "./Icons";

export default function Header() {
  const [theme, toggleTheme] = useTheme();
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Prevent background scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="hdr">
      <div className="shell hdr-inner">
        <Link to="/" className="hdr-brand">
          <span className="hdr-brand-name">{PROFILE.name}</span>
          <span className="hdr-brand-role">{PROFILE.role}</span>
        </Link>

        <nav className="hdr-nav" aria-label="Main">
          <ul className="hdr-links">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) => `hdr-link ${isActive ? "is-active" : ""}`}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hdr-actions">
          <a className="btn hdr-cv" href={PROFILE.cv} target="_blank" rel="noopener noreferrer">
            CV
          </a>

          <button
            className="hdr-icon-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>

          <button
            className="hdr-icon-btn hdr-burger"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="hdr-mobile" aria-label="Mobile">
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) => `hdr-mobile-link ${isActive ? "is-active" : ""}`}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li>
              <a
                className="hdr-mobile-link"
                href={PROFILE.cv}
                target="_blank"
                rel="noopener noreferrer"
              >
                CV ↗
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
