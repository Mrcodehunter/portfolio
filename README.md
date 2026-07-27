# Portfolio — Murad Hossen

Personal portfolio. React 19 on Create React App, multipage via React Router, deployed to
GitHub Pages.

**Pages:** Home (`/`), About (`/about`), Projects (`/projects`), Research (`/research`),
Contact (`/contact`).

## Editing content

**All content lives in [`src/data/resume.js`](src/data/resume.js).** Page components are pure
presenters — they import from that module and render it. To update the site, edit that one file.

| Export | Drives |
| --- | --- |
| `PROFILE` | Name, role, tagline, location, email, phone, social links, CV path |
| `HEADLINE`, `HERO_SUMMARY` | The home hero |
| `HIGHLIGHTS` | Home stat strip (exactly four — the grid is built for it) |
| `BIO` | About page biography |
| `SKILLS` | Grouped toolkit on the home page |
| `EXPERIENCE` | About page timeline; the first entry also appears on the home page |
| `PROJECTS` | Projects page; `featured: true` also surfaces it on the home page |
| `PUBLICATIONS` | Research page, sorted newest first |
| `EDUCATION`, `COMPETITIVE`, `LEADERSHIP` | About page sections |
| `NAV_ITEMS` | Header and footer navigation |

Adding a page takes three edits: the component, a `<Route>` in `src/App.js`, and a `NAV_ITEMS`
entry. `src/App.test.js` fails if a nav item has no matching route.

Replacing the CV: overwrite `public/CV.pdf`. Never edit `build/CV.pdf` — the build regenerates
`build/` from `public/` every run.

## Design system

Colour, type, spacing and layout tokens live in [`src/styles/tokens.css`](src/styles/tokens.css);
shared primitives (`.shell`, `.card`, `.tag`, `.btn`, `.eyebrow`, `.section-head`) in
[`src/styles/base.css`](src/styles/base.css). **Component CSS must use tokens — no literal hex
values.** Dark is the default; light is the `:root` baseline and dark overrides via `.theme-dark`
on `<html>`, set by `src/hooks/useTheme.js` and pre-applied by an inline script in
`public/index.html` so there is no flash of the wrong palette on load.

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

GitHub Actions builds and publishes `build/` to GitHub Pages on push to `main`/`master`
(workflows live on the `CI-CD` branch).

Two things to know about hosting a multipage SPA on Pages:

1. **Deep links.** Pages serves static files, so `/about` would 404 on refresh or direct entry.
   `public/404.html` encodes the requested path into a query string and bounces to `index.html`,
   where an inline script restores it before React Router boots.
2. **Sub-path hosting.** If the site is served from `https://<user>.github.io/portfolio/` rather
   than a domain root, set `homepage` in `package.json` **and** change `pathSegmentsToKeep` to `1`
   in `public/404.html`. At a domain root both stay as they are.

## Notes

`react-router-dom@7.9.4` declares a `main` field pointing at a file it does not ship, and its
subpath `exports` are not understood by the Jest 27 that `react-scripts@5` pins. The
`jest.moduleNameMapper` block in `package.json` maps those specifiers to real files so the test
suite can run. Webpack honours `exports`, so builds were never affected.
