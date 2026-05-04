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
  brand: string;
  industrie: Industrie;
  straat: string;
  nr: string;
  postcode: string;
  gemeente: string;
  url: string;
  about: string;
  telefoon: string;
  email: string;
}

const leden: BedrijfsLid[] = [
  {
    id: "1", brand: "DPG Media", industrie: "Publisher",
    straat: "Mediaplein", nr: "1", postcode: "2018", gemeente: "Antwerpen",
    url: "https://www.dpgmedia.be", telefoon: "+32 3 210 02 10", email: "info@dpgmedia.be",
    about: "DPG Media is een toonaangevend mediabedrijf met sterke merken in nieuws, entertainment en online services in België en Nederland.",
  },
  {
    id: "2", brand: "Mediahuis", industrie: "Publisher",
    straat: "Katwilgweg", nr: "2", postcode: "2050", gemeente: "Antwerpen",
    url: "https://www.mediahuis.be", telefoon: "+32 3 210 05 11", email: "info@mediahuis.be",
    about: "Mediahuis verbindt mensen met betrouwbare journalistiek via kranten, magazines en digitale platformen in heel Europa.",
  },
  {
    id: "3", brand: "Adobe Belgium", industrie: "Technology Provider",
    straat: "Pegasuslaan", nr: "5", postcode: "1831", gemeente: "Diegem",
    url: "https://www.adobe.com/be_nl", telefoon: "+32 2 711 17 11", email: "contact@adobe.be",
    about: "Adobe biedt creatieve, document- en marketing-cloudoplossingen waarmee bedrijven digitale ervaringen ontwerpen en leveren.",
  },
  {
    id: "4", brand: "Salesforce BeLux", industrie: "Technology Provider",
    straat: "Avenue Marnix", nr: "23", postcode: "1000", gemeente: "Brussel",
    url: "https://www.salesforce.com/be", telefoon: "+32 2 894 80 00", email: "belux@salesforce.com",
    about: "Salesforce is het #1 CRM-platform en helpt bedrijven hun klanten op een nieuwe manier te verbinden via cloud, data en AI.",
  },
  {
    id: "5", brand: "Ads & Data", industrie: "Media Sales House",
    straat: "Medialaan", nr: "1", postcode: "1800", gemeente: "Vilvoorde",
    url: "https://www.adsanddata.be", telefoon: "+32 2 255 32 11", email: "info@adsanddata.be",
    about: "Ads & Data is de Belgische sales house die adverteerders verbindt met de sterkste audio- en videomerken via data-driven oplossingen.",
  },
  {
    id: "6", brand: "Boondoggle", industrie: "Creative / Digital Agency",
    straat: "Vaartkom", nr: "4", postcode: "3000", gemeente: "Leuven",
    url: "https://www.boondoggle.eu", telefoon: "+32 16 31 09 50", email: "hello@boondoggle.eu",
    about: "Boondoggle is een onafhankelijk creatief digitaal bureau dat merken bouwt via strategie, design en technologie.",
  },
  {
    id: "7", brand: "TBWA Belgium", industrie: "Creative / Digital Agency",
    straat: "Generaal Lemanstraat", nr: "55", postcode: "2018", gemeente: "Antwerpen",
    url: "https://www.tbwa.be", telefoon: "+32 3 270 95 11", email: "info@tbwa.be",
    about: "TBWA is The Disruption Company — een collectief van creatieve makers dat merken helpt onverwachte sprongen voorwaarts te maken.",
  },
  {
    id: "8", brand: "Proximus", industrie: "Advertiser",
    straat: "Koning Albert II-laan", nr: "27", postcode: "1030", gemeente: "Brussel",
    url: "https://www.proximus.be", telefoon: "+32 2 202 41 11", email: "marketing@proximus.com",
    about: "Proximus is de grootste telecomaanbieder van België en levert digitale diensten aan particulieren, bedrijven en de publieke sector.",
  },
  {
    id: "9", brand: "Duvel Moortgat", industrie: "Advertiser",
    straat: "Breendonkdorp", nr: "58", postcode: "2870", gemeente: "Puurs-Sint-Amands",
    url: "https://www.duvelmoortgat.be", telefoon: "+32 3 860 94 00", email: "info@duvel.be",
    about: "Duvel Moortgat is een onafhankelijke Belgische brouwerij gekend voor iconische speciaalbieren zoals Duvel, Vedett en La Chouffe.",
  },
  {
    id: "10", brand: "GroupM Belgium", industrie: "Media Agency",
    straat: "Mediaplein", nr: "1", postcode: "1000", gemeente: "Brussel",
    url: "https://www.groupm.com/belgium", telefoon: "+32 2 333 99 11", email: "info@groupm.be",
    about: "GroupM is de grootste mediagroep ter wereld en vormt de toekomst van media in het belang van mensen, planeet en onze klanten.",
  },
  {
    id: "11", brand: "Eubelius", industrie: "Legal Services",
    straat: "Louizalaan", nr: "99", postcode: "1050", gemeente: "Brussel",
    url: "https://www.eubelius.com", telefoon: "+32 2 543 31 00", email: "info@eubelius.com",
    about: "Eubelius is een onafhankelijk Belgisch advocatenkantoor dat juridisch advies levert in alle domeinen van het ondernemingsrecht.",
  },
  {
    id: "12", brand: "Ipsos Belgium", industrie: "Market Research",
    straat: "Researchdreef", nr: "65", postcode: "1070", gemeente: "Brussel",
    url: "https://www.ipsos.com/nl-be", telefoon: "+32 2 642 47 11", email: "info.belgium@ipsos.com",
    about: "Ipsos is een wereldwijd marktonderzoeksbureau dat merken, consumenten, markten en de samenleving écht leert begrijpen.",
  },
  {
    id: "13", brand: "Bpost", industrie: "Mail Handler",
    straat: "Muntcentrum", nr: "1", postcode: "1000", gemeente: "Brussel",
    url: "https://www.bpost.be", telefoon: "+32 2 201 23 45", email: "info@bpost.be",
    about: "Bpost is het toonaangevende post- en pakkettenbedrijf van België en verbindt mensen, bedrijven en overheden via fysieke en digitale kanalen.",
  },
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
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 border-2 border-dashed border-foreground/40 flex items-center justify-center bg-background">
                    <Building2 className="w-5 h-5 text-foreground/50" />
                  </div>
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
