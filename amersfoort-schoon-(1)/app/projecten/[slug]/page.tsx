import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { Rekentool } from "@/components/Rekentool";
import { Footer } from "@/components/Footer";

// Tijdelijke data. Je kunt dit later naar een lib/projecten.ts verplaatsen.
const projectData = {
  "bouwoplevering-station-breda": {
    titel: "Bouwoplevering Station Breda",
    type: "Opleveringsschoonmaak",
    beschrijving: "Na een intensieve verbouwing hebben wij deze locatie volledig stofvrij en glanzend opgeleverd binnen een strakke deadline.",
  },
  "kantoor-dieptereiniging-oosterhout": {
    titel: "Dieptereiniging Kantoor Oosterhout",
    type: "Kantoorschoonmaak",
    beschrijving: "Een zwaar vervuild kantoorpand van 800m2 in één weekend volledig getransformeerd en klaargemaakt voor de nieuwe huurder.",
  },
};

export function generateStaticParams() {
  return Object.keys(projectData).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = projectData[params.slug as keyof typeof projectData];
  if (!project) return {};
  return {
    title: `${project.titel} | Puurix Projecten`,
    description: project.beschrijving,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projectData[params.slug as keyof typeof projectData];
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-stone-50 pt-32">
      <div className="container mx-auto px-6 max-w-4xl text-center mb-16">
        <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent font-bold uppercase tracking-wider mb-4">
          Project: {project.type}
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">
          {project.titel}
        </h1>
        <p className="text-lg text-primary/70 leading-relaxed">
          {project.beschrijving}
        </p>
      </div>

      {/* Jouw bestaande interactieve slider */}
      <BeforeAfterSlider />
      
      {/* Directe conversie tool onder het bewijs */}
      <Rekentool />
      
      <Footer />
    </main>
  );
}