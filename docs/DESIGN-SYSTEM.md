# Sadhan.ch — Design System

> Visual and interaction reference for the Sadhan.ch personal website.

## 1. Design intent

Sadhan.ch uses a restrained editorial-technical visual language.

The design should feel:

- personal;
- intelligent;
- calm;
- technical without becoming corporate;
- editorial without becoming decorative;
- minimal without feeling empty.

The homepage is deliberately spacious.

Visual elements should communicate hierarchy rather than compete for attention.

---

## 2. Brand principle

The site is a personal technology hub, not a product dashboard.

The visual system therefore favors:

- typography;
- whitespace;
- subtle rules and borders;
- controlled color;
- restrained motion;
- small technical details.

Avoid unnecessary:

- cards;
- badges;
- gradients used for decoration alone;
- large icon systems;
- excessive shadows;
- animated UI;
- generic technology imagery.

---

## 3. Typography

The approved type system is:

```text
Fraunces + Manrope + DM Mono
```

### Fraunces

Role: display/editorial.

Use for:

- `h1`
- `h2`
- `h3`
- large statements
- prominent content titles

Fraunces carries the personality of the site.

### Manrope

Role: interface/body.

Use for:

- body copy;
- navigation;
- buttons;
- interface labels;
- supporting descriptions.

Manrope provides neutrality and readability.

### DM Mono

Role: technical/metadata.

Use for:

- section numbers;
- category labels;
- technical metadata;
- terminal-inspired content.

DM Mono should remain an accent, not the dominant body typeface.

---

## 4. Local font policy

Fonts are bundled locally.

Current files include:

```text
Fraunces-Variable.woff2
manrope-latin-wght-normal.woff2
dm-mono-latin-400-normal.woff2
dm-mono-latin-500-normal.woff2
```

The relevant font license files remain in the repository.

Do not replace the type system with external web-font requests without a strong reason.

---

## 5. Color system

The site uses a light-only palette.

Current base tokens are defined in:

```text
src/assets/css/tokens.css
```

Primary colors include:

```text
Background:       #f6f6f1
Text:             #171815
Text secondary:   #6e7169
Border:           #dcdcd6
Accent:           #3f6f5b
Surface:          #f9f9f5
Surface soft:     #e9ede7
```

The palette should remain restrained.

The accent color is used for:

- section markers;
- technical labels;
- focus indication;
- selected interactive states;
- subtle decorative details.

---

## 6. Theme policy

The site is intentionally light-only.

There is no dark mode requirement for v1.

Do not introduce a dark theme simply because the architecture could support one.

A future theme change should be a deliberate product/design decision.

---

## 7. Spacing system

The site uses an 8px-oriented rhythm with tokens in `tokens.css`.

Examples:

```text
4px
8px
12px
16px
24px
32px
40px
48px
64px
80px
96px
128px
160px
```

Spacing should generally use the available tokens rather than arbitrary repeated values.

Large whitespace is intentional.

---

## 8. Layout system

Primary layout widths:

```text
Layout max:   1180px
Content max:   960px
Reading max:   720px
Hero max:      940px
```

Responsive gutters:

```text
Desktop: 40px
Tablet:  32px
Mobile:  20px
```

The homepage should feel centered but not boxed in.

---

## 9. Section geometry

The base section spacing is intentionally generous:

```text
Desktop: 112px
Mobile:   80px
```

Section headers use a technical number column:

```text
Desktop width: 72px
Mobile width:  40px
```

The numbers are visual orientation devices rather than navigation elements.

---

## 10. Header

The header is intentionally minimal.

It contains:

```text
SADHAN
Writing
About
Contact
```

The logo provides the home destination.

Do not add:

- Home;
- search;
- dropdowns;
- social icons;
- utility navigation.

The current header should remain visually quiet.

---

## 11. Footer

The footer contains:

```text
SADHAN.CH
Built with curiosity · 2026
```

Footer navigation is intentionally absent.

The design principle is that the user's journey through the page already communicates the site's navigation.

Do not add a conventional footer navigation unless the information architecture changes.

---

## 12. Hero

