# Portfolio — Murad Hossen

Personal portfolio site. React 19 on Create React App, deployed to GitHub Pages.

Sections: Home, Skills, Experience, Projects, Publications, Education, Achievements, Contact.

## Editing content

**All content lives in [`src/data/resume.js`](src/data/resume.js).** Page components under
`src/Pages` are pure presenters — they import from that module and render it. To update the
site, edit that one file.

The module exports:

| Export | Drives |
| --- | --- |
| `PROFILE` | Name, role, tagline, location, email, phone, social links, CV path |
| `BIO` | Biography paragraphs on the landing section |
| `SKILLS` | Skills section, grouped into cards |
| `EXPERIENCE` | Work history |
| `PROJECTS` | Project cards (`featured: true` adds a badge) |
| `PUBLICATIONS` | Papers, sorted newest first |
| `EDUCATION` | Degrees |
| `COMPETITIVE`, `LEADERSHIP` | The two Achievements cards |
| `NAV_ITEMS` | Navbar links **and** the scrollspy targets |

Adding a landing section takes two edits: add the `<section id="...">` in `src/App.js` and a
matching `{ label, href: "#id" }` entry in `NAV_ITEMS`. `src/App.test.js` fails if these drift
apart.

Replacing the CV: overwrite `public/CV.pdf`. Do not edit `build/CV.pdf` — the build regenerates
`build/` from `public/` on every run.

## Commands

```bash
yarn install       # install dependencies
yarn start         # dev server on http://localhost:3000
yarn build         # production build into build/
yarn test          # watch mode
yarn test --watchAll=false            # single run
yarn test --watchAll=false -t "name"  # one test by name
```

There is no lint script; ESLint runs through `react-scripts` and reports as build/dev warnings.

## Deployment

GitHub Actions builds and publishes `build/` to GitHub Pages on every push to `main`/`master`
(workflows live on the `CI-CD` branch). If the site is served from a project path rather than a
domain root, set `homepage` in `package.json` or the hashed asset URLs will 404.

## Notes

`react-router-dom@7.9.4` ships a `main` field pointing at a file it does not publish, and its
subpath `exports` are not understood by the Jest 27 that `react-scripts@5` pins. The
`jest.moduleNameMapper` block in `package.json` maps those specifiers to the real files so the
test suite can run. Remove it only if the dependency's packaging is fixed upstream.
