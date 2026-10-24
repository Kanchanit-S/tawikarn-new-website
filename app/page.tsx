import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import PortfolioPreview from "@/components/PortfolioPreview";
import WhyUs from "@/components/WhyUs";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import { faqPageJsonLd, faqItems } from "@/lib/seo";

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd(faqItems)) }}
      />
      <Hero />
      <Stats />
      <Services />
      <PortfolioPreview />
      <WhyUs />
      <FAQ />
      <Contact />
    </>
  );
}
