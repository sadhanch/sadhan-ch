# Sadhan.ch — Architecture

> Technical architecture and structural reference for the Sadhan.ch personal website.

## Document status

- Status: Final
- Architecture version: 1.0
- Site: https://sadhan.ch/
- Primary framework: Astro
- Rendering model: Static
- Site model: Single-page personal website
- Primary production branch: `main`

---

## 1. Purpose

Sadhan.ch is the personal homepage and identity hub for Sadhan.

The site is intentionally a single-page website rather than a conventional multi-page personal portfolio.

Its purpose is to:

- establish personal and professional identity;
- communicate technical interests and areas of expertise;
- provide a snapshot of current interests and activity;
- connect visitors to technical writing at `blog.sadhan.ch`;
- provide a simple contact path;
- act as the central discovery point for future Sadhan properties.

The homepage is intended to remain the primary navigation surface.

Future independent properties may exist as subdomains, such as:

- `blog.sadhan.ch`
- `design.sadhan.ch`
- `app.sadhan.ch`

Those properties may be linked from the homepage without turning `sadhan.ch` into a multi-page application.

---

## 2. Architectural principles

### 2.1 Single-page first

The site is one cohesive page.

Primary navigation uses fragment identifiers:

```text
#writing
#about
#contact
```

New information should normally be added as a new homepage section.

A separate route should only be introduced when a genuine requirement justifies a separate document.

### 2.2 Static-first

Astro generates the production site as static output.

The production build creates:

```text
dist/
```

There is no server-side application runtime required by the current site.

### 2.3 Minimal JavaScript

JavaScript is used only for meaningful enhancement.

The current client-side behavior is limited to scroll reveal. The page content remains accessible when JavaScript is unavailable.

### 2.4 CSS-driven visual system

The visual language is implemented with custom CSS, local fonts, design tokens, responsive rules, and restrained motion.

The project does not use a frontend UI framework or animation framework.

---

## 3. Technology stack

Direct dependencies currently include:

```text
astro@7.2.2
@astrojs/sitemap@3.7.3
```

The project uses local copies of:

- Fraunces
- Manrope
- DM Mono

Node.js is specified by the project engine requirement in `package.json`.

The deployment target is static hosting through the GitHub-to-Cloudflare workflow.

---

## 4. Repository structure

```text
sadhan-ch/
├── public/
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── og-image.png
│   └── robots.txt
│
├── src/
│   ├── assets/
│   │   ├── css/
│   │   └── fonts/
│   │
│   ├── components/
│   │   ├── home/
│   │   │   ├── About.astro
│   │   │   ├── Contact.astro
│   │   │   ├── Currently.astro
│   │   │   ├── Expertise.astro
│   │   │   ├── Hero.astro
│   │   │   └── Notebook.astro
│   │   ├── layout/
│   │   │   ├── Footer.astro
│   │   │   └── Header.astro
│   │   └── ui/
│   │       ├── AmbientBackground.astro
│   │       └── ScrollReveal.astro
│   │
│   ├── layouts/
│   │   └── BaseLayout.astro
│   │
│   ├── lib/
│   │   └── blog.ts
│   │
│   └── pages/
│       └── index.astro
│
├── docs/
├── astro.config.mjs
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.json
└── .gitignore
```

Generated or development-only directories such as `node_modules/`, `dist/`, `.astro/`, and `.git/` are not part of the source architecture.

---

## 5. Page architecture

The current site exposes one route:

```text
/
```

implemented by:

```text
src/pages/index.astro
```

The page is composed as:

```text
BaseLayout
├── AmbientBackground
├── Header
├── Main
│   ├── Hero
│   ├── Expertise
│   ├── Currently
│   ├── Notebook
│   ├── About
│   └── Contact
├── ScrollReveal
└── Footer
```

---

## 6. Layout architecture

### BaseLayout

`src/layouts/BaseLayout.astro` is responsible for document-level and shared-shell concerns:

- global stylesheet loading;
- title and description;
- author metadata;
- canonical URL;
- Open Graph metadata;
- Twitter/X metadata;
- structured data;
- favicon references;
- progressive JavaScript enhancement;
- ambient background;
- header;
- page slot;
- scroll reveal;
- footer.

The layout currently accepts:

```typescript
interface Props {
  title?: string;
  description?: string;
  canonicalUrl?: string;
}
```

The `canonicalUrl` prop is intentionally retained for controlled future flexibility even though the current site has one public page.

---

## 7. Homepage components

### Hero

`src/components/home/Hero.astro`

Purpose: primary personal introduction and first in-page actions.

Contains the single homepage `h1`.

### Expertise

`src/components/home/Expertise.astro`

Purpose: informational list of technical areas.

Current areas:

```text
Microsoft 365
Cloud & Identity
Enterprise Support
Automation
```

These are intentionally non-interactive. They are not links to pages.

### Currently

`src/components/home/Currently.astro`

