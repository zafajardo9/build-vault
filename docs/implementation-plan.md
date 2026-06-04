# BuildVault Portfolio — Implementation Plan

## Overview
A single-page portfolio website for BuildVault that highlights built systems, features blog/updates, and follows the DESIGN.md dual-theme system. Built with Next.js 16 + Tailwind CSS v4 + Framer Motion.

## File Structure

| Path | Purpose |
|------|---------|
| `lib/site.ts` | Site identity, nav links, socials |
| `lib/portfolio.ts` | Portfolio/system entries (the core content) |
| `lib/blog.ts` | Blog/update posts |
| `lib/footer.ts` | Footer links & info |
| `app/globals.css` | Design system CSS custom properties + Tailwind theme |
| `app/layout.tsx` | Root layout with ThemeProvider, fonts, metadata |
| `app/page.tsx` | Home page composing all sections |
| `app/components/ThemeProvider.tsx` | Light/dark context with persistence |
| `app/components/ThemeToggle.tsx` | Sun/moon icon button |
| `app/components/Header.tsx` | Navigation bar with links + theme toggle |
| `app/components/HeroSection.tsx` | Hero with name, tagline, CTA |
| `app/components/PortfolioSection.tsx` | Systems/portfolio grid (core section) |
| `app/components/BlogSection.tsx` | Blog/updates listing |
| `app/components/Footer.tsx` | Footer with links & copyright |

## Dependencies
- `framer-motion` — Install via npm for scroll/reveal animations

## Phases

### Phase 1: Scaffolding
- Install framer-motion
- Create lib/ data files

### Phase 2: Design System & Theme
- Update globals.css with DESIGN.md tokens
- Create ThemeProvider with dark/light toggle + localStorage persistence
- Create ThemeToggle icon button

### Phase 3: Layout & Sections
- Create Header with nav links
- Create HeroSection
- Create PortfolioSection (core — grid of built systems)
- Create BlogSection
- Create Footer
- Compose in page.tsx
- Update root layout.tsx

### Phase 4: Animations
- Add Framer Motion reveal animations to sections
- Add smooth theme transition on CSS properties

## Design Token Mapping

CSS custom properties derived from DESIGN.md:

```css
/* Dark (default) */
:root {
  --color-primary: #FFFFFF;
  --color-primary-contrast: #000000;
  --color-secondary: #9A9A9A;
  --color-tertiary: #2A2A2A;
  --color-neutral: #000000;
  --color-surface: #111111;
  --color-surface-elevated: #1A1A1A;
  --color-on-surface: #FFFFFF;
  --color-border: #374151;
  --color-link: #0000EE;
  --color-error: #FF5A5F;
}

[data-theme="light"] {
  --color-primary: #000000;
  --color-primary-contrast: #FFFFFF;
  --color-secondary: #9A9A9A;
  --color-tertiary: #E5E5E5;
  --color-neutral: #FFFFFF;
  --color-surface: #F5F5F5;
  --color-surface-elevated: #FFFFFF;
  --color-on-surface: #000000;
  --color-border: #D1D5DB;
  --color-link: #0000EE;
  --color-error: #DC2626;
}
```

## Acceptance Criteria
- ✅ Page renders hero with site name and tagline
- ✅ Portfolio section displays built systems in a grid
- ✅ Blog section lists posts with title + date
- ✅ Footer with links and copyright
- ✅ Dark/light theme toggle works, persists in localStorage
- ✅ Smooth 200-300ms transition on theme swap
- ✅ All data editable from `lib/` TS files
- ✅ Framer Motion animations present (reveal on scroll)
- ✅ Follows DESIGN.md color, typography, spacing, and rounded tokens
