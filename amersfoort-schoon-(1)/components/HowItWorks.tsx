import { FileText, Users, ClipboardCheck, Sparkles } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      id: "01",
      name: "1. Offerte aanvragen",
      description: "Gebruik de rekentool voor een indicatie, of vraag direct een offerte aan. Binnen 24 uur ontvangt u een reactie met een eerste voorstel.",
      icon: FileText,
    },
    {
      id: "02",
      name: "2. Kennismaking",
      description: "We plannen een vrijblijvende bezichtiging op locatie in en bespreken uw wensen, zodat het schoonmaakplan aansluit op uw pand en branche.",
      icon: Users,
    },
    {
      id: "03",
      name: "3. Vast team gekoppeld",
      description: "Een vast, herkenbaar team wordt aan uw locatie gekoppeld, zodat zij uw pand en afspraken kennen.",
      icon: ClipboardCheck,
    },
    {
      id: "04",
      name: "4. Schoonmaak",
      description: "Wij gaan aan de slag. Elke ronde wordt afgevinkt op een checklist, met voor- en na-foto's als bewijs.",
      icon: Sparkles,
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            In 4 stappen een stralend pand
          </h2>
          <p className="mt-4 text-lg text-primary/70">
            Wij houden van duidelijkheid. Geen ingewikkelde contracten, maar een transparante werkwijze zodat u precies weet waar u aan toe bent.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.id} className="relative p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="absolute -top-4 -left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white font-bold text-lg shadow-lg">
                {step.id}
              </div>
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <step.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-primary">
                {step.name}
              </h3>
              <p className="text-primary/70 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
