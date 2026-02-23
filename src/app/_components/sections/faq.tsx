import { siteConfig } from "@/config/site";

export function Faq() {
  return (
    <section id="faq" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <div className="animate-on-scroll text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            {siteConfig.faq.heading}
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {siteConfig.faq.items.map((item, i) => (
            <details
              key={i}
              className={`animate-on-scroll stagger-${String(Math.min(i + 1, 5))} group rounded-lg border border-border/30 bg-card`}
            >
              <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-sm font-medium transition-colors hover:text-primary [&::-webkit-details-marker]:hidden">
                {item.question}
                <span className="ml-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="border-border/30 border-t px-6 py-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
