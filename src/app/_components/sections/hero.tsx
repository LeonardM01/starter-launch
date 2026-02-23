import { ArrowRight, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";
import { CTAButton } from "@/app/_components/cta-button";

export function Hero() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden px-4 pt-16">
      {/* Decorative gradient blobs */}
      <div
        aria-hidden="true"
        className="animate-float pointer-events-none absolute -top-40 -left-40 size-[500px] rounded-full bg-primary/15 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="animate-float-delayed pointer-events-none absolute -right-32 -bottom-32 size-[400px] rounded-full bg-secondary/20 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="animate-float-delayed pointer-events-none absolute top-1/3 left-1/2 size-[300px] rounded-full bg-primary/10 blur-[80px]"
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <div className="animate-fade-in-down mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
          <Sparkles className="size-4" />
          {siteConfig.hero.badge}
        </div>

        <h1 className="animate-fade-in-up text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
          {siteConfig.hero.headline.replace(siteConfig.hero.highlightedText, "")}
          <span className="text-shimmer-primary">
            {siteConfig.hero.highlightedText}
          </span>
        </h1>

        <p
          className="animate-fade-in-up text-muted-foreground mx-auto mt-6 max-w-2xl text-lg sm:text-xl"
          style={{ animationDelay: "0.15s" }}
        >
          {siteConfig.hero.subheadline}
        </p>

        <div
          className="animate-fade-in-up mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          style={{ animationDelay: "0.3s" }}
        >
          <CTAButton className="animate-pulse-glow gap-2 px-8 text-base">
            {siteConfig.hero.cta.label}
            <ArrowRight className="size-4" />
          </CTAButton>
          <a
            href={siteConfig.hero.secondaryCta.href}
            className="text-muted-foreground hover:text-foreground text-sm underline-offset-4 transition-colors hover:underline"
          >
            {siteConfig.hero.secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