Purpose: concise snapshot of current focus.

The status presentation uses a semantic description list.

### Notebook

`src/components/home/Notebook.astro`

Purpose: connect the personal homepage with `blog.sadhan.ch`.

The first item links to the blog homepage.

The second item is populated from the latest RSS item at build time, with a fallback when the feed is unavailable.

### About

`src/components/home/About.astro`

Purpose: provide personal context and current interests without creating a separate About page.

The terminal-style presentation is decorative and not a real interactive terminal.

### Contact

`src/components/home/Contact.astro`

Purpose: final contact call-to-action.

Current mechanism:

```text
mailto:contact@sadhan.ch
```

No backend contact form is required.

---

## 8. Navigation

Header navigation is intentionally minimal:

```text
Writing → #writing
About   → #about
Contact → #contact
```

The logo links to `/`.

Footer navigation is intentionally omitted. The page journey itself provides the primary navigation context.

---

## 9. CSS architecture

`src/assets/css/main.css` is the CSS entry point.

Import order:

```css
@import "./tokens.css";
@import "./reset.css";
@import "./base.css";
@import "./typography.css";
@import "./layout.css";
@import "./components.css";
@import "./hero.css";
@import "./expertise.css";
@import "./currently.css";
@import "./notebook.css";
@import "./about.css";
@import "./contact.css";
@import "./footer.css";
@import "./ambient-background.css";
```

Responsibilities are intentionally separated:

- `tokens.css` — shared design values
- `reset.css` — browser normalization
- `base.css` — global behavior, focus, motion, base type
- `typography.css` — font declarations and type roles
- `layout.css` — containers and section geometry
- `components.css` — shared interface elements
- section stylesheets — section-specific rules
- `ambient-background.css` — decorative background system

---

## 10. Typography architecture

Three locally bundled font families define the visual language.

### Fraunces

Role: display/editorial typography.

Used for major headings and prominent statements.

### Manrope

Role: body/interface typography.

Used for body copy, navigation, buttons, and general UI.

### DM Mono

Role: technical/metadata typography.

Used for section markers, labels, and terminal-inspired elements.

The project keeps the corresponding font license files alongside the font assets.

---

## 11. Motion architecture

Motion is intentionally restrained.

Current motion systems include:

- link and button transitions;
- navigation underline;
- hover feedback;
- ambient background drift;
- section scroll reveal;
- terminal cursor blink.

All intentional animation systems respect `prefers-reduced-motion`.

Motion should be treated as enhancement, not content.

---

## 12. Progressive enhancement

`src/components/ui/ScrollReveal.astro` uses `IntersectionObserver`.

The content remains visible without JavaScript.

When the enhancement is active, sections receive the `.is-visible` class when they enter the viewport.

This preserves the core page experience without requiring a JavaScript runtime.

---

## 13. Ambient background

`src/components/ui/AmbientBackground.astro` provides the decorative background.

It consists of:

```text
ambient-background__grid
ambient-background__light
```

The entire component is marked `aria-hidden="true"` and uses `pointer-events: none`.

It is purely decorative and must never be required to understand the page.

---

## 14. Blog integration

`src/lib/blog.ts` reads:

```text
https://blog.sadhan.ch/rss.xml
```

at build time.

The parser extracts:

- title;
- description;
- category;
- link.

The homepage uses fallback content when the external feed cannot provide usable data.

The blog remains a separate property and publishing system.

---

## 15. SEO architecture

The homepage currently provides:

- `<title>`;
- meta description;
- author metadata;
- canonical URL;
- Open Graph metadata;
- Twitter/X metadata;
- Open Graph image;
- Schema.org structured data;
- `robots.txt`;
- XML sitemap;
- favicon.

Canonical URL:

```text
https://sadhan.ch/
```

---

## 16. Structured data

The homepage publishes Schema.org data for:

- `Person`
- `WebSite`

The `WebSite` entity points to the `Person` entity as publisher.

The implementation intentionally avoids unsupported or speculative identity claims.

---

## 17. Crawling and sitemap

`public/robots.txt` permits normal crawling and points to:

```text
https://sadhan.ch/sitemap-index.xml
```

The sitemap is generated by `@astrojs/sitemap`.

The current site has one public route, so the current sitemap contains the homepage.

---

## 18. Open Graph

The production social image is:

```text
public/og-image.png
```

Production URL:

```text
https://sadhan.ch/og-image.png
```

Dimensions:

```text
1200 × 630
```

The image is typography-led and intentionally aligned with the visual identity of Sadhan.ch.

---

## 19. Accessibility architecture

Accessibility is part of the base implementation.

The site uses:

- semantic HTML;
- one primary `h1`;
- logical `h2`/`h3` hierarchy;
- labelled sections;
- semantic navigation;
- keyboard-accessible links;
- visible `:focus-visible`;
- `aria-hidden` for decorative content;
- reduced-motion support;
- progressive enhancement.

