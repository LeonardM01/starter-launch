import { Sparkles } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function SharedFooter() {
  return (
    <footer className="border-border/50 border-t px-4 py-12 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link href="/" className="flex items-center gap-2">
            <Sparkles className="text-primary size-5" />
            <span className="font-bold">{siteConfig.name}</span>
          </Link>
          <p className="text-muted-foreground mt-3 text-sm">
            {siteConfig.footer.description}
          </p>
        </div>

        {siteConfig.footer.columns.map((column) => (
          <div key={column.title}>
            <h4 className="mb-3 text-sm font-semibold">{column.title}</h4>
            <ul className="text-muted-foreground grid gap-2 text-sm">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-border/30 text-muted-foreground mx-auto mt-8 max-w-6xl border-t pt-8 text-center text-sm">
        &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
        reserved.
      </div>
    </footer>
  );
}
