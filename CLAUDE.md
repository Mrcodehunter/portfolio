# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Read this first: branch layout

This repo's history is split across branches that hold *different* snapshots of the app:

| Branch | Contents |
| --- | --- |
| `Restructure` | **Current working branch.** Seeded from `master`, then restructured (see below). Contains the newest source |
| `main` | `README.md` only — no app source, no `package.json` |
| `master` | Newest complete app (React 19 + CRA 5). Has `package-lock.json` **and** `yarn.lock` |
| `Update-Profile-Picture` | `master` + a one-line `Home.js` image swap; newest commit in the repo |
| `CI-CD` | App + `.github/workflows/` + `CI_CD_SETUP.md` / `DNS_SETUP.md` / `GITHUB_PAGES_DNS_SETUP.md` |
| `Update-Structure`, `Update-Contents`, `Initialize-Structure` | Older snapshots |
| `origin/unknown-branch` | Only meaningful change: a fixed `src/App.test.js` |
| `origin/Mrcodehunter-patch-1` | Workflow branch rename `main` → `master` |

Before editing anything, check what is actually checked out (`git ls-files`). If a working tree has only `README.md`, the request almost certainly targets the source (`master`, or `CI-CD` for pipeline work) rather than a request to recreate files. Read files from another branch without switching via `git show master:src/Pages/Home.js`.

`build/` is gitignored CRA output — never edit it by hand. **`yarn build` wipes `build/` and repopulates it from `public/`**, so a file that exists only in `build/` is destroyed by the next build. `public/CV.pdf` is the canonical CV.

## Commands

Run from a branch that has `package.json` (`master`, `CI-CD`, …). CI uses yarn with `--frozen-lockfile`, so prefer yarn to keep `yarn.lock` authoritative.

```bash
yarn install                      # CI runs: yarn install --frozen-lockfile
yarn start                        # dev server on :3000
yarn build                        # production build -> build/
yarn test                         # interactive watch mode
yarn test --watchAll=false        # single CI-style run
yarn test --watchAll=false src/App.test.js          # one file
yarn test --watchAll=false -t "renders navbar"      # one test by name
```

There is **no lint script**. The CI step is `yarn lint || echo "No lint script found"` with `continue-on-error: true`, so it never fails the build. ESLint runs only through `react-scripts` (config: `eslintConfig.extends: ["react-app", "react-app/jest"]` in `package.json`), surfacing as dev-server/build warnings.

**Tests only run because of two workarounds — do not remove them casually.**
1. `react-router-dom@7.9.4` declares `"main": "./dist/main.js"`, a file it does not ship, and its subpath `exports` are not understood by the Jest 27 that `react-scripts@5` pins. Webpack honours `exports`, so `yarn build` is unaffected and the breakage is **test-only**. The `jest.moduleNameMapper` block in `package.json` maps `react-router-dom`, `react-router` and `react-router/dom` to their real files.
2. `src/setupTests.js` polyfills `TextEncoder`/`TextDecoder` (react-router 7 needs them at import time), stubs `IntersectionObserver`, `scrollIntoView` and `window.scrollTo` (Layout resets scroll on navigation). Without these, jsdom throws before any assertion runs.

On `master` the suite could never run at all, and both CI workflows mark the test step `continue-on-error: true` — so the failure was invisible in Actions. If you see a green CI run, confirm the test step actually executed.

## Architecture

Create React App 5 (`react-scripts`, unejected) + React 19 + `react-router-dom` v7. No TypeScript, no CSS framework, no state library, no backend — everything is static and client-rendered.

**`src/data/resume.js` is the single source of truth for all content.** Every page component under `src/Pages` is a pure presenter that imports from it and renders — no copy lives in JSX. Editing the site means editing that one module. It exports `PROFILE`, `HEADLINE`, `HERO_SUMMARY`, `HIGHLIGHTS`, `BIO`, `SKILLS`, `EXPERIENCE`, `PROJECTS`, `PUBLICATIONS`, `EDUCATION`, `COMPETITIVE`, `LEADERSHIP` and `NAV_ITEMS`. Keep it in sync with `public/CV.pdf`.

