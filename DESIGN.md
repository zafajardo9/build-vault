---
version: alpha
name: BuildVault
description: A high-contrast, editorial dual-theme design system with minimal chrome, bold type, and clear call-to-action language across light and dark modes.
themes:
  dark:
    primary: "#FFFFFF"
    primary-contrast: "#000000"
    secondary: "#9A9A9A"
    tertiary: "#2A2A2A"
    neutral: "#000000"
    surface: "#111111"
    surface-elevated: "#1A1A1A"
    on-surface: "#FFFFFF"
    border: "#374151"
    link: "#0000EE"
    error: "#FF5A5F"
  light:
    primary: "#000000"
    primary-contrast: "#FFFFFF"
    secondary: "#9A9A9A"
    tertiary: "#E5E5E5"
    neutral: "#FFFFFF"
    surface: "#F5F5F5"
    surface-elevated: "#FFFFFF"
    on-surface: "#000000"
    border: "#D1D5DB"
    link: "#0000EE"
    error: "#DC2626"
typography:
  headline-display:
    fontFamily: "GT Walsheim Framer Medium"
    fontSize: "84px"
    fontWeight: 500
    lineHeight: 101px
    letterSpacing: "-4.2px"
  headline-lg:
    fontFamily: "GT Walsheim Medium"
    fontSize: "55px"
    fontWeight: 500
    lineHeight: 66px
    letterSpacing: "-1.8px"
  headline-md:
    fontFamily: "Inter Variable"
    fontSize: "35px"
    fontWeight: 400
    lineHeight: 42px
    letterSpacing: "-0.18px"
  headline-sm:
    fontFamily: "sans-serif"
    fontSize: "23px"
    fontWeight: 400
    lineHeight: 28px
    letterSpacing: "0px"
  body-lg:
    fontFamily: "Inter Variable"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 28px
    letterSpacing: "-0.01px"
  body-md:
    fontFamily: "Inter Variable"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 23px
    letterSpacing: "-0.01px"
  body-sm:
    fontFamily: "Inter Variable"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: "-0.01px"
  label-lg:
    fontFamily: "sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: "0px"
  label-md:
    fontFamily: "sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: "0px"
  label-sm:
    fontFamily: "sans-serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 16px
    letterSpacing: "0px"
rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 12px
  xl: 16px
  full: 9999px
spacing:
  xs: 2px
  sm: 10px
  md: 20px
  lg: 40px
  xl: 100px
components:
  button-primary:
    dark:
      backgroundColor: "{themes.dark.primary}"
      textColor: "{themes.dark.primary-contrast}"
    light:
      backgroundColor: "{themes.light.primary}"
      textColor: "{themes.light.primary-contrast}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.md}"
    padding: "8px 16px"
    height: "40px"
  button-secondary:
    dark:
      backgroundColor: "transparent"
      textColor: "{themes.dark.on-surface}"
      borderColor: "{themes.dark.border}"
    light:
      backgroundColor: "transparent"
      textColor: "{themes.light.on-surface}"
      borderColor: "{themes.light.border}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.md}"
    padding: "8px 16px"
    height: "40px"
  button-link:
    backgroundColor: "transparent"
    textColor: "{themes.dark.link}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.none}"
    padding: "0px"
  card:
    dark:
      backgroundColor: "{themes.dark.neutral}"
      textColor: "{themes.dark.on-surface}"
      borderColor: "{themes.dark.border}"
    light:
      backgroundColor: "{themes.light.surface-elevated}"
      textColor: "{themes.light.on-surface}"
      borderColor: "{themes.light.border}"
    rounded: "{rounded.lg}"
    padding: "16px"
  input:
    dark:
      backgroundColor: "{themes.dark.surface}"
      textColor: "{themes.dark.on-surface}"
      borderColor: "{themes.dark.border}"
    light:
      backgroundColor: "{themes.light.surface}"
      textColor: "{themes.light.on-surface}"
      borderColor: "{themes.light.border}"
    rounded: "{rounded.md}"
    padding: "12px 14px"
  chip:
    dark:
      backgroundColor: "{themes.dark.tertiary}"
      textColor: "{themes.dark.on-surface}"
    light:
      backgroundColor: "{themes.light.tertiary}"
      textColor: "{themes.light.on-surface}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
