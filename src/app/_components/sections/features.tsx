import * as LucideIcons from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/site";

export function Features() {
  return (
    <section id="features" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="animate-on-scroll text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            {siteConfig.features.heading}{" "}
            <span className="text-gradient-primary">
              {siteConfig.features.headingHighlight}
            </span>
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl">
            {siteConfig.features.subheading}
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.features.items.map((feature, i) => {
            const icons = LucideIcons as unknown as Record<string, LucideIcons.LucideIcon>;
            const Icon = icons[feature.icon] ?? LucideIcons.Star;

            return (
              <Card
                key={feature.title}
                className={`animate-on-scroll stagger-${String(i + 1)} border-border/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
              >
                <CardContent className="pt-6">
                  <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
