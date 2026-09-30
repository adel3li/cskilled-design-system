# CSkilled design system

_Started 2026-09-13 13:33 UTC_

---

## User

we need a design system for CSkilled website, alhamd app design system is a reference, here is the home page of the website , use it to generate the design system , we will use the design system for all other pages :

## Assistant

_[tool: read_file]_

_[tool: read_skill_prompt]_

_[tool: read_file]_

_[tool: set_project_title]_

_[tool: dc_write]_

_[tool: ready_for_verification]_

The design system spec is out for your review: **Design System - CSkilled.dc.html** — same format as the الحمد reference, but documenting CSkilled's actual system from the home page: paper/blueprint-grid ground, deep blue + cobalt + terracotta palette (with the #B83D0B text rule), IBM Plex Sans Arabic + JetBrains Mono, the dark code-editor palette, and every component pattern (buttons, badges, nav, metric strip, cards, accordion, pricing, toggle/inputs, FAQ) with states and usage rules.

One caveat: contrast ratios shown are computed approximations — worth a quick sanity check. When you're happy with it, we can use this as the binding reference for the other pages (tracks, about, community, policies).

## User

we need to delete the orange colors

## Assistant

_[tool: run_script]_

_[tool: grep]_

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Orange removed throughout: terracotta and amber swatches deleted from the palette, and every orange usage remapped — featured card border, recommended pricing badge/border, kickers, badges, and icons now use cobalt (#2440DC); code-editor keywords switched to light indigo (#A5B4FC) so they don't clash on dark. Usage rules updated to "no orange in the system."

## User

could we add other color of blue instead of the orange we deleted?

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

Added a sky-blue accent taking over the old orange's role: **#0EA5E9** (fills, icons, borders only) with **#0369A1** for text, plus a light tint pair (#E0F2FE / #BAE6FD). Applied everywhere terracotta used to live — recommended pricing card, featured surface border, kickers, DBPE badge, graduation unit badge, "03. Practice" tag, and accent icons — with the usage rule updated to match. Palette is now all-blue: deep blue → cobalt → sky.

