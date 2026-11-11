const steps = [
  {
    number: "01",
    title: "Kennismaking op locatie",
    desc: "We bekijken de ruimte, bespreken uw wensen en stellen vast wat er écht nodig is.",
  },
  {
    number: "02",
    title: "Heldere offerte op maat",
    desc: "Per werkzaamheid inzichtelijk, zodat u precies weet waarvoor u kiest.",
  },
  {
    number: "03",
    title: "Vast team aan de slag",
    desc: "Vaste gezichten met controle op kwaliteit en een vast aanspreekpunt.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="werkwijze" className="bg-[#F5F3EE] py-20 sm:py-28">
      <div className="container mx-auto grid max-w-[1300px] gap-12 px-6 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-10">
        <div className="flex flex-col items-start gap-5">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Werkwijze</span>
          <h2 className="max-w-xl text-4xl font-medium leading-[1.04] text-ink sm:text-5xl lg:text-[3.75rem]">
            Van kennismaking tot vast ritme.
          </h2>
          <p className="max-w-lg text-base leading-7 text-stone-600 sm:text-lg">
            Geen standaardpakket, maar een schoonmaakplan dat past bij uw locatie, openingstijden en verwachtingen.
          </p>
        </div>

        <ol className="m-0 flex list-none flex-col p-0">
          {steps.map((step, index) => (
            <li
              key={step.number}
              className={`flex gap-6 border-t border-[#C9C5B8] py-7 sm:gap-8 sm:py-8 ${
                index === steps.length - 1 ? "border-b" : ""
              }`}
            >
              <span className="min-w-12 font-display text-4xl leading-none text-accent sm:min-w-14 sm:text-5xl">
                {step.number}
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold text-ink sm:text-2xl">{step.title}</h3>
                <p className="max-w-xl text-sm leading-6 text-stone-600 sm:text-base sm:leading-7">{step.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
