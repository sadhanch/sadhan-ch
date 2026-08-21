# Sadhan.ch — Maintenance

> Ongoing maintenance, change-management, and release guidance for Sadhan.ch.

## 1. Maintenance philosophy

Sadhan.ch is intentionally small.

The project should remain:

- understandable;
- fast;
- accessible;
- visually consistent;
- easy to deploy;
- easy to modify.

Maintenance should preserve those properties.

---

## 2. Source of truth

The GitHub repository is the source of truth.

Do not treat generated files in `dist/` as the editable source.

Do not make production-only changes that are not represented in Git.

---

## 3. Before changing code

Ask:

1. What problem are we solving?
2. Is the problem real?
3. Does the existing implementation already solve it?
4. Does the change belong on a single-page site?
5. Can the change be implemented without a new dependency?
6. Does it affect accessibility?
7. Does it affect performance?
8. Does it change the visual language?
9. Does it introduce unnecessary maintenance?

If the answer is unclear, leave the current implementation alone.

---

## 4. Homepage architecture

The homepage is intentionally one page.

Prefer adding:

```text
new section
```

over creating:

```text
new page
```

unless a separate document is genuinely required.

Do not create `/about`, `/contact`, or similar routes by default.

---

## 5. Future subdomains

Future properties may be independent:

```text
blog.sadhan.ch
design.sadhan.ch
app.sadhan.ch
```

Only link to a new property after it actually exists.

Avoid speculative navigation.

---

## 6. Typography maintenance

Do not change the core type pairing casually.

Current system:

```text
Fraunces
Manrope
DM Mono
```

If a font must be changed, review:

- visual hierarchy;
- font weight behavior;
- asset size;
- licensing;
- mobile rendering;
- social image consistency.

Keep local font licensing files.

---

## 7. Color maintenance

The site uses the color tokens in:

```text
src/assets/css/tokens.css
```

Prefer token reuse.

Do not introduce a new color for a single component if an existing token expresses the same role.

Any major palette change should be treated as a design-system change and documented.

---

## 8. CSS maintenance

Keep CSS organized by responsibility.

Use:

- `tokens.css` for shared values;
- `base.css` for global behavior;
- `layout.css` for structural primitives;
- section files for section-specific styling.

Avoid:

- giant catch-all selectors;
- repeated values where tokens exist;
- component CSS that changes unrelated sections;
- styles that describe interactions that no longer exist.

Remove dead selectors when markup changes.

---

## 9. JavaScript maintenance

Keep client-side JavaScript minimal.

Current browser-side enhancement is limited to scroll reveal.

Before adding JavaScript:

1. determine whether CSS can achieve the goal;
2. determine whether native browser behavior can achieve the goal;
3. determine whether the enhancement is actually necessary;
4. ensure the page remains useful without it where practical.

Avoid adding frameworks for isolated interactions.

---

## 10. Accessibility maintenance

Every new component should be checked for:

- semantic HTML;
- heading level;
- accessible name;
- keyboard behavior;
- focus visibility;
- reduced motion;
- screen-reader meaning;
- decorative element handling.

Prefer native HTML semantics over ARIA.

Do not add ARIA merely because it is available.

---

## 11. Motion maintenance

Existing motion is deliberately subtle.

Any new animation should:

- remain restrained;
- respect reduced motion;
- not interfere with reading;
- not create layout shifts;
- not require a JavaScript animation loop.

Do not introduce scroll hijacking or heavy animation libraries.

---

## 12. Blog integration maintenance

The homepage reads the latest post from:

```text
https://blog.sadhan.ch/rss.xml
```

When debugging notebook content:

1. check the RSS endpoint;
2. inspect `src/lib/blog.ts`;
3. confirm title/link extraction;
4. confirm fallback behavior;
5. run a production build.

Do not make the homepage dependent on live client-side API calls merely to display the latest article.

---

## 13. SEO maintenance

Keep these aligned:

- title;
- description;
- canonical;
- Open Graph;
- Twitter/X;
- JSON-LD;
- robots;
- sitemap.

