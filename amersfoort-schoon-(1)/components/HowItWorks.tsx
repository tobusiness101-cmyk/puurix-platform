import { FileText, Users, ClipboardCheck, Sparkles } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Offerte aanvragen",
    desc: "Gebruik de rekentool voor een indicatie, of vraag direct een offerte op maat aan. Wij reageren snel met een voorstel.",
    icon: FileText,
  },
  {
    number: "2",
    title: "Kennismaking",
    desc: "We bespreken uw wensen en stemmen een schoonmaakplan af op uw pand, branche en planning.",
    icon: Users,
  },
  {
    number: "3",
    title: "Vast team gekoppeld",
    desc: "Een vast, herkenbaar team wordt aan uw locatie gekoppeld, zodat zij uw pand en afspraken kennen.",
    icon: ClipboardCheck,
  },
  {
    number: "4",
    title: "Schoonmaak",
    desc: "Wij gaan aan de slag. Elke ronde wordt afgevinkt op een checklist, met voor- en na-foto's als bewijs.",
    icon: Sparkles,
  },
];

export const HowItWorks = () => {
  return (
    <section className="bg-muted py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="mb-4 inline-block rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-bold tracking-wide text-accent uppercase">
            Hoe werkt het?
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
            In vier stappen geregeld
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white shadow-premium">
                  <Icon className="h-7 w-7" />
                </div>
                <span className="mb-2 text-xs font-bold tracking-widest text-accent uppercase">
                  Stap {step.number}
                </span>
                <h3 className="mb-2 text-lg font-bold text-primary">{step.title}</h3>
                <p className="text-sm leading-relaxed text-primary/70">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
