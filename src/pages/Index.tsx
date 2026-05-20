import { Link } from "react-router-dom";
import MainNavigation from "@/components/MainNavigation";
import Footer from "@/components/Footer";
import { agendaMockData } from "@/data/agendaMockData";

const upcoming = agendaMockData
  .filter((i) => !i.is_archived)
  .sort((a, b) => a.sessies[0].datum.localeCompare(b.sessies[0].datum))
  .slice(0, 6);

const events = upcoming.filter((i) => i.type === "event").slice(0, 3);
const trainings = upcoming.filter((i) => i.type === "opleiding").slice(0, 3);

const articles = [
  { titel: "De staat van marketing in België 2026", auteur: "Redactie BAM", datum: "12 mei 2026" },
  { titel: "Hoe AI marketingteams hertekent", auteur: "Sofie Janssens", datum: "5 mei 2026" },
  { titel: "Employer branding voorbij de buzzword", auteur: "Tom De Wilde", datum: "28 apr 2026" },
  { titel: "Community-led growth in B2B", auteur: "Marie Peeters", datum: "20 apr 2026" },
];

const corporateMembers = [
  "Proximus", "KBC", "Telenet", "Colruyt", "Bpost", "Brussels Airlines",
  "Delhaize", "AG Insurance", "Belfius", "Engie", "Luminus", "DPG Media",
];

