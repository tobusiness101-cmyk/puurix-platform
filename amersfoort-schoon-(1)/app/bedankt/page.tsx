import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function BedanktPage() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-stone-50 px-6">
      <CheckCircle size={64} className="text-green-600 mb-6" />
      <h1 className="text-4xl font-black text-ink mb-4 text-center tracking-tight">
        Aanvraag Succesvol Ontvangen
      </h1>
      <p className="text-stone-600 text-center max-w-lg mb-8 leading-relaxed">
        Bedankt voor uw interesse in Puurix. We hebben uw gegevens in goede orde ontvangen en nemen binnen 24 uur contact met u op met een voorstel op maat.
      </p>
      <Link 
        href="/"
        className="bg-accent text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all"
      >
        Terug naar home
      </Link>
    </div>
  );
}