The manual keyboard-navigation audit confirmed that the interactive journey works without requiring a mouse.

---

## 20. Performance architecture

The site intentionally minimizes browser work.

Current principles:

- static HTML output;
- no client-side UI framework;
- no third-party animation runtime;
- local WOFF2 fonts;
- small CSS bundle;
- minimal client-side JavaScript;
- CSS-based ambient effects.

Production PageSpeed testing produced:

```text
Mobile:
Performance: 100
Accessibility: 100
Best Practices: 100
SEO: 100

Desktop:
Performance: 100
Accessibility: 100
Best Practices: 100
SEO: 100
```

These results form the v1.0 performance baseline.

---

## 21. Dependency policy

The direct dependency surface is intentionally small.

Before adding a dependency, determine whether the requirement can reasonably be solved with:

- Astro;
- CSS;
- native browser APIs;
- TypeScript;
- existing project utilities.

New dependencies should justify their maintenance cost.

---

## 22. Build architecture

Production build:

```bash
npm run build
```

Equivalent Astro command:

```text
astro build
```

Production output:

```text
dist/
```

Expected top-level production assets include:

```text
index.html
favicon.ico
favicon.svg
og-image.png
robots.txt
sitemap-index.xml
sitemap-0.xml
_astro/
```

---

## 23. Development commands

```bash
npm run dev
```

Starts the local development server.

```bash
npm run build
```

Generates the production build.

```bash
npm run preview
```

Previews the generated production build.

```bash
npm run astro
```

Runs the Astro CLI.

---

## 24. Validation expectations

Before a meaningful change is committed:

```bash
npm run build
```

```bash
git diff --check
```

```bash
git status
```

The generated `dist/` output should be treated as a build artifact, not the source of truth.

---

## 25. Git and release model

The primary branch is:

```text
main
```

The GitHub repository is the source of truth.

Production deployment follows the repository's main branch through the connected hosting pipeline.

Release milestones should be represented by Git commits and, where appropriate, version tags.

---

## 26. Deployment architecture

The current production flow is:

```text
Local development
      ↓
Git commit
      ↓
git push origin main
      ↓
Cloudflare build/deploy
      ↓
https://sadhan.ch/
```

The website is served as a static Astro build.

The production deployment does not require a traditional application server.

---

## 27. Future property model

Sadhan.ch is the central personal hub.

Future independent properties may include:

```text
blog.sadhan.ch
design.sadhan.ch
app.sadhan.ch
```

The homepage may add a section linking to a property once that property exists.

Speculative placeholder links should not be added.

---

## 28. Architectural non-goals

The current site intentionally does not include:

- separate About page;
- separate Contact page;
- multi-page navigation;
- client-side routing;
- dark mode;
- CMS;
- database;
- authentication;
- backend contact form;
- analytics dependency;
- frontend JavaScript framework;
- animation framework.

These are not problems to be solved. They are intentional omissions unless a future requirement changes the architecture.

---

## 29. Change policy

Before introducing a new feature, ask:

1. What problem does it solve?
2. Does the current site already solve that problem?
3. Does it belong on the homepage?
4. Can it be implemented without unnecessary complexity?
5. Does it affect accessibility?
6. Does it affect performance?
7. Does it introduce a dependency?
8. Does it fit the established visual language?
9. Is it necessary now?

When the answer is unclear, the default should be to keep the existing implementation.

---

## 30. Architectural decision summary

| Area | Decision |
|---|---|
| Framework | Astro |
| Rendering | Static |
| Primary route | `/` |
| Site model | Single-page |
| Styling | Custom CSS |
| JavaScript | Minimal progressive enhancement |
| Fonts | Local WOFF2 |
| Blog integration | Build-time RSS |
| Sitemap | `@astrojs/sitemap` |
| Robots | `public/robots.txt` |
| Structured data | `Person` + `WebSite` |
| Social metadata | Open Graph + Twitter/X |
| OG image | 1200 × 630 |
| Navigation | In-page anchors |
| Theme | Light |
| Responsive strategy | CSS breakpoints |
| Motion | CSS + IntersectionObserver |
| Accessibility | Semantic + keyboard + reduced motion |
| Dependency policy | Minimal |
| Deployment | GitHub → Cloudflare |
| Future properties | Subdomains |

---

## 31. Maintenance principle

The most important architectural rule is:

> **Keep Sadhan.ch simple enough that its structure remains understandable.**

The homepage should not gradually become a framework-heavy application merely because additional features are possible.

Every new feature should strengthen the site's purpose without unnecessarily increasing:

- implementation complexity;
- maintenance cost;
- JavaScript;
- dependencies;
- privacy burden;
- navigation complexity;
- visual noise.

The goal is deliberate growth, not feature accumulation.

---

## Document status

**Status:** Final

**Architecture version:** 1.0

**Site:** https://sadhan.ch/

**Primary framework:** Astro

**Rendering model:** Static

**Last architectural review:** August 2026
