# Sadhan.ch — SEO and Discovery

> SEO, crawling, structured data, and search-discovery reference for Sadhan.ch.

## 1. Purpose

The SEO strategy for Sadhan.ch is intentionally simple.

The goal is not to manufacture pages or stuff keywords into the site.

The goal is to make one high-quality homepage easy for:

- visitors;
- search engines;
- social platforms;
- crawlers;
- future related properties

to understand.

---

## 2. Canonical identity

Primary public URL:

```text
https://sadhan.ch/
```

Canonical URL:

```html
<link rel="canonical" href="https://sadhan.ch/">
```

The homepage is the canonical document for the current site.

---

## 3. Title

Current title:

```text
Sadhan — Technology, problem solving, and things worth figuring out
```

The title is intended to communicate:

- personal identity;
- technology;
- problem solving;
- curiosity.

The title should remain natural rather than becoming a keyword list.

---

## 4. Meta description

Current description:

```text
A personal space for Microsoft 365, cloud technology, enterprise support, problem solving, and technical writing.
```

The description should accurately reflect the page rather than attempt to maximize keyword density.

---

## 5. Author metadata

Current author:

```text
Sadhan Chandra
```

The page includes:

```html
<meta name="author" content="Sadhan Chandra">
```

---

## 6. Open Graph

The homepage includes:

```text
og:type
og:title
og:description
og:url
og:site_name
og:image
og:image:width
og:image:height
og:image:alt
```

Production image:

```text
https://sadhan.ch/og-image.png
```

Dimensions:

```text
1200 × 630
```

The image is designed specifically for Sadhan.ch and should not automatically be replaced with graphics from another subdomain.

---

## 7. Twitter/X

The homepage includes:

```text
twitter:card
twitter:title
twitter:description
twitter:image
twitter:image:alt
```

Card type:

```text
summary_large_image
```

The same image asset is used for consistency.

---

## 8. Structured data

The homepage publishes Schema.org JSON-LD.

Current graph:

```text
Person
WebSite
```

The WebSite entity references the Person entity as publisher.

The structured-data implementation intentionally avoids speculative properties such as:

- unsupported social accounts;
- employer information that is not established by the site;
- unsupported credentials;
- invented topical claims.

Only authoritative information should be added.

---

## 9. Robots policy

File:

```text
public/robots.txt
```

Current policy:

```text
# Sadhan.ch — crawler access policy

User-agent: *
Allow: /

Sitemap: https://sadhan.ch/sitemap-index.xml
```

The site is intentionally crawlable.

There is currently no reason to block normal public assets or the homepage.

---

## 10. Sitemap

The site uses `@astrojs/sitemap`.

The canonical site origin is configured in `astro.config.mjs`.

Production output includes:

```text
sitemap-index.xml
sitemap-0.xml
```

The sitemap currently contains the public homepage because the site has one public route.

As future routes are created, Astro can include them automatically.

---

## 11. Search Console

A Google Search Console Domain property has been established for:

```text
sadhan.ch
```

The sitemap has been submitted.

The homepage has been inspected through URL Inspection.

Search Console should now be treated primarily as an observation tool.

Do not make rapid content changes merely because a new property has little or no search data.

New sites can require time to accumulate meaningful search data.

---

## 12. Search performance baseline

Initial production validation included PageSpeed Insights.

Mobile:

```text
Performance: 100
Accessibility: 100
Best Practices: 100
SEO: 100
```

Desktop:

```text
Performance: 100
Accessibility: 100
Best Practices: 100
SEO: 100
```

These are useful lab baselines.

Search Console's real-user reporting may take time to accumulate data and should not be confused with a laboratory score.

---

## 13. Content strategy

The homepage should communicate the personal identity behind the technical work.

It should not attempt to duplicate the role of `blog.sadhan.ch`.

Current relationship:

```text
sadhan.ch
    ↓
personal identity / hub
    ↓
blog.sadhan.ch
    ↓
technical writing
```

The homepage may link to other Sadhan properties when they actually exist.

---

## 14. One-page SEO model

The current site intentionally uses one public page.

Do not create `/about`, `/contact`, `/projects`, or similar pages only for SEO.

New sections should be added to the homepage when they naturally belong there.

A new route should only be introduced if it represents a genuinely independent document or property.

---

## 15. Future subdomains

Potential future properties include:

```text
blog.sadhan.ch
design.sadhan.ch
app.sadhan.ch
```

Each property may maintain its own SEO architecture.

The main homepage can act as the discovery layer.

A future property should be linked only once it is real and ready for visitors.

---

## 16. Internal linking

Current important internal destinations:

```text
#writing
#about
#contact
```

These are same-page navigation targets.

The homepage also links externally to:

```text
https://blog.sadhan.ch/
```

and to the current latest article.

---

## 17. Analytics policy

No analytics platform is currently installed.

This is intentional.

Search Console already provides useful search-performance information without introducing a client-side analytics dependency.

Analytics may be added later if a concrete need exists.

The decision should consider:

- value of the data;
- privacy;
- performance;
- maintenance;
- implementation complexity.

---

## 18. SEO anti-patterns to avoid

Do not add:

- meta keywords;
- artificial location pages;
- duplicate pages for similar concepts;
- keyword-stuffed headings;
- hidden SEO content;
- fake internal links;
- placeholder project pages;
- unsupported structured-data claims.

The site should remain useful to humans first.

---

## 19. Validation checklist

Before a production release, confirm:

- [ ] title is present;
- [ ] description is present;
- [ ] canonical is correct;
- [ ] Open Graph metadata is present;
- [ ] Open Graph image is accessible;
- [ ] Twitter/X metadata is present;
- [ ] JSON-LD is present;
- [ ] robots.txt is accessible;
- [ ] sitemap is generated;
- [ ] sitemap points to the canonical site;
- [ ] Search Console property is verified;
- [ ] sitemap is submitted;
- [ ] homepage is inspectable.

---

## 20. SEO philosophy

The central rule is:

> Make the site easy to understand before trying to make it rank.

A strong technical identity, useful writing, clear information architecture, and consistent publication history are more valuable than aggressive metadata optimization.

---

## Document status

**Status:** Final

**SEO version:** 1.0

**Last review:** August 2026
