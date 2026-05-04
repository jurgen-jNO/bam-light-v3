import { useState } from "react";
import { ChevronRight, ArrowLeft, Check } from "lucide-react";
import MainNavigation from "@/components/MainNavigation";
import Footer from "@/components/Footer";

type MemberType =
  | "solo"
  | "growth"
  | "galaxy"
  | "academy"
  | "youth"
  | "friends";

interface Package {
  id: MemberType;
  name: string;
  tagline: string;
  audience: string;
  price: string;
  duration: string;
  benefits: string[];
  details: string[];
}

const packages: Package[] = [
  {
    id: "solo",
    name: "Solo",
    tagline: "Individueel lidmaatschap",
    audience: "Freelancers, zelfstandigen, start-ups",
    price: "€ 475 excl. BTW / jaar",
    duration: "12 maanden vanaf intekendatum — automatisch verlengd (3m vooropzeg)",
    benefits: [
      "10 gratis event-deelnames",
      "Korting op opleidingen (-25 tot -30%)",
      "BAM Magazine + Trends-Family abonnement",
      "Gratis halve dag opleiding",
      "2 gratis vragen per jaar voor LEG (legaal advies)",
      "Toegang tot BAM Think Tanks",
      "Toegang tot alle content op marketing.be",
      "Maandelijkse nieuwsbrief",
    ],
    details: [
      "Op naam geregistreerd",
      "Ledenprijs voor IAB MIXX Awards + BAM Marketing Congress",
      "Word lid van één van onze BAM Think Tanks",
      "Jouw vacature kan op onze website verschijnen",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "Bedrijfslidmaatschap (klein & middengroot)",
    audience: "KMO's en middelgrote bedrijven",
    price: "€ 3.115 excl. BTW / jaar",
    duration: "Loopt af op 31/12 — pro rata facturatie eerste jaar",
    benefits: [
      "Gratis event-deelname voor àlle medewerkers",
      "Alle opleidingen aan ledenprijs (-25 tot -30%)",
      "Gratis halve dag opleiding per medewerker",
      "Centraal gegevensbeheer via één contactpersoon",
      "Bedrijfsprofiel zichtbaar op marketing.be",
      "Toegang tot BAM Think Tanks",
      "Vacatures op marketing.be",
      "2 gratis vragen per jaar voor LEG",
    ],
    details: [
      "Inschrijving via CEO of HR",
      "Identificatie via BTW-nummer en domeincheck (@bedrijf)",
      "Ledenprijs voor IAB MIXX Awards + BAM Marketing Congress",
      "Mogelijkheid tot sponsorship (apart contract)",
      "Excel-template voor bulk upload van medewerkers",
    ],
  },
  {
    id: "galaxy",
    name: "Galaxy",
    tagline: "Corporate lidmaatschap",
    audience: "+250 medewerkers of groepen met meerdere entiteiten",
    price: "Op maat",
    duration: "Loopt af op 31/12 — pro rata facturatie eerste jaar",
    benefits: [
      "Gratis event-deelname voor àlle medewerkers van alle entiteiten",
      "Elke entiteit beheert eigen gegevens",
      "Premium positie op marketing.be",
      "Toegang tot BAM Think Tanks & Communities",
      "Strategisch advies & personal onboarding",
      "CMO Club toegang",
      "Prioritair sponsorship-aanbod",
      "Ledenprijs IAB MIXX Awards + BAM Marketing Congress",
    ],
    details: [
      "Meerdere BTW-nummers onder één groepsstructuur",
      "Gecentraliseerde of gedecentraliseerde facturatie",
      "Dedicated account manager",
      "Personal onboarding sessie met Fleur",
    ],
  },
  {
    id: "academy",
    name: "Academy",
    tagline: "Lidmaatschap voor docenten",
    audience: "Docenten marketing & communicatie",
    price: "€ 160 incl. BTW / jaar",
    duration: "12 maanden vanaf intekendatum",
    benefits: [
      "10 gratis event-deelnames",
      "Korting op opleidingen (-25 tot -30%)",
      "Gratis halve dag opleiding",
      "Toegang tot BAM Think Tanks",
      "Toegang tot alle content op marketing.be",
      "BAM Magazine",
      "Maandelijkse nieuwsbrief",
    ],
    details: [
      "Zelfde voordelenpakket als Solo, zonder Trends-abonnement",
      "Ledenprijs IAB MIXX Awards + BAM Marketing Congress",
      "Mogelijkheid om gastdocent te worden bij BAM Academy",
    ],
  },
  {
    id: "youth",
    name: "Youth",
    tagline: "Lidmaatschap -25 jaar",
    audience: "Studenten & young marketers onder 25",
    price: "Gratis",
    duration: "Per jaar — verlengbaar mits geldig bewijs",
    benefits: [
      "+10 gratis events per jaar (first in, first served)",
      "Gratis halve dag opleiding",
      "Toegang tot Future Marketeers community",
      "Nieuwsbrief voor studenten & young marketers",
      "Networking events met peers",
      "Toegang tot studentcontent op marketing.be",
    ],
    details: [
      "Bewijs via upload foto-ID met geboortedatum",
      "Automatische upgrade naar Solo bij 25ste verjaardag",
      "Toegang tot mentoring programma's",
    ],
  },
  {
    id: "friends",
    name: "Friends",
    tagline: "Gratis profiel",
    audience: "Prospects en niet-betalende contacten",
    price: "Gratis",
    duration: "Onbeperkt",
    benefits: [
      "Persoonlijk profiel op marketing.be",
      "Maandelijkse nieuwsbrief",
      "Toegang tot publieke content",
      "Aankondigingen van events en opleidingen",
    ],
    details: [
      "Geen toegang tot ledenvoordelen",
      "Upgrade naar Solo, Youth of Academy mogelijk",
      "Geen toegang tot Think Tanks of Communities",
    ],
  },
];

const WordLid = () => {
  const [selected, setSelected] = useState<MemberType | null>(null);

  const active = packages.find((p) => p.id === selected);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <MainNavigation />

      <main className="flex-1 max-w-[1100px] mx-auto w-full px-6 py-12">
        {/* Wireframe header */}
        <div className="border-b-2 border-dashed border-foreground/30 pb-6 mb-10">
          <p className="text-xs uppercase tracking-widest text-foreground/50 mb-2">
            [ wireframe — word lid ]
          </p>
          <h1 className="text-3xl font-bold text-foreground">
            Word lid van BAM
          </h1>
          <p className="text-sm text-foreground/60 mt-2 max-w-xl">
            Kies het lidmaatschap dat bij jou of je organisatie past. Klik op
            een pakket voor alle voordelen en details.
          </p>
        </div>

        {!active ? (
          /* ====== OVERVIEW GRID ====== */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {packages.map((pkg) => (
              <button
                key={pkg.id}
                onClick={() => setSelected(pkg.id)}
                className="text-left border-2 border-dashed border-foreground/40 bg-foreground/[0.02] hover:bg-foreground/[0.06] hover:border-foreground/70 transition-colors p-5 group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-foreground/40 mb-1">
                      [ pakket ]
                    </p>
                    <h2 className="text-xl font-bold text-foreground uppercase tracking-wide">
                      {pkg.name}
                    </h2>
                  </div>
                  <ChevronRight className="w-5 h-5 text-foreground/40 group-hover:text-foreground/80 group-hover:translate-x-0.5 transition-all" />
                </div>

                <p className="text-xs text-foreground/60 mb-3 leading-relaxed">
                  {pkg.tagline}
                </p>

                <div className="border-t border-dashed border-foreground/30 pt-3 space-y-1.5">
                  <div className="flex justify-between text-[11px] text-foreground/50 uppercase tracking-wide">
                    <span>Doelgroep</span>
                  </div>
                  <p className="text-xs text-foreground/80">{pkg.audience}</p>

                  <div className="flex justify-between text-[11px] text-foreground/50 uppercase tracking-wide pt-2">
                    <span>Prijs</span>
                  </div>
                  <p className="text-sm font-semibold text-foreground">
                    {pkg.price}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-dashed border-foreground/30">
                  <span className="text-[11px] uppercase tracking-widest text-foreground/60 group-hover:text-foreground transition-colors">
                    Bekijk details →
                  </span>
                </div>
              </button>
            ))}
          </div>
        ) : (
          /* ====== DETAIL VIEW ====== */
          <div>
            <button
              onClick={() => setSelected(null)}
              className="flex items-center gap-2 text-xs uppercase tracking-widest text-foreground/60 hover:text-foreground mb-6 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Terug naar overzicht
            </button>

            <div className="border-2 border-dashed border-foreground/40 bg-foreground/[0.02] p-8">
              <div className="border-b border-dashed border-foreground/30 pb-5 mb-6">
                <p className="text-[10px] uppercase tracking-widest text-foreground/40 mb-1">
                  [ pakket detail ]
                </p>
                <h2 className="text-3xl font-bold text-foreground uppercase tracking-wide">
                  {active.name}
                </h2>
                <p className="text-sm text-foreground/70 mt-1">
                  {active.tagline}
                </p>
              </div>

              {/* Meta grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="border border-dashed border-foreground/30 p-3">
                  <p className="text-[10px] uppercase tracking-widest text-foreground/50 mb-1">
                    Doelgroep
                  </p>
                  <p className="text-sm text-foreground">{active.audience}</p>
                </div>
                <div className="border border-dashed border-foreground/30 p-3">
                  <p className="text-[10px] uppercase tracking-widest text-foreground/50 mb-1">
                    Prijs
                  </p>
                  <p className="text-sm font-semibold text-foreground">
                    {active.price}
                  </p>
                </div>
                <div className="border border-dashed border-foreground/30 p-3">
                  <p className="text-[10px] uppercase tracking-widest text-foreground/50 mb-1">
                    Looptijd
                  </p>
                  <p className="text-sm text-foreground">{active.duration}</p>
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-8">
                <p className="text-xs uppercase tracking-widest text-foreground/50 mb-3">
                  Voordelen
                </p>
                <ul className="space-y-2">
                  {active.benefits.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 text-sm text-foreground/85"
                    >
                      <Check className="w-4 h-4 mt-0.5 text-foreground/60 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Extra details */}
              <div className="mb-8">
                <p className="text-xs uppercase tracking-widest text-foreground/50 mb-3">
                  Extra info
                </p>
                <ul className="space-y-1.5">
                  {active.details.map((d) => (
                    <li
                      key={d}
                      className="text-sm text-foreground/70 pl-4 border-l border-dashed border-foreground/30"
                    >
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="border-t-2 border-dashed border-foreground/30 pt-6 flex flex-wrap gap-3">
                {active.id === "solo" ? (
                  <a
                    href="/inschrijven/solo"
                    className="px-6 py-3 bg-foreground text-background text-xs uppercase tracking-widest font-semibold hover:bg-foreground/85 transition-colors"
                  >
                    Schrijf je in voor {active.name}
                  </a>
                ) : (
                  <button className="px-6 py-3 bg-foreground text-background text-xs uppercase tracking-widest font-semibold hover:bg-foreground/85 transition-colors">
                    Schrijf je in voor {active.name}
                  </button>
                )}
                <button
                  onClick={() => setSelected(null)}
                  className="px-6 py-3 border-2 border-dashed border-foreground/40 text-foreground text-xs uppercase tracking-widest font-semibold hover:bg-foreground/5 transition-colors"
                >
                  Vergelijk andere pakketten
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default WordLid;
