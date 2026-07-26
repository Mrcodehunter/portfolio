import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import Skills from "./Pages/Skills";
import Experience from "./Pages/Experience";
import Projects from "./Pages/Projects";
import Publications from "./Pages/Publications";
import Education from "./Pages/Education";
import Achievements from "./Pages/Achievements";
import Contact from "./Pages/Contact";
import PostsPage from "./Pages/Posts";

/**
 * The landing page is a single scroller. Each <section id> here must have a
 * matching entry in NAV_ITEMS (src/data/resume.js) or the navbar scrollspy and
 * the in-page search will skip it.
 */
function LandingSections() {
  return (
    <main className="main-with-navbar">
      <section id="home">
        <Home />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="publications">
        <Publications />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="achievements">
        <Achievements />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingSections />} />

        {/* Dedicated posts page (auto-expands when navigated from a preview) */}
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/posts/:id" element={<PostsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
