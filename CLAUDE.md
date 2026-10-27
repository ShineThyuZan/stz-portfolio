# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio site for Shine Thyu Zan: a static, single-page HTML site with no build step, package manager, or tests. Deployed on Vercel. `vercel.json` rewrites every path to `/`. The layout follows the mock images in `mockdesign/` (originally based on a template by hninthuzar; see `ReadMe.md`).

## Running locally

Serve the repo root over HTTP. `.vscode/launch.json` expects port 8080:

```
python3 -m http.server 8080
```

## Architecture

- **`index.html`**: all content, as one long scrolling page. A sticky header, then sections `#home` (hero), `#about`, `#skills`, `#projects`, a CTA band, `#experience`, `#education` (also holds the company logo row), `#contact`, then the footer. Content changes (a new project, job and so on) mean copying an existing card, e.g. an `article.project-card` in `.project-grid`. Icons are inline SVG.
  - A new menu section needs a `<section id="…">` inside `<main>` plus matching `href="#…"` links in both the header `.nav` and the `.footer-nav`.
  - Elements with class `reveal` fade in on scroll.
- **`styles.css`**: hand-written plain CSS. Design tokens (accent purple `--accent`, greys, navy, shadows, header height) are CSS variables in `:root` at the top. Use them rather than raw colors. The font is Work Sans (Google Fonts, loaded in `index.html`). Breakpoints: `max-width: 1023px` (mobile menu, single-column layouts) and `max-width: 640px` (phones).
- **`scripts.js`**: small vanilla JS.
  - Adds a `js` class to `<html>`, so reveal animations only hide content when JS runs.
  - Runs the mobile menu toggle.
  - Highlights the nav link for the section in view (IntersectionObserver), and fades in `.reveal` elements.
  - Turns the contact form into a `mailto:` link, since there is no backend.
- **`image/`**: all images, referenced as `./image/<file>`. `Shine Thyu Zan Resume.pdf` sits at the root and is linked by the Download CV buttons.
