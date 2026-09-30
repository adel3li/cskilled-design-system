# CSkilled Design System — «المخطّط الهندسي»

A framework-free CSS kit implementing `source/project/Design System - CSkilled.dc.html`.
Everything is Arabic-first (`dir="rtl"`), paper-and-blueprint-grid, all-blue (no orange).

| File | Purpose |
| --- | --- |
| `tokens.css` | All design tokens as CSS custom properties (`--cs-*`) |
| `components.css` | Base styles + every component (`.cs-*` classes) |
| `cs.js` | Optional behavior: segmented toggle, one-open accordion fallback |
| `index.html` | The spec, rebuilt with the kit (living reference) |
| `example.html` | A full page composed from the kit (nav → hero → sections → principle → footer) |
| `logo/` | Official logo files (see below) |
| `source/` | The original Claude Design handoff: spec HTML, design chat, and runtime |

## Usage

```html
<html lang="ar" dir="rtl">
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..24,400..600,0..1,0&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="tokens.css">
  <link rel="stylesheet" href="components.css">
</head>
<body> … <script src="cs.js"></script></body>
```

## Logo files

| File | Use on |
| --- | --- |
| `logo/cskilled-logo-blue.webp` | Light backgrounds (transparent, primary blue) |
| `logo/cskilled-logo-blue-on-white.jpg` | Light backgrounds where a solid white box is fine |
| `logo/cskilled-logo-white.webp` | Dark or blue backgrounds (transparent, all white) |
| `logo/cskilled-logo-reversed.webp` | Dark backgrounds (white box with a blue C, white wordmark) |

## Tokens at a glance

- **Surfaces:** paper `#FAF9F6`, surface `#FFFFFF`, border `#E2E8F0`
- **Text:** `#0F172A`, muted `#475569`, subtle `#94A3B8` (placeholder/disabled only)
- **Brand:** primary `#062985` (hover `#041C5C`), cobalt secondary `#2440DC`, lavender `#EBEDFF` (backgrounds only)
- **Code window (only dark surface):** bg `#0A101D`, keyword `#A5B4FC`, type `#38BDF8`, name `#7DD3FC`, number `#FBBF24`, comment `#64748B`, success `#34D399`
- **Type:** IBM Plex Sans Arabic (UI) + JetBrains Mono (figures, prices, badges, kickers, code). H1 42/1.25 · H2 30/1.3 · H3 18–20/1.4 · body 16/1.8 · small 14 · kicker 12 · micro 11
- **Radii:** 4 default · 8 media/code · 999 play button only
- **Shadows:** xs `0 1px 2px` · sm `0 1px 3px` · md `0 4px 12px` (#0F172A at 5–10%)
- **Layout:** container 1280 · gutters 16–32 · section padding 64–80 · card padding 20–28 · grid gap 20–24 · touch ≥ 44
- **Motion:** colors 150ms · chevron 200ms · press `scale(0.98)` · recommended card lift `-8px`

## Components

| Component | Classes |
| --- | --- |
| Layout | `.cs-container`, `.cs-section` (+ `--paper`, `--grid`), `.cs-grid`, `.cs-grid-paper`, `.cs-section-head` |
| Type | `.cs-h1/2/3`, `.cs-accent`, `.cs-body`, `.cs-small`, `.cs-micro`, `.cs-kicker` (+ `--secondary`) |
| Logo | `.cs-logo` › `__mark`, `__text`, `__name`, `__tagline`; `.cs-logo--compact` |
| Buttons | `.cs-btn` + `--primary`, `--secondary`, `--outline`, `--quiet`, `--sm`, `--block`; `:disabled`; `.cs-play` |
| Badges | `.cs-badge` + `--outline`, `--soft`, `--secondary`, `--neutral`, `--live`, `--meta`; `.cs-unit` (+ `--featured`); `.cs-phase--depth/breadth/practice/experience` |
| Nav | `.cs-nav` › `.cs-nav__inner`, `.cs-nav__links`, `.cs-nav__link` (`aria-current="page"`) |
| Metrics | `.cs-metrics` › `.cs-metric` › `__value` (+ `--secondary`), `__label` |
| Cards | `.cs-card` (+ `--featured`, `--inset`, `--hover-border`, `--hover-shadow`), `.cs-content-card`, `.cs-icon-chip`, `.cs-checklist` (+ `--requirements`, `--next`) |
| Accordion | `<details class="cs-accordion__item" name="group">` › `.cs-accordion__summary`, `__panel`, `__body` |
| Pricing | `.cs-pricing` › `.cs-price-card` (+ `--recommended`), `__flag`, `__eyebrow`, `__title`, `__box`; `.cs-price__amount/was/note/fine` |
| Forms | `.cs-segmented[data-segmented]` › `.cs-segmented__option[aria-pressed]`; `.cs-field`, `.cs-label`, `.cs-input`; `.cs-choices` › `.cs-choice` (radio) |
| Info | `.cs-faq`, `.cs-principle`, `.cs-info-strip` |
| Code | `.cs-code` › `__bar`, `__dots`, `__file`, `__body` (a `<pre>`), `__foot`, `__status`; tokens `.tok-kw/type/name/def/num/comment` |
| Icons | `.cs-icon` (+ `--badge`, `--title`, `--chip`, `--primary`, `--secondary`, `--muted`) |
| Footer | `.cs-footer` › `__inner`, `__meta` |

## Rules that the CSS can't enforce

- Primary buttons are always deep blue and secondary buttons are white with a border. Buttons use no other colors.
- Cobalt is only for secondary emphasis, the recommended plan and featured or graduation items.
- Sections alternate between white and paper/grid. Two adjacent sections never share a texture. A page opens with a hero on the grid and ends with `.cs-principle` followed by the footer.
- On card hover, change either the border color or the md shadow, never both.
- Wrap Western digits in `<bdi>`. Prices, durations and counts are always mono.
- Code and email addresses are `dir="ltr"`. Write technical terms in Arabic first, then English in parentheses.
- Icons come only from Material Symbols Outlined. Don't use emoji or multicolor icons.
- Tone is institutional and engineering-focused. Make no job promises, and back every claim with a number or condition.

## Notes on decisions

- The sky-blue accent mentioned in the design chat is **not** in the exported file. The kit follows the file: cobalt `#2440DC` is the only secondary color.
- The accordion uses native `<details name>` to keep one item open at a time. `cs.js` adds a fallback for browsers that don't support it.
- Keyboard focus uses a 1px primary outline offset by 2px. Inputs use the spec's border plus a 1px ring.
- The contrast ratios in the spec are approximations from the design tool, and the spec itself says to double-check them.
