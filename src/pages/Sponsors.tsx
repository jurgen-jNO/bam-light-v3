import { useMemo, useState } from "react";
import { Building2, Search, MapPin, Globe, Phone, Mail } from "lucide-react";
import MainNavigation from "@/components/MainNavigation";
import Footer from "@/components/Footer";

type SponsorTier =
  | "Education"
  | "BAM Goes West"
  | "Event"
  | "Structural"
  | "Key Partner"
  | "IAB"
  | "IAB MIXX Awards"
  | "Think Tank"
  | "CMO"
  | "Students / Young Professionals"
  | "Varia";

interface Sponsor {
  id: string;
  brand: string;
  tier: SponsorTier;
  straat: string;
  nr: string;
  postcode: string;
  gemeente: string;
  url: string;
  about: string;
  telefoon: string;
  email: string;
}

const sponsors: Sponsor[] = [
  {
    id: "1", brand: "Solvay Brussels School", tier: "Education",
    straat: "Avenue F.D. Roosevelt", nr: "42", postcode: "1050", gemeente: "Brussel",
    url: "https://www.solvay.edu", telefoon: "+32 2 650 41 11", email: "info@solvay.edu",
    about: "Solvay Brussels School ondersteunt de marketing community met executive education en academisch onderzoek op topniveau.",
  },
  {
    id: "2", brand: "Kortrijk Xpo", tier: "BAM Goes West",
    straat: "Doorniksesteenweg", nr: "216", postcode: "8500", gemeente: "Kortrijk",
    url: "https://www.kortrijkxpo.com", telefoon: "+32 56 24 11 11", email: "info@kortrijkxpo.com",
    about: "Kortrijk Xpo is host van BAM Goes West en brengt de West-Vlaamse marketing community samen rond inspirerende events.",
  },
  {
    id: "3", brand: "Brussels Expo", tier: "Event",
    straat: "Belgiëplein", nr: "1", postcode: "1020", gemeente: "Brussel",
    url: "https://www.brussels-expo.com", telefoon: "+32 2 474 84 84", email: "info@brussels-expo.com",
    about: "Brussels Expo is een vaste partner voor de grote BAM-events en marketingconferenties in het hart van België.",
  },
  {
    id: "4", brand: "Telenet", tier: "Structural",
    straat: "Liersesteenweg", nr: "4", postcode: "2800", gemeente: "Mechelen",
    url: "https://www.telenet.be", telefoon: "+32 15 33 30 00", email: "info@telenet.be",
    about: "Telenet ondersteunt BAM structureel en helpt de Belgische marketing community jaarrond te bouwen aan kennis en netwerk.",
  },
  {
    id: "5", brand: "Google Belgium", tier: "Key Partner",
    straat: "Steenweg op Etterbeek", nr: "180", postcode: "1040", gemeente: "Brussel",
    url: "https://www.google.be", telefoon: "+32 2 894 60 00", email: "belgium@google.com",
    about: "Google is key partner van BAM en levert tools, training en inzichten om merken digitaal te laten groeien.",
  },
  {
    id: "6", brand: "IAB Belgium", tier: "IAB",
    straat: "Buro & Design Center", nr: "11", postcode: "1130", gemeente: "Brussel",
    url: "https://iabeurope.eu", telefoon: "+32 2 740 00 90", email: "info@iabbelgium.be",
    about: "IAB Belgium vertegenwoordigt de digitale advertising industrie en werkt nauw samen met BAM rond standaarden en advocacy.",
  },
  {
    id: "7", brand: "IAB MIXX Awards", tier: "IAB MIXX Awards",
    straat: "Buro & Design Center", nr: "11", postcode: "1130", gemeente: "Brussel",
    url: "https://www.mixxawards.be", telefoon: "+32 2 740 00 91", email: "mixx@iabbelgium.be",
    about: "De IAB MIXX Awards bekronen de meest creatieve en effectieve digitale campagnes in België.",
  },
  {
    id: "8", brand: "Vlerick Business School", tier: "Think Tank",
    straat: "Reep", nr: "1", postcode: "9000", gemeente: "Gent",
    url: "https://www.vlerick.com", telefoon: "+32 9 210 97 11", email: "info@vlerick.com",
    about: "Vlerick werkt met BAM samen rond marketing think tanks en gedeeld onderzoek voor de Belgische business community.",
  },
  {
    id: "9", brand: "CMO Council Belgium", tier: "CMO",
    straat: "Avenue Louise", nr: "65", postcode: "1050", gemeente: "Brussel",
    url: "https://www.cmocouncil.org", telefoon: "+32 2 808 12 00", email: "belgium@cmocouncil.org",
    about: "Het CMO-platform binnen BAM verbindt Chief Marketing Officers rond strategische thema's en peer-to-peer learning.",
  },
  {
    id: "10", brand: "STIMA Young", tier: "Students / Young Professionals",
    straat: "Belliardstraat", nr: "20", postcode: "1040", gemeente: "Brussel",
    url: "https://www.stima.be", telefoon: "+32 2 234 67 89", email: "young@stima.be",
    about: "STIMA Young inspireert studenten en jonge marketeers door events, mentoring en awards binnen het BAM-netwerk.",
  },
  {
    id: "11", brand: "Marketing.be", tier: "Varia",
    straat: "Persstraat", nr: "12", postcode: "1000", gemeente: "Brussel",
    url: "https://www.marketing.be", telefoon: "+32 2 555 12 34", email: "info@marketing.be",
    about: "Marketing.be is het toonaangevende vakplatform voor de Belgische marketing community en mediapartner van BAM.",
  },
];

