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

## AI-Assisted Setup

This template is designed to work with AI coding assistants. Three interactive workflows help you customize everything without manually editing config files.

| Workflow | What it does |
|----------|-------------|
| **Bootstrap** | Full setup — product identity, features, design system, social proof, FAQ, SEO strategy, env vars |
| **Add SEO Page** | Generate a new keyword-optimized page targeting specific search terms |
| **Design System** | Change colors (OKLCH palette), fonts, and visual style |

### How to invoke

- **Claude Code:** Run `/bootstrap`, `/add-seo-page`, or `/design-system` — these are native skills defined in `.claude/skills/`
- **OpenAI Codex:** Ask naturally (e.g., "bootstrap this landing page" or "add an SEO page") — `agents.md` provides project context and workflow instructions
- **Other AI tools:** Reference or paste the workflow instructions from `.claude/skills/*.md` into your tool's context

> **Note:** `CLAUDE.md` and `agents.md` provide project context to Claude Code and OpenAI Codex respectively. If you update one, keep the other in sync.

## Scripts

```bash
bun run dev          # Start dev server with Turbopack
bun run build        # Production build
bun run check        # Lint + typecheck combined
bun run format:write # Format all files with Prettier
```
