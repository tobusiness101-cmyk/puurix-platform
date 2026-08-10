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

export default function Home() {
  return (
    <main className="relative w-full overflow-hidden">
      <Hero />
      <TrustMarquee />
      <Services />
      <HowItWorks />
      <InfoSections />
      <Pricing />
      <BeforeAfterSlider />
      <Testimonials />
      <Faq />
      <QuoteCalculator />
      
      {/*  <Rekentool />De Rekentool staat nu hier, net voor de Checklist! */}
     
      
      <LeadMagnet />
      <Footer />
      <StickyContact />
    </main>
  );
}
