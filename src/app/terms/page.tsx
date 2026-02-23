import { type Metadata } from "next";
import { siteConfig } from "@/config/site";
import { generatePageMetadata } from "@/lib/metadata";
import { SharedNav } from "@/app/_components/shared-nav";
import { SharedFooter } from "@/app/_components/shared-footer";

export const metadata: Metadata = generatePageMetadata({
  title: `Terms of Service — ${siteConfig.name}`,
  description: `${siteConfig.name} terms of service. Read the terms and conditions for using our platform.`,
  path: "/terms",
});

export default function TermsOfService() {
  return (
    <>
      <SharedNav />

      <main className="mx-auto max-w-3xl px-4 pt-28 pb-16 sm:px-6">
        <h1 className="text-3xl font-bold sm:text-4xl">Terms of Service</h1>
        <p className="text-muted-foreground mt-2 text-sm">
          Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed sm:text-base">
          <section>
            <h2 className="text-xl font-semibold">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground mt-3">
              By accessing or using {siteConfig.name} (&ldquo;the
              Service&rdquo;), you agree to be bound by these Terms of Service.
              If you do not agree to these terms, please do not use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">
              2. Description of Service
            </h2>
            <p className="text-muted-foreground mt-3">
              {siteConfig.name} is a software platform that provides{" "}
              {siteConfig.description.toLowerCase()}. The Service includes
              waitlist registration and product access.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">
              3. User Responsibilities
            </h2>
            <p className="text-muted-foreground mt-3">
              When using {siteConfig.name}, you agree to:
            </p>
            <ul className="text-muted-foreground mt-2 list-disc space-y-1 pl-5">
              <li>Provide accurate and up-to-date information</li>
              <li>
                Use the Service only for lawful purposes and in compliance with
                all applicable laws
              </li>
              <li>
                Not attempt to interfere with, disrupt, or reverse-engineer the
                Service
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">
              4. Intellectual Property
            </h2>
            <p className="text-muted-foreground mt-3">
              All content, branding, and technology that make up{" "}
              {siteConfig.name} are owned by {siteConfig.organization.name} or
              its licensors. You may not copy, modify, or distribute any part of
              the Service without prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">
              5. Limitation of Liability
            </h2>
            <p className="text-muted-foreground mt-3">
              To the fullest extent permitted by law,{" "}
              {siteConfig.organization.name} shall not be liable for any
              indirect, incidental, special, consequential, or punitive damages
              arising from your use of the Service. The Service is provided
              &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without
              warranties of any kind.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">6. Changes to Terms</h2>
            <p className="text-muted-foreground mt-3">
              We reserve the right to modify these Terms at any time. Changes
              will be posted on this page with an updated date. Your continued
              use of the Service after changes are posted constitutes your
              acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">7. Contact</h2>
            <p className="text-muted-foreground mt-3">
              If you have any questions about these Terms of Service, please
              contact us at:{" "}
              <a
                href={`mailto:hi@${new URL(siteConfig.url).hostname}`}
                className="text-primary underline underline-offset-2"
              >
                hi@{new URL(siteConfig.url).hostname}
              </a>
            </p>
          </section>
        </div>
      </main>

      <SharedFooter />
    </>
  );
}
