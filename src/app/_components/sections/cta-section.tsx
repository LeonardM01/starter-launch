import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { CTAButton } from "@/app/_components/cta-button";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"
      />
      <div className="animate-on-scroll relative mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">
          {siteConfig.cta.heading.replace(siteConfig.cta.headingHighlight, "")}
          <span className="text-gradient-primary">
            {siteConfig.cta.headingHighlight}
          </span>
        </h2>
        <p className="text-muted-foreground mx-auto mt-4 max-w-lg">
          {siteConfig.cta.subheading}
        </p>
        <div className="mt-8">
          <CTAButton className="animate-pulse-glow gap-2 px-8 text-base">
            {siteConfig.cta.buttonLabel}
            <ArrowRight className="size-4" />
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
