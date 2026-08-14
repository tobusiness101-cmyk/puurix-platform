import { Hero } from "@/components/Hero";
import { TrustMarquee } from "@/components/TrustMarquee";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks"
import { InfoSections } from "@/components/InfoSections";
import { Pricing } from "@/components/Pricing";
import { Rekentool } from "@/components/Rekentool";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { QuoteCalculator } from "@/components/QuoteCalculator";
import { LeadMagnet } from "@/components/LeadMagnet";
import { Footer } from "@/components/Footer";
import { StickyContact } from "@/components/StickyContact";
import { StickyCallBar } from "@/components/StickyCallBar";
import { features } from "@/lib/features";

export default function Home() {
  return (
    <main className="relative w-full overflow-hidden">
      {features.hero && <Hero />}
      {features.trustMarquee && <TrustMarquee />}
      {features.services && <Services />}
      <HowItWorks />
      {features.infoSections && <InfoSections />}
      <Pricing />
      {features.beforeAfterSlider && <BeforeAfterSlider />}
      <Testimonials />
      {features.faq && <Faq />}

      {/* Rekentool: directe prijsindicatie + bel-CTA */}
      {features.rekentool && <Rekentool />}
      {features.quoteCalculator && <QuoteCalculator />}

      {features.leadMagnet && <LeadMagnet />}
      {features.footer && <Footer />}
      {features.stickyContact && <StickyContact />}
      <StickyCallBar />
    </main>
  );
}