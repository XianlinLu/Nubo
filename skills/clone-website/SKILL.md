---
name: clone-website
description: Reverse-engineer and clone one or more websites into a maintainable Next.js project by extracting real assets, computed styles, content, responsive behavior, animations, and interaction states. Use for pixel-perfect website reconstruction.
argument-hint: "<url1> [<url2> ...]"
user-invocable: true
source: "https://github.com/JCodesMore/ai-website-cloner-template/tree/master/.codex/skills/clone-website"
---

# Clone Website

Rebuild the supplied URL as a pixel-accurate, editable and runnable frontend.
The default scope includes visual layout, styling, component structure,
interactions, responsive behavior and demo data. Real authentication, database
and real-time backends are out of scope unless the user requests them.

## Required workflow

### 1. Pre-flight

- Browser automation is mandatory.
- Verify each URL is accessible.
- Verify the existing Next.js project builds before changing it.
- Create `docs/research/`, `docs/research/components/`,
  `docs/design-references/` and `scripts/`.
- Preserve the existing project architecture and package manager.

### 2. Reconnaissance

- Capture reference screenshots at desktop 1440px, tablet 768px and mobile
  390px when responsive behavior is in scope.
- Extract real fonts, colors, icons, favicons, metadata and global UI patterns.
- Enumerate all images, videos, background images, inline SVGs and layered
  assets; save authorized assets locally.
- Slowly sweep the complete page before clicking. Record scroll-driven,
  time-driven, hover-driven and click-driven behavior separately.
- Capture every state of tabs, cards, menus, carousels and header transitions.
- Write `docs/research/BEHAVIORS.md`.
- Map every page section, sticky/fixed layer, dependency and interaction model
  in `docs/research/PAGE_TOPOLOGY.md`.

### 3. Foundation

- Configure the observed fonts and global design tokens first.
- Build reusable typed content structures and React icon components.
- Add an asset download script with bounded parallel downloads and error
  handling.
- Keep assets under meaningful paths in `public/`.
- Verify the project builds before component implementation.

### 4. Component specifications

Before implementing each component, write
`docs/research/components/<component-name>.spec.md` containing:

- target component file and reference screenshot;
- exact DOM hierarchy;
- exact computed CSS values from `getComputedStyle()`;
- interaction model: static, click, scroll, hover or time driven;
- every visual state, trigger, before/after styles, transition and easing;
- all authorized real text and local asset paths;
- desktop, tablet and mobile behavior with observed breakpoints.

Never estimate a value that can be measured. Never build a click interaction
when the reference is scroll driven. Never replace a real video, canvas or
layered asset with a fake HTML mockup.

### 5. Implementation

- Use small, focused React components.
- Keep page assembly in `app/page.tsx`.
- Preserve the reference section order, sticky behavior, stacking contexts,
  animations and scroll model.
- Use actual extracted assets and content when authorized by the user.
- Keep the code maintainable; do not deliver a screenshot or monolithic
  single-file demo.
- Verify TypeScript and the production build after implementation.

### 6. Visual QA

- Capture the original and clone at identical 1440px desktop viewports.
- Compare section by section from top to bottom.
- Re-extract any mismatched value instead of visually guessing.
- Test all scroll, hover, click, tab, playback and carousel behavior.
- Repeat repair rounds until no material desktop discrepancy remains.

## Completion report

Report the number of sections, React components, specification files and local
assets; the production build status; visual-QA results; and any known gaps.