If the site's identity or positioning changes materially, review all of them together.

Do not add keyword meta tags.

Do not create artificial pages for search engines.

---

## 14. Search Console maintenance

Search Console is primarily an observation system after v1.

Monitor:

- indexing;
- search queries;
- impressions;
- clicks;
- page performance;
- crawl problems;
- Core Web Vitals when field data becomes available.

Do not react to every early fluctuation.

---

## 15. Analytics policy

Analytics are intentionally absent in v1.

If analytics are introduced later, evaluate:

- necessity;
- privacy;
- performance;
- data retention;
- consent requirements;
- maintenance burden.

Do not add analytics because they are common on websites.

---

## 16. Dependency maintenance

Before adding or updating a dependency:

1. understand why it is needed;
2. check whether native functionality is sufficient;
3. review package size and maintenance status;
4. review build/runtime implications;
5. run the production build afterward.

Do not perform broad dependency upgrades during unrelated feature work.

---

## 17. Git workflow

Normal workflow:

```bash
git status
git diff
git diff --check
```

Then:

```bash
git add <files>
git commit -m "Describe the change"
git push origin main
```

Keep commit messages specific.

Examples:

```text
Fix RSS latest blog post parsing
Update homepage metadata
Add social sharing image
Refine notebook layout
```

---

## 18. Build validation

For a meaningful change:

```bash
npm run build
```

Then:

```bash
git diff --check
```

Then:

```bash
git status
```

If the generated production output looks correct, push the change.

---

## 19. Production validation

After production deployment, check:

```text
https://sadhan.ch/
https://sadhan.ch/robots.txt
https://sadhan.ch/sitemap-index.xml
https://sadhan.ch/og-image.png
```

For significant UI changes, also validate:

- desktop;
- mobile;
- keyboard navigation;
- reduced motion.

---

## 20. Performance baseline

Current v1 PageSpeed baseline:

```text
Mobile:
Performance 100
Accessibility 100
Best Practices 100
SEO 100

Desktop:
Performance 100
Accessibility 100
Best Practices 100
SEO 100
```

This is a baseline, not a target that requires endless optimization.

Avoid changing a working design solely to chase a theoretical score improvement.

---

## 21. Release process

A release should generally follow:

```text
Change
  ↓
Local validation
  ↓
Build
  ↓
Git review
  ↓
Commit
  ↓
Push
  ↓
Production deploy
  ↓
Production smoke test
```

Major milestones should receive a Git tag.

Initial release:

```text
v1.0.0
```

---

## 22. Design freeze principle

The v1 visual system is considered finalized.

Do not repeatedly redesign:

- header;
- footer;
- typography;
- core colors;
- layout system;
- motion language

without a concrete product/design reason.

Small content adjustments are normal.

Major visual changes should be intentional and documented.

---

## 23. One-page principle

The homepage should remain the primary personal experience.

Do not create additional pages merely to follow common website conventions.

A new page should have a clear information-architecture reason.

Future independent products or properties should generally be considered as separate subdomains when appropriate.

---

## 24. Documentation maintenance

The `docs/` directory is part of the project.

When architecture changes significantly, update:

- `ARCHITECTURE.md`
- `DESIGN-SYSTEM.md`
- `SEO-AND-DISCOVERY.md`
- `ACCESSIBILITY.md`
- `DEPLOYMENT.md`
- `MAINTENANCE.md`

Documentation should describe actual implementation and established decisions.

Do not document speculative future behavior as if it already exists.

---

## 25. Change review principle

Before merging a change, ask:

> Is this making Sadhan.ch better, or merely making it different?

Prefer improvements that:

- clarify;
- simplify;
- strengthen identity;
- improve accessibility;
- improve reliability;
- improve maintainability.

Avoid changes that only add novelty.

---

## 26. Maintenance principle

The long-term goal is not to continuously add features.

The goal is:

> **Keep the site small, clear, fast, and useful as the surrounding Sadhan ecosystem grows.**

---

## Document status

**Status:** Final 

**Maintenance version:** 1.0

**Last review:** August 2026
