---
name: add-seo-page
description: Add a new SEO keyword page to the landing page.
user_invocable: true
---

# Add SEO Keyword Page

Help the user create a new SEO-optimized page targeting specific keywords.

## Process

1. Ask the user for:
   - **Target keyword(s)** — What search terms should this page rank for?
   - **Search intent** — What is someone searching for this looking to do?
   - **Page angle** — e.g., "alternative to X", "best Y for Z", "how to W"

2. Generate the page entry for `siteConfig.seoPages` in `src/config/site.ts`:
   - `slug` — URL-friendly slug (e.g., `"best-alternative-to-competitor"`)
   - `title` — SEO title with primary keyword near the front, product name at end (under 60 chars)
   - `description` — Meta description with keyword, compelling CTA (under 160 chars)
   - `keywords` — Array of 3-5 related keywords
   - `sections` — 3-5 content sections, each with `heading` (H2) and `content` (1-2 paragraphs)

3. Content guidelines for each section:
   - Use the target keyword naturally in headings and body text
   - Include the product name 2-3 times per section
   - Write for the search intent (informational, comparison, or transactional)
   - Each section should be 100-200 words
   - Use specific, concrete language (avoid generic filler)

4. Add the entry to the `seoPages` array in `src/config/site.ts`

5. Verify the page renders by checking `/{slug}` in the browser

6. Remind the user to:
   - Submit the updated sitemap to Google Search Console
   - The page is automatically included in `/sitemap.xml`
   - Consider internal linking from the homepage or other pages
