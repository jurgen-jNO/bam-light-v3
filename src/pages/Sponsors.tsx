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
    id: "1", brand: "Google Belgium", tier: "Gold",
    straat: "Steenweg op Etterbeek", nr: "180", postcode: "1040", gemeente: "Brussel",
    url: "https://www.google.be", telefoon: "+32 2 894 60 00", email: "belgium@google.com",
    about: "Google ondersteunt de Belgische marketingcommunity met tools, training en inzichten om merken digitaal te laten groeien.",
  },
  {
    id: "2", brand: "Meta BeLux", tier: "Gold",
    straat: "Rue de la Régence", nr: "58", postcode: "1000", gemeente: "Brussel",
    url: "https://www.meta.com", telefoon: "+32 2 588 99 00", email: "belux@meta.com",
    about: "Meta verbindt mensen en merken via Facebook, Instagram en WhatsApp, en is trots partner van de Belgische marketing community.",
  },
  {
    id: "3", brand: "LinkedIn Belgium", tier: "Silver",
    straat: "Marnixlaan", nr: "23", postcode: "1000", gemeente: "Brussel",
    url: "https://www.linkedin.com", telefoon: "+32 2 894 80 10", email: "belgium@linkedin.com",
    about: "LinkedIn helpt B2B-marketeers in België professionals te bereiken met relevante content en doelgerichte advertenties.",
  },
  {
    id: "4", brand: "Microsoft Belgium", tier: "Silver",
    straat: "Pegasuslaan", nr: "1", postcode: "1831", gemeente: "Diegem",
    url: "https://www.microsoft.com/nl-be", telefoon: "+32 2 704 30 00", email: "info@microsoft.be",
    about: "Microsoft levert cloud-, data- en AI-oplossingen die Belgische marketingteams in staat stellen efficiënter en creatiever te werken.",
  },
  {
    id: "5", brand: "Spotify Belgium", tier: "Bronze",
    straat: "Kortrijksesteenweg", nr: "1", postcode: "9000", gemeente: "Gent",
    url: "https://ads.spotify.com", telefoon: "+32 9 210 00 00", email: "belgium-ads@spotify.com",
    about: "Spotify Advertising biedt merken een audio-first kanaal om de Belgische luisteraar persoonlijk en op het juiste moment te bereiken.",
  },
  {
    id: "6", brand: "Snapchat BeLux", tier: "Bronze",
    straat: "Avenue Louise", nr: "326", postcode: "1050", gemeente: "Brussel",
    url: "https://forbusiness.snapchat.com", telefoon: "+32 2 808 30 00", email: "belux@snap.com",
    about: "Snapchat helpt merken een jonge, betrokken Belgische community te bereiken via AR, video en immersieve advertentieformats.",
  },
];

const tiers: SponsorTier[] = ["Gold", "Silver", "Bronze"];

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
