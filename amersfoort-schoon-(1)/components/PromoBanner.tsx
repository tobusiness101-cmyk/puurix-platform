import Link from 'next/link';

export function PromoBanner() {
  return (
    <section className="w-full px-4 py-16 sm:px-6 lg:px-8 flex justify-center bg-stone-50">
      <div className="relative w-full max-w-5xl overflow-hidden rounded-[2.5rem] p-8 sm:p-12 text-white shadow-2xl border border-white/15">
        
        {/* Achtergrondfoto met overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 scale-105" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80')" }}
        />
        {/* Donkergroene / slate overlay voor contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-emerald-950/85 z-0 backdrop-blur-[2px]" />

        {/* Subtiele lichtgloed */}
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl pointer-events-none z-0" />
        <div className="absolute -bottom-24 right-1/4 h-72 w-72 rounded-full bg-amber-400/15 blur-3xl pointer-events-none z-0" />

        <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
          
          {/* Linkerzijde: Tekst & Knoppen */}
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-emerald-300 border border-white/15 mb-4">
              <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
              Tijdelijke Welkomstactie
            </span>
            
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-3">
              Laat uw bedrijfspand <br className="hidden sm:inline" />weer stralen.
            </h3>
            
            <p className="text-sm sm:text-base text-slate-300 max-w-lg mb-8 leading-relaxed">
              Vraag deze maand een offerte aan en profiteer direct van <strong>20% welkomstkorting</strong> op uw periodieke kantoor- of praktijkschoonmaak.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 w-full">
              {/* Primaire Actieknop naar de Rekentool */}
              <Link 
                href="/zakelijke-tarieven" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-2xl bg-amber-400 px-7 py-4 text-xs sm:text-sm font-black uppercase tracking-wider text-slate-950 shadow-[0_10px_25px_-5px_rgba(251,191,36,0.4)] hover:bg-amber-300 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Bereken prijs met 20% korting
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>

              {/* Secundaire Knop (Aangepast voor inline website weergave) */}
              <Link 
                href="#diensten" 
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-2xl bg-white/10 hover:bg-white/20 px-6 py-4 text-xs sm:text-sm font-bold text-slate-300 hover:text-white transition-all border border-white/10"
              >
                Bekijk onze diensten
              </Link>
            </div>

            <span className="inline-block mt-4 text-[11px] text-slate-400">
              ✓ 100% vrijblijvend • Direct online inzichtelijk
            </span>
          </div>

          {/* Rechterzijde: Foto + "-20%" Overlay */}
          <div className="relative flex flex-col items-center justify-center select-none shrink-0">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=700&q=80" 
                alt="Puurix Kantoor Schoonmaak" 
                className="h-48 sm:h-56 w-72 sm:w-80 object-cover rounded-3xl shadow-2xl border-2 border-white/20 -rotate-2 hover:rotate-0 transition-transform duration-300"
              />

              <div className="absolute -bottom-5 -left-5 bg-slate-900/90 backdrop-blur-md rounded-2xl p-3 px-4 shadow-2xl border border-white/15 flex items-center gap-2">
                <span className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200 leading-none">
                  -20%
                </span>
                <div className="text-left">
                  <div className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-400">Korting</div>
                  <div className="text-[9px] text-slate-400 font-medium">Welkomstdeal</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}