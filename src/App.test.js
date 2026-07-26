import { render, screen } from "@testing-library/react";
import App from "./App";
import { PROFILE, NAV_ITEMS, SKILLS, PROJECTS } from "./data/resume";

describe("App", () => {
  test("renders the landing page with the profile name", () => {
    render(<App />);
    // Name appears in both the navbar brand and the hero.
    expect(screen.getAllByText(PROFILE.name).length).toBeGreaterThan(0);
  });

  test("renders a section for every in-page nav item", () => {
    const { container } = render(<App />);

    const anchors = NAV_ITEMS.filter((item) => item.href.startsWith("#")).map((item) =>
      item.href.slice(1)
    );

    // Guards the navbar/App coupling: scrollspy and in-page search silently
    // skip any nav anchor that has no matching <section id>.
    anchors.forEach((id) => {
      expect(container.querySelector(`#${id}`)).not.toBeNull();
    });
  });

  test("renders skill groups and project titles from the resume data", () => {
    render(<App />);

    SKILLS.forEach((group) => {
      expect(screen.getByText(group.group)).toBeInTheDocument();
    });

    PROJECTS.forEach((project) => {
      expect(screen.getByText(project.title)).toBeInTheDocument();
    });
  });
});
