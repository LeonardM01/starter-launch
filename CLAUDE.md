# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository. An equivalent `agents.md` exists for OpenAI Codex and other AI tools — keep both files in sync when making changes.

## Project Overview

Landing page template for startup products. Pre-configured with T3 stack, PostHog analytics, Loops.so waitlist, comprehensive SEO, and an AI bootstrapping loop. Customize `src/config/site.ts` to make it your own, or run `/bootstrap` to walk through setup interactively.

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
3. tRPC handles the waitlist mutation (client → server → Loops API)
4. PostHog analytics via reverse proxy (`/ingest` → PostHog EU/US)

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

**Interactive setup:** Run `/bootstrap` skill to walk through product details, design system, and configuration step by step.

**Add SEO pages:** Run `/add-seo-page` skill or add entries to `siteConfig.seoPages`.

**Change design:** Run `/design-system` skill or edit OKLCH values in `src/styles/globals.css`.
