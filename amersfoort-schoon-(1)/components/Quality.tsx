const promises = [
  {
    title: "Rustig en zorgvuldig",
    description: "We werken met respect voor uw medewerkers, gasten, bewoners en patiënten.",
  },
  {
    title: "Betrouwbaar op afspraak",
    description: "Vaste tijden en een vast team. U hoeft er niet achteraan; wij houden de afspraken bij.",
  },
  {
    title: "Transparant in prijs",
    description: "U ontvangt een duidelijke offerte op maat, zonder verrassingen achteraf.",
  },
];

export const Quality = () => (
  <section id="kwaliteit" className="bg-accent text-[#F5F3EE]">
    <div className="container mx-auto grid max-w-[1300px] gap-12 px-6 py-20 sm:px-8 sm:py-28 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-20 lg:px-10">
      <div>
        <div className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-[#E6D3AC]">
          <span className="h-px w-10 bg-gold" />
          Kwaliteit
        </div>
        <h2 className="max-w-2xl text-4xl font-medium leading-[1.02] text-[#F5F3EE] sm:text-5xl lg:text-[4.25rem]">
          Schoon, zonder dat u er omkijken naar heeft.
        </h2>
      </div>

      <div>
        {promises.map((promise, index) => (
          <article
            key={promise.title}
            className={`border-t border-[#F5F3EE]/30 py-6 ${index === promises.length - 1 ? "border-b" : ""}`}
          >
            <h3 className="mb-2 text-lg font-semibold text-white sm:text-xl">{promise.title}</h3>
            <p className="max-w-xl text-sm leading-6 text-[#E4EFEA] sm:text-base sm:leading-7">{promise.description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
