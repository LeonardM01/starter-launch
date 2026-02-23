/**
 * Central site configuration — single source of truth for all product-specific data.
 *
 * The `/bootstrap` skill edits this file. Every component reads from it.
 * Customize the values below for your product. The structure should stay the same.
 */

const url = process.env.NEXT_PUBLIC_PRODUCTION_URL ?? "https://example.com";

export const siteConfig = {
  // ── Brand ──────────────────────────────────────────────────
  name: "YourProduct",
  tagline: "Your compelling tagline goes here",
  description:
    "A brief description of your product that will be used in meta tags and throughout the site.",
  url,
  ogImage: "/og-image.png",

  // ── Navigation ─────────────────────────────────────────────
  nav: {
    links: [
      { label: "Features", href: "#features" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "FAQ", href: "#faq" },
    ],
    cta: { label: "Get Started", href: "#" },
  },

  // ── Hero ───────────────────────────────────────────────────
  hero: {
    badge: "Now in Early Access",
    headline: "Your Main Headline Goes Here",
    highlightedText: "Goes Here",
    subheadline:
      "A longer description that explains your product value proposition in one or two sentences. Make it compelling and clear.",
    cta: { label: "Join the Waitlist", href: "#" },
    secondaryCta: { label: "Learn more", href: "#features" },
  },

  // ── Features (3-6 items) ───────────────────────────────────
  features: {
    heading: "Everything You Need",
    headingHighlight: "to Succeed",
    subheading: "Our platform provides all the tools you need — powered by AI.",
    items: [
      {
        title: "Lightning Fast",
        description:
          "Built for speed with cutting-edge technology that keeps your experience smooth and responsive.",
        icon: "Zap",
      },
      {
        title: "Secure by Default",
        description:
          "Enterprise-grade security built in from day one. Your data is encrypted and protected.",
        icon: "Shield",
      },
      {
        title: "Smart Analytics",
        description:
          "Gain deep insights into your usage patterns with our intelligent analytics dashboard.",
        icon: "BarChart3",
      },
      {
        title: "Easy Integration",
        description:
          "Connect with your favorite tools in minutes. We support all major platforms and services.",
        icon: "Plug",
      },
    ],
  },

  // ── Reviews / Testimonials ─────────────────────────────────
  reviews: [
    {
      quote:
        "This product completely transformed how we work. The results speak for themselves — 3x productivity improvement.",
      name: "Alex Johnson",
      role: "CEO, TechCorp",
      rating: 5,
    },
    {
      quote:
        "The best tool I've used in years. Intuitive, powerful, and the support team is incredibly responsive.",
      name: "Sarah Chen",
      role: "Product Manager, StartupXYZ",
      rating: 5,
    },
    {
      quote:
        "We evaluated dozens of solutions before choosing this one. No regrets — it's been a game-changer for our team.",
      name: "Marcus Rivera",
      role: "Engineering Lead, ScaleUp",
      rating: 5,
    },
  ],

  // ── Stats / Social Proof ───────────────────────────────────
  stats: [
    { value: "10K+", label: "Users" },
    { value: "99.9%", label: "Uptime" },
    { value: "4.9/5", label: "Rating" },
    { value: "24/7", label: "Support" },
  ],

  // ── FAQ ────────────────────────────────────────────────────
  faq: {
    heading: "Frequently Asked Questions",
    items: [
      {
        question: "How does the free trial work?",
        answer:
          "You get full access to all features for 14 days, no credit card required. At the end of the trial, you can choose a plan that fits your needs.",
      },
      {
        question: "Can I cancel anytime?",
        answer:
          "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees.",
      },
      {
        question: "Is my data secure?",
        answer:
          "Absolutely. We use industry-standard encryption and follow best practices for data security. Your data is never shared with third parties.",
      },
      {
        question: "Do you offer team plans?",
        answer:
          "Yes! We offer team plans with collaborative features, admin controls, and volume discounts. Contact us for custom enterprise pricing.",
      },
      {
        question: "What integrations do you support?",
        answer:
          "We integrate with all major platforms including Slack, GitHub, Jira, Notion, and more. Check our integrations page for the full list.",
      },
    ],
  },

  // ── Final CTA ──────────────────────────────────────────────
  cta: {
    heading: "Ready to Get Started?",
    headingHighlight: "Get Started",
    subheading:
      "Join thousands of happy users and transform the way you work. Sign up for early access today.",
    buttonLabel: "Get Early Access",
  },

  // ── Footer ─────────────────────────────────────────────────
  footer: {
    description:
      "Your product tagline or brief description for the footer area.",
    columns: [
      {
        title: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Testimonials", href: "#testimonials" },
          { label: "FAQ", href: "#faq" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Privacy Policy", href: "/privacy" },
          { label: "Terms of Service", href: "/terms" },
        ],
      },
    ],
    socials: [
      // { platform: "twitter", href: "https://twitter.com/yourproduct" },
      // { platform: "github", href: "https://github.com/yourproduct" },
    ],
  },

  // ── SEO Keyword Pages ──────────────────────────────────────
  seoPages: [
    {
      slug: "alternative-to-competitor",
      title: "Best Alternative to Competitor | YourProduct",
      description:
        "Looking for a better alternative to Competitor? YourProduct offers superior features at a fraction of the cost.",
      keywords: [
        "competitor alternative",
        "best alternative to competitor",
        "competitor vs yourproduct",
      ],
      sections: [
        {
          heading: "Why Switch from Competitor?",
          content:
            "Many users find that Competitor lacks key features they need. YourProduct was built from the ground up to address these gaps.",
        },
        {
          heading: "Feature Comparison",
          content:
            "YourProduct includes all the features you love about Competitor, plus advanced capabilities like AI-powered analytics, real-time collaboration, and seamless integrations.",
        },
        {
          heading: "Easy Migration",
          content:
            "Switching is easy — our migration tool imports all your data in minutes. No downtime, no hassle.",
        },
      ],
    },
    {
      slug: "use-case-for-teams",
      title: "YourProduct for Teams — Collaborate Better",
      description:
        "Discover how teams use YourProduct to streamline workflows, boost productivity, and ship faster.",
      keywords: [
        "team collaboration tool",
        "productivity for teams",
        "team workflow",
      ],
      sections: [
        {
          heading: "Built for Team Collaboration",
          content:
            "YourProduct brings your entire team together with shared workspaces, real-time editing, and smart notifications.",
        },
        {
          heading: "Trusted by Leading Teams",
          content:
            "Teams at companies of all sizes rely on YourProduct to stay organized and deliver results on time.",
        },
      ],
    },
  ],

  // ── Organization Schema ────────────────────────────────────
  organization: {
    name: "YourCompany",
    logo: "/og-image.png",
    foundingDate: "2025",
    founders: ["Founder Name"],
  },

  // ── Google Verification ────────────────────────────────────
  googleSiteVerification:
    process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "",
};

export type SiteConfig = typeof siteConfig;
