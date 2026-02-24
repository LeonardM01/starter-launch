# Landing Page Template

A ready-to-ship landing page template for startup products. Edit one config file, deploy, and start collecting waitlist signups with analytics from day one.

## What's included

- **Waitlist collection** via [Loops.so](https://loops.so) — email signup with tRPC server mutation
- **Analytics** via [PostHog](https://posthog.com) — reverse-proxied for ad-blocker resilience
- **SEO** — JSON-LD structured data, dynamic keyword pages, OpenGraph/Twitter meta
- **Sections** — Hero, features, reviews, FAQ, CTA — all driven from a single config file

## Stack

| Layer | Tech |
|-------|------|
| Framework | [Next.js 15](https://nextjs.org) (App Router, Turbopack) |
| Language | TypeScript 5.8 |
| Styling | [Tailwind CSS 4](https://tailwindcss.com) (OKLCH color system) |
| UI | [shadcn/ui](https://ui.shadcn.com) (new-york style) |
| API | [tRPC 11](https://trpc.io) |
| Runtime | React 19 |
| Analytics | [PostHog](https://posthog.com) |
| Email/Waitlist | [Loops.so](https://loops.so) |

Built on the [T3 Stack](https://create.t3.gg/).

## Getting started

```bash
# Install dependencies
bun install

# Set up environment variables
cp .env.example .env
# Fill in LOOPS_API_KEY, LOOPS_WAITLIST_ID, NEXT_PUBLIC_POSTHOG_KEY, etc.

# Start dev server
bun run dev
```

## Customization

Edit `src/config/site.ts` — this is the single source of truth for all product content (name, tagline, features, reviews, FAQ, SEO pages). Every component reads from this file.

## Scripts

```bash
bun run dev          # Start dev server with Turbopack
bun run build        # Production build
bun run check        # Lint + typecheck combined
bun run format:write # Format all files with Prettier
```
