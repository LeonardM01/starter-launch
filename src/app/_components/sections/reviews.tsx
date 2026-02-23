import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/site";

export function Reviews() {
  return (
    <section id="testimonials" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="animate-on-scroll text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Loved by{" "}
            <span className="text-gradient-primary">Early Users</span>
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-xl">
            Join thousands of happy users who have already discovered the
            difference.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {siteConfig.reviews.map((review, i) => (
            <Card
              key={review.name}
              className={`animate-on-scroll stagger-${String(i + 1)} border-border/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
            >
              <CardContent className="flex flex-col gap-4 pt-6">
                <div className="flex gap-1">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="size-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <blockquote className="text-muted-foreground text-sm leading-relaxed">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <div className="border-border/30 mt-auto border-t pt-4">
                  <p className="text-sm font-medium">{review.name}</p>
                  <p className="text-muted-foreground text-xs">
                    {review.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats row */}
        <div className="animate-on-scroll mt-16 grid grid-cols-2 gap-6 rounded-2xl border border-border/30 bg-card p-8 sm:grid-cols-4">
          {siteConfig.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-bold text-primary sm:text-3xl">
                {stat.value}
              </p>
              <p className="text-muted-foreground mt-1 text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
