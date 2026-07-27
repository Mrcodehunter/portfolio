import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Research from "./Pages/Research";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";

/**
 * Multipage site. Every path here must have a matching entry in NAV_ITEMS
 * (src/data/resume.js) — src/App.test.js asserts the two stay in sync.
 *
 * Deep links work on GitHub Pages via the redirect in public/404.html plus the
 * restore snippet in public/index.html; see README.
 */
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/research" element={<Research />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
