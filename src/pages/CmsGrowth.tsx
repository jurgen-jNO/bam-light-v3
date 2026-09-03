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

const CmsGrowth = () => {
  const [lang, setLang] = useState<"nl" | "fr">("nl");
  return (
    <div className="min-h-screen bg-muted/30">
      <MainNavigation />

      <main className="container mx-auto px-6 py-8 max-w-5xl">
        {/* CMS header bar */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link to="/inschrijven/growth" className="text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-2xl font-bold">Growth-lidmaatschap registratie</h1>
              <p className="text-sm text-muted-foreground">CMS / Content beheer / Inschrijvingen / Growth</p>
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
            {/* Bedrijfsfiche */}
            <section className="bg-background border border-border rounded-lg p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <h2 className="font-semibold text-lg">Bedrijfsfiche</h2>
                <span className="text-xs font-medium uppercase tracking-wide bg-black text-white px-2 py-1 rounded">
                  {lang === "nl" ? "Nederlandstalige versie" : "Version française"}
                </span>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Brand name *</label>
                  <Input placeholder="bv. Marketing NV" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">BTW-nummer *</label>
                  <Input placeholder="BE0123456789" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Industry</label>
                <Select>
                  <SelectTrigger><SelectValue placeholder="— kies —" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="publisher">Publisher</SelectItem>
                    <SelectItem value="technology">Technology Provider</SelectItem>
                    <SelectItem value="sales-house">Media Sales House</SelectItem>
                    <SelectItem value="agency">Creative / Digital Agency</SelectItem>
                    <SelectItem value="advertiser">Advertiser</SelectItem>
                    <SelectItem value="media-agency">Media Agency</SelectItem>
                    <SelectItem value="legal">Legal Services</SelectItem>
                    <SelectItem value="research">Market Research</SelectItem>
                    <SelectItem value="mail">Mail Handler</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Website</label>
                <Input placeholder="https://" />
              </div>
            </section>

            {/* Centrale contactpersoon */}
            <section className="bg-background border border-border rounded-lg p-6 space-y-4">
              <h2 className="font-semibold border-b border-border pb-3">Centrale contactpersoon</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Voornaam *</label>
                  <Input placeholder="bv. Marie" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Naam *</label>
                  <Input placeholder="bv. Janssen" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">E-mailadres *</label>
                  <Input type="email" placeholder="marie.janssen@bedrijf.be" />
                  <p className="text-xs text-muted-foreground">Wordt gebruikt voor de bevestigings- en onboardingmail</p>
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
            </section>

            {/* Facturatie */}
            <section className="bg-background border border-border rounded-lg p-6 space-y-4">
              <h2 className="font-semibold border-b border-border pb-3">Facturatie</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Debiteursnaam</label>
                  <Input placeholder="bv. Marketing NV" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Factuur e-mail *</label>
                  <Input type="email" placeholder="boekhouding@..." />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Straat + nr</label>
                  <Input placeholder="bv. Koning Albert II-laan 27" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Postcode</label>
                  <Input placeholder="bv. 1030" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Gemeente</label>
                  <Input placeholder="bv. Schaarbeek" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Land</label>
                  <Input defaultValue="België" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">PO / referentie (optioneel)</label>
                  <Input placeholder="bv. PO-2026-123" />
                </div>
              </div>
              <div className="space-y-2 pt-3 border-t border-border">
                <label className="text-sm font-medium">Betaalmethode *</label>
                <Select>
                  <SelectTrigger><SelectValue placeholder="— kies —" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="factuur">Factuur</SelectItem>
                    <SelectItem value="online">Online betaling (Bancontact / kaart)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </section>

            {/* Opt-ins & interesses */}
            <section className="bg-background border border-border rounded-lg p-6 space-y-4">
              <h2 className="font-semibold border-b border-border pb-3">Opt-ins & Interesses</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Checkbox id="optin-nieuwsbrief" />
                  <label htmlFor="optin-nieuwsbrief" className="text-sm">Ja, ik wil de BAM nieuwsbrief ontvangen</label>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox id="optin-events" />
                  <label htmlFor="optin-events" className="text-sm">Ik wil op de hoogte gebracht worden van events & opleidingen</label>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox id="optin-partners" />
                  <label htmlFor="optin-partners" className="text-sm">BAM partners mogen mij informatie sturen</label>
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
                    <SelectItem value="wachtend">Wachtend op betaling</SelectItem>
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
                <p className="text-xs text-muted-foreground">Looptijd tot 31/12 van het kalenderjaar (pro rata eerste jaar)</p>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Prijs</label>
                <Input defaultValue="€ 3.115 / jaar excl. BTW" disabled />
                <p className="text-xs text-muted-foreground">Pro-rata berekend vanaf startdatum</p>
              </div>
            </section>

            {/* Onboarding */}
            <section className="bg-background border border-border rounded-lg p-6 space-y-4">
              <h2 className="font-semibold border-b border-border pb-3">Onboarding</h2>
              <p className="text-xs text-muted-foreground">
                Na bevestiging ontvangt de centrale contactpersoon een mail met een persoonlijke link
                naar de onboarding: bedrijfsfiche aanvullen (about us, logo) en medewerkers toevoegen
                (Excel of handmatig).
              </p>
              <div className="space-y-2">
                <label className="text-sm font-medium">Medewerkerslijst</label>
                <Input type="file" />
                <p className="text-xs text-muted-foreground">Excel-template of handmatige invoer</p>
              </div>
              <div className="flex items-center gap-3">
                <Switch id="onboarding-verzonden" />
                <label htmlFor="onboarding-verzonden" className="text-sm">Onboarding-mail verzonden</label>
              </div>
            </section>
          </div>
        </div>

        {/* Developer comments */}
        <div className="border-2 border-dashed border-destructive/50 bg-destructive/[0.03] p-6 mt-6 rounded-lg">
          <h2 className="text-lg font-semibold text-destructive mb-3">Comments voor Sander</h2>
          <div className="space-y-2 text-sm text-foreground">
            <p>Bedrijfsregistratieflow (Growth)</p>
            <p>Registratie bevat enkel het hoogstnodige: bedrijfsfiche, centrale contactpersoon en facturatie. About us, logo en medewerkers worden in de onboarding ingevuld.</p>
            <p>Na verzenden ontvangt de centrale contactpersoon een bevestigingsmail met de pro rata factuur en een aparte mail met een persoonlijke link naar de onboarding.</p>
            <p>In de onboarding wordt de bedrijfsfiche aangevuld (about us, logo) en de medewerkerslijst geüpload (Excel of handmatig).</p>
            <p>De registratieflow kan in 1 of 2 talen (NL/FR) bestaan.</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CmsGrowth;