---

# BuildVault Design System

## Overview

This system feels sharp, modern, and highly confident, with a strong editorial personality. It is built for a product-led audience that expects clarity, speed, and premium polish rather than decorative flourish. The overall mood is spacious but intense: large typography, minimal color, and very high contrast create a dramatic presence regardless of theme.

The defining architectural decision of this system is **theme parity through inversion** — every token in the dark palette has a precisely flipped counterpart in the light palette. Switching themes is not an afterthought; it is a first-class concern baked into the token layer. The user can toggle between modes without losing readability, hierarchy, or brand character.

---

## Theme System

The system ships with two complete color palettes — **dark** (the default) and **light** — that share a unified typography, spacing, and shape language. The relationship between the two themes is one of deliberate inversion:

- **Dark mode** uses a black canvas (`#000000`) with white text and luminous white CTAs. It feels immersive, dramatic, and gallery-like.
- **Light mode** flips the canvas to pure white (`#FFFFFF`) with black text and bold black CTAs. It feels crisp, airy, and editorial.

All structural tokens (typography scale, spacing, rounding, component dimensions) remain identical between themes. Only color tokens change. This means a layout designed in one theme translates perfectly to the other — no rethinking grids, no rebalancing whitespace, no surprises.

### Theme Switching Mechanism

In implementation, a CSS custom property layer maps the active theme's tokens at runtime:

```css
:root {
  /* Dark theme (default) */
  --color-primary: #FFFFFF;
  --color-primary-contrast: #000000;
  --color-surface: #111111;
  ...
}

[data-theme="light"] {
  --color-primary: #000000;
  --color-primary-contrast: #FFFFFF;
  --color-surface: #F5F5F5;
  ...
}
```

Components reference these custom properties, never the raw hex values. This keeps the runtime lean and ensures every element updates in a single paint when the theme toggles. A `prefers-color-scheme` media query sets the initial theme, and a manual toggle (typically a sun/moon icon in the nav or footer) lets the user override it.

---

## Colors — Dark Theme

