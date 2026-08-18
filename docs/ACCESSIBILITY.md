# Sadhan.ch — Accessibility

> Accessibility and inclusive interaction reference for the Sadhan.ch website.

## 1. Accessibility goal

Accessibility is part of the base implementation.

The goal is to ensure that the single-page experience remains usable through:

- keyboard navigation;
- assistive technology;
- reduced-motion settings;
- narrow/mobile viewports;
- browsers without JavaScript enhancement.

The visual design should never be the only way to understand or operate the page.

---

## 2. Semantic structure

The homepage uses a clear document hierarchy.

The page contains:

- `header`
- `nav`
- `main`
- `section`
- `footer`

The single page-level `h1` belongs to the Hero.

Major homepage sections use `h2`.

Individual notebook entries use `h3`.

Current hierarchy:

```text
h1
├── h2
├── h2
├── h2
│   └── h3
├── h2
└── h2
```

Heading levels should not be skipped for visual styling purposes.

---

## 3. Navigation

The header uses semantic navigation:

```html
<nav aria-label="Primary navigation">
```

Current destinations:

```text
Writing → #writing
About → #about
Contact → #contact
```

The navigation is intentionally single-page.

There is no footer navigation.

---

## 4. Keyboard navigation

All actionable links are standard anchors.

The page was manually tested using keyboard-only navigation.

Expected focus journey includes:

1. logo;
2. header links;
3. Hero actions;
4. content links;
5. contact link.

The focus indicator is intentionally visible.

---

## 5. Focus styles

Global focus styling is defined in `base.css`.

Current pattern:

```css
:focus-visible {
  outline: var(--focus-ring-width) solid var(--color-accent);
  outline-offset: 4px;
}
```

Focus indicators must remain visible against the background.

Do not remove browser focus indication without providing an equivalent or better replacement.

---

## 6. Decorative content

Decorative elements should not create additional screen-reader noise.

The ambient background uses:

```html
aria-hidden="true"
```

Decorative arrows use:

```html
aria-hidden="true"
```

This keeps visual decoration separate from semantic meaning.

---

## 7. Expertise section

Expertise items are informational list elements rather than links.

Current items:

```text
Microsoft 365
Cloud & Identity
Enterprise Support
Automation
```

They do not imply destinations that do not exist.

This prevents misleading interactive affordances.

---

## 8. Currently section

The Current status block is implemented with a semantic description list:

```html
<dl>
  <dt>...</dt>
  <dd>...</dd>
</dl>
```

This preserves the relationship between each label and value.

---

## 9. Notebook section

Each Notebook entry is represented as an `article`.

Each entry contains:

- a category/tag;
- a title;
- a description;
- a link.

Links to the external Support Engineering Blog open in a new tab and use:

```html
rel="noopener noreferrer"
```

---

## 10. Contact

The contact action is a standard email link:

```text
mailto:contact@sadhan.ch
```

It is not implemented as a JavaScript button or custom control.

---

## 11. Progressive enhancement

The page does not rely on JavaScript to reveal core content.

Scroll reveal is an enhancement.

Without the JavaScript enhancement, content remains visible.

When the enhancement is available, sections receive a small reveal effect.

---

## 12. Reduced motion

The site supports:

```text
prefers-reduced-motion: reduce
```

Reduced-motion handling applies to:

- section reveal;
- ambient grid animation;
- ambient light animation;
- terminal cursor;
- general transitions.

When reduced motion is enabled, the presentation is simplified rather than removing content.

---

## 13. Color and contrast

The palette uses dark text on a light background with a muted green accent.

Color should not be used as the only mechanism for communicating meaning.

Interactive states also use:

- movement;
- underline;
- focus outline;
- background/border changes

where appropriate.

---

## 14. Responsive behavior

Accessibility includes usability on small screens.

The site adapts using CSS breakpoints.

Mobile changes include:

- smaller gutters;
- stacked layouts;
- smaller type;
- adjusted spacing;
- reduced navigation spacing.

No essential content is hidden solely because the viewport is small.

---

## 15. Motion accessibility

Motion should remain subtle.

Do not introduce:

- auto-playing video;
- large parallax effects;
- scroll hijacking;
- continuous JavaScript animation;
- attention-grabbing transitions.

Any new motion must have a reduced-motion behavior.

---

## 16. Images and decorative assets

The Open Graph image is a sharing asset and is not part of the homepage's primary visible content.

The favicon is a brand asset.

The ambient background is decorative and hidden from assistive technologies.

Future content images should use meaningful alternative text when they convey information.

Purely decorative images should be marked appropriately.

---

## 17. Forms and interactive controls

The current v1 homepage contains no form controls.

There are no:

- inputs;
- textareas;
- selects;
- custom dialogs;
- menus;
- sliders;
- application widgets.

This is intentional.

If interactive controls are introduced later, native HTML should be preferred over custom ARIA widgets whenever practical.

---

## 18. Testing baseline

Accessibility validation performed for v1 included:

- manual keyboard navigation;
- visible focus verification;
- semantic heading inspection;
- semantic landmark inspection;
- reduced-motion implementation review;
- decorative ARIA review;
- production PageSpeed accessibility testing.

Current PageSpeed accessibility baseline:

```text
Mobile: 100
Desktop: 100
```

The 100 score is a baseline, not a reason to stop testing real interaction.

---

## 19. Accessibility change rules

Before adding a new interaction, ask:

1. Can it be built with native HTML?
2. Is it keyboard accessible?
3. Does it have an obvious accessible name?
4. Does focus remain visible?
5. Does it work without JavaScript where practical?
6. What happens with reduced motion?
7. Is ARIA actually required?
8. Does the visual design accurately represent the interaction?

Avoid ARIA when native HTML already provides the needed semantics.

---

## 20. Accessibility principle

The central rule is:

> **Do not make the visual experience accessible only through visual cues.**

The semantic document should remain understandable independently of the decorative design.

---

## Document status

**Status:** Final

**Accessibility version:** 1.0

**Last review:** August 2026
