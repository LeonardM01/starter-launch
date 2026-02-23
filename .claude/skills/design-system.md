---
name: design-system
description: Modify the landing page design system — colors, fonts, spacing, and visual style.
user_invocable: true
---

# Design System Customization

Help the user modify the design system for their landing page.

## What can be changed

### Colors
All colors are defined as OKLCH values in `src/styles/globals.css` under `:root`.

Key variables to update:
- `--primary` and `--primary-foreground` — Main CTA and brand color
- `--secondary` and `--secondary-foreground` — Accent color
- `--background` and `--foreground` — Page background and text
- `--card` and `--card-foreground` — Card surfaces
- `--muted` and `--muted-foreground` — Subdued elements
- `--border`, `--input`, `--ring` — UI element borders and focus rings

Also update the gradient utilities at the bottom of globals.css:
- `.text-gradient-primary` — gradient text effect colors
- `.text-shimmer-primary` — animated shimmer text colors
- `@keyframes pulse-glow` — glow animation color

### Fonts
Fonts are loaded in `src/app/layout.tsx` using `next/font/google`.
CSS variables `--font-sans-var` and `--font-heading-var` are set on the `<html>` element.
The `@theme` block in globals.css maps these to `--font-sans` and `--font-heading`.

### Animations
Animation keyframes and utilities are in `src/styles/globals.css` inside the `@theme` block.
Scroll-triggered animations use the `.animate-on-scroll` + `.is-visible` pattern.
Stagger delays via `.stagger-1` through `.stagger-5`.

## Process

1. Ask the user what they want to change (colors, fonts, or both)
2. If colors: ask for brand color or suggest palettes based on their product
3. Generate a complete set of OKLCH values that work together
4. Update `src/styles/globals.css`
5. If fonts: suggest options and update `src/app/layout.tsx`
6. Run `bun run dev` and ask user to verify
