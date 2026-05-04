import { useMemo, useState } from "react";
import { Building2, Search } from "lucide-react";
import MainNavigation from "@/components/MainNavigation";
import Footer from "@/components/Footer";

type Industrie =
  | "Publisher"
  | "Technology Provider"
  | "Media Sales House"
  | "Creative / Digital Agency"
  | "Advertiser"
  | "Media Agency"
  | "Legal Services"
  | "Market Research"
  | "Mail Handler";

interface BedrijfsLid {
  id: string;
  naam: string;
  industrie: Industrie;
  pakket: "Growth" | "Galaxy";
  medewerkers: number;
  locatie: string;
  sinds: number;
}

const leden: BedrijfsLid[] = [
  { id: "1", naam: "DPG Media", industrie: "Publisher", pakket: "Galaxy", medewerkers: 5600, locatie: "Antwerpen", sinds: 2010 },
  { id: "2", naam: "Mediahuis", industrie: "Publisher", pakket: "Galaxy", medewerkers: 3200, locatie: "Antwerpen", sinds: 2012 },
  { id: "3", naam: "Adobe Belgium", industrie: "Technology Provider", pakket: "Galaxy", medewerkers: 180, locatie: "Diegem", sinds: 2015 },
  { id: "4", naam: "Salesforce BeLux", industrie: "Technology Provider", pakket: "Growth", medewerkers: 220, locatie: "Brussel", sinds: 2018 },
  { id: "5", naam: "Ads & Data", industrie: "Media Sales House", pakket: "Growth", medewerkers: 85, locatie: "Vilvoorde", sinds: 2019 },
  { id: "6", naam: "Boondoggle", industrie: "Creative / Digital Agency", pakket: "Growth", medewerkers: 95, locatie: "Leuven", sinds: 2017 },
  { id: "7", naam: "TBWA Belgium", industrie: "Creative / Digital Agency", pakket: "Galaxy", medewerkers: 240, locatie: "Brussel", sinds: 2009 },
  { id: "8", naam: "Proximus", industrie: "Advertiser", pakket: "Galaxy", medewerkers: 12500, locatie: "Brussel", sinds: 2014 },
  { id: "9", naam: "Duvel Moortgat", industrie: "Advertiser", pakket: "Growth", medewerkers: 320, locatie: "Puurs", sinds: 2016 },
  { id: "10", naam: "GroupM Belgium", industrie: "Media Agency", pakket: "Galaxy", medewerkers: 310, locatie: "Brussel", sinds: 2011 },
  { id: "11", naam: "Eubelius", industrie: "Legal Services", pakket: "Growth", medewerkers: 140, locatie: "Brussel", sinds: 2020 },
  { id: "12", naam: "Ipsos Belgium", industrie: "Market Research", pakket: "Growth", medewerkers: 110, locatie: "Brussel", sinds: 2018 },
  { id: "13", naam: "Bpost", industrie: "Mail Handler", pakket: "Galaxy", medewerkers: 24000, locatie: "Brussel", sinds: 2012 },
];

const industries: Industrie[] = [
  "Publisher",
  "Technology Provider",
  "Media Sales House",
  "Creative / Digital Agency",
  "Advertiser",
  "Media Agency",
  "Legal Services",
  "Market Research",
  "Mail Handler",
];

const Leden = () => {
  const [filter, setFilter] = useState<"Alle" | Industrie>("Alle");
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
            <div className="flex-1 min-w-[260px] max-w-sm">
              <p className="text-[10px] uppercase tracking-widest text-foreground/50 mb-2">
                [ filter — industrie ]
              </p>
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value as "Alle" | Industrie)}
                className="w-full bg-background border-2 border-dashed border-foreground/30 px-3 py-2 text-sm text-foreground outline-none hover:border-foreground/60 focus:border-foreground transition-colors uppercase tracking-wide"
              >
                <option value="Alle">Alle industrieën</option>
                {industries.map((i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
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
