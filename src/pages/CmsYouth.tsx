import MainNavigation from "@/components/MainNavigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, Save, Eye, Languages } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const CmsYouth = () => {
  const [lang, setLang] = useState<"nl" | "fr">("nl");
  return (
    <div className="min-h-screen bg-muted/30">
      <MainNavigation />

      <main className="container mx-auto px-6 py-8 max-w-5xl">
        {/* CMS header bar */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link to="/inschrijven/youth" className="text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-2xl font-bold">Youth-lidmaatschap registratie</h1>
              <p className="text-sm text-muted-foreground">CMS / Content beheer / Inschrijvingen / Youth</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {/* NL / FR taal toggle */}
            <div className="flex items-center gap-2 bg-background border border-border rounded-lg px-3 py-1.5">
              <Languages className="w-4 h-4 text-muted-foreground" />
              <button
                onClick={() => setLang("nl")}
                className={`px-2.5 py-1 rounded text-sm font-medium transition-colors ${
                  lang === "nl" ? "bg-black text-white" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                NL
              </button>
              <button
                onClick={() => setLang("fr")}
                className={`px-2.5 py-1 rounded text-sm font-medium transition-colors ${
                  lang === "fr" ? "bg-black text-white" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                FR
              </button>
            </div>
            <Button variant="outline" className="gap-2">
              <Eye className="w-4 h-4" /> Preview
            </Button>
            <Button className="gap-2 bg-black text-white hover:bg-black/80">
              <Save className="w-4 h-4" /> Publiceer
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main content column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Persoonsgegevens */}
            <section className="bg-background border border-border rounded-lg p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <h2 className="font-semibold text-lg">Persoonsgegevens</h2>
                <span className="text-xs font-medium uppercase tracking-wide bg-black text-white px-2 py-1 rounded">
                  {lang === "nl" ? "Nederlandstalige versie" : "Version française"}
                </span>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Voornaam *</label>
                  <Input placeholder="bv. Marie" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Naam *</label>
                  <Input placeholder="bv. Janssen" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">E-mailadres *</label>
                <Input type="email" placeholder="marie.janssen@school.be" />
                <p className="text-xs text-muted-foreground">Wordt gebruikt als login en voor de bevestigingsmail</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">GSM</label>
                  <Input placeholder="bv. 0476 12 34 56" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Taal *</label>
                  <Select>
                    <SelectTrigger><SelectValue placeholder="— kies —" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="nl">NL</SelectItem>
                      <SelectItem value="fr">FR</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Geboortedatum *</label>
                <Input type="date" />
                <p className="text-xs text-muted-foreground">Jeugdlidmaatschap is gratis tot 25 jaar — verlengbaar mits geldig bewijs</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Opleiding / hogeschool</label>
                  <Input placeholder="bv. Marketing, Solvay" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">School / werkgever</label>
                  <Input placeholder="bv. Hogeschool, Bedrijf NV" />
                </div>
              </div>
            </section>

            {/* Bewijs van leeftijd */}
            <section className="bg-background border border-border rounded-lg p-6 space-y-4">
              <h2 className="font-semibold border-b border-border pb-3">Bewijs van leeftijd</h2>
              <p className="text-xs text-muted-foreground">
                Upload een foto van je identiteitskaart of studentenkaart waarop je geboortedatum zichtbaar is.
                Andere gegevens (rijksregisternummer, foto) mag je afdekken.
              </p>
              <div className="space-y-2">
                <label className="text-sm font-medium">Foto-ID uploaden *</label>
                <Input type="file" />
                <p className="text-xs text-muted-foreground">JPG, PNG of PDF — max 5MB. Gegevens worden enkel gebruikt voor leeftijdsverificatie.</p>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <Switch id="bewijs-goedgekeurd" />
                <label htmlFor="bewijs-goedgekeurd" className="text-sm font-medium">Bewijs goedgekeurd</label>
              </div>
              <p className="text-xs text-muted-foreground">Het bewijs wordt enkel gebruikt voor verificatie en daarna verwijderd. Tot verificatie krijgt het lid een Friends profiel met beperkte toegang.</p>
            </section>

            {/* Opt-ins & interesses */}
            <section className="bg-background border border-border rounded-lg p-6 space-y-4">
              <h2 className="font-semibold border-b border-border pb-3">Opt-ins & Interesses</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Checkbox id="optin-nieuwsbrief" />
                  <label htmlFor="optin-nieuwsbrief" className="text-sm">BAM nieuwsbrief</label>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox id="optin-events" />
                  <label htmlFor="optin-events" className="text-sm">Uitnodigingen voor events & opleidingen</label>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox id="optin-partners" />
                  <label htmlFor="optin-partners" className="text-sm">Communicatie van BAM partners & sponsors</label>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox id="optin-future" />
                  <label htmlFor="optin-future" className="text-sm">Ik wil deel uitmaken van de Future Marketeers Community</label>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox id="optin-thinktank" />
                  <label htmlFor="optin-thinktank" className="text-sm">Ik wil deelnemen aan een Think Tank of Community</label>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox id="optin-voorwaarden" />
                  <label htmlFor="optin-voorwaarden" className="text-sm">Akkoord met algemene voorwaarden & privacybeleid *</label>
                </div>
              </div>
              <div className="space-y-2 pt-3 border-t border-border">
                <label className="text-sm font-medium">Interessedomeinen (meerkeuze)</label>
                <div className="grid sm:grid-cols-2 gap-2">
                  {[
                    "Digital & Technology",
                    "Sustainability, Ethics & Purpose",
                    "Marketing Leadership & Future Skills",
                    "Brand Building",
                    "Performance Marketing",
                    "Community Building",
                  ].map((d) => (
                    <div key={d} className="flex items-center gap-3">
                      <Checkbox id={`int-${d}`} />
                      <label htmlFor={`int-${d}`} className="text-sm">{d}</label>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Lidmaatschap / status */}
            <section className="bg-background border border-border rounded-lg p-6 space-y-4">
              <h2 className="font-semibold border-b border-border pb-3">Lidmaatschap</h2>
              <div className="space-y-2">
                <label className="text-sm font-medium">Status</label>
                <Select>
                  <SelectTrigger><SelectValue placeholder="Actief" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="actief">Actief</SelectItem>
                    <SelectItem value="concept">Aanvraag ingediend</SelectItem>
                    <SelectItem value="wachtend">Wachtend op verificatie</SelectItem>
                    <SelectItem value="friends">Friends profiel (tijdelijk)</SelectItem>
                    <SelectItem value="verlopen">Verlopen</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Startdatum</label>
                <Input type="date" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Einddatum</label>
                <Input type="date" />
                <p className="text-xs text-muted-foreground">Verlengbaar tot 25e verjaardag — mits geldig bewijs</p>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Prijs</label>
                <Input defaultValue="Gratis" disabled />
                <p className="text-xs text-muted-foreground">Jeugdlidmaatschap is gratis voor -25 jarigen</p>
              </div>
            </section>

            {/* Profiel */}
            <section className="bg-background border border-border rounded-lg p-6 space-y-4">
              <h2 className="font-semibold border-b border-border pb-3">Profiel (onboarding)</h2>
              <div className="space-y-2">
                <label className="text-sm font-medium">Profielfoto</label>
                <Input type="file" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Login aangemaakt</label>
                <div className="flex items-center gap-3">
                  <Switch id="login-aangemaakt" />
                  <label htmlFor="login-aangemaakt" className="text-sm">Paswoord ingesteld</label>
                </div>
                <p className="text-xs text-muted-foreground">Lid ontvangt een e-mail met link om het profiel te vervolledigen</p>
              </div>
            </section>
          </div>
        </div>

        {/* Developer comments */}
        <div className="border-2 border-dashed border-destructive/50 bg-destructive/[0.03] p-6 mt-6 rounded-lg">
          <h2 className="text-lg font-semibold text-destructive mb-3">Comments voor Sander</h2>
          <div className="space-y-2 text-sm text-foreground">
            <p>Individuele registratieflow</p>
            <p>Registratie bevat enkel de noodzakelijke gegevens: persoonsgegevens, bewijs van leeftijd en opt-in's.</p>
            <p>Na verzenden ontvangt het lid een bevestigingsmail met een persoonlijke link om het profiel te vervolledigen (login aanmaken, profielfoto uploaden, interesses kiezen).</p>
            <p>Tot verificatie van het leeftijdsbewijs krijgt het lid een Friends profiel met beperkte toegang.</p>
            <p>De registratieflow kan in 1 of 2 talen (NL/FR) bestaan.</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CmsYouth;