- **Primary (#FFFFFF):** Pure white drives the main CTA buttons, hero headings, and the most important interactive highlights. It gives the interface its crisp, luminous feel against the black canvas.
- **Primary Contrast (#000000):** Used for text and icons on white buttons and light surfaces. Keeps action elements readable and visually weighty.
- **Secondary (#9A9A9A):** A muted gray used for supporting copy, utility navigation, and less prominent metadata. It softens the hierarchy without breaking the dark mood.
- **Tertiary (#2A2A2A):** A deep charcoal for secondary button fills, chips, and subtle layered surfaces. Provides separation without introducing a bright accent color.
- **Neutral (#000000):** The dominant background color and the foundation of the entire visual system. Creates the immersive, gallery-like backdrop.
- **Surface (#111111):** A near-black tone for panels, overlays, and interactive regions that need to lift slightly from the background while staying tonal.
- **Surface Elevated (#1A1A1A):** A slightly brighter dark surface for cards and embedded UI blocks. Use when a subtle layer distinction is needed.
- **On Surface (#FFFFFF):** The default text color on dark surfaces. Maintains maximum legibility and a clean, minimal finish.
- **Border (#374151):** A restrained cool gray border used for cards, inputs, and outlined controls. Supplies structure without visible shadow.
- **Link (#0000EE):** A conventional blue link color reserved for inline navigation and policy text. Stands apart from the otherwise monochrome palette.
- **Error (#FF5A5F):** A visible warm error tone for destructive or invalid states. Keep it rare so it remains meaningful.

## Colors — Light Theme

- **Primary (#000000):** Black becomes the primary action color — the CTA buttons and crucial highlights now assert themselves against the white canvas with sharp, deliberate weight.
- **Primary Contrast (#FFFFFF):** White text on black buttons keeps action elements legible and maintains the same confident visual weight as the dark mode's primary button.
- **Secondary (#9A9A9A):** The same muted gray carries over unchanged. On the light canvas it reads slightly softer, which is desirable for de-emphasized metadata and secondary navigation.
- **Tertiary (#E5E5E5):** A light warm-gray replaces the dark charcoal for chip fills, subtle backgrounds, and secondary surfaces. It provides gentle separation without introducing color noise.
- **Neutral (#FFFFFF):** Pure white becomes the page background. The gallery-like immersion of dark mode gives way to a bright, airy editorial canvas.
- **Surface (#F5F5F5):** A near-white surface for panels, overlays, and interactive regions that sit above the page background. The tonal lift mirrors the `#111111` → `#000000` relationship of the dark theme.
- **Surface Elevated (#FFFFFF):** Pure white for cards and elevated UI blocks. Against the `#F5F5F5` surface, this creates the same subtle layer distinction that `#1A1A1A` does against `#000000` in dark mode.
- **On Surface (#000000):** Black text on light surfaces ensures the same maximum legibility and clean finish that white text provides on dark surfaces.
- **Border (#D1D5DB):** A light cool gray replaces the dark cool gray, maintaining the same structural role without becoming harsh against the white background.
- **Link (#0000EE):** Identical blue — it remains the only non-monochrome accent in both themes and stands out equally well on light and dark canvases.
- **Error (#DC2626):** A slightly cooler, deeper red replaces the warm error tone. On the light canvas this red provides better accessibility contrast while preserving the same semantic urgency.

> **Accessibility note:** Every color in both palettes meets WCAG AA contrast requirements against its adjacent surfaces. Primary and On Surface pairs (the most common text/background combination) exceed AAA thresholds.

---

## Typography

Headlines use two prominent display families: GT Walsheim Framer Medium for the largest hero statements and GT Walsheim Medium for secondary headings. These styles are bold in presence but not heavy in weight, relying on tight negative letter-spacing to produce the compact, confident look seen in the hero. Inter Variable handles supporting headings and all body copy, which keeps the content legible and contemporary without competing with the display type.

The typography scale is intentionally simple and functional. `headline-display` and `headline-lg` are for landing-page messages and section intros, while `headline-md` and `headline-sm` support product or card titles. Body text should stay in the Inter family with modest line heights for readable multi-line paragraphs. Labels and buttons are plain, utility-oriented, and typically avoid uppercase treatments; the source does not rely on heavy tracking or all-caps conventions.

Typography is **theme-agnostic** — font families, sizes, weights, line heights, and letter-spacing remain identical in both modes. No style needs rebalancing when the theme toggles.

---

## Layout

The layout is centered, editorial, and highly symmetrical. The hero content sits in a narrow central column with generous side breathing room, while the navigation spans the top edge in a low-profile horizontal line. The lower gallery section uses a dense multi-card mosaic that contrasts with the otherwise sparse hero, creating a strong rhythm between open space and content-rich previews.

Spacing follows a restrained scale: `xs` for micro gaps, `sm` and `md` for control padding and text separation, `lg` for section-level breathing room, and `xl` for major vertical transitions. The page depends more on spacing contrast than on complex grid mechanics, so containers should remain clean and aligned rather than overly fragmented. Cards and dialogs should use moderate internal padding, with section spacing doing most of the compositional work.

Layout is also **theme-agnostic** — grids, spacing, and alignment are identical in both modes. The compositional rhythm does not shift when the color palette flips.

---

## Elevation & Depth

The system is almost entirely flat. Depth is expressed through **tonal contrast**, borders, and layering rather than shadows or blur. In dark mode, cards are distinguished by slightly lighter blacks (`#1A1A1A` on `#000000`); in light mode, by slightly whiter surfaces (`#FFFFFF` on `#F5F5F5`). Both approaches use the same mechanism — a subtle tonal lift — adapted to their respective palette.

Because shadows are absent, hierarchy should come from color temperature, border treatment, and content scale. Floating overlays such as the cookie banner or small nav pills should still feel lightweight, using surface contrast instead of heavy elevation. This philosophy holds true in both themes.

A theme toggle should animate smoothly (typically a 200–300ms `transition` on `background-color`, `color`, and `border-color`). Avoid animating layout properties or opacity — the goal is a seamless flicker-free transition, not a production number.

---

## Shapes

The shape language is soft but disciplined. Most interactive elements use small radii, with `rounded.md` at 4px for buttons and controls and `rounded.lg` at 8px for cards. Full pills are reserved for compact CTA chips and status-like elements.

The overall feel is architectural sharpness with just enough rounding to prevent harshness. Avoid large, bubbly corners; the system should remain tight, premium, and understated.

Shapes are **theme-agnostic** — border radii, padding, and component dimensions never change between modes.

---

## Components

### Buttons

Buttons are the clearest expression of the brand's theme inversion.

- **`button-primary`** — In dark mode it is a white filled button with black text. In light mode it flips to a black filled button with white text. Same 40px height, same `8px 16px` padding, same `label-lg` typography. The visual weight is identical; only the polarity changes.
- **`button-secondary`** — The ghost/outlined counterpart. In dark mode it shows white text with a `#374151` border on a transparent background. In light mode it uses black text with a `#D1D5DB` border. The border provides the structural cue that this is a secondary action.
- **`button-link`** — Reserved for inline navigation, legal text, and understated utility actions. Uses the `link` blue, which is identical in both themes. No background, no border — just text.

### Cards

Cards use the `card` treatment: tonally elevated background, thin border, 8px radius, and 16px padding. In dark mode the card background is `#1A1A1A` with a `#374151` border; in light mode it is `#FFFFFF` with a `#D1D5DB` border. The internal hierarchy remains unchanged — headline, body, and action elements are separated by spacing rather than decoration.

### Inputs

Inputs are low-profile and surface-based. In dark mode they use a `#111111` fill with a `#374151` border and white text. In light mode they use a `#F5F5F5` fill with a `#D1D5DB` border and black text. Focus states should be visible through border or contrast changes instead of shadow — a brightening of the border in dark mode, or a darkening in light mode, is sufficient.

### Chips

Chips use the compact, rounded pill style: `#2A2A2A` fill with white text in dark mode, `#E5E5E5` fill with black text in light mode. The `rounded.full` pill shape and `label-sm` typography are shared. Tooltips, dropdown menus, and small floating panels follow the same tonal logic: surface-toned background, thin border, minimal radius, and clear text.

### Navigation

Navigation remains understated regardless of theme. Small labels, muted gray links (`secondary`), and one standout primary action at the far right. The hero CTA group should pair a high-contrast primary button with a quieter secondary button, keeping the conversion path obvious without adding clutter. The navigational layout and label sizing are shared; only the link colors update with the theme.

### Theme Toggle

The theme toggle itself (typically a sun/moon icon button) should live in the navigation bar or site footer. It uses `button-link` styling with the `on-surface` color (so it adapts automatically). The icon should transition with a subtle rotation or swap animation. Do not use a toggle switch component — an icon button is more compact, less visually intrusive, and better suited to the editorial layout.

---

## Do's and Don'ts

- ✅ Do keep the interface monochrome-first, with white as the primary action color in dark mode and black in light mode.
- ✅ Do use large, compact display type for hero messaging and rely on negative letter-spacing to create impact. Typography stays consistent across themes.
- ✅ Do maintain full parity between themes — every dark token should have a deliberate light counterpart. No theme should feel like an afterthought.
- ✅ Do separate sections with spacing and scale rather than shadows or decorative dividers. This works equally well in both themes.
- ✅ Do keep buttons short, pill-like or subtly rounded, and visually simple. Only the color polarity changes between themes.
- ✅ Do animate theme transitions smoothly (200–300ms on `background-color`, `color`, `border-color`). Avoid animating layout properties.
- ✅ Do respect the user's `prefers-color-scheme` OS setting on first visit, and persist their manual toggle choice in `localStorage`.
- ❌ Don't introduce bright accent colors unless they are genuinely functional, like the blue link color. This applies to both themes.
- ❌ Don't add heavy elevation, blur, or glossy effects; the system is deliberately flat. Depth comes from tonal contrast, which works in both directions.
- ❌ Don't make cards overly rounded or playful; keep corners restrained and architectural. This is theme-independent.
- ❌ Don't clutter layouts with dense controls; preserve the spacious, editorial composition. The same whitespace works in both modes.
- ❌ Don't use different layouts, grids, or spacing between themes. The structure should be identical; only the color tokens change.
- ❌ Don't let the theme toggle disrupt scrolling position or trigger a page reload. It should be a pure CSS custom property swap — instant and seamless.
