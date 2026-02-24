# AGENTS.md

This file provides project context for AI coding agents (OpenAI Codex, etc.). For Claude Code, see `CLAUDE.md`. Keep both files in sync when making changes.

## Project Overview

Landing page template for startup products. Pre-configured with T3 stack, PostHog analytics, Loops.so waitlist, comprehensive SEO, and AI-assisted setup workflows. Customize `src/config/site.ts` to make it your own.

## Commands

```bash
bun run dev          # Start dev server with Turbopack
bun run build        # Production build
bun run check        # Lint + typecheck combined
bun run lint         # ESLint only
bun run lint:fix     # ESLint with auto-fix
bun run typecheck    # TypeScript type checking only
bun run format:write # Prettier format all files
bun run format:check # Prettier check formatting
```

## Architecture

**Stack:** T3 (Next.js 15 App Router, tRPC 11, React 19, Tailwind CSS 4, TypeScript 5.8)

**Path alias:** `@/*` maps to `./src/*`

### Key directories

- `src/config/site.ts` — **Central configuration** — single source of truth for all product data. Every component reads from this file.
- `src/app/` — Next.js App Router pages and API routes
- `src/app/_components/` — Page-specific components (waitlist modal, CTA button, nav, footer, scroll animator)
- `src/app/_components/sections/` — Landing page sections (hero, features, reviews, FAQ, CTA)
- `src/app/(seo)/[slug]/` — Dynamic SEO keyword pages (generated from `siteConfig.seoPages`)
- `src/components/ui/` — shadcn/ui components (new-york style, OKLCH color system)
- `src/components/seo/` — JSON-LD structured data components
- `src/components/animations/` — Optional motion/react animation wrappers
- `src/server/api/` — tRPC server: router definitions, context, middleware
- `src/server/api/routers/waitlist.ts` — Loops.so waitlist mutation
- `src/trpc/` — tRPC client wiring (React Query, server-side RSC helpers)
- `src/lib/metadata.ts` — `generatePageMetadata()` helper for consistent SEO metadata
- `src/lib/utils.ts` — `cn()` helper (clsx + tailwind-merge)
- `src/env.js` — Zod-validated environment variables (`@t3-oss/env-nextjs`)
- `src/styles/globals.css` — OKLCH color tokens, CSS animations, scroll-triggered utilities

### Data flow

1. `src/config/site.ts` is the single source of truth — all page content, features, reviews, FAQ, SEO pages
2. Components read directly from `siteConfig` — no props drilling needed
3. tRPC handles the waitlist mutation (client -> server -> Loops API)
4. PostHog analytics via reverse proxy (`/ingest` -> PostHog EU/US)

### External services

- **PostHog** — analytics via reverse proxy (configurable EU/US region via `POSTHOG_REGION` env)
- **Loops.so** (`loops` npm package) — waitlist email collection via tRPC mutation

## Environment Variables

Required in `src/env.js`:

- `LOOPS_API_KEY` — API key for Loops.so
- `LOOPS_WAITLIST_ID` — Mailing list ID in Loops
- `NEXT_PUBLIC_POSTHOG_KEY` — PostHog project API key
- `NEXT_PUBLIC_POSTHOG_HOST` — PostHog ingestion path (default: `/ingest`)
- `NEXT_PUBLIC_PRODUCTION_URL` — Production URL (e.g. `https://example.com`)

Optional:

- `POSTHOG_REGION` — `"eu"` (default) or `"us"` — selects PostHog endpoint
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` — Google Search Console verification

Set `SKIP_ENV_VALIDATION=1` to bypass validation during Docker builds.

## Styling

- Tailwind CSS v4 with OKLCH color palette (CSS-first config, no `tailwind.config.ts`)
- Colors defined as CSS custom properties in `src/styles/globals.css`
- Fonts loaded via `next/font/google`, exposed as `--font-sans-var` and `--font-heading-var`
- Custom scroll-triggered animations via Intersection Observer (`animate-on-scroll` class, `stagger-1` through `stagger-5`)
- shadcn/ui components configured via `components.json` (new-york style)

## Customization

**Quick start:** Edit `src/config/site.ts` to customize all product content.

## AI Workflows

This template includes three interactive workflows. When the user asks you to perform any of these tasks, follow the steps described below.

### Bootstrap (full setup)

When asked to "bootstrap", "set up", or "customize this landing page", walk through these steps interactively:

1. **Product Identity** — Ask for product name, tagline (offer 3 suggestions), description, and target audience. Update `src/config/site.ts`.
2. **Features** — Ask for 3-6 key features (title, description, Lucide icon name). Update `siteConfig.features`.
3. **Design System** — Suggest 3 color palettes based on the product (OKLCH values for primary + accent). Options by category: SaaS/Tech (blue+purple), Health (green+teal), Finance (navy+gold), Creative (purple+pink), Education (indigo+orange). Update `src/styles/globals.css`. Also ask about font preference (Inter, Nunito, Lora, Poppins) and update `src/app/layout.tsx`.
4. **Images & Assets** — Guide the user: hero screenshot, OG image (1200x630), favicon, illustrations. Remind them to place files in `public/`.
5. **Social Proof** — Help draft 2-4 testimonials (quote, name, role, rating) and stats. Update `siteConfig.reviews` and `siteConfig.stats`.
6. **FAQ** — Help write 4-8 FAQ items. Update `siteConfig.faq`.
7. **SEO Strategy** — Suggest 5-10 homepage keywords and 2-6 SEO page ideas with slugs, titles, and content. Update `siteConfig.seoPages` and homepage keywords in `src/app/layout.tsx`.
8. **Environment Setup** — Walk through PostHog, Loops.so, domain, and Google Search Console setup. Create `.env` from `.env.example`.
9. **Verify** — Run `bun run build` to confirm no errors. Run `bun run dev` for user review.
10. **Launch Checklist** — Present remaining tasks: OG image, favicon, real testimonials, privacy policy, domain/DNS, deploy, sitemap submission, Loops sequences, end-to-end waitlist test.

### Add SEO Page

When asked to "add an SEO page" or "create a keyword page":

1. Ask for target keyword(s), search intent, and page angle (e.g., "alternative to X", "best Y for Z").
2. Generate a page entry for `siteConfig.seoPages` in `src/config/site.ts` with: `slug`, `title` (under 60 chars, keyword near front), `description` (under 160 chars), `keywords` (3-5), and `sections` (3-5 sections, each with `heading` and `content` of 100-200 words).
3. Use the target keyword naturally in headings and body. Include the product name 2-3 times per section. Write for the stated search intent.
4. Add the entry to the `seoPages` array in `src/config/site.ts`.
5. Verify the page renders at `/{slug}`.
6. Remind user to submit updated sitemap to Google Search Console.

### Design System

When asked to "change the design", "update colors", or "customize the theme":

1. Ask what they want to change (colors, fonts, or both).
2. **Colors:** Ask for brand color or suggest palettes. Generate a full set of OKLCH values. Update `src/styles/globals.css` — both the `:root` variables and the gradient/shimmer utilities (`.text-gradient-primary`, `.text-shimmer-primary`, `@keyframes pulse-glow`).
3. **Fonts:** Suggest options and update `src/app/layout.tsx`. CSS variables `--font-sans-var` and `--font-heading-var` are set on `<html>`. The `@theme` block in globals.css maps these to `--font-sans` and `--font-heading`.
4. Run `bun run dev` and ask user to verify.
