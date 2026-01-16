import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Experience from "./Pages/Experience";
import Projects from "./Pages/Projects";
import Achievements from "./Pages/Achievements";
import Publications from "./Pages/Publications";
import PostsPage from "./Pages/Posts";        // full list with expand

function LandingSections() {
  return (
    <main className="main-with-navbar">
      <section id="home"><Home /></section>
      <section id="experience"><Experience /></section>
      <section id="achievements"><Achievements /></section>
      <section id="projects"><Projects /></section>
      <section id="publications"><Publications /></section>

      {/* ⬇️ show the 2-card preview here */}
      {/* <section id="posts"><PostsPreview /></section> */}

      <section id="contact"><Contact /></section>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Landing with all sections */}
        <Route path="/" element={<LandingSections />} />

        {/* Dedicated posts page (auto-expands when navigated from preview) */}
        <Route path="/posts" element={<PostsPage />} />
        {/* Optional: deep link like /posts/:id */}
        <Route path="/posts/:id" element={<PostsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