**Multipage routing** (`src/App.js`): five routes — `/`, `/about`, `/projects`, `/research`, `/contact` — plus a `*` catch-all rendering `NotFound`. All are children of `<Layout>` (`src/components/Layout.js`), which supplies the sticky header, footer, skip-link and a scroll reset on navigation. `NAV_ITEMS` in `resume.js` must stay in sync with the route table; `src/App.test.js` asserts every nav target resolves to a real page rather than the 404.

**Design system.** `src/styles/tokens.css` defines every colour, type step, space step and layout constant; `src/styles/base.css` holds the reset plus shared primitives (`.shell`, `.card`, `.tag`, `.btn`, `.eyebrow`, `.section-head`, `.link-arrow`). Both are imported once in `src/index.js`. **Component CSS must consume tokens — never literal hex values.** Light is the `:root` baseline; dark overrides through `.theme-dark` on `<html>`.

**Theme is applied twice, deliberately.** `src/hooks/useTheme.js` owns it at runtime, and an inline script in `public/index.html` sets the class before first paint to prevent a flash of the wrong palette. Change one and you must change the other — they share the `theme-mode` localStorage key.

**GitHub Pages deep links.** Pages serves static files, so `/about` would 404 on direct entry. `public/404.html` encodes the path into a query string and bounces to `index.html`, where an inline script restores it via `history.replaceState` before React Router mounts. If the site ever moves to a `<user>.github.io/<repo>/` sub-path, set `pathSegmentsToKeep = 1` in `404.html` *and* `homepage` in `package.json`.

**Shared modules:** `src/components/Icons.js` holds fill-based SVG icons that inherit `currentColor` and default to 18px, overridable by props or CSS. `src/hooks/useDocumentTitle.js` sets a per-route `<title>`.

**Page convention:** each page is `src/Pages/X.js` + `src/Pages/X.css`, the JS importing its own CSS. Page CSS should only contain layout specific to that page — anything reused belongs in `base.css`.

**Import casing must be exact.** Development is on Windows (case-insensitive) while CI builds on `ubuntu-latest` (case-sensitive), so a mis-cased import builds fine locally and fails only in Actions. This bit once already: a `src/Data/` vs `src/data/` collision made `./../data/resume` resolve on Windows and nowhere else. Directories are `src/data`, `src/hooks`, `src/components`, `src/styles` (lowercase) and `src/Pages`, `src/Assets` (capitalised) — match them exactly.

**Removed in the multipage rebuild** (recoverable from git history on `master`): the single-page scroller and its per-section components, the old `Navbar.js` with its scrollspy and `TreeWalker`-based full-page search, the `useReveal` scroll-animation hook, and the `/posts` feature (`Posts.js`, `PostsPreview.js`, `PostsData.js`) whose content was placeholder text. Scrollspy and in-page search are meaningless across separate routes; if search is wanted again, build it over the `resume.js` data rather than by mutating the DOM.

Static assets split by purpose: `public/` holds files referenced by absolute URL (`/CV.pdf`, `/tabIcon.jpg`, manifest, icons); `src/Assets/` holds images imported into components so webpack fingerprints them (`profile.jpg`, `profile_1..5.jpg`).

## Deployment (`CI-CD` branch)

- `deploy.yml` — on push to `main`/`master` or manual dispatch: build, then publish `./build` to GitHub Pages via `actions/upload-pages-artifact` + `actions/deploy-pages`. Uses a `pages` concurrency group with `cancel-in-progress: false`.
- `ci.yml` — on PR/push to `main`/`master`/`develop`: lint (no-op), test (non-blocking), build, and assert `build/` exists.
- Both pin Node 18 and `cache: 'yarn'`, so `yarn.lock` must stay committed and in sync with `package.json`.
- `package.json` on `CI-CD` still has the placeholder `"homepage": "https://YOUR_GITHUB_USERNAME.github.io/portfolio"`; `master` has no `homepage` field at all. Set this correctly for any project-page (non-root) deploy or the hashed asset paths in `build/index.html` will 404.
- `GITHUB_PAGES_DNS_SETUP.md` documents an intended custom domain, `muradhossen.portfolio.com`.

Repo remote: `https://github.com/Mrcodehunter/portfolio.git`.