const usps = [
  { titel: "Netwerk", tekst: "+5.000 marketeers, één community" },
  { titel: "Kennis", tekst: "Opleidingen, events & magazine" },
  { titel: "Erkenning", tekst: "BAM Awards & thought leadership" },
  { titel: "Carrière", tekst: "Job board & mentoring" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <MainNavigation />
      <main className="flex-1 max-w-[1400px] mx-auto px-6 py-12 w-full space-y-12">
        {/* JOIN CTA + USPs */}
        <section className="grid grid-cols-3 gap-6">
          <div className="col-span-2 border-2 border-dashed border-border rounded-lg p-10">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Word lid</p>
            <h1 className="text-3xl font-semibold text-foreground mb-3">
              De community van Belgische marketeers
            </h1>
            <p className="text-muted-foreground mb-6 max-w-xl">
              Sluit je aan bij BAM en groei samen met +5.000 professionals die elke dag marketing waarmaken.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link
                to="/word-lid"
                className="inline-flex items-center px-5 py-2.5 rounded-md bg-foreground text-background text-sm font-medium hover:opacity-90"
              >
                Join BAM
              </Link>
              <Link
                to="/word-lid"
                className="inline-flex items-center px-5 py-2.5 rounded-md border border-border text-sm font-medium hover:bg-muted"
              >
                Ontdek lidmaatschappen
              </Link>
            </div>
          </div>
          <div className="col-span-1 grid grid-cols-2 gap-3">
            {usps.map((u) => (
              <div
                key={u.titel}
                className="border-2 border-dashed border-border rounded-lg p-4 flex flex-col justify-center"
              >
                <p className="text-sm font-semibold text-foreground">{u.titel}</p>
                <p className="text-xs text-muted-foreground mt-1">{u.tekst}</p>
              </div>
            ))}
          </div>
        </section>

        {/* HERO image/video */}
        <section className="border-2 border-dashed border-border rounded-lg aspect-[21/9] flex items-center justify-center bg-muted/30">
          <div className="text-center">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">Hero</p>
            <p className="text-lg text-foreground">Image / video — BAM community in actie</p>
          </div>
        </section>

        {/* Upcoming events & trainings */}
        <section className="grid grid-cols-2 gap-6">
          <div>
            <div className="flex items-baseline justify-between mb-4">
              <h2 className="text-xl font-semibold text-foreground">Upcoming events</h2>
              <Link to="/agenda/events" className="text-sm text-foreground underline hover:text-muted-foreground">
                Alle events
              </Link>
            </div>
            <div className="space-y-3">
              {events.map((e) => (
                <Link
                  key={e.id}
                  to="/event"
                  className="block border-2 border-dashed border-border rounded-lg p-4 hover:bg-muted/40"
                >
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    {e.subtype} · {e.sessies[0].datum}
                  </p>
                  <p className="text-sm font-medium text-foreground mt-1">{e.titel}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {e.locatie_naam}, {e.adres_gemeente}
                  </p>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-baseline justify-between mb-4">
              <h2 className="text-xl font-semibold text-foreground">Upcoming trainings</h2>
              <Link to="/agenda" className="text-sm text-foreground underline hover:text-muted-foreground">
                Alle opleidingen
              </Link>
            </div>
            <div className="space-y-3">
              {trainings.map((t) => (
                <Link
                  key={t.id}
                  to="/agenda"
                  className="block border-2 border-dashed border-border rounded-lg p-4 hover:bg-muted/40"
                >
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    {t.subtype} · {t.sessies[0].datum}
                  </p>
                  <p className="text-sm font-medium text-foreground mt-1">{t.titel}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {t.locatie_naam}, {t.adres_gemeente}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Recent articles */}
        <section>
          <div className="flex items-baseline justify-between mb-4">
            <h2 className="text-xl font-semibold text-foreground">Recente artikels</h2>
            <Link to="/artikels" className="text-sm text-foreground underline hover:text-muted-foreground">
              Alle artikels
            </Link>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {articles.map((a) => (
              <Link
                key={a.titel}
                to="/artikel"
                className="border-2 border-dashed border-border rounded-lg overflow-hidden hover:bg-muted/40"
              >
                <div className="aspect-[4/3] bg-muted/30 border-b-2 border-dashed border-border flex items-center justify-center">
                  <span className="text-xs text-muted-foreground">Cover</span>
                </div>
                <div className="p-4">
                  <p className="text-sm font-medium text-foreground line-clamp-2">{a.titel}</p>
                  <p className="text-xs text-muted-foreground mt-2">
                    {a.auteur} · {a.datum}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Job board highlight */}
        <section className="border-2 border-dashed border-border rounded-lg p-10">
          <div className="grid grid-cols-3 gap-6 items-center mb-6">
            <div className="col-span-2">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Job board</p>
              <h2 className="text-2xl font-semibold text-foreground mb-2">
                Vind je volgende marketingjob
              </h2>
              <p className="text-sm text-muted-foreground">
                Honderden vacatures bij de sterkste merken en bureaus van het land.
              </p>
            </div>
            <div className="flex gap-4 justify-end">
              <Link
                to="/vacatures"
                className="text-sm text-foreground underline hover:text-muted-foreground font-medium"
              >
                Overzicht
              </Link>
              <Link
                to="/vacature"
                className="text-sm text-foreground underline hover:text-muted-foreground font-medium"
              >
                Detail
              </Link>
            </div>
          </div>
          <ul className="divide-y divide-dashed divide-border border-t-2 border-b-2 border-dashed border-border">
            {[
              { titel: "Marketing Manager", bedrijf: "Proximus", locatie: "Brussel", type: "Voltijds" },
              { titel: "Content Strategist", bedrijf: "DPG Media", locatie: "Antwerpen", type: "Voltijds" },
              { titel: "Performance Marketeer", bedrijf: "Telenet", locatie: "Mechelen", type: "Voltijds" },
              { titel: "Brand Manager", bedrijf: "Colruyt Group", locatie: "Halle", type: "Voltijds" },
              { titel: "Digital Marketing Lead", bedrijf: "KBC", locatie: "Leuven", type: "Voltijds" },
            ].map((v) => (
              <li key={v.titel}>
                <Link
                  to="/vacature"
                  className="grid grid-cols-12 gap-4 py-3 px-1 hover:bg-muted/40 items-center"
                >
                  <span className="col-span-5 text-sm font-medium text-foreground">{v.titel}</span>
                  <span className="col-span-3 text-sm text-muted-foreground">{v.bedrijf}</span>
                  <span className="col-span-2 text-xs text-muted-foreground">{v.locatie}</span>
                  <span className="col-span-2 text-xs text-muted-foreground text-right">{v.type}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Testimonial / quote */}
        <section className="border-2 border-dashed border-border rounded-lg p-10 grid grid-cols-3 gap-8 items-center">
          <div className="col-span-1 aspect-square border-2 border-dashed border-border rounded-lg bg-muted/30 flex flex-col items-center justify-center text-center">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              Foto / video
            </p>
          </div>
          <div className="col-span-2">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Member testimonial
            </p>
            <blockquote className="text-2xl font-medium text-foreground leading-snug">
              "BAM is voor mij dé plek waar marketeers elkaar écht ontmoeten — niet om te netwerken,
              maar om samen het vak vooruit te helpen."
            </blockquote>
            <p className="text-sm text-muted-foreground mt-6">
              — Naam Lid, Functie @ Bedrijf
            </p>
          </div>
        </section>

        {/* Corporate members carousel */}
        <section>
          <div className="flex items-baseline justify-between mb-4">
            <h2 className="text-xl font-semibold text-foreground">Onze community in cijfers</h2>
            <Link to="/leden" className="text-sm text-foreground underline hover:text-muted-foreground">
              Alle leden
            </Link>
          </div>
          <div className="grid grid-cols-6 gap-4 mb-6">
            {[
              { value: "###", label: "Corporate members" },
              { value: "#.###", label: "Individuele leden" },
              { value: "##", label: "Events per jaar" },
              { value: "##", label: "Opleidingen per jaar" },
              { value: "##", label: "Congressen per jaar" },
              { value: "##", label: "Think tanks" },
            ].map((s) => (
              <div
                key={s.label}
                className="border-2 border-dashed border-border rounded-lg p-6 text-center"
              >
                <p className="text-3xl font-semibold text-foreground">{s.value}</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mt-2">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
          <div className="border-2 border-dashed border-border rounded-lg p-6">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Corporate members — carousel
            </p>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {corporateMembers.map((m) => (
                <div
                  key={m}
                  className="shrink-0 w-32 h-16 border-2 border-dashed border-border rounded-md flex items-center justify-center"
                >
                  <span className="text-xs text-muted-foreground">{m}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final JOIN CTA */}
        <section className="border-2 border-dashed border-border rounded-lg p-12">
          <div className="grid grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                Join BAM
              </p>
              <h2 className="text-3xl font-semibold text-foreground mb-3">
                Word deel van de Belgische marketingcommunity
              </h2>
              <p className="text-sm text-muted-foreground mb-6">
                Of je nu solo werkt, deel uitmaakt van een bureau of een corporate team aanstuurt —
                er is een lidmaatschap op jouw maat. Krijg toegang tot opleidingen, events, het BAM
                magazine, het job board en een netwerk dat echt deuren opent.
              </p>
              <div className="flex gap-3 flex-wrap">
                <Link
                  to="/word-lid"
                  className="inline-flex items-center px-5 py-2.5 rounded-md bg-foreground text-background text-sm font-medium hover:opacity-90"
                >
                  Join BAM
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                {
                  id: "solo",
                  name: "Solo",
                  tagline: "Individueel lidmaatschap",
                  audience: "Freelancers, zelfstandigen, start-ups",
                  price: "€ 475 excl. BTW / jaar",
                },
                {
                  id: "growth",
                  name: "Growth",
                  tagline: "Bedrijfslidmaatschap (klein & middengroot)",
                  audience: "KMO's en middelgrote bedrijven",
                  price: "€ 3.115 excl. BTW / jaar",
                },
                {
                  id: "galaxy",
                  name: "Galaxy",
                  tagline: "Corporate lidmaatschap",
                  audience: "+250 medewerkers of groepen",
                  price: "Op maat",
                },
                {
                  id: "academy",
                  name: "Academy",
                  tagline: "Lidmaatschap voor docenten",
                  audience: "Docenten marketing & communicatie",
                  price: "€ 160 incl. BTW / jaar",
                },
                {
                  id: "youth",
                  name: "Youth",
                  tagline: "Lidmaatschap -25 jaar",
                  audience: "Studenten & young marketers onder 25",
                  price: "Gratis",
                },
              ].map((p) => (
                <Link
                  key={p.id}
                  to="/word-lid"
                  className="group relative border-2 border-dashed border-border rounded-lg p-4 text-center overflow-hidden min-h-[110px] flex flex-col justify-center"
                >
                  <div className="transition-opacity duration-200 group-hover:opacity-0">
                    <p className="text-sm font-semibold text-foreground">{p.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">{p.tagline}</p>
                  </div>
                  <div className="absolute inset-0 p-3 bg-background opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-center text-left">
                    <p className="text-xs font-semibold text-foreground uppercase tracking-wide">
                      {p.name}
                    </p>
                    <p className="text-[11px] text-muted-foreground mt-1 leading-snug">
                      {p.tagline}
                    </p>
                    <p className="text-[11px] text-foreground mt-1.5 leading-snug">
                      {p.audience}
                    </p>
                    <p className="text-[11px] font-semibold text-foreground mt-1.5">
                      {p.price}
                    </p>
                  </div>
                </Link>
              ))}
              <Link
                to="/nieuwsbrief"
                className="border-2 border-dashed border-border rounded-lg p-4 text-center flex flex-col justify-center bg-muted hover:bg-muted/80"
              >
                <p className="text-sm font-semibold text-foreground">Nieuwsbrief</p>
                <p className="text-xs text-muted-foreground mt-1">Gratis & vrijblijvend</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
