import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "theme-mode";

function initialTheme() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "light" || saved === "dark") return saved;
  } catch {
    /* localStorage unavailable (private mode, SSR) — fall through */
  }
  return "dark";
}

/**
 * Theme state, persisted to localStorage and applied as a `theme-dark` class
 * on <html>. All colour tokens key off that class (src/styles/tokens.css).
 */
export default function useTheme() {
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("theme-dark", theme === "dark");
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* ignore persistence failures */
    }
  }, [theme]);

  const toggle = useCallback(() => {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  }, []);

  return [theme, toggle];
}
