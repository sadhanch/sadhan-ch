# Sadhan.ch — Deployment

> Deployment and production operations reference for Sadhan.ch.

## 1. Production architecture

Current production flow:

```text
Local machine
    ↓
Git repository
    ↓
GitHub
    ↓
Cloudflare build/deployment
    ↓
https://sadhan.ch/
```

The source repository is the source of truth.

The generated `dist/` directory is a build artifact.

---

## 2. Hosting model

The site is deployed as a static Astro build.

The current production platform is Cloudflare.

The site does not require:

- an application server;
- server-side rendering;
- a database;
- a runtime API;
- a persistent server process.

---

## 3. Source repository

GitHub repository:

```text
https://github.com/sadhanch/sadhan-ch.git
```

Primary branch:

```text
main
```

The production deployment is connected to the main branch.

---

## 4. Build configuration

The production build command is:

```bash
npm run build
```

The output directory is:

```text
dist/
```

Do not change the output directory without also updating the deployment configuration.

---

## 5. Deploying a change

Normal deployment workflow:

```bash
git status
```

Review changes.

```bash
git diff --check
```

Verify no whitespace errors.

Then:

```bash
git add <files>
git commit -m "Describe the change"
git push origin main
```

The connected production deployment pipeline should then build and publish the new version.

---

## 6. Local validation before deployment

For meaningful changes, run:

```bash
npm run build
```

Then verify:

```bash
git diff --check
git status
```

When useful, preview the production build locally:

```bash
npm run preview
```

---

## 7. Production domain

Primary domain:

```text
https://sadhan.ch/
```

HTTPS should remain enabled.

The canonical URL is also:

```text
https://sadhan.ch/
```

---

## 8. Public production assets

The production root should expose:

```text
/favicon.ico
/favicon.svg
/og-image.png
/robots.txt
/sitemap-index.xml
```

The homepage should render from:

```text
/
```

---

## 9. Deployment verification

After a production deployment, verify:

### Homepage

```text
https://sadhan.ch/
```

### Open Graph image

```text
https://sadhan.ch/og-image.png
```

### Robots

```text
https://sadhan.ch/robots.txt
```

### Sitemap index

```text
https://sadhan.ch/sitemap-index.xml
```

### Homepage canonical

Confirm the generated HTML contains:

```html
<link rel="canonical" href="https://sadhan.ch/">
```

---

## 10. Production smoke test

After deployment, verify:

- header;
- hero;
- expertise;
- currently;
- notebook;
- about;
- contact;
- footer;
- typography;
- ambient background;
- responsive layout;
- blog link;
- latest article link;
- email link.

Also perform a quick keyboard-navigation check after large UI changes.

---

## 11. Blog integration

The homepage depends on the Support Engineering Blog RSS feed at build time:

```text
https://blog.sadhan.ch/rss.xml
```

If the feed is unavailable, the homepage is designed to use fallback content.

A deployment should therefore not fail merely because the latest article cannot be retrieved.

If the latest article disappears unexpectedly, inspect the RSS endpoint and `src/lib/blog.ts`.

---

## 12. DNS

DNS changes should only be made when required by the hosting configuration.

Existing properties such as:

```text
blog.sadhan.ch
```

must not be altered casually when configuring the main site.

Future subdomains should be configured independently.

---

## 13. Search Console

Google Search Console is associated with the domain:

```text
sadhan.ch
```

The sitemap has been submitted.

After deployment changes, routine monitoring should focus on:

- indexing;
- crawl errors;
- search performance;
- Core Web Vitals once field data exists.

Do not expect immediate search data after a deployment.

---

## 14. Performance baseline

Production PageSpeed baseline:

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

Do not introduce heavy dependencies or client-side frameworks without a strong requirement.

---

## 15. Build assertion note

The Windows development environment has at times produced:

```text
Assertion failed: !(handle->flags & UV_HANDLE_CLOSING), file src\win\async.c, line 94
```

This occurred after Astro reported:

```text
[build] Complete!
```

and did not prevent successful generation of the static output.

This issue should be treated as a separate local Node/Windows process-shutdown concern unless it begins to affect:

- build exit status;
- deployment;
- output generation;
- CI.

Do not add application-level shutdown hacks solely to mask this development-environment behavior.

---

## 16. Rollback strategy

If a deployment introduces a regression:

1. identify the problematic commit;
2. inspect the production result;
3. revert or correct the change in Git;
4. push the corrected commit;
5. allow the connected deployment pipeline to publish the corrected version.

Do not manually edit production artifacts as a replacement for fixing the source repository.

---

## 17. Release milestones

Major releases should be represented by Git tags.

The initial production baseline is:

```text
v1.0.0
```

Future releases should use descriptive version tags and release notes when the scope is significant.

---

## 18. Deployment principle

The preferred deployment model is:

> **Commit once, verify once, deploy from source.**

The production environment should always be reproducible from the Git repository.

---

## Document status

**Status:** Final

**Deployment version:** 1.0

**Last review:** August 2026
