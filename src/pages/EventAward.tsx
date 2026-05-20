import { useState } from "react";
import { Menu, X, Mail, Phone } from "lucide-react";
import MainNavigation from "@/components/MainNavigation";
import Footer from "@/components/Footer";
import ArtikelShare from "@/components/ArtikelShare";

const eventDate = "12 november 2026";
const eventTime = "18:00 – 23:30";

const jury = Array.from({ length: 6 }).map((_, i) => ({
  name: `Jurylid ${i + 1}`,
  func: "Jurylid",
  company: "BAM",
}));


export default function EventAward() {
  const [modal, setModal] = useState(false);
  const [nav, setNav] = useState(false);

  return (
    <div className="min-h-screen bg-white text-neutral-800">
      <MainNavigation />

      {/* Wireframe page sub-nav */}
      <header className="border-b border-dashed border-neutral-400 bg-neutral-100">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-3">
          <span className="text-xs uppercase tracking-wider text-neutral-500">Award</span>
          <nav className="hidden gap-6 text-sm text-neutral-600 md:flex">
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
            {["Inschrijven"].map((l) => (
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
              <h1 className="text-4xl font-bold text-neutral-900">BAM Marketing Awards</h1>
              <p className="mt-2 text-lg text-neutral-500">2026</p>
            </section>

            {/* Block 04 — USP teaser */}
            <section className="rounded border border-neutral-300 bg-neutral-100 p-6">
              <ul className="space-y-2 italic text-neutral-700">
                <li>• De referentie awards voor de Belgische marketingsector</li>
                <li>• Erkenning door een onafhankelijke vakjury van topexperten</li>
                <li>• Bekroning van de meest impactvolle campagnes van het jaar</li>
                <li>• Een avond vol inspiratie, netwerk en celebration</li>
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

            {/* Block — 3 smaller photo/video placeholders */}
            <section>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="flex aspect-[4/3] items-center justify-center border border-dashed border-neutral-400 bg-neutral-200 text-xs text-neutral-500">
                  Foto/Video 1
                </div>
                <div className="flex aspect-[4/3] items-center justify-center border border-dashed border-neutral-400 bg-neutral-200 text-xs text-neutral-500">
                  Foto/Video 2
                </div>
                <div className="flex aspect-[4/3] items-center justify-center border border-dashed border-neutral-400 bg-neutral-200 text-xs text-neutral-500">
                  Foto/Video 3
                </div>
              </div>
            </section>

            {/* Block — Jury */}
            <section id="jury">
              <h2 className="mb-4 text-2xl font-semibold text-neutral-900">Jury</h2>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {jury.map((d) => (
                  <a
                    key={d.name}
                    href="/docent"
                    className="flex items-center gap-3 rounded border border-neutral-300 p-4 transition-colors hover:border-neutral-900 hover:bg-neutral-50"
                  >
                    <div className="h-20 w-20 shrink-0 rounded-full border border-dashed border-neutral-400 bg-neutral-200" />
                    <div>
                      <p className="font-semibold text-neutral-900">{d.name}</p>
                      <p className="text-sm text-neutral-500">{d.func}</p>
                      <p className="text-sm text-neutral-500">{d.company}</p>
                    </div>
                  </a>
                ))}
              </div>
            </section>

            {/* Block 08 — Inline CTA */}
            <button onClick={() => setModal(true)} className="w-full rounded bg-neutral-700 px-6 py-4 text-center font-medium text-white hover:bg-neutral-800">
              Ik schrijf me in ›
            </button>

            {/* Block — Winnaars 2025 */}
            <section>
              <h2 className="mb-1 text-2xl font-semibold text-neutral-900">Winnaars 2025</h2>
              <p className="mb-4 text-sm text-neutral-500">Een overzicht van de bekroonde cases van de vorige editie.</p>

              <div className="space-y-8">
                {[
                  {
                    cat: "Brand of the Year",
                    winners: [
                      { award: "Gold", agency: "FamousGrey", advertiser: "Proximus", case: "#LikeATeam", movie: "#" },
                      { award: "Gold", agency: "TBWA", advertiser: "Telenet", case: "Together We Connect", movie: "#" },
                      { award: "Silver", agency: "Mutant", advertiser: "KBC", case: "The Bank of Every Family", movie: "#" },
                      { award: "Silver", agency: "BBDO", advertiser: "AG Insurance", case: "Safe Together", movie: "#" },
                      { award: "Bronze", agency: "Publicis", advertiser: "Belfius", case: "Belfius Beats", movie: "#" },
                    ],
                  },
                  {
                    cat: "Best Campaign",
                    winners: [
                      { award: "Gold", agency: "Mortierbrigade", advertiser: "Delhaize", case: "Boer Harms", movie: "#" },
                      { award: "Silver", agency: "Happiness", advertiser: "Studio Brussel", case: "De Warmste Week", movie: "#" },
                      { award: "Silver", agency: "Ogilvy", advertiser: "Lotus Bakeries", case: "Biscoff Moments", movie: "#" },
                      { award: "Bronze", agency: "Wunderman Thompson", advertiser: "Colruyt", case: "Lowest Prices", movie: "#" },
                      { award: "Bronze", agency: "DDB", advertiser: "Volkswagen", case: "Drive Smarter", movie: "#" },
                    ],
                  },
                  {
                    cat: "Best Digital Experience",
                    winners: [
                      { award: "Gold", agency: "Ogilvy", advertiser: "Coca-Cola", case: "Share a Coke", movie: "#" },
                      { award: "Gold", agency: "Akqa", advertiser: "Nike", case: "Nike Run Club BE", movie: "#" },
                      { award: "Silver", agency: "Boondoggle", advertiser: "Bpost", case: "Track & Trace 2.0", movie: "#" },
                      { award: "Bronze", agency: "Emakina", advertiser: "Brussels Airlines", case: "Fly Together", movie: "#" },
                    ],
                  },
                ].map((group) => (

                  <div key={group.cat}>
                    <h3 className="mb-3 border-b border-neutral-300 pb-1 text-lg font-semibold text-neutral-900">{group.cat}</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-sm">
                        <thead>
                          <tr className="border-b border-neutral-200">
                            <th className="py-2 pr-4 font-medium text-neutral-500">Award</th>
                            <th className="py-2 pr-4 font-medium text-neutral-500">Agency</th>
                            <th className="py-2 pr-4 font-medium text-neutral-500">Advertiser</th>
                            <th className="py-2 pr-4 font-medium text-neutral-500">Case</th>
                            <th className="py-2 font-medium text-neutral-500">Case movie</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-200">
                          {group.winners.map((w, i) => (
                            <tr key={i} className="hover:bg-neutral-50">
                              <td className="py-3 pr-4">
                                <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                                  w.award === "Gold" ? "bg-yellow-100 text-yellow-800" :
                                  w.award === "Silver" ? "bg-gray-100 text-gray-600" :
                                  "bg-amber-50 text-amber-700"
                                }`}>
                                  {w.award}
                                </span>
                              </td>
                              <td className="py-3 pr-4 text-neutral-700">{w.agency}</td>
                              <td className="py-3 pr-4 text-neutral-700">{w.advertiser}</td>
                              <td className="py-3 pr-4 font-medium text-neutral-900">{w.case}</td>
                              <td className="py-3">
                                <a href={w.movie} className="text-neutral-700 underline hover:text-neutral-900">Bekijk ›</a>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>

            </section>

            {/* Block 12 — Contactpersoon */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-neutral-900">Vragen of meer informatie?</h2>
              <a href="/contact" className="flex items-center gap-4 rounded border border-neutral-300 p-4 transition-colors hover:border-neutral-900 hover:bg-neutral-50">
                <div className="h-[60px] w-[60px] shrink-0 rounded-full border border-dashed border-neutral-400 bg-neutral-200" />
                <div className="text-sm">
                  <p className="font-semibold text-neutral-900">Nathalie Prieto</p>
                  <p className="text-neutral-500">Contactpersoon awards</p>
                  <p className="flex items-center gap-1 text-neutral-600"><Phone className="h-3 w-3" /> +32 2 000 00 00</p>
                  <p className="flex items-center gap-1 text-neutral-600">
                    <Mail className="h-3 w-3" />
                    <span className="underline">nathalie@bam.be</span>
                  </p>
                </div>
              </a>
            </section>
          </main>

          {/* STICKY SIDEBAR */}
          <aside className="hidden lg:block">
            <div className="sticky top-6 space-y-4 rounded border border-neutral-300 bg-neutral-50 p-5">
              <div>
                <p className="text-xs uppercase tracking-wider text-neutral-500">Datum</p>
                <p className="mt-1 text-sm text-neutral-700">{eventDate}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-neutral-500">Uur</p>
                <p className="text-sm text-neutral-700">{eventTime}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-neutral-500">Locatie</p>
                <p className="text-sm text-neutral-700">BAM, Dilbeek</p>
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
                <span className="text-neutral-600">+182 leden</span>
              </div>
              <div className="mt-2 flex justify-between border-t border-neutral-200 pt-2 text-neutral-700">
                <span><strong className="text-neutral-900">287</strong> ingeschreven</span>
                <span><strong className="text-neutral-900">63</strong> vrij</span>
              </div>
            </div>

            {/* Sponsors */}
            <div className="mt-3 rounded border border-neutral-300 bg-white p-4 text-xs">
              <p className="mb-3 text-xs uppercase tracking-wider text-neutral-500">Sponsors</p>
              {[
                { tier: "Platinum", count: 2, size: "h-10" },
                { tier: "Gold", count: 3, size: "h-8" },
                { tier: "Silver", count: 4, size: "h-7" },
              ].map((t) => (
                <div key={t.tier} className="mb-3 last:mb-0">
                  <p className="mb-1.5 text-[10px] uppercase tracking-wider text-neutral-400">{t.tier}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {Array.from({ length: t.count }).map((_, i) => (
                      <div
                        key={i}
                        className={`flex flex-1 items-center justify-center border border-dashed border-neutral-400 bg-neutral-100 text-[9px] text-neutral-500 ${t.size}`}
                      >
                        Logo
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <ArtikelShare title="BAM Marketing Awards" className="mt-4 justify-end" />
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
