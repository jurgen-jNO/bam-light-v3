import { Building2, MapPin, Globe, Phone, Mail } from "lucide-react";
import MainNavigation from "@/components/MainNavigation";
import Footer from "@/components/Footer";

interface Partner {
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

const partners: Partner[] = [
  {
    id: "1", brand: "UBA", type: "Strategic Partner",
    straat: "Buro & Design Center", nr: "11", postcode: "1130", gemeente: "Brussel",
    url: "https://www.ubabelgium.be", telefoon: "+32 2 260 05 76", email: "info@ubabelgium.be",
    about: "UBA is de Belgische vereniging van adverteerders en verdedigt de belangen van merken die in België investeren in marketing en communicatie.",
  },
  {
    id: "2", brand: "ACC Belgium", type: "Strategic Partner",
    straat: "Reyerslaan", nr: "80", postcode: "1030", gemeente: "Brussel",
    url: "https://www.acc.be", telefoon: "+32 2 740 00 90", email: "info@acc.be",
    about: "ACC is de federatie van communicatiebureaus in België en vertegenwoordigt creatieve, media- en digitale agencies in de hele sector.",
  },
];

const Partners = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <MainNavigation />

      <main className="flex-1 max-w-[1100px] mx-auto w-full px-6 py-12">
        {/* Wireframe header */}
        <div className="border-b-2 border-dashed border-foreground/30 pb-6 mb-10">
          <p className="text-xs uppercase tracking-widest text-foreground/50 mb-2">
            [ wireframe — partners ]
          </p>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Onze partners</h1>
              <p className="text-sm text-foreground/60 mt-2 max-w-xl">
                BAM werkt samen met sterke strategische partners die de Belgische
                marketingsector mee vormgeven.
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
            {partners.length} partners
          </p>
          <p className="text-[10px] uppercase tracking-widest text-foreground/40">
            [ partners ]
          </p>
        </div>

        {/* Partners grid: 2 cols × 2 rows = capacity for 4, currently 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {partners.map((p) => {
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

export default Partners;
