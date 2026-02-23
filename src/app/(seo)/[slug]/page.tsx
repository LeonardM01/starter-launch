import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";

import { siteConfig } from "@/config/site";
import { generatePageMetadata } from "@/lib/metadata";
import { OrganizationJsonLd, ProductJsonLd } from "@/components/seo/json-ld";
import { SharedNav } from "@/app/_components/shared-nav";
import { SharedFooter } from "@/app/_components/shared-footer";
import { ScrollAnimator } from "@/app/_components/scroll-animator";
import { CTAButton } from "@/app/_components/cta-button";

function getPageConfig(slug: string) {
  return siteConfig.seoPages.find((page) => page.slug === slug);
}

export function generateStaticParams() {
  return siteConfig.seoPages.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getPageConfig(slug);
  if (!page) return {};

  return generatePageMetadata({
    title: page.title,
    description: page.description,
    keywords: [...page.keywords],
    path: `/${page.slug}`,
  });
}

export default async function SeoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getPageConfig(slug);
  if (!page) notFound();

  return (
    <>
      <ScrollAnimator />
      <OrganizationJsonLd />
      <ProductJsonLd />
      <SharedNav />

      <main className="mx-auto max-w-4xl px-4 pt-28 pb-16 sm:px-6">
        <div className="animate-on-scroll">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
            {page.title.split("|")[0]?.trim()}
          </h1>
          <p className="text-muted-foreground mt-4 text-lg">
            {page.description}
          </p>
        </div>

        <div className="mt-12 space-y-12">
          {page.sections.map((section, i) => (
            <section
              key={i}
              className={`animate-on-scroll stagger-${String(Math.min(i + 1, 5))}`}
            >
              <h2 className="text-2xl font-bold">{section.heading}</h2>
              <p className="text-muted-foreground mt-3 leading-relaxed">
                {section.content}
              </p>
            </section>
          ))}
        </div>

        {/* CTA */}
        <div className="animate-on-scroll mt-16 rounded-2xl border border-border/30 bg-card p-8 text-center sm:p-12">
          <h2 className="text-2xl font-bold sm:text-3xl">
            {siteConfig.cta.heading.replace(
              siteConfig.cta.headingHighlight,
              "",
            )}
            <span className="text-gradient-primary">
              {siteConfig.cta.headingHighlight}
            </span>
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-lg">
            {siteConfig.cta.subheading}
          </p>
          <div className="mt-6">
            <CTAButton className="gap-2 px-8 text-base">
              {siteConfig.cta.buttonLabel}
              <ArrowRight className="size-4" />
            </CTAButton>
          </div>
        </div>
      </main>

      <SharedFooter />
    </>
  );
}
