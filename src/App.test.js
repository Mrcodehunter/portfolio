import { render, screen, within } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Research from "./Pages/Research";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";
import { PROFILE, NAV_ITEMS, PROJECTS, PUBLICATIONS, EXPERIENCE } from "./data/resume";

// Mirrors the route table in App.js. App.js itself wraps these in a
// BrowserRouter, which cannot be pointed at an arbitrary URL in tests.
function renderAt(path) {
  return render(
    <MemoryRouter initialEntries={[path]}>
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
    </MemoryRouter>
  );
}

describe("routing", () => {
  test("every nav item resolves to a real page, not the 404", () => {
    // Guards the NAV_ITEMS <-> App.js route-table coupling: a nav entry with
    // no matching <Route path> would silently render the not-found page.
    NAV_ITEMS.forEach((item) => {
      const { unmount } = renderAt(item.to);
      expect(screen.queryByText(/page not found/i)).not.toBeInTheDocument();
      unmount();
    });
  });

  test("an unknown path renders the 404 page", () => {
    renderAt("/no-such-page");
    expect(screen.getByText(/page not found/i)).toBeInTheDocument();
  });

  test("the header links to every nav item", () => {
    renderAt("/");
    const banner = screen.getByRole("banner");
    NAV_ITEMS.forEach((item) => {
      expect(within(banner).getAllByRole("link", { name: item.label }).length).toBeGreaterThan(0);
    });
  });
});

describe("content", () => {
  test("home shows the profile name and featured projects", () => {
    renderAt("/");
    expect(screen.getAllByText(PROFILE.name).length).toBeGreaterThan(0);

    PROJECTS.filter((p) => p.featured).forEach((p) => {
      expect(screen.getByText(p.title)).toBeInTheDocument();
    });
  });

  test("projects page lists every project", () => {
    renderAt("/projects");
    PROJECTS.forEach((p) => {
      expect(screen.getByText(p.title)).toBeInTheDocument();
    });
  });

  test("research page lists every publication", () => {
    renderAt("/research");
    PUBLICATIONS.forEach((p) => {
      expect(screen.getByText(p.title)).toBeInTheDocument();
    });
  });

  test("about page lists every role", () => {
    renderAt("/about");
    EXPERIENCE.forEach((job) => {
      expect(screen.getByText(job.role)).toBeInTheDocument();
    });
  });

  test("contact page exposes the CV-sourced email", () => {
    renderAt("/contact");
    // Appears in both the contact row and the footer.
    expect(screen.getAllByText(PROFILE.email).length).toBeGreaterThan(0);
  });
});