The Hero is the strongest visual area.

It uses:

- mono kicker;
- large Fraunces heading;
- Manrope supporting text;
- restrained pill-like action buttons.

The primary statement is:

```text
I like figuring out how things work.
```

Hero motion should establish the page, not overwhelm it.

---

## 13. Expertise

The Expertise section is informational.

Current list:

```text
Microsoft 365
Cloud & Identity
Enterprise Support
Automation
```

These are not links.

No arrows should be used to imply navigation.

Hover feedback should not make an informational list item look like a button or link.

---

## 14. Currently

The section combines:

- a large editorial statement;
- a compact status list.

The status list uses:

```text
focus
interest
mode
writing
```

The large statement is the emotional/readable part.

The status list provides technical structure.

---

## 15. Notebook

The Notebook is the bridge between the personal site and the technical blog.

The first item introduces the blog.

The second item shows the latest available article.

The visual distinction between these two items should remain understandable without relying on color alone.

---

## 16. About

The About section uses:

- editorial copy;
- terminal-inspired technical presentation.

The terminal is decorative.

It should never become an actual command interface unless the product requirement changes.

---

## 17. Contact

The Contact section is intentionally direct.

It ends the page with:

```text
Let's talk.
```

and an email action.

The visual treatment is stronger than normal inline links because it is the final call to action.

---

## 18. Buttons and links

Buttons are reserved for actions that look like actions.

Anchor links should be used when the destination is another document or location.

The site should not use a link merely because something looks like it might be clickable.

This principle was applied to the Expertise section.

---

## 19. Motion

Motion should remain subtle.

Current motion categories:

- hover;
- focus;
- ambient background;
- section reveal;
- terminal cursor.

Do not add:

- parallax frameworks;
- scroll hijacking;
- complex page transitions;
- continuous JavaScript animation;
- attention-grabbing effects.

Reduced-motion settings must always be respected.

---

## 20. Background treatment

The ambient background is intentionally subtle.

It contains:

- a low-opacity grid;
- a soft light/radial treatment.

The visual should remain subordinate to content.

The background should not make text harder to read.

If the ambient treatment ever becomes visually dominant, reduce its opacity or motion rather than adding another visual layer.

---

## 21. Accessibility requirements

The design must remain compatible with:

- keyboard navigation;
- visible focus;
- reduced motion;
- screen readers;
- mobile touch interaction.

Color should not be the sole mechanism for communicating meaning.

Decorative arrows and decorative background elements should remain hidden from assistive technology where appropriate.

---

## 22. Responsive rules

The design has two primary responsive transitions:

```text
1199px
767px
```

At tablet/mobile sizes:

- gutters become smaller;
- section grids collapse;
- typography scales down;
- navigation spacing tightens;
- two-column content stacks where necessary.

Mobile is not a separate visual design. It is the same identity adapted to a smaller viewport.

---

## 23. Social image

The homepage Open Graph image is:

```text
public/og-image.png
```

Dimensions:

```text
1200 × 630
```

The approved visual direction is typography-first with generous whitespace and restrained accent color.

Social imagery should remain consistent with the Sadhan.ch identity and should not inherit the visual language of unrelated properties automatically.

---

## 24. Future properties

Future subdomains may establish their own design systems.

For example:

```text
design.sadhan.ch
app.sadhan.ch
```

may legitimately diverge visually if their purpose requires it.

The main Sadhan.ch visual system should remain the identity layer.

---

## 25. Design decision rules

Before introducing a new visual element, ask:

1. Does it improve hierarchy?
2. Does it improve comprehension?
3. Does it reinforce the personal/technical identity?
4. Does it preserve whitespace?
5. Does it create unnecessary visual noise?
6. Does it imply an interaction that does not exist?
7. Does it affect accessibility?
8. Does it require additional dependencies?

When in doubt, choose the simpler solution.

---

## 26. Design status

**Design version:** 1.0

**Theme:** Light only

**Typography:** Fraunces + Manrope + DM Mono

**Primary visual principle:** Editorial minimalism with technical detail

**Status:** Finalized for v1.0
