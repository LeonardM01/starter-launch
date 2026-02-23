import { ProductJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { ScrollAnimator } from "@/app/_components/scroll-animator";
import { SharedNav } from "@/app/_components/shared-nav";
import { SharedFooter } from "@/app/_components/shared-footer";
import { Hero } from "@/app/_components/sections/hero";
import { Features } from "@/app/_components/sections/features";
import { Reviews } from "@/app/_components/sections/reviews";
import { Faq } from "@/app/_components/sections/faq";
import { CtaSection } from "@/app/_components/sections/cta-section";

export default function Home() {
  return (
    <>
      <ScrollAnimator />
      <ProductJsonLd />
      <FaqJsonLd />
      <SharedNav />
      <main>
        <Hero />
        <Features />
        <Reviews />
        <Faq />
        <CtaSection />
      </main>
      <SharedFooter />
    </>
  );
}
