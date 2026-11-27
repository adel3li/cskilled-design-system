# CSkilled Design System — Project Overview

> Home document for this project. Read this first. Last updated 2026-11-27.

## 1. What this is and its goal

**CSkilled** (أكاديمية علوم الحاسوب, a computer-science academy) needs one visual system for every page of its website.
This repo holds that system, named **«المخطّط الهندسي» (Blueprint)**. It is a framework-free CSS kit (tokens, components and a little JS) with these traits:

- **Arabic-first:** `lang="ar" dir="rtl"`.
- **Paper and blueprint-grid** ground with an **all-blue** palette. There is no orange anywhere.
- Derived from the CSkilled **home page**. The Alhamd (الحمد) app design system served as the format reference.

**Goal:** every other site page (tracks, about, community, policies, course/diploma pages, …) is built on this kit and follows its usage rules.

## 2. Tech stack

| Layer | Choice |
| --- | --- |
| Styling | Plain CSS custom properties (`--cs-*`) + BEM-ish classes (`.cs-*`) |
| Behavior | Vanilla JS (`cs.js`, ~30 lines, optional) |
| Fonts | Google Fonts: IBM Plex Sans Arabic (UI), JetBrains Mono (figures/code), Material Symbols Outlined (icons) |
| Build | **None.** No package.json, bundler, tests or CI |
| Origin | Exported from **Claude Design** (claude.ai/design) as a handoff bundle, then implemented in Claude Code |

### Run / build / deploy

- **Run:** open `index.html` (the living spec) or `example.html` (a sample page) in a browser. A static server also works, for example `python3 -m http.server`.
- **Build:** nothing to build.
- **Deploy:** **no deploy is configured.** There's no Vercel, Netlify or GitHub Pages config in the repo.
- **Env vars / secrets:** none.
- **Use in a page:** link the Google Fonts URL, then `tokens.css`, then `components.css`. Optionally add `cs.js` before `</body>`. The full snippet is in `README.md`.

## 3. Structure

```
/
├── README.md            Kit docs: usage, tokens, component class list, rules, decisions
├── PROJECT_OVERVIEW.md  This file
├── tokens.css           All design tokens (colors, type, radii, shadows, spacing, motion)
├── components.css       Base styles + every component (.cs-*)
├── cs.js                Segmented-toggle behavior + one-open accordion fallback
├── index.html           The spec rebuilt with the kit (9 sections: colors, dark/code palette,
│                        type, surfaces/texture, logo, components & states, icons, sizes & motion,
│                        voice & principles)
├── example.html         Full sample page "دبلومة بايثون الشاملة" (nav → hero → sections → principle → footer)
├── logo/                Official logos: blue.webp, blue-on-white.jpg, white.webp, reversed.webp
└── source/              Original Claude Design handoff (reference only, don't edit)
    ├── README.md        Handoff instructions for coding agents
    ├── chats/chat1.md   Design chat transcript (intent and iterations)
    └── project/
        ├── Design System - CSkilled.dc.html   ← source of truth for the kit
        ├── support.js                          Claude Design runtime for .dc.html files
        └── uploads/Design System - ليل.dc.html Reference design system (Alhamd app)
```

### Key tokens

- Paper `#FAF9F6` · surface `#FFFFFF` · border `#E2E8F0`
- Text `#0F172A` / muted `#475569` / subtle `#94A3B8`
- Primary deep blue `#062985` (hover `#041C5C`) · cobalt secondary `#2440DC` · lavender `#EBEDFF` (backgrounds only)
- The dark palette is for code windows only: bg `#0A101D`
- Radii 4 / 8 / 999 (play button) · container 1280 · touch targets ≥ 44

## 4. Work history

| # | When | Where | What was done | Status |
| --- | --- | --- | --- | --- |
| 1 | 2026-09-13 | Claude Design chat ("CSkilled design system") | Generated the spec from the home page using Alhamd as the reference. Orange (terracotta/amber) was removed and remapped to cobalt, and code keywords became indigo `#A5B4FC`. A sky-blue accent (`#0EA5E9`/`#0369A1`) was then added in chat. | Done (sky blue was not exported, see Decisions) |
| 2 | 2026-09-30 | Commit `2147e97` on `main` (author: Claude Design) | Imported the handoff bundle: spec HTML, chat, runtime, reference upload | Done |
| 3 | 2026-09-30 | Commit `c404707` on `main` (Claude Code session `session_01XtEEHpSmk2tbfLKoXq6tXQ`) | Built the CSS kit: `tokens.css`, `components.css`, `cs.js`, `index.html`, `example.html`, logo files, README. Moved the handoff to `source/`. | Done (committed directly to `main`, no PR) |
| 4 | 2026-11-27 | Branch `claude/trusting-maxwell-zawedz` (this session, "Project overview and onboarding") | Wrote this overview (PR [#1](https://github.com/adel3li/cskilled-design-system/pull/1), draft). Read-only otherwise. | Done, awaiting merge |

**Branches:** `main` (the only remote branch before this session) and `claude/trusting-maxwell-zawedz` (this overview).
**Pull requests:** [#1](https://github.com/adel3li/cskilled-design-system/pull/1) (this overview, draft) is the only one. Earlier work was committed straight to `main`.

## 5. Decisions and why

- **Follow the exported file over the chat.** The chat ends with a sky-blue accent, but the exported `.dc.html` contains no sky blue. The kit follows the file, so cobalt `#2440DC` is the only secondary color.
- **No orange anywhere.** This was an explicit user request in the design chat.
- **Framework-free CSS.** The kit drops into any stack (static, React, CMS) with no build step.
- **Native `<details name>` accordion** keeps one item open at a time. `cs.js` provides a fallback for older browsers.
- **Focus style:** 1px primary outline, 2px offset. Inputs use the spec border plus a 1px ring.
- **Contrast ratios** in the spec are design-tool approximations, and the spec itself says to verify them.
- **Usage rules the CSS can't enforce** are listed in `README.md`, for example:
  - Sections alternate white and paper/grid.
  - Pages open with a hero on the grid and close with `.cs-principle` followed by the footer.
  - Card hover changes the border or the shadow, never both.
  - Digits go in `<bdi>`, and figures are mono.
  - Icons come from Material Symbols only.
  - Make no job promises.

## 6. Open items, known issues, next steps

- [ ] **Sky-blue accent:** decide whether to add it (chat intent) or keep cobalt only (current kit).
- [ ] **Verify contrast ratios** with a real checker (WCAG AA).
- [ ] **Build the remaining site pages** on the kit: tracks, about, community, policies.
- [ ] **Hosting/deploy:** none is configured. Choose a host (e.g. GitHub Pages or Vercel) if the spec should be viewable online.
- [ ] **Integration target:** it's unknown which codebase or CMS the production website uses. The kit may need porting (e.g. React components or a Tailwind preset).
- [ ] **No tests/CI:** consider visual-regression or lint checks once pages multiply.
- [ ] **Workflow:** past work was committed straight to `main`. Consider using PRs from now on.
- No known bugs are recorded.

## 7. Important links

- Repo: https://github.com/adel3li/cskilled-design-system
- Kit-building Claude Code session: https://claude.ai/code/session_01XtEEHpSmk2tbfLKoXq6tXQ
- This overview session: https://claude.ai/code/session_01Ya9qA2erjJYs4nCApqrmn7
- Claude Design project ("Copy of CSkilled design system spec"): URL not recorded in the repo
- Live website / home page used as the source: URL not recorded in the repo
- Deploy URL: none
