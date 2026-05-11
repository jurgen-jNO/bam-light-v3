import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft, Save, Trash2, Pencil, Plus, Building2, Users, Briefcase,
  Archive, Eye, Upload, X, Check, Download, Calendar, GraduationCap,
} from "lucide-react";
import MainNavigation from "@/components/MainNavigation";
import Footer from "@/components/Footer";
import { inputCls, Field, Grid2 } from "@/components/inschrijven/FlowShell";
import { downloadMedewerkersTemplate } from "@/lib/downloadTemplate";
import { toast } from "sonner";

type Tab = "bedrijf" | "medewerkers" | "vacatures" | "events" | "opleidingen";

interface Employee { id: string; name: string; role: string; email: string; gsm: string; taal: "NL" | "FR"; }
interface Vacancy { id: string; title: string; location: string; status: "actief" | "concept" | "gearchiveerd"; views: number; }

const TabBtn = ({ active, onClick, icon: Icon, children }: any) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 px-4 py-3 text-xs uppercase tracking-widest font-semibold border-b-2 transition-colors ${
      active
        ? "border-foreground text-foreground"
        : "border-transparent text-foreground/50 hover:text-foreground/80"
    }`}
  >
    <Icon className="w-3.5 h-3.5" /> {children}
  </button>
);

const Section = ({ title, tag, children, action }: any) => (
  <section className="border-2 border-dashed border-foreground/30 bg-foreground/[0.02] p-6">
    <div className="flex items-start justify-between gap-4 mb-5">
      <div>
        <p className="text-[10px] uppercase tracking-widest text-foreground/50 mb-1">{tag}</p>
        <h2 className="text-lg font-bold text-foreground">{title}</h2>
      </div>
      {action}
    </div>
    {children}
  </section>
);

const AccountBedrijf = () => {
  const [tab, setTab] = useState<Tab>("bedrijf");

  const [company, setCompany] = useState({
    name: "Onshore.be",
    vat: "BE0123.456.789",
    website: "https://onshore.be",
    industry: "Branding & design",
    employees: "10-50",
    address: "Vlasmarkt 12, 9000 Gent",
    contactEmail: "hello@onshore.be",
    contactPhone: "+32 9 123 45 67",
    about:
      "Onshore.be is een onafhankelijk creatief bureau in Gent dat merken bouwt met een sterke identiteit en doordachte content.",
  });

  const [employees, setEmployees] = useState<Employee[]>([
    { id: "1", name: "Lieselot Janssens", role: "Content strateeg", email: "lieselot@onshore.be", gsm: "+32 470 12 34 56", taal: "NL" },
    { id: "2", name: "Mathias De Cock", role: "Creative director", email: "mathias@onshore.be", gsm: "+32 471 23 45 67", taal: "NL" },
    { id: "3", name: "Noor El Amrani", role: "Designer", email: "noor@onshore.be", gsm: "+32 472 34 56 78", taal: "FR" },
  ]);
  const [newEmp, setNewEmp] = useState<{ name: string; role: string; email: string; gsm: string; taal: "NL" | "FR" }>({ name: "", role: "", email: "", gsm: "", taal: "NL" });

  const [vacancies] = useState<Vacancy[]>([
    { id: "1", title: "Senior Brand Designer", location: "Gent · Hybride", status: "actief", views: 312 },
    { id: "2", title: "Junior Content Strateeg", location: "Gent · On-site", status: "actief", views: 98 },
    { id: "3", title: "Stage — Social Media", location: "Gent", status: "gearchiveerd", views: 0 },
    { id: "4", title: "Account Manager", location: "Gent · Hybride", status: "gearchiveerd", views: 540 },
  ]);

  const [confirm, setConfirm] = useState<Employee | null>(null);

  const addEmployee = () => {
    if (!newEmp.name.trim() || !newEmp.email.trim()) {
      toast.error("Naam en e-mail zijn verplicht");
      return;
    }
    setEmployees([...employees, { id: crypto.randomUUID(), ...newEmp }]);
    setNewEmp({ name: "", role: "", email: "", gsm: "", taal: "NL" });
    toast.success("Medewerker toegevoegd ✓");
  };

  const removeEmployee = (id: string) => {
    setEmployees(employees.filter((e) => e.id !== id));
    setConfirm(null);
    toast.success("Medewerker verwijderd ✓");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <MainNavigation />
      <main className="flex-1 max-w-[920px] mx-auto w-full px-6 py-12">
        <div className="border-b-2 border-dashed border-foreground/30 pb-6 mb-6">
          <Link
            to="/"
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-foreground/60 hover:text-foreground mb-4 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Terug naar home
          </Link>
          <p className="text-[10px] uppercase tracking-widest text-foreground/50 mb-2">[ account — bedrijf ]</p>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground">{company.name}</h1>
              <p className="text-sm text-foreground/60 mt-2">
                Bedrijfsbeheer voor de hoofdverantwoordelijke.
              </p>
            </div>
            <div className="border-2 border-dashed border-foreground/40 px-4 py-2.5">
              <p className="text-[10px] uppercase tracking-widest text-foreground/50">Lidmaatschap</p>
              <p className="text-sm font-bold text-foreground flex items-center gap-2">
                <Check className="w-3.5 h-3.5" /> Growth · actief
              </p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-1 border-b-2 border-dashed border-foreground/20 mb-8 -mx-2 px-2">
          <TabBtn active={tab === "bedrijf"} onClick={() => setTab("bedrijf")} icon={Building2}>Bedrijfsfiche</TabBtn>
          <TabBtn active={tab === "medewerkers"} onClick={() => setTab("medewerkers")} icon={Users}>
            Medewerkers <span className="text-foreground/40">({employees.length})</span>
          </TabBtn>
          <TabBtn active={tab === "vacatures"} onClick={() => setTab("vacatures")} icon={Briefcase}>
            Vacatures <span className="text-foreground/40">({vacancies.length})</span>
          </TabBtn>
          <TabBtn active={tab === "events"} onClick={() => setTab("events")} icon={Calendar}>Events</TabBtn>
          <TabBtn active={tab === "opleidingen"} onClick={() => setTab("opleidingen")} icon={GraduationCap}>Opleidingen</TabBtn>
        </div>

        {/* === BEDRIJF === */}
        {tab === "bedrijf" && (
          <div className="space-y-6">
            <Section tag="[ logo & about ]" title="Bedrijfsidentiteit">
              <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-6">
                <div className="border-2 border-dashed border-foreground/30 p-4 flex flex-col items-center justify-center text-center bg-foreground/[0.02]">
                  <div className="w-20 h-20 border-2 border-dashed border-foreground/40 flex items-center justify-center mb-3 text-2xl font-bold text-foreground/60">
                    SH
                  </div>
                  <button className="inline-flex items-center gap-2 px-3 py-1.5 text-[10px] uppercase tracking-widest border-2 border-dashed border-foreground/40 text-foreground hover:bg-foreground/5 transition-colors">
                    <Upload className="w-3 h-3" /> Logo wijzigen
                  </button>
                  <p className="text-[10px] text-foreground/40 mt-2">SVG of PNG · max 2MB</p>
                </div>
                <Field label="Over ons">
                  <textarea
                    className={inputCls + " min-h-[160px] resize-y"}
                    value={company.about}
                    onChange={(e) => setCompany({ ...company, about: e.target.value })}
                  />
                </Field>
              </div>
            </Section>

            <Section tag="[ basisgegevens ]" title="Bedrijfsgegevens">
              <Grid2>
                <Field label="Bedrijfsnaam">
                  <input className={inputCls} value={company.name} onChange={(e) => setCompany({ ...company, name: e.target.value })} />
                </Field>
                <Field label="BTW nummer">
                  <input className={inputCls} value={company.vat} onChange={(e) => setCompany({ ...company, vat: e.target.value })} />
                </Field>
                <Field label="Website">
                  <input className={inputCls} value={company.website} onChange={(e) => setCompany({ ...company, website: e.target.value })} />
                </Field>
                <Field label="Industrie">
                  <input className={inputCls} value={company.industry} onChange={(e) => setCompany({ ...company, industry: e.target.value })} />
                </Field>
                <Field label="Aantal medewerkers">
                  <input className={inputCls} value={company.employees} onChange={(e) => setCompany({ ...company, employees: e.target.value })} />
                </Field>
                <Field label="Adres">
                  <input className={inputCls} value={company.address} onChange={(e) => setCompany({ ...company, address: e.target.value })} />
                </Field>
                <Field label="Contact e-mail">
                  <input className={inputCls} value={company.contactEmail} onChange={(e) => setCompany({ ...company, contactEmail: e.target.value })} />
                </Field>
                <Field label="Contact telefoon">
                  <input className={inputCls} value={company.contactPhone} onChange={(e) => setCompany({ ...company, contactPhone: e.target.value })} />
                </Field>
              </Grid2>
              <button
                type="button"
                onClick={() => toast.success("Bedrijfsgegevens opgeslagen ✓")}
                className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-widest font-semibold bg-foreground text-background hover:bg-foreground/85 transition-colors"
              >
                <Save className="w-3.5 h-3.5" /> Opslaan
              </button>
            </Section>
          </div>
        )}

        {/* === MEDEWERKERS === */}
        {tab === "medewerkers" && (
          <div className="space-y-6">
            <Section tag="[ team ]" title="Medewerkerslijst">
              <div className="border-2 border-dashed border-foreground/30">
                <div className="grid grid-cols-[1fr_1fr_1fr_auto] gap-3 px-4 py-2.5 bg-foreground/5 text-[10px] uppercase tracking-widest text-foreground/60 font-semibold">
                  <span>Naam</span><span>Functie</span><span>E-mail</span><span></span>
                </div>
                {employees.map((e) => (
                  <div key={e.id} className="grid grid-cols-[1fr_1fr_1fr_auto] gap-3 px-4 py-3 border-t-2 border-dashed border-foreground/20 items-center text-sm">
                    <span className="text-foreground font-medium truncate">{e.name}</span>
                    <span className="text-foreground/70 truncate">{e.role || "—"}</span>
                    <span className="text-foreground/70 truncate">{e.email}</span>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => toast.info("Bewerken — binnenkort beschikbaar")}
                        className="p-1.5 text-foreground/50 hover:text-foreground transition-colors"
                        aria-label="Bewerk"
                      >
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setConfirm(e)}
                        className="p-1.5 text-foreground/50 hover:text-destructive transition-colors"
                        aria-label="Verwijder"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
                {employees.length === 0 && (
                  <p className="px-4 py-6 text-sm text-foreground/50 text-center">Geen medewerkers — voeg er hieronder eentje toe.</p>
                )}
              </div>
            </Section>

            <Section tag="[ toevoegen ]" title="Nieuwe medewerker">
              <Grid2>
                <Field label="Naam"><input className={inputCls} value={newEmp.name} onChange={(e) => setNewEmp({ ...newEmp, name: e.target.value })} placeholder="Voor- en achternaam" /></Field>
                <Field label="Functie"><input className={inputCls} value={newEmp.role} onChange={(e) => setNewEmp({ ...newEmp, role: e.target.value })} placeholder="bv. Marketing Manager" /></Field>
                <Field label="E-mail"><input type="email" className={inputCls} value={newEmp.email} onChange={(e) => setNewEmp({ ...newEmp, email: e.target.value })} placeholder="naam@bedrijf.be" /></Field>
                <Field label="GSM"><input type="tel" className={inputCls} value={newEmp.gsm} onChange={(e) => setNewEmp({ ...newEmp, gsm: e.target.value })} placeholder="+32 4xx xx xx xx" /></Field>
                <Field label="Taal">
                  <select
                    className={inputCls}
                    value={newEmp.taal}
                    onChange={(e) => setNewEmp({ ...newEmp, taal: e.target.value as "NL" | "FR" })}
                  >
                    <option value="NL">NL</option>
                    <option value="FR">FR</option>
                  </select>
                </Field>
              </Grid2>
              <div className="flex flex-wrap gap-3 mt-5">
                <button
                  onClick={addEmployee}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-widest font-semibold bg-foreground text-background hover:bg-foreground/85 transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" /> Medewerker toevoegen
                </button>
                <button className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-widest font-semibold border-2 border-dashed border-foreground/40 text-foreground hover:bg-foreground/5 transition-colors">
                  <Upload className="w-3.5 h-3.5" /> Bulk uploaden (Excel)
                </button>
                <button
                  onClick={() => downloadMedewerkersTemplate()}
                  className="inline-flex items-center gap-2 px-3 py-2.5 text-xs uppercase tracking-widest font-semibold text-foreground/70 hover:text-foreground underline underline-offset-4 decoration-dashed transition-colors"
                >
                  <Download className="w-3.5 h-3.5" /> Excel template downloaden
                </button>
              </div>
            </Section>
          </div>
        )}

        {/* === VACATURES === */}
        {tab === "vacatures" && (
          <div className="space-y-6">
            <Section
              tag="[ binnenkort ]"
              title="Vacaturebeheer"
              action={
                <button
                  disabled
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs uppercase tracking-widest font-semibold bg-foreground/30 text-background cursor-not-allowed"
                >
                  <Plus className="w-3.5 h-3.5" /> Nieuwe vacature
                </button>
              }
            >
              <p className="text-sm text-foreground/65 mb-5 leading-relaxed">
                Dit onderdeel werken we later uit. Je krijgt straks een volledige beheermodule om vacatures
                aan te maken, te publiceren op marketing.be, te bewerken en te archiveren. Hieronder een
                preview van hoe het overzicht eruit zal zien.
              </p>

              <div className="border-2 border-dashed border-foreground/30 opacity-70 pointer-events-none">
                <div className="grid grid-cols-[1fr_auto_auto] gap-3 px-4 py-2.5 bg-foreground/5 text-[10px] uppercase tracking-widest text-foreground/60 font-semibold">
                  <span>Titel</span><span>Views</span><span></span>
                </div>
                {vacancies.map((v) => (
                  <div key={v.id} className="grid grid-cols-[1fr_auto_auto] gap-3 px-4 py-3 border-t-2 border-dashed border-foreground/20 items-center text-sm">
                    <span className="text-foreground font-medium truncate">{v.title}</span>
                    <span className="text-foreground/70 text-xs tabular-nums">{v.views}</span>
                    <div className="flex items-center gap-1">
                      <button className="p-1.5 text-foreground/40" aria-label="Bekijk"><Eye className="w-4 h-4" /></button>
                      <button className="p-1.5 text-foreground/40" aria-label="Bewerk"><Pencil className="w-4 h-4" /></button>
                      <button className="p-1.5 text-foreground/40" aria-label="Archiveer"><Archive className="w-4 h-4" /></button>
                    </div>
                  </div>
                ))}
              </div>
            </Section>
          </div>
        )}

        {tab === "events" && (
          <div className="space-y-6">
            <Section tag="[ inschrijven ]" title="Medewerker inschrijven voor event">
              <Grid2>
                <Field label="Opkomend event">
                  <select className={inputCls} defaultValue="">
                    <option value="" disabled>Kies een event…</option>
                    <option>Marketing Day 2026 — 12 mei</option>
                    <option>BAM Awards Night — 28 mei</option>
                    <option>Future Marketeers Congress — 14 juni</option>
                    <option>BAM Summer BBQ — 27 juni</option>
                    <option>Brand Strategy Masterclass — 9 september</option>
                  </select>
                </Field>
                <Field label="Medewerker">
                  <select className={inputCls} defaultValue="">
                    <option value="" disabled>Kies een medewerker…</option>
                    {employees.map((e) => (
                      <option key={e.id} value={e.id}>{e.name}</option>
                    ))}
                  </select>
                </Field>
              </Grid2>
              <button
                type="button"
                onClick={() => toast.success("Medewerker ingeschreven ✓")}
                className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-widest font-semibold bg-foreground text-background hover:bg-foreground/85 transition-colors"
              >
                <Plus className="w-3.5 h-3.5" /> Inschrijven
              </button>
            </Section>

            <Section tag="[ events ]" title="Event deelnames">
              <div className="border-2 border-dashed border-foreground/30">
                <div className="grid grid-cols-[1fr_1.5fr_auto] gap-3 px-4 py-2.5 bg-foreground/5 text-[10px] uppercase tracking-widest text-foreground/60 font-semibold">
                  <span>Deelnemer</span><span>Event</span><span>Datum</span>
                </div>
                {[
                  { name: "Lieselot Janssens", event: "Marketing Day 2026", date: "25 apr 2026", past: true },
                  { name: "Noor El Amrani", event: "Marketing Day 2026", date: "25 apr 2026", past: true },
                  { name: "Mathias De Cock", event: "BAM Awards Night", date: "28 mei 2026" },
                  { name: "Noor El Amrani", event: "BAM Awards Night", date: "28 mei 2026" },
                  { name: "Noor El Amrani", event: "Future Marketeers Congress", date: "14 jun 2026" },
                  { name: "Lieselot Janssens", event: "Future Marketeers Congress", date: "14 jun 2026" },
                  { name: "Lieselot Janssens", event: "BAM Summer BBQ", date: "27 jun 2026" },
                  { name: "Mathias De Cock", event: "Brand Strategy Masterclass", date: "9 sep 2026" },
                  { name: "Lieselot Janssens", event: "Content Strategy Bootcamp", date: "3 okt 2026" },
                  { name: "Mathias De Cock", event: "Looking at 2030 — Keynote", date: "21 okt 2026" },
                ].map((p, i) => (
                  <div key={i} className={`grid grid-cols-[1fr_1.5fr_auto] gap-3 px-4 py-3 border-t-2 border-dashed border-foreground/20 items-center text-sm ${p.past ? "opacity-50" : ""}`}>
                    <span className={`font-medium truncate ${p.past ? "text-foreground/50" : "text-foreground"}`}>{p.name}</span>
                    <span className={`truncate ${p.past ? "text-foreground/40" : "text-foreground/70"}`}>
                      {p.event}
                      {p.past && <span className="ml-2 text-[10px] uppercase tracking-widest text-foreground/40">· afgelopen</span>}
                    </span>
                    <span className={`text-xs tabular-nums whitespace-nowrap ${p.past ? "text-foreground/40" : "text-foreground/60"}`}>{p.date}</span>
                  </div>
                ))}
              </div>
            </Section>
          </div>
        )}

        {tab === "opleidingen" && (
          <div className="space-y-6">
            <Section tag="[ inschrijven ]" title="Medewerker inschrijven voor opleiding">
              <Grid2>
                <Field label="Opkomende opleiding">
                  <select className={inputCls} defaultValue="">
                    <option value="" disabled>Kies een opleiding…</option>
                    <option>Brand Strategy Masterclass — 9 september</option>
                    <option>Content Strategy Bootcamp — 3 oktober</option>
                    <option>Digital Performance Training — 17 oktober</option>
                    <option>AI for Marketeers — 7 november</option>
                    <option>Storytelling Workshop — 21 november</option>
                  </select>
                </Field>
                <Field label="Medewerker">
                  <select className={inputCls} defaultValue="">
                    <option value="" disabled>Kies een medewerker…</option>
                    {employees.map((e) => (
                      <option key={e.id} value={e.id}>{e.name}</option>
                    ))}
                  </select>
                </Field>
              </Grid2>
              <button
                type="button"
                onClick={() => toast.success("Medewerker ingeschreven ✓")}
                className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-widest font-semibold bg-foreground text-background hover:bg-foreground/85 transition-colors"
              >
                <Plus className="w-3.5 h-3.5" /> Inschrijven
              </button>
            </Section>

            <Section tag="[ academy ]" title="Opleiding deelnames">
              <div className="border-2 border-dashed border-foreground/30">
                <div className="grid grid-cols-[1fr_1.5fr_auto] gap-3 px-4 py-2.5 bg-foreground/5 text-[10px] uppercase tracking-widest text-foreground/60 font-semibold">
                  <span>Deelnemer</span><span>Opleiding</span><span>Datum</span>
                </div>
                {[
                  { name: "Lieselot Janssens", event: "SEO Fundamentals", date: "18 apr 2026", past: true },
                  { name: "Mathias De Cock", event: "Copywriting Essentials", date: "25 apr 2026", past: true },
                  { name: "Mathias De Cock", event: "Brand Strategy Masterclass", date: "9 sep 2026" },
                  { name: "Noor El Amrani", event: "Brand Strategy Masterclass", date: "9 sep 2026" },
                  { name: "Lieselot Janssens", event: "Content Strategy Bootcamp", date: "3 okt 2026" },
                  { name: "Mathias De Cock", event: "Content Strategy Bootcamp", date: "3 okt 2026" },
                  { name: "Noor El Amrani", event: "Digital Performance Training", date: "17 okt 2026" },
                  { name: "Lieselot Janssens", event: "AI for Marketeers", date: "7 nov 2026" },
                  { name: "Mathias De Cock", event: "AI for Marketeers", date: "7 nov 2026" },
                  { name: "Noor El Amrani", event: "Storytelling Workshop", date: "21 nov 2026" },
                ].map((p, i) => (
                  <div key={i} className={`grid grid-cols-[1fr_1.5fr_auto] gap-3 px-4 py-3 border-t-2 border-dashed border-foreground/20 items-center text-sm ${p.past ? "opacity-50" : ""}`}>
                    <span className={`font-medium truncate ${p.past ? "text-foreground/50" : "text-foreground"}`}>{p.name}</span>
                    <span className={`truncate ${p.past ? "text-foreground/40" : "text-foreground/70"}`}>
                      {p.event}
                      {p.past && <span className="ml-2 text-[10px] uppercase tracking-widest text-foreground/40">· afgelopen</span>}
                    </span>
                    <span className={`text-xs tabular-nums whitespace-nowrap ${p.past ? "text-foreground/40" : "text-foreground/60"}`}>{p.date}</span>
                  </div>
                ))}
              </div>
            </Section>
          </div>
        )}
      </main>
      <Footer />

      {/* Remove employee confirm */}
      {confirm && (
        <div className="fixed inset-0 z-50 bg-foreground/40 backdrop-blur-sm flex items-center justify-center px-6">
          <div className="bg-background border-2 border-dashed border-destructive/60 max-w-md w-full p-6">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-destructive/80 mb-1">[ bevestig ]</p>
                <h3 className="text-lg font-bold text-foreground">Medewerker verwijderen?</h3>
              </div>
              <button onClick={() => setConfirm(null)} className="p-1 text-foreground/50 hover:text-foreground">
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-sm text-foreground/70 mb-6 leading-relaxed">
              <strong>{confirm.name}</strong> wordt verwijderd uit de medewerkerslijst en verliest toegang
              tot het BAM lidmaatschap van {company.name}.
            </p>
            <div className="flex flex-wrap gap-3 justify-end">
              <button
                onClick={() => setConfirm(null)}
                className="px-5 py-2.5 text-xs uppercase tracking-widest font-semibold border-2 border-dashed border-foreground/40 text-foreground hover:bg-foreground/5 transition-colors"
              >
                Annuleer
              </button>
              <button
                onClick={() => removeEmployee(confirm.id)}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-widest font-semibold bg-destructive text-destructive-foreground hover:bg-destructive/85 transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" /> Verwijder
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountBedrijf;
