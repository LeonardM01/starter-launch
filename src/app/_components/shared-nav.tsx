import { Sparkles } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { CTAButton } from "./cta-button";

export function SharedNav() {
  return (
    <nav className="border-border/50 bg-background/80 fixed top-0 z-50 w-full border-b backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Sparkles className="text-primary size-6" />
          <span className="text-lg font-bold">{siteConfig.name}</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {siteConfig.nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <CTAButton size="sm">{siteConfig.nav.cta.label}</CTAButton>
      </div>
    </nav>
  );
}
