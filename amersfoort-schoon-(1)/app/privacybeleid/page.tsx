import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacybeleid | Puurix Schoonmaakbedrijf",
  description: "Lees hoe Puurix omgaat met uw persoonsgegevens conform de AVG (GDPR).",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-stone-50 text-slate-800">
      <main className="container mx-auto max-w-4xl px-6 pt-36 pb-20">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-primary mb-6">
          Privacybeleid & Cookieverklaring
        </h1>
        <p className="text-sm text-slate-500 mb-8">Laatst bijgewerkt: 2026</p>

        <div className="space-y-6 text-sm leading-relaxed text-slate-700 bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-stone-200">
          <section>
            <h2 className="text-lg font-bold text-primary mb-2">1. Wie zijn wij?</h2>
            <p>
              Puurix (hierna &quot;wij&quot; of &quot;ons&quot;), gevestigd te Oosterhout en ingeschreven bij de Kamer van Koophandel onder nummer 90289136, is de verwerkingsverantwoordelijke voor de verwerking van persoonsgegevens via deze website.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-primary mb-2">2. Welke gegevens verzamelen wij?</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Naam en bedrijfsnaam</li>
              <li>E-mailadres en telefoonnummer</li>
              <li>Locatiegegevens en gewenste diensten (via offerteformulieren)</li>
              <li>Geanonimiseerde website-statistieken (IP-adres, paginaweergaves via cookies)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-primary mb-2">3. Doel van de gegevensverwerking</h2>
            <p>
              Wij verwerken persoonsgegevens uitsluitend om contact op te nemen naar aanleiding van offerteaanvragen, schoonmaakopdrachten correct uit te voeren, en onze website en marketingcampagnes te optimaliseren via Google Analytics en Meta CAPI.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-primary mb-2">4. Bewaartermijn & Beveiliging</h2>
            <p>
              Wij bewaren uw gegevens niet langer dan noodzakelijk is voor de doeleinden waarvoor zij zijn verzameld of zoals wettelijk verplicht. Wij nemen passende maatregelen om misbruik, verlies en onbevoegde toegang te voorkomen.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-primary mb-2">5. Uw rechten</h2>
            <p>
              U heeft het recht om uw persoonsgegevens in te zien, te corrigeren of te laten verwijderen. Neem hiervoor contact met ons op via <a href="mailto:puurixschoonmaak@gmail.com" className="text-accent underline">puurixschoonmaak@gmail.com</a>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}