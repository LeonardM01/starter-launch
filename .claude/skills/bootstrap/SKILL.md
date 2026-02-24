---
name: bootstrap
description: Interactive bootstrapping loop that walks through product details, design system, and configuration to customize the landing page template.
user_invocable: true
---

# Bootstrap Landing Page

You are helping the user set up their landing page from the template. Walk through each step interactively, asking questions and generating content. After each step, update the relevant files.

## Process

### Step 1: Product Identity
Ask the user for:
- **Product name** — What is your product called?
- **Tagline** — A short, compelling tagline (offer 3 suggestions based on the product)
- **Description** — One paragraph describing the product for meta tags
- **Target audience** — Who is this for?

Update `src/config/site.ts` with the answers.

### Step 2: Features
Ask the user to describe 3-6 key features. For each feature:
- Title (2-4 words)
- Description (1-2 sentences)
- Suggest an appropriate Lucide icon name

Update `siteConfig.features` in `src/config/site.ts`.

### Step 3: Design System
Based on the product category and audience, suggest 3 color palettes (each with primary + accent OKLCH values). Let the user pick one or customize.

Options to suggest based on product type:
- **SaaS/Tech:** Blue primary + purple accent
- **Health/Wellness:** Green primary + teal accent
- **Finance:** Navy primary + gold accent
- **Creative:** Purple primary + pink accent
- **Education:** Indigo primary + orange accent

Update OKLCH values in `src/styles/globals.css` (both the `:root` variables and the gradient/shimmer utilities).

Also ask about font preference:
- Modern sans-serif (Inter, default)
- Friendly rounded (Nunito)
- Professional serif (Lora + Playfair Display)
- Geometric (Poppins)

Update font imports in `src/app/layout.tsx`.

### Step 4: Images & Assets
Provide guidance on generating images:
- **Hero image / Product screenshot:** Take a screenshot of your app, or use Figma mockups
- **OG image (1200x630):** Create in Figma or Canva with your brand colors and tagline
- **Favicon:** Generate from your logo using https://realfavicongenerator.net/
- **Mascot / Illustrations:** Use ChatGPT/DALL-E for custom illustrations
- **Stock photos:** Use Unsplash (https://unsplash.com)

Remind the user to place images in `public/`.

### Step 5: Social Proof
Help draft 2-4 testimonials. Ask if they have real testimonials or want placeholder ones. For each:
- Quote (1-2 sentences)
- Name
- Role/Company
- Rating (1-5)

Also set up the stats row (e.g., "1,000+ Users", "99.9% Uptime").

Update `siteConfig.reviews` and `siteConfig.stats`.

### Step 6: FAQ
Help write 4-8 FAQ items. Ask about common questions their customers have. Draft Q&A pairs.

Update `siteConfig.faq`.

### Step 7: SEO Strategy
Based on the product, suggest:
- 5-10 target keywords for the homepage
- 2-6 SEO page ideas with slugs, titles, and content outlines

For each SEO page, generate the full `sections` array with heading + content.

Update `siteConfig.seoPages` and the homepage `keywords` in `src/app/layout.tsx`.

### Step 8: Environment Setup
Walk the user through setting up:
1. **PostHog** — Create account at posthog.com, get project API key
2. **Loops.so** — Create account, create mailing list, get API key + list ID
3. **Domain** — Set `NEXT_PUBLIC_PRODUCTION_URL`
4. **Google Search Console** — Verify domain, get verification code

Help create the `.env` file from `.env.example`.

### Step 9: Generate & Review
- Confirm all changes look correct
- Run `bun run build` to verify no errors
- Run `bun run dev` and ask user to review the site

### Step 10: Launch Checklist
Present a checklist of remaining tasks:
- [ ] Add OG image to `public/og-image.png`
- [ ] Add favicon files to `public/`
- [ ] Replace placeholder testimonials with real ones
- [ ] Review and customize privacy policy / terms of service
- [ ] Set up domain and DNS
- [ ] Deploy (Vercel, Docker, etc.)
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Loops email sequences
- [ ] Test waitlist flow end-to-end
