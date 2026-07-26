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
2. `src/setupTests.js` polyfills `TextEncoder`/`TextDecoder` (react-router 7 needs them at import time), stubs `IntersectionObserver` (used by the navbar scrollspy and `useReveal`), and stubs `scrollIntoView`. Without these, jsdom throws before any assertion runs.

On `master` the suite could never run at all, and both CI workflows mark the test step `continue-on-error: true` — so the failure was invisible in Actions. If you see a green CI run, confirm the test step actually executed.

## Architecture

Create React App 5 (`react-scripts`, unejected) + React 19 + `react-router-dom` v7. No TypeScript, no CSS framework, no state library, no backend — everything is static and client-rendered.

**`src/data/resume.js` is the single source of truth for all content.** Every page component under `src/Pages` is a pure presenter that imports from it and renders — no copy lives in JSX. Editing the site means editing that one module. It exports `PROFILE`, `BIO`, `SKILLS`, `EXPERIENCE`, `PROJECTS`, `PUBLICATIONS`, `EDUCATION`, `COMPETITIVE`, `LEADERSHIP` and `NAV_ITEMS`. Keep it in sync with `public/CV.pdf`.

**Two-shape routing** (`src/App.js`): the site is a one-page scroller *plus* a real route.
- `/` renders `<LandingSections>`, which stacks `Home`, `Skills`, `Experience`, `Projects`, `Publications`, `Education`, `Achievements`, `Contact` as `<section id="...">` inside `<main className="main-with-navbar">`. Navigation between them is anchor-hash scrolling, not routing.
- `/posts` and `/posts/:id` render `PostsPage` as a standalone page (no landing sections).

**Shared modules:** `src/hooks/useReveal.js` returns `[ref, visible]` and drives every section's scroll-into-view entrance animation (it replaced four identical copy-pasted `IntersectionObserver` blocks — use it rather than reintroducing one). `src/components/Icons.js` holds the shared fill-based SVG icons; they inherit `currentColor` and are sized by CSS, which overrides their default 18px attributes.

**`src/Pages/Navbar.js` is the app's control plane.** It is far more than a nav bar and owns three global behaviors, all via direct DOM APIs rather than React state trees:
1. **Theme.** A `theme` state initialized from `localStorage["theme-mode"]` (default `"dark"`), applied by toggling the `theme-dark` class on `document.documentElement`. All styling is driven off CSS custom properties (`--bg`, `--fg`, `--muted`, `--border`, `--elev`) declared in `:root` / `.theme-dark`.
2. **Smooth anchor scrolling.** A single delegated `click` listener on `document` intercepts every `a[href^="#"]` anywhere in the app and calls `scrollIntoView`. Individual pages therefore do not implement their own anchor handling.
3. **Scrollspy + full-page search.** An `IntersectionObserver` over the section ids drives the active link. The search box walks the DOM with a `TreeWalker` and injects `<mark class="__navhl">` nodes into `<main>` (capped at 80 marks / 2000 text nodes), then scrolls to the first matching section — it mutates rendered DOM outside React, so `removeHighlights()` must run before any re-highlight.

`NAV_ITEMS` (exported from `src/data/resume.js`, consumed by `Navbar.js`) drives both the nav links *and* the scrollspy target ids. Adding a landing section means adding the `<section id>` in `App.js` **and** the matching `{ label, href: "#id" }` entry there, or scrollspy and search will silently skip it — `src/App.test.js` asserts these stay in sync. Entries with `external: true` (e.g. `CV` → `/CV.pdf`) render as `target="_blank"` links and are excluded from scrollspy.

The desktop nav only appears at `min-width: 1100px` (`navbar.css`); below that the burger menu is used, because nine links plus the search box and theme toggle do not fit. Adding more nav items means revisiting that breakpoint.

**Theming CSS lives in `src/Pages/navbar.css`**, despite the name: it defines the `:root` / `.theme-dark` variables and the `html, body` base styles for the entire app. `src/index.css` and `src/App.css` are still the unmodified CRA defaults (`.App-logo` spin etc.) and are effectively dead — do not add global styles there.

**Page convention:** every section is a pair `src/Pages/X.js` + `src/Pages/X.css`, with the JS importing its own CSS. Dark-mode variants are written as `.theme-dark .selector { … }` overrides.

**Posts content is separate.** `src/data/PostsData.js` exports a `POSTS` array (`id`, `title`, `date`, `excerpt`, `content`) and was not folded into `resume.js`; keep it newest-first.

**Import casing must be exact.** Development is on Windows (case-insensitive) while CI builds on `ubuntu-latest` (case-sensitive), so a mis-cased import path builds fine locally and fails only in Actions. This directory was originally `src/Data/`, which made `./../data/resume` silently resolve on Windows and nowhere else. Directories are now `src/data`, `src/hooks`, `src/components` (lowercase) and `src/Pages`, `src/Assets` (capitalised) — match them exactly.

**Posts is currently disabled on the landing page.** `PostsPreview` is imported but its `<section id="posts">` is commented out in `App.js`, and the `Posts` nav entry is commented out in `NAV_ITEMS`. The `/posts` route still works and `PostsPage` supports three ways to auto-expand a post — router `state.openId`, `?id=` query param, and `/posts/:id` — resolved in that precedence order in a `useEffect` keyed on `location.key`. `PostsPreview` also references `/avatar.jpg`, which does not exist in `public/`; re-enabling the section requires adding that asset or pointing at an `src/Assets` image.

Static assets split by purpose: `public/` holds files referenced by absolute URL (`/CV.pdf`, `/tabIcon.jpg`, manifest, icons); `src/Assets/` holds images imported into components so webpack fingerprints them (`profile.jpg`, `profile_1..5.jpg`).

## Deployment (`CI-CD` branch)

- `deploy.yml` — on push to `main`/`master` or manual dispatch: build, then publish `./build` to GitHub Pages via `actions/upload-pages-artifact` + `actions/deploy-pages`. Uses a `pages` concurrency group with `cancel-in-progress: false`.
- `ci.yml` — on PR/push to `main`/`master`/`develop`: lint (no-op), test (non-blocking), build, and assert `build/` exists.
- Both pin Node 18 and `cache: 'yarn'`, so `yarn.lock` must stay committed and in sync with `package.json`.
- `package.json` on `CI-CD` still has the placeholder `"homepage": "https://YOUR_GITHUB_USERNAME.github.io/portfolio"`; `master` has no `homepage` field at all. Set this correctly for any project-page (non-root) deploy or the hashed asset paths in `build/index.html` will 404.
- `GITHUB_PAGES_DNS_SETUP.md` documents an intended custom domain, `muradhossen.portfolio.com`.

Repo remote: `https://github.com/Mrcodehunter/portfolio.git`.
