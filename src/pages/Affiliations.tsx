import { Building2, MapPin, Globe, Phone, Mail } from "lucide-react";
import MainNavigation from "@/components/MainNavigation";
import Footer from "@/components/Footer";

interface Affiliation {
  id: string;
  brand: string;
  type: string;
  straat: string;
  nr: string;
  postcode: string;
  gemeente: string;
  url: string;
  about: string;
  telefoon: string;
  email: string;
}

const affiliations: Affiliation[] = [
  {
    id: "1",
    brand: "IAB Belgium",
    type: "BAM is lid van — Digital Advertising",
    straat: "Buro & Design Center",
    nr: "11",
    postcode: "1130",
    gemeente: "Brussel",
    url: "https://iabeurope.eu",
    telefoon: "+32 2 740 00 90",
    email: "info@iabbelgium.be",
    about:
      "The Belgian Association of Marketing is the representative of IAB in Belgium. IAB Europe leidt de politieke vertegenwoordiging en industriesamenwerking voor het digitale marketing- en advertising-ecosysteem.",
  },
  {
    id: "2",
    brand: "CUBE",
    type: "BAM is partner van — Consumer & Customer Insights",
    straat: "Buro & Design Center",
    nr: "11",
    postcode: "1130",
    gemeente: "Brussel",
    url: "http://www.cubelgium.be",
    telefoon: "+32 2 260 05 76",
    email: "info@cubelgium.be",
    about:
      "CUBE is a community of like-minded people, who have a passion for consumer & customer understanding, by uniting research agencies with marketing professionals, buyers, suppliers, consultants, academics, students and research communities worldwide.",
  },
  {
    id: "3",
    brand: "DNCM",
    type: "BAM is partner van — Bel-Me-Niet-Meer-lijst",
    straat: "Koning Albert II-laan",
    nr: "8",
    postcode: "1000",
    gemeente: "Brussel",
    url: "https://www.dncm.be",
    telefoon: "+32 2 880 73 73",
    email: "info@dncm.be",
    about:
      "DNCM beheert de officiële 'Bel-Me-Niet-Meer'-lijst in België. BAM ondersteunt DNCM door de marketingcommunity te informeren over deze wettelijke verplichting binnen telemarketing.",
  },
  {
    id: "4",
    brand: "Effie Awards Belgium",
    type: "BAM is partner van — Marketing Effectiveness",
    straat: "Reyerslaan",
    nr: "80",
    postcode: "1030",
    gemeente: "Brussel",
    url: "https://www.effiebelgium.be",
    telefoon: "+32 2 740 00 95",
    email: "info@effiebelgium.be",
    about:
      "Effie staat voor effectiveness in marketing communications. De Effie Awards worden wereldwijd erkend als de pre-eminente prijs in de industrie en bekronen marketingideeën die aantoonbaar werken.",
  },
];

const Affiliations = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <MainNavigation />

      <main className="flex-1 max-w-[1100px] mx-auto w-full px-6 py-12">
        {/* Wireframe header */}
        <div className="border-b-2 border-dashed border-foreground/30 pb-6 mb-10">
          <p className="text-xs uppercase tracking-widest text-foreground/50 mb-2">
            [ wireframe — affiliations ]
          </p>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Onze affiliations</h1>
              <p className="text-sm text-foreground/60 mt-2 max-w-xl">
                BAM bouwt samen met andere professionele organisaties aan een
                global marketing ecosysteem — als lid en als partner.
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

        {/* Resultaten meta */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-xs uppercase tracking-widest text-foreground/50">
            {affiliations.length} affiliations
          </p>
          <p className="text-[10px] uppercase tracking-widest text-foreground/40">
            [ affiliations ]
          </p>
        </div>

        {/* Grid: 2 cols × 2 rows = 4 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {affiliations.map((p) => {
            const cleanUrl = p.url.replace(/^https?:\/\//, "").replace(/\/$/, "");
            return (
              <div
                key={p.id}
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
                      {p.brand}
                    </h3>
                    <p className="text-[11px] text-foreground/60 mt-0.5">{p.type}</p>
                  </div>
                </div>

                <p className="text-xs text-foreground/75 leading-relaxed border-t border-dashed border-foreground/30 pt-3 mb-3 line-clamp-2">
                  {p.about}
                </p>

                <div className="border-t border-dashed border-foreground/30 pt-3 space-y-2 text-xs mt-auto">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-foreground/50 shrink-0 mt-0.5" />
                    <span className="text-foreground/85">
                      {p.straat} {p.nr}, {p.postcode} {p.gemeente}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-3.5 h-3.5 text-foreground/50 shrink-0" />
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/85 hover:text-foreground underline underline-offset-2 truncate"
                    >
                      {cleanUrl}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-foreground/50 shrink-0" />
                    <a href={`tel:${p.telefoon.replace(/\s/g, "")}`} className="text-foreground/85 hover:text-foreground">
                      {p.telefoon}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-foreground/50 shrink-0" />
                    <a href={`mailto:${p.email}`} className="text-foreground/85 hover:text-foreground truncate">
                      {p.email}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Affiliations;
