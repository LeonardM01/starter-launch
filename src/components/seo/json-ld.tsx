import { siteConfig } from "@/config/site";

function JsonLdScript({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export function OrganizationJsonLd() {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: siteConfig.organization.name,
        url: siteConfig.url,
        logo: `${siteConfig.url}${siteConfig.organization.logo}`,
        description: siteConfig.description,
        foundingDate: siteConfig.organization.foundingDate,
        founder: siteConfig.organization.founders.map((name) => ({
          "@type": "Person",
          name,
        })),
      }}
    />
  );
}

export function WebSiteJsonLd() {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        potentialAction: {
          "@type": "SearchAction",
          target: `${siteConfig.url}/?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      }}
    />
  );
}

export function ProductJsonLd() {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: siteConfig.name,
        description: siteConfig.description,
        url: siteConfig.url,
        applicationCategory: "BusinessApplication",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          availability: "https://schema.org/PreOrder",
        },
        aggregateRating: siteConfig.reviews.length > 0
          ? {
              "@type": "AggregateRating",
              ratingValue:
                siteConfig.reviews.reduce((sum, r) => sum + r.rating, 0) /
                siteConfig.reviews.length,
              reviewCount: siteConfig.reviews.length,
              bestRating: 5,
            }
          : undefined,
        review: siteConfig.reviews.map((r) => ({
          "@type": "Review",
          reviewRating: {
            "@type": "Rating",
            ratingValue: r.rating,
            bestRating: 5,
          },
          author: { "@type": "Person", name: r.name },
          reviewBody: r.quote,
        })),
      }}
    />
  );
}

export function FaqJsonLd() {
  if (siteConfig.faq.items.length === 0) return null;

  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: siteConfig.faq.items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }}
    />
  );
}
