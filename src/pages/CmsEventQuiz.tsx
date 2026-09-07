import MainNavigation from "@/components/MainNavigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { ArrowLeft, Save, Eye, Languages, Plus, Trash2, ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const CmsEventQuiz = () => {
  const [lang, setLang] = useState<"nl" | "fr">("nl");
  const [rounds, setRounds] = useState<number[]>([0]);

  return (
    <div className="min-h-screen bg-muted/30">
      <MainNavigation />

      <main className="container mx-auto px-6 py-8 max-w-5xl">
        {/* CMS header bar */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link to="/event/big-marketing-quiz" className="text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-2xl font-bold">Event aanmaken — Big Marketing Quiz</h1>
              <p className="text-sm text-muted-foreground">CMS / Content beheer / Events / Quiz / Nieuw</p>
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
            {/* Algemeen */}
            <section className="bg-background border border-border rounded-lg p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <h2 className="font-semibold text-lg">Algemeen</h2>
                <span className="text-xs font-medium uppercase tracking-wide bg-black text-white px-2 py-1 rounded">
                  {lang === "nl" ? "Nederlandstalige versie" : "Version française"}
                </span>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Headerbeeld *</label>
                <div className="border border-dashed border-border rounded-lg p-6 flex flex-col items-center justify-center gap-2 text-sm text-muted-foreground hover:border-foreground/40 transition-colors cursor-pointer">
                  <ImageIcon className="w-6 h-6" />
                  <span>Klik om een headerbeeld te uploaden</span>
                  <span className="text-xs">Aanbevolen: 1852×600 px (desktop), 400×256 px (mobiel)</span>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Titel event *</label>
                <Input placeholder="bv. BIG Marketing Quiz" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Eventtype *</label>
                <Select defaultValue="eendagsevent">
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="eendagsevent">Eendagsevent</SelectItem>
                    <SelectItem value="meerdaagsevent">Meerdaagsevent</SelectItem>
                    <SelectItem value="award">Award</SelectItem>
                    <SelectItem value="congress">Congress</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">USP's (teaser) *</label>
                <Textarea rows={4} placeholder="1 USP per lijn" />
                <p className="text-xs text-muted-foreground">Elke lijn wordt een bullet in het teaserblok</p>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Intro tekst *</label>
                <Textarea rows={5} placeholder="Inleiding van het event" />
                <p className="text-xs text-muted-foreground">Rich text editor met opmaak (titels, lijsten, links)</p>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Video (embed)</label>
                <Input placeholder="YouTube / Vimeo URL" />
                <p className="text-xs text-muted-foreground">Toont een video placeholder onder de introductie</p>
              </div>
            </section>

            {/* Programma — quizrondes */}
            <section className="bg-background border border-border rounded-lg p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <h2 className="font-semibold text-lg">Programma — blokken / rondes</h2>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-1"
                  onClick={() => setRounds((s) => [...s, s.length])}
                >
                  <Plus className="w-4 h-4" /> Blok toevoegen
                </Button>
              </div>
              {rounds.map((i) => (
                <div key={i} className="border border-border rounded-lg p-4 space-y-3 relative">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-sm">Programmablok {i + 1}</p>
                    <button
                      onClick={() => setRounds((s) => s.filter((x) => x !== i))}
                      className="text-muted-foreground hover:text-destructive"
                      aria-label="Blok verwijderen"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Tijdslot *</label>
                      <Input placeholder="bv. 19:00 – 19:30" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Titel *</label>
                      <Input placeholder="bv. Onthaal & welkomstdrink" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Korte omschrijving</label>
                    <Textarea rows={2} placeholder="Wat gebeurt er in dit blok?" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Onderwerpen</label>
                    <Input placeholder="Kommagescheiden, bv. Marketingtrivia, Brand recognition" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Presentator / quizmaster</label>
                    <Select>
                      <SelectTrigger><SelectValue placeholder="Kies uit sprekersdatabase" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">Spreker 1</SelectItem>
                        <SelectItem value="2">Spreker 2</SelectItem>
                        <SelectItem value="3">Spreker 3</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              ))}
              <p className="text-xs text-muted-foreground">
                Elk programmablok wordt een uitklapbare rij in het dagprogramma op de eventpagina.
              </p>
            </section>

            {/* Tarieven */}
            <section className="bg-background border border-border rounded-lg p-6 space-y-4">
              <h2 className="font-semibold text-lg border-b border-border pb-3">Tarieven</h2>
              <div className="space-y-2">
                <label className="text-sm font-medium">BAM-leden (€ excl. btw) *</label>
                <Input type="number" placeholder="0 (Gratis = 0 invullen)" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Niet-leden (€ excl. btw) *</label>
                <Input type="number" placeholder="99" />
              </div>
            </section>

            {/* Sprekers */}
            <section className="bg-background border border-border rounded-lg p-6 space-y-4">
              <h2 className="font-semibold text-lg border-b border-border pb-3">Sprekers / quizmasters</h2>
              <div className="space-y-2">
                <label className="text-sm font-medium">Gekoppelde sprekers *</label>
                <Select>
                  <SelectTrigger><SelectValue placeholder="Selecteer sprekers (multi-select)" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Spreker 1</SelectItem>
                    <SelectItem value="2">Spreker 2</SelectItem>
                    <SelectItem value="3">Spreker 3</SelectItem>
                    <SelectItem value="4">Spreker 4</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">Naam, functie, bedrijf en foto worden overgenomen uit het sprekersprofiel</p>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Publicatie */}
            <section className="bg-background border border-border rounded-lg p-6 space-y-4">
              <h2 className="font-semibold border-b border-border pb-3">Publicatie</h2>
              <div className="space-y-2">
                <label className="text-sm font-medium">Status</label>
                <Select defaultValue="concept">
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="concept">Concept</SelectItem>
                    <SelectItem value="review">In review</SelectItem>
                    <SelectItem value="live">Live</SelectItem>
                    <SelectItem value="archief">Gearchiveerd</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Publicatiedatum</label>
                <Input type="date" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Inschrijvingen open</label>
                <div className="flex items-center gap-3 pt-1">
                  <Switch defaultChecked />
                  <span className="text-sm text-muted-foreground">Deelnemers kunnen zich inschrijven</span>
                </div>
              </div>
            </section>

            {/* Praktisch */}
            <section className="bg-background border border-border rounded-lg p-6 space-y-4">
              <h2 className="font-semibold border-b border-border pb-3">Praktisch</h2>
              <div className="space-y-2">
                <label className="text-sm font-medium">Datum *</label>
                <Input type="date" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Startuur *</label>
                  <Input type="time" defaultValue="19:00" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Einduur *</label>
                  <Input type="time" defaultValue="23:00" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Locatie *</label>
                <Input placeholder="bv. BAM, Dilbeek" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Capaciteit (max. deelnemers)</label>
                <Input type="number" placeholder="bv. 150" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Aantal ingeschreven</label>
                <Input type="number" placeholder="bv. 112" disabled />
                <p className="text-xs text-muted-foreground">Automatisch geteld uit inschrijvingen</p>
              </div>
            </section>

            {/* Beelden */}
            <section className="bg-background border border-border rounded-lg p-6 space-y-4">
              <h2 className="font-semibold border-b border-border pb-3">Beelden</h2>
              <div className="space-y-2">
                <label className="text-sm font-medium">Header image (desktop) *</label>
                <div className="border border-dashed border-border rounded-lg p-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <ImageIcon className="w-4 h-4" /> Upload (1852×600)
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Header image (mobiel) *</label>
                <div className="border border-dashed border-border rounded-lg p-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <ImageIcon className="w-4 h-4" /> Upload (400×256)
                </div>
              </div>
            </section>

            {/* Contact & sponsors */}
            <section className="bg-background border border-border rounded-lg p-6 space-y-4">
              <h2 className="font-semibold border-b border-border pb-3">Contact & sponsors</h2>
              <div className="space-y-2">
                <label className="text-sm font-medium">Contactpersoon *</label>
                <Select>
                  <SelectTrigger><SelectValue placeholder="Kies BAM-medewerker" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nathalie">Nathalie Prieto</SelectItem>
                    <SelectItem value="sarah">Sarah Vyverman</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Sponsors</label>
                <Select>
                  <SelectTrigger><SelectValue placeholder="Koppel sponsors (multi-select)" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="p">Platinum sponsors</SelectItem>
                    <SelectItem value="g">Gold sponsors</SelectItem>
                    <SelectItem value="s">Silver sponsors</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </section>

            {/* SEO */}
            <section className="bg-background border border-border rounded-lg p-6 space-y-4">
              <h2 className="font-semibold border-b border-border pb-3">SEO & Categorie</h2>
              <div className="space-y-2">
                <label className="text-sm font-medium">URL slug</label>
                <Input placeholder="/event/big-marketing-quiz" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Interessedomein *</label>
                <Select>
                  <SelectTrigger><SelectValue placeholder="Selecteer" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="digital">Digital & Technology</SelectItem>
                    <SelectItem value="sustainability">Sustainability, Ethics & Purpose</SelectItem>
                    <SelectItem value="leadership">Marketing Leadership & Future Skills</SelectItem>
                    <SelectItem value="brand">Brand Building</SelectItem>
                    <SelectItem value="performance">Performance Marketing</SelectItem>
                    <SelectItem value="community">Community Building</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Meta description</label>
                <Textarea rows={3} placeholder="Beschrijving voor zoekmachines (max. 160 tekens)" />
              </div>
            </section>
          </div>
        </div>

        {/* Developer comments */}
        <div className="border-2 border-dashed border-destructive/50 bg-destructive/[0.03] p-6 mt-6 rounded-lg">
          <h2 className="text-lg font-semibold text-destructive mb-3">Comments voor Sander</h2>
          <div className="space-y-2 text-sm text-foreground">
            <p>Het aantal aanwezigen wordt enkel weergegeven indien er min 5 inschrijvingen zijn.</p>
            <p>Het aantal nog beschikbare plaatsen enkel als er nog maar 20% plaatsen beschikbaar zijn.</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CmsEventQuiz;
