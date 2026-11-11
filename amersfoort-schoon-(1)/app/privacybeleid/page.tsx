import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import { company } from "@/lib/company";
import { CookieSettingsButton } from "@/components/PrivacyConsent";

export const metadata: Metadata = {
  title: "Privacybeleid",
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
              Puurix (hierna &quot;wij&quot; of &quot;ons&quot;), ingeschreven bij de Kamer van Koophandel onder nummer {company.registrationNumber}, is de verwerkingsverantwoordelijke voor de verwerking van persoonsgegevens via deze website.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-primary mb-2">2. Welke gegevens verzamelen wij?</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Naam, e-mailadres, type ruimte, gewenste schoonmaakfrequentie en eventuele wensen die u zelf invult in een aanvraag.</li>
              <li>Technische bezoekgegevens, zoals IP-adres en browserinformatie, wanneer u toestemming geeft voor analytische en marketingcookies.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-primary mb-2">3. Doel van de gegevensverwerking</h2>
            <p>
              We gebruiken aanvraaggegevens om op uw verzoek contact op te nemen en een passende offerte te maken. Na uw toestemming kunnen Google Analytics, Google Ads, Microsoft Clarity, Meta Pixel en Meta Conversions API worden gebruikt voor statistieken en marketing. Formulieren worden verwerkt via Web3Forms en Formspree; reviewwidgets worden geleverd door Trustoo en Trustpilot. De cookiekeuze kunt u hieronder aanpassen.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-primary mb-2">4. Bewaartermijn & Beveiliging</h2>
            <p>
              Aanvraaggegevens worden bewaard zolang dat nodig is om uw aanvraag af te handelen en eventuele afspraken uit te voeren. De externe formulier-, review- en meetdiensten verwerken gegevens volgens hun eigen voorwaarden en privacyverklaringen. Wij nemen passende maatregelen om misbruik, verlies en onbevoegde toegang te voorkomen.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-primary mb-2">5. Uw rechten</h2>
            <p>
              U heeft het recht om uw persoonsgegevens in te zien, te corrigeren of te laten verwijderen. Neem hiervoor contact met ons op via <a href="mailto:info@puurix.nl" className="text-accent underline">info@puurix.nl</a>.
            </p>
          </section>
        </div>
        <CookieSettingsButton />
      </main>
      <Footer />
    </div>
  );
}
