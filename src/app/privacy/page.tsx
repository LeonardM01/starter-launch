import { type Metadata } from "next";
import { siteConfig } from "@/config/site";
import { generatePageMetadata } from "@/lib/metadata";
import { SharedNav } from "@/app/_components/shared-nav";
import { SharedFooter } from "@/app/_components/shared-footer";

export const metadata: Metadata = generatePageMetadata({
  title: `Privacy Policy — ${siteConfig.name}`,
  description: `${siteConfig.name} privacy policy. Learn how we collect, use, and protect your personal information.`,
  path: "/privacy",
});

export default function PrivacyPolicy() {
  return (
    <>
      <SharedNav />

      <main className="mx-auto max-w-3xl px-4 pt-28 pb-16 sm:px-6">
        <h1 className="text-3xl font-bold sm:text-4xl">Privacy Policy</h1>
        <p className="text-muted-foreground mt-2 text-sm">
          Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed sm:text-base">
          <section>
            <h2 className="text-xl font-semibold">
              1. Information We Collect
            </h2>
            <p className="text-muted-foreground mt-3">
              When you join the {siteConfig.name} waitlist or use our service,
              we may collect the following information:
            </p>
            <ul className="text-muted-foreground mt-2 list-disc space-y-1 pl-5">
              <li>Your email address</li>
              <li>Preferences you provide during sign-up</li>
              <li>
                Basic usage data such as pages visited and interactions with the
                service
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">
              2. How We Use Your Information
            </h2>
            <p className="text-muted-foreground mt-3">
              We use the information we collect to:
            </p>
            <ul className="text-muted-foreground mt-2 list-disc space-y-1 pl-5">
              <li>Provide, maintain, and improve our service</li>
              <li>
                Send you updates about {siteConfig.name}, including waitlist
                status and new features
              </li>
              <li>Respond to your requests or questions</li>
              <li>Analyze usage patterns to improve the user experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">3. Data Sharing</h2>
            <p className="text-muted-foreground mt-3">
              We do not sell, rent, or trade your personal information to third
              parties. We may share data only with trusted service providers who
              assist us in operating our platform (e.g. email delivery, hosting),
              and only to the extent necessary for them to perform their
              services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">4. Data Retention</h2>
            <p className="text-muted-foreground mt-3">
              We retain your personal information for as long as your account is
              active or as needed to provide you with our services. If you
              request deletion of your data, we will remove it within 30 days
              unless we are required by law to retain it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">5. Your Rights</h2>
            <p className="text-muted-foreground mt-3">
              Depending on your jurisdiction, you may have the right to:
            </p>
            <ul className="text-muted-foreground mt-2 list-disc space-y-1 pl-5">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict processing of your data</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className="text-muted-foreground mt-2">
              To exercise any of these rights, please contact us using the
              details below.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">6. Contact</h2>
            <p className="text-muted-foreground mt-3">
              If you have any questions about this Privacy Policy, please contact
              us at:{" "}
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