const tiers: SponsorTier[] = [
  "Education",
  "BAM Goes West",
  "Event",
  "Structural",
  "Key Partner",
  "IAB",
  "IAB MIXX Awards",
  "Think Tank",
  "CMO",
  "Students / Young Professionals",
  "Varia",
];

const Sponsors = () => {
  const [filter, setFilter] = useState<"Alle" | SponsorTier>("Alle");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return sponsors.filter((s) => {
      const okTier = filter === "Alle" || s.tier === filter;
      const okQuery = !query || s.brand.toLowerCase().includes(query.toLowerCase());
      return okTier && okQuery;
    });
  }, [filter, query]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <MainNavigation />

      <main className="flex-1 max-w-[1100px] mx-auto w-full px-6 py-12">
        {/* Wireframe header */}
        <div className="border-b-2 border-dashed border-foreground/30 pb-6 mb-10">
          <p className="text-xs uppercase tracking-widest text-foreground/50 mb-2">
            [ wireframe — bam sponsors ]
          </p>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Onze sponsors</h1>
              <p className="text-sm text-foreground/60 mt-2 max-w-xl">
                Onze sponsors maken het mogelijk om de Belgische marketing community
                te laten groeien, leren en verbinden.
              </p>
            </div>
            <a
              href="/word-lid"
              className="px-6 py-3 bg-foreground text-background text-xs uppercase tracking-widest font-semibold hover:bg-foreground/85 transition-colors"
            >
              Word sponsor →
            </a>
          </div>
        </div>

        {/* Filter bar */}
        <div className="border-2 border-dashed border-foreground/40 bg-foreground/[0.02] p-4 mb-8">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div className="flex-1 min-w-[260px] max-w-sm">
              <p className="text-[10px] uppercase tracking-widest text-foreground/50 mb-2">
                [ filter — tier ]
              </p>
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value as "Alle" | SponsorTier)}
                className="w-full bg-background border-2 border-dashed border-foreground/30 px-3 py-2 text-sm text-foreground outline-none hover:border-foreground/60 focus:border-foreground transition-colors uppercase tracking-wide"
              >
                <option value="Alle">Alle tiers</option>
                {tiers.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            <div className="min-w-[220px]">
              <p className="text-[10px] uppercase tracking-widest text-foreground/50 mb-2">
                [ zoek ]
              </p>
              <div className="flex items-center gap-2 border-2 border-dashed border-foreground/30 px-3 py-1.5 bg-background">
                <Search className="w-3.5 h-3.5 text-foreground/50" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Zoek sponsor..."
                  className="bg-transparent text-sm outline-none flex-1 placeholder:text-foreground/40"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Resultaten meta */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-xs uppercase tracking-widest text-foreground/50">
            {filtered.length} {filtered.length === 1 ? "sponsor" : "sponsors"} gevonden
          </p>
          <p className="text-[10px] uppercase tracking-widest text-foreground/40">
            [ sponsors ]
          </p>
        </div>

        {/* Sponsors grid */}
        {filtered.length === 0 ? (
          <div className="border-2 border-dashed border-foreground/30 p-10 text-center text-sm text-foreground/60">
            Geen sponsors gevonden voor deze filter.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((s) => {
              const cleanUrl = s.url.replace(/^https?:\/\//, "").replace(/\/$/, "");
              return (
                <div
                  key={s.id}
                  className="flex flex-col border-2 border-dashed border-foreground/40 bg-foreground/[0.02] hover:bg-foreground/[0.06] hover:border-foreground/70 transition-colors p-5"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-14 h-14 shrink-0 border-2 border-dashed border-foreground/40 flex items-center justify-center bg-background">
                      <Building2 className="w-6 h-6 text-foreground/50" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] uppercase tracking-widest text-foreground/40 mb-0.5">
                        [ logo ]
                      </p>
                      <h3 className="text-lg font-bold text-foreground uppercase tracking-wide leading-tight truncate">
                        {s.brand}
                      </h3>
                      <p className="text-[11px] text-foreground/60 mt-0.5">
                        {s.tier} sponsor
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-foreground/75 leading-relaxed border-t border-dashed border-foreground/30 pt-3 mb-3 line-clamp-2">
                    {s.about}
                  </p>

                  <div className="border-t border-dashed border-foreground/30 pt-3 space-y-2 text-xs mt-auto">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-3.5 h-3.5 text-foreground/50 shrink-0 mt-0.5" />
                      <span className="text-foreground/85">
                        {s.straat} {s.nr}, {s.postcode} {s.gemeente}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="w-3.5 h-3.5 text-foreground/50 shrink-0" />
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/85 hover:text-foreground underline underline-offset-2 truncate"
                      >
                        {cleanUrl}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-foreground/50 shrink-0" />
                      <a href={`tel:${s.telefoon.replace(/\s/g, "")}`} className="text-foreground/85 hover:text-foreground">
                        {s.telefoon}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-foreground/50 shrink-0" />
                      <a href={`mailto:${s.email}`} className="text-foreground/85 hover:text-foreground truncate">
                        {s.email}
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-12 border-t-2 border-dashed border-foreground/30 pt-8 flex items-center justify-between flex-wrap gap-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-foreground/50 mb-1">
              [ become a sponsor ]
            </p>
            <h2 className="text-xl font-bold text-foreground">
              Steun de Belgische marketing community.
            </h2>
          </div>
          <a
            href="/word-lid"
            className="px-6 py-3 bg-foreground text-background text-xs uppercase tracking-widest font-semibold hover:bg-foreground/85 transition-colors"
          >
            Word sponsor →
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Sponsors;
