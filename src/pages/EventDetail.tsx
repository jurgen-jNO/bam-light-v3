import { useState } from "react";
import { ChevronDown, Menu, X, Mail, Phone, Linkedin, Facebook } from "lucide-react";
import MainNavigation from "@/components/MainNavigation";
import Footer from "@/components/Footer";

const sessions = [
  {
    n: "Sessie 1",
    title: "Strategie & doelgroepbepaling",
    date: "24 feb 2026",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    topics: ["Marktanalyse", "Persona's", "Customer journey", "Doelstellingen & KPI's"],
    docent: "Jan Janssens",
  },
  { n: "Sessie 2", title: "Content creatie & storytelling", date: "10 mrt 2026" },
  { n: "Sessie 3", title: "Distributie & kanalen", date: "24 mrt 2026" },
  { n: "Sessie 4", title: "Conversie & lead nurturing", date: "21 apr 2026" },
  { n: "Sessie 5", title: "Meten, optimaliseren & cases", date: "5 mei 2026" },
];

const docenten = Array.from({ length: 6 }).map((_, i) => ({
  name: `Docent ${i + 1}`,
  func: "Function title",
  company: "Company name",
}));

export default function EventDetail() {
  const [open, setOpen] = useState<number | null>(0);
  const [modal, setModal] = useState(false);
  const [nav, setNav] = useState(false);

  return (
    <div className="min-h-screen bg-white text-neutral-800">
      <MainNavigation />

      {/* Wireframe page sub-nav */}
      <header className="border-b border-dashed border-neutral-400 bg-neutral-100">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-3">
          <span className="text-xs uppercase tracking-wider text-neutral-500">Opleiding</span>
          <nav className="hidden gap-6 text-sm text-neutral-600 md:flex">
            <a href="#programma">Programma</a>
            <a href="#docenten">Docenten</a>
            <a href="#tarieven">Tarieven</a>
            <a href="#inschrijven" onClick={(e) => { e.preventDefault(); setModal(true); }}>Inschrijven</a>
          </nav>
          <button className="md:hidden" onClick={() => setNav(true)} aria-label="Menu">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Mobile slide-in nav */}
      {nav && (
        <div className="fixed inset-0 z-50 bg-black/40 md:hidden" onClick={() => setNav(false)}>
          <aside className="ml-auto flex h-full w-64 flex-col gap-4 bg-white p-6" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setNav(false)} className="self-end" aria-label="Sluit menu">
              <X className="h-5 w-5" />
            </button>
            {["Programma", "Docenten", "Tarieven", "Inschrijven"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="border-b border-neutral-200 pb-2 text-neutral-700" onClick={() => setNav(false)}>
                {l}
              </a>
            ))}
          </aside>
        </div>
      )}

      <div className="mx-auto max-w-[1200px] px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          {/* MAIN COLUMN */}
          <main className="space-y-10">
            {/* Block 01 — Header visual */}
            <section>
              <div className="hidden h-[300px] w-full items-center justify-center border border-dashed border-neutral-400 bg-neutral-200 text-sm text-neutral-500 md:flex">
                Header image — desktop (1852×600)
              </div>
              <div className="flex h-48 w-full items-center justify-center border border-dashed border-neutral-400 bg-neutral-200 text-xs text-neutral-500 md:hidden">
                Header image — mobile (400×256)
              </div>
            </section>

            {/* Block 02 — Title */}
            <section>
              <h1 className="text-4xl font-bold text-neutral-900">Opleiding - Content Marketing</h1>
              <p className="mt-2 text-lg text-neutral-500">2026</p>
            </section>

            {/* Block 04 — USP teaser */}
            <section className="rounded border border-neutral-300 bg-neutral-100 p-6">
              <ul className="space-y-2 italic text-neutral-700">
                <li>• Leer hoe je een publiek opbouwt, converteert en vasthoudt</li>
                <li>• Alle mogelijkheden online en offline</li>
                <li>• Meteen inzetbare learnings</li>
                <li>• Met veel concrete voorbeelden</li>
              </ul>
            </section>

            {/* Block 05 — Intro */}
            <section>
              <p className="text-xs uppercase tracking-wider text-neutral-400">Intro text (rich text field)</p>
              <div className="mt-3 space-y-4 text-neutral-700">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </section>

            {/* Block 06 — Learning outcomes */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-neutral-900">Learning outcomes</h2>
              <ul className="list-disc space-y-2 pl-6 text-neutral-700">
                {Array.from({ length: 7 }).map((_, i) => (
                  <li key={i}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ({i + 1}).</li>
                ))}
              </ul>
            </section>

            {/* Block 08 — Inline CTA */}
            <button onClick={() => setModal(true)} className="w-full rounded bg-neutral-700 px-6 py-4 text-center font-medium text-white hover:bg-neutral-800">
              Ik schrijf me in ›
            </button>

            {/* Block 07 — Programma accordion */}
            <section id="programma">
              <h2 className="mb-4 text-2xl font-semibold text-neutral-900">Programma</h2>
              <div className="divide-y divide-neutral-300 rounded border border-neutral-300">
                {sessions.map((s, i) => {
                  const isOpen = open === i;
                  return (
                    <div key={i}>
                      <button
                        onClick={() => setOpen(isOpen ? null : i)}
                        className="flex w-full items-center justify-between px-4 py-4 text-left hover:bg-neutral-50"
                      >
                        <span className="text-neutral-800">
                          <span className="font-semibold">{s.n}</span> — {s.title}{" "}
                          <span className="text-neutral-500">· {s.date}</span>
                        </span>
                        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                      </button>
                      {isOpen && (
                        <div className="space-y-3 bg-neutral-50 px-4 pb-4 text-neutral-700">
                          <p>{s.desc ?? "Korte omschrijving van de sessie (lorem ipsum)."}</p>
                          <ul className="list-disc pl-6 text-sm">
                            {(s.topics ?? ["Onderwerp A", "Onderwerp B", "Onderwerp C"]).map((t) => (
                              <li key={t}>{t}</li>
                            ))}
                          </ul>
                          <p className="text-sm text-neutral-500">Docent: {s.docent ?? "Naam Docent"}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Block 08 — Inline CTA repeat */}
            <button onClick={() => setModal(true)} className="w-full rounded bg-neutral-700 px-6 py-4 text-center font-medium text-white hover:bg-neutral-800">
              Ik schrijf me in ›
            </button>

            {/* Block 09 — Doelgroep */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-neutral-900">Doelgroep</h2>
              <ul className="list-disc space-y-2 pl-6 text-neutral-700">
                <li>Lorem ipsum doelgroep beschrijving één.</li>
                <li>Lorem ipsum doelgroep beschrijving twee.</li>
                <li>Lorem ipsum doelgroep beschrijving drie.</li>
              </ul>
            </section>

            {/* Block 10 — Tarieven */}
            <section id="tarieven">
              <h2 className="mb-4 text-2xl font-semibold text-neutral-900">Tarieven</h2>
              <div className="divide-y divide-neutral-300 rounded border border-neutral-300">
                <div className="flex items-center justify-between px-4 py-3">
                  <span>BAM-Leden</span><span className="font-medium">€ 990 excl. btw</span>
                </div>
                <div className="flex items-center justify-between px-4 py-3">
                  <span>BAM-Niet-leden</span><span className="font-medium">€ 1.390 excl. btw</span>
                </div>
              </div>
              <div className="mt-4 inline-flex h-12 w-32 items-center justify-center border border-dashed border-neutral-400 bg-neutral-100 text-xs text-neutral-500">
                KMO-portefeuille logo
              </div>
            </section>

            {/* Block 11 — Docenten */}
            <section id="docenten">
              <h2 className="mb-4 text-2xl font-semibold text-neutral-900">Docenten</h2>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {docenten.map((d) => (
                  <div key={d.name} className="flex items-center gap-3 rounded border border-neutral-300 p-4">
                    <div className="h-20 w-20 shrink-0 rounded-full border border-dashed border-neutral-400 bg-neutral-200" />
                    <div>
                      <p className="font-semibold text-neutral-900">{d.name}</p>
                      <p className="text-sm text-neutral-500">{d.func}</p>
                      <p className="text-sm text-neutral-500">{d.company}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Block 12 — Contactpersoon */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-neutral-900">Vragen of meer informatie?</h2>
              <div className="flex items-center gap-4 rounded border border-neutral-300 p-4">
                <div className="h-[60px] w-[60px] shrink-0 rounded-full border border-dashed border-neutral-400 bg-neutral-200" />
                <div className="text-sm">
                  <p className="font-semibold text-neutral-900">Nathalie Prieto</p>
                  <p className="text-neutral-500">Contactpersoon opleidingen</p>
                  <p className="flex items-center gap-1 text-neutral-600"><Phone className="h-3 w-3" /> +32 2 000 00 00</p>
                  <p className="flex items-center gap-1 text-neutral-600">
                    <Mail className="h-3 w-3" />
                    <a href="mailto:nathalie@bam.be" className="underline">nathalie@bam.be</a>
                  </p>
                </div>
              </div>
            </section>
          </main>

          {/* STICKY SIDEBAR */}
          <aside className="hidden lg:block">
            <div className="sticky top-6 space-y-4 rounded border border-neutral-300 bg-neutral-50 p-5">
              <div>
                <p className="text-xs uppercase tracking-wider text-neutral-500">Sessiedatums</p>
                <ul className="mt-1 space-y-1 text-sm text-neutral-700">
                  {sessions.map((s) => (
                    <li key={s.n}>{s.date}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-neutral-500">Uur</p>
                <p className="text-sm text-neutral-700">09:30 – 13:00</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-neutral-500">Locatie</p>
                <p className="text-sm text-neutral-700">BAM, Dilbeek</p>
              </div>
              <hr className="border-neutral-300" />
              <div className="space-y-1 text-sm">
                <div className="flex justify-between"><span>BAM-Leden</span><span>€ 990</span></div>
                <div className="flex justify-between"><span>Niet-leden</span><span>€ 1.390</span></div>
                <p className="text-xs text-neutral-500">excl. btw</p>
              </div>
              <button id="inschrijven" onClick={() => setModal(true)} className="w-full rounded bg-neutral-900 px-4 py-3 font-medium text-white hover:bg-black">
                Inschrijven ›
              </button>
              <p className="text-center text-xs text-neutral-500">Contacteer Nathalie Prieto</p>
            </div>

            {/* Aanwezigheid / capaciteit */}
            <div className="mt-3 rounded border border-neutral-300 bg-white p-3 text-xs">
              <div className="flex items-center justify-between">
                <div className="flex -space-x-1.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-6 w-6 cursor-pointer rounded-full border border-white bg-neutral-200 ring-1 ring-neutral-300 transition-all duration-150 hover:z-10 hover:scale-125 hover:bg-neutral-700 hover:ring-2 hover:ring-neutral-900"
                      title={`Lid ${i + 1}`}
                    />
                  ))}
                </div>
                <span className="text-neutral-600">+12 leden</span>
              </div>
              <div className="mt-2 flex justify-between border-t border-neutral-200 pt-2 text-neutral-700">
                <span><strong className="text-neutral-900">18</strong> ingeschreven</span>
                <span><strong className="text-neutral-900">7</strong> vrij</span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-end gap-2">
              <span className="mr-1 text-xs uppercase tracking-wider text-neutral-500">Deel</span>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Deel op LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded border border-neutral-300 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Deel op Facebook"
                className="flex h-8 w-8 items-center justify-center rounded border border-neutral-300 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={`mailto:?subject=${encodeURIComponent("Opleiding - Content Marketing")}&body=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
                aria-label="Deel via e-mail"
                className="flex h-8 w-8 items-center justify-center rounded border border-neutral-300 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </aside>
        </div>

      </div>

      {/* Modal */}
      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setModal(false)}>
          <div className="w-full max-w-md rounded bg-white p-6 shadow-lg" onClick={(e) => e.stopPropagation()}>
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Inschrijvingsformulier</h3>
              <button onClick={() => setModal(false)} aria-label="Sluit"><X className="h-5 w-5" /></button>
            </div>
            <p className="text-sm text-neutral-600">Inschrijvingsformulier (placeholder)</p>
            <button onClick={() => setModal(false)} className="mt-6 w-full rounded bg-neutral-700 px-4 py-2 text-white">Sluiten</button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
