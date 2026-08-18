# Sadhan.ch — Release Checklist

> Practical pre-release and post-release checklist for the Sadhan.ch website.

## Pre-release

### Source

- [ ] `git status` reviewed
- [ ] Intended files are the only changed files
- [ ] `git diff --check` returns no actual whitespace errors
- [ ] No accidental generated files are staged
- [ ] Documentation updated when architecture changes

### Build

- [ ] `npm run build` completes
- [ ] `dist/index.html` exists
- [ ] `dist/robots.txt` exists
- [ ] `dist/sitemap-index.xml` exists
- [ ] `dist/sitemap-0.xml` exists
- [ ] `dist/og-image.png` exists

### Metadata

- [ ] `<title>` correct
- [ ] meta description correct
- [ ] canonical URL correct
- [ ] Open Graph title/description correct
- [ ] Open Graph image URL correct
- [ ] Open Graph dimensions correct
- [ ] Open Graph alt text present
- [ ] Twitter/X image URL correct
- [ ] JSON-LD present

### Accessibility

- [ ] Heading hierarchy checked
- [ ] Keyboard navigation tested
- [ ] Focus indicators visible
- [ ] Decorative content is hidden where appropriate
- [ ] Reduced motion behavior checked
- [ ] No false interactive affordances

### Responsive

- [ ] Desktop checked
- [ ] Tablet checked
- [ ] Mobile checked

---

## Production deployment

- [ ] Changes committed
- [ ] Changes pushed to `main`
- [ ] Cloudflare deployment succeeds
- [ ] `https://sadhan.ch/` loads
- [ ] Header renders
- [ ] Hero renders
- [ ] Expertise renders
- [ ] Currently renders
- [ ] Notebook renders
- [ ] About renders
- [ ] Contact renders
- [ ] Footer renders
- [ ] Latest blog item resolves
- [ ] Contact mail link works

---

## Production endpoint checks

- [ ] `https://sadhan.ch/`
- [ ] `https://sadhan.ch/robots.txt`
- [ ] `https://sadhan.ch/sitemap-index.xml`
- [ ] `https://sadhan.ch/og-image.png`

---

## Search / discovery

- [ ] Search Console domain property verified
- [ ] Sitemap submitted
- [ ] Homepage inspected
- [ ] Indexing request made when appropriate
- [ ] Open Graph preview validated
- [ ] Structured data validated

---

## Performance

- [ ] Mobile PageSpeed checked
- [ ] Desktop PageSpeed checked
- [ ] No unexpected blocking resources
- [ ] No unexpected client-side bundle
- [ ] Layout remains stable

---

## Post-release

- [ ] Production page visually compared with local build
- [ ] Production source metadata checked when needed
- [ ] Git working tree clean
- [ ] Release tag created for major milestones

---

## v1.0 baseline

Sadhan.ch v1.0 was validated with:

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

These values are the initial release baseline.

---

## Document status

**Status:** Final

**Checklist version:** 1.0

**Last review:** August 2026
