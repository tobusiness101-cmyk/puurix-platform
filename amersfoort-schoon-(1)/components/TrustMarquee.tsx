import { Sparkles } from "lucide-react";

export const TrustMarquee = () => {
  // De tekst die we herhalen
  const text = "Ontdek de topkwaliteit van Puurix.";
  
  // We genereren een array van 6 items om de balk goed te vullen
  const items = Array.from({ length: 6 });

  return (
    // De parent container is flex en verbergt wat buiten beeld valt
    <div className="relative flex overflow-hidden bg-primary py-4 border-y border-white/10 group">
      
      {/* 
        Spoor 1: Beweegt soepel naar links via pure CSS (animate-marquee) 
      */}
      <div className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-12 px-6">
        {items.map((_, i) => (
          <div key={`track1-${i}`} className="flex items-center gap-12">
            <span className="text-white/90 font-serif text-lg md:text-xl font-medium tracking-wide">
              {text}
            </span>
            <Sparkles className="h-5 w-5 text-accent" />
          </div>
        ))}
      </div>

      {/* 
        Spoor 2: Een exacte kopie die er perfect achteraan rolt, 
        waardoor je nooit een hapering of lege ruimte ziet.
      */}
      <div aria-hidden="true" className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-12 px-6">
        {items.map((_, i) => (
          <div key={`track2-${i}`} className="flex items-center gap-12">
            <span className="text-white/90 font-serif text-lg md:text-xl font-medium tracking-wide">
              {text}
            </span>
            <Sparkles className="h-5 w-5 text-accent" />
          </div>
        ))}
      </div>

    </div>
  );
};