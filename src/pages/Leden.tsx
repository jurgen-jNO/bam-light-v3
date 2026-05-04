import { useMemo, useState } from "react";
import { Building2, Search } from "lucide-react";
import MainNavigation from "@/components/MainNavigation";
import Footer from "@/components/Footer";

interface BedrijfsLid {
  id: string;
  naam: string;
  industrie: string;
  pakket: "Growth" | "Galaxy";
  medewerkers: number;
  locatie: string;
  sinds: number;
}

const leden: BedrijfsLid[] = [
  { id: "1", naam: "Proximus", industrie: "Telecom", pakket: "Galaxy", medewerkers: 12500, locatie: "Brussel", sinds: 2014 },
  { id: "2", naam: "Delhaize", industrie: "Retail", pakket: "Galaxy", medewerkers: 9800, locatie: "Zellik", sinds: 2011 },
  { id: "3", naam: "KBC", industrie: "Financieel", pakket: "Galaxy", medewerkers: 11200, locatie: "Brussel", sinds: 2009 },
  { id: "4", naam: "Studio Brussel", industrie: "Media", pakket: "Growth", medewerkers: 85, locatie: "Brussel", sinds: 2018 },
  { id: "5", naam: "Duvel Moortgat", industrie: "FMCG", pakket: "Growth", medewerkers: 320, locatie: "Puurs", sinds: 2016 },
  { id: "6", naam: "Bpost", industrie: "Logistiek", pakket: "Galaxy", medewerkers: 24000, locatie: "Brussel", sinds: 2012 },
  { id: "7", naam: "Telenet", industrie: "Telecom", pakket: "Galaxy", medewerkers: 3300, locatie: "Mechelen", sinds: 2013 },
  { id: "8", naam: "Lotus Bakeries", industrie: "FMCG", pakket: "Growth", medewerkers: 270, locatie: "Lembeke", sinds: 2019 },
  { id: "9", naam: "DPG Media", industrie: "Media", pakket: "Galaxy", medewerkers: 5600, locatie: "Antwerpen", sinds: 2010 },
  { id: "10", naam: "Colruyt Group", industrie: "Retail", pakket: "Galaxy", medewerkers: 32000, locatie: "Halle", sinds: 2008 },
  { id: "11", naam: "Belfius", industrie: "Financieel", pakket: "Galaxy", medewerkers: 6800, locatie: "Brussel", sinds: 2015 },
  { id: "12", naam: "Boondoggle", industrie: "Agency", pakket: "Growth", medewerkers: 95, locatie: "Leuven", sinds: 2017 },
];

const industries = ["Alle", "Telecom", "Retail", "Financieel", "Media", "FMCG", "Logistiek", "Agency"] as const;

const Leden = () => {
  const [filter, setFilter] = useState<(typeof industries)[number]>("Alle");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return leden.filter((l) => {
      const okIndustrie = filter === "Alle" || l.industrie === filter;
      const okQuery = !query || l.naam.toLowerCase().includes(query.toLowerCase());
      return okIndustrie && okQuery;
    });
  }, [filter, query]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <MainNavigation />

      <main className="flex-1 max-w-[1100px] mx-auto w-full px-6 py-12">
        {/* Wireframe header */}
        <div className="border-b-2 border-dashed border-foreground/30 pb-6 mb-10">
          <p className="text-xs uppercase tracking-widest text-foreground/50 mb-2">
            [ wireframe — bam leden / onze leden ]
          </p>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Onze leden</h1>
              <p className="text-sm text-foreground/60 mt-2 max-w-xl">
                De community van BAM telt honderden bedrijven en duizenden marketeers.
                Een greep uit onze bedrijfsleden.
              </p>
            </div>
            <a
              href="/word-lid"
              className="px-6 py-3 bg-foreground text-background text-xs uppercase tracking-widest font-semibold hover:bg-foreground/85 transition-colors"
            >
              Word lid →
            </a>
          </div>
        </div>

        {/* Filter bar */}
        <div className="border-2 border-dashed border-foreground/40 bg-foreground/[0.02] p-4 mb-8">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div className="flex-1 min-w-[260px]">
              <p className="text-[10px] uppercase tracking-widest text-foreground/50 mb-2">
                [ filter — industrie ]
              </p>
              <div className="flex flex-wrap gap-2">
                {industries.map((i) => (
                  <button
                    key={i}
                    onClick={() => setFilter(i)}
                    className={`px-3 py-1.5 text-xs uppercase tracking-wide border-2 border-dashed transition-colors ${
                      filter === i
                        ? "bg-foreground text-background border-foreground"
                        : "border-foreground/30 text-foreground/70 hover:border-foreground/60 hover:text-foreground"
                    }`}
                  >
                    {i}
                  </button>
                ))}
              </div>
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
                  placeholder="Zoek lid..."
                  className="bg-transparent text-sm outline-none flex-1 placeholder:text-foreground/40"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Resultaten meta */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-xs uppercase tracking-widest text-foreground/50">
            {filtered.length} {filtered.length === 1 ? "lid" : "leden"} gevonden
          </p>
          <p className="text-[10px] uppercase tracking-widest text-foreground/40">
            [ bedrijfsleden — growth & galaxy ]
          </p>
        </div>

        {/* Leden grid */}
        {filtered.length === 0 ? (
          <div className="border-2 border-dashed border-foreground/30 p-10 text-center text-sm text-foreground/60">
            Geen leden gevonden voor deze filter.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((lid) => (
              <div
                key={lid.id}
                className="border-2 border-dashed border-foreground/40 bg-foreground/[0.02] hover:bg-foreground/[0.06] hover:border-foreground/70 transition-colors p-5"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 border-2 border-dashed border-foreground/40 flex items-center justify-center bg-background">
                    <Building2 className="w-5 h-5 text-foreground/50" />
                  </div>
                  <span
                    className={`text-[10px] uppercase tracking-widest px-2 py-0.5 border border-dashed ${
                      lid.pakket === "Galaxy"
                        ? "border-foreground/60 text-foreground"
                        : "border-foreground/30 text-foreground/60"
                    }`}
                  >
                    {lid.pakket}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-foreground uppercase tracking-wide mb-1">
                  {lid.naam}
                </h3>
                <p className="text-xs text-foreground/60 mb-4">{lid.industrie}</p>

                <div className="border-t border-dashed border-foreground/30 pt-3 space-y-1.5 text-xs">
                  <div className="flex justify-between">
                    <span className="text-foreground/50 uppercase tracking-wide">Locatie</span>
                    <span className="text-foreground/85">{lid.locatie}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground/50 uppercase tracking-wide">Medewerkers</span>
                    <span className="text-foreground/85">{lid.medewerkers.toLocaleString("nl-BE")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground/50 uppercase tracking-wide">Lid sinds</span>
                    <span className="text-foreground/85">{lid.sinds}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-12 border-t-2 border-dashed border-foreground/30 pt-8 flex items-center justify-between flex-wrap gap-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-foreground/50 mb-1">
              [ join the club ]
            </p>
            <h2 className="text-xl font-bold text-foreground">
              Maak deel uit van de Belgische marketing community.
            </h2>
          </div>
          <a
            href="/word-lid"
            className="px-6 py-3 bg-foreground text-background text-xs uppercase tracking-widest font-semibold hover:bg-foreground/85 transition-colors"
          >
            Word lid →
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Leden;
