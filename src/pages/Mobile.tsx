import MobileShell from "@/components/mobile/MobileShell";
import { agendaMockData } from "@/data/agendaMockData";

const upcoming = agendaMockData
  .filter((i) => !i.is_archived)
  .sort((a, b) => a.sessies[0].datum.localeCompare(b.sessies[0].datum));

const events = upcoming.filter((i) => i.type === "event").slice(0, 3);
const trainings = upcoming.filter((i) => i.type === "opleiding").slice(0, 3);

const articles = [
  { titel: "De staat van marketing in België 2026", auteur: "Redactie BAM", datum: "12 mei 2026" },
  { titel: "Hoe AI marketingteams hertekent", auteur: "Sofie Janssens", datum: "5 mei 2026" },
  { titel: "Employer branding voorbij de buzzword", auteur: "Tom De Wilde", datum: "28 apr 2026" },
];

const corporateMembers = [
  "Proximus", "KBC", "Telenet", "Colruyt", "Bpost", "Brussels Airlines",
  "Delhaize", "AG Insurance", "Belfius", "Engie", "Luminus", "DPG Media",
];


const stats = [
  { value: "###", label: "Corporate members" },
  { value: "#.###", label: "Individuele leden" },
  { value: "##", label: "Events / jaar" },
  { value: "##", label: "Opleidingen / jaar" },
  { value: "##", label: "Congressen / jaar" },
  { value: "##", label: "Think tanks" },
];

const jobs = [
  { titel: "Marketing Manager", bedrijf: "Proximus", locatie: "Brussel" },
  { titel: "Content Strategist", bedrijf: "DPG Media", locatie: "Antwerpen" },
  { titel: "Performance Marketeer", bedrijf: "Telenet", locatie: "Mechelen" },
  { titel: "Brand Manager", bedrijf: "Colruyt Group", locatie: "Halle" },
  { titel: "Digital Marketing Lead", bedrijf: "KBC", locatie: "Leuven" },
];

const memberships = [
  { name: "Solo", tagline: "Individueel lidmaatschap" },
  { name: "Growth", tagline: "Bedrijfslidmaatschap (KMO)" },
  { name: "Galaxy", tagline: "Corporate lidmaatschap" },
  { name: "Academy", tagline: "Voor docenten" },
  { name: "Youth", tagline: "-25 jaar — gratis" },
];

const Mobile = () => {
  return (
    <MobileShell>
      <div className="space-y-8">
        {/* JOIN CTA */}
        <section className="border-2 border-dashed border-border rounded-lg p-6">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Word lid</p>
          <h1 className="text-xl font-semibold text-foreground mb-2 leading-snug">
            De community van Belgische marketeers
          </h1>
          <p className="text-sm text-muted-foreground mb-4">
            Sluit je aan bij BAM en groei samen met +5.000 professionals.
          </p>
          <div className="flex flex-col gap-2">
            <a
              href="/mobile/word-lid"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-md bg-foreground text-background text-sm font-medium"
            >
              Join BAM
            </a>
            <a
              href="/mobile/word-lid"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-md border border-border text-sm font-medium"
            >
              Ontdek lidmaatschappen
            </a>
          </div>
        </section>

        {/* USPs */}
        <section className="grid grid-cols-2 gap-3">
          {usps.map((u) => (
            <div key={u.titel} className="border-2 border-dashed border-border rounded-lg p-3">
              <p className="text-sm font-semibold text-foreground">{u.titel}</p>
              <p className="text-xs text-muted-foreground mt-1">{u.tekst}</p>
            </div>
          ))}
        </section>

        {/* HERO */}
        <section className="border-2 border-dashed border-border rounded-lg aspect-video flex items-center justify-center bg-muted/30">
          <div className="text-center px-4">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Hero</p>
            <p className="text-sm text-foreground">Image / video — BAM in actie</p>
          </div>
        </section>

        {/* Upcoming events */}
        <section>
          <div className="flex items-baseline justify-between mb-3">
            <h2 className="text-lg font-semibold text-foreground">Upcoming events</h2>
            <a href="/mobile/agenda?type=events" className="text-xs text-foreground underline">
              Alle events
            </a>
          </div>
          <div className="space-y-2">
            {events.map((e) => (
              <a
                key={e.id}
                href="/mobile/event/big-marketing-quiz"
                className="block border-2 border-dashed border-border rounded-lg p-3"
              >
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  {e.subtype} · {e.sessies[0].datum}
                </p>
                <p className="text-sm font-medium text-foreground mt-1">{e.titel}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {e.locatie_naam}, {e.adres_gemeente}
                </p>
              </a>
            ))}
          </div>
        </section>

        {/* Upcoming trainings */}
        <section>
          <div className="flex items-baseline justify-between mb-3">
            <h2 className="text-lg font-semibold text-foreground">Upcoming trainings</h2>
            <a href="/mobile/agenda" className="text-xs text-foreground underline">
              Alle opleidingen
            </a>
          </div>
          <div className="space-y-2">
            {trainings.map((t) => (
              <a
                key={t.id}
                href="/mobile/agenda"
                className="block border-2 border-dashed border-border rounded-lg p-3"
              >
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  {t.subtype} · {t.sessies[0].datum}
                </p>
                <p className="text-sm font-medium text-foreground mt-1">{t.titel}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {t.locatie_naam}, {t.adres_gemeente}
                </p>
              </a>
            ))}
          </div>
        </section>

        {/* Articles */}
        <section>
          <div className="flex items-baseline justify-between mb-3">
            <h2 className="text-lg font-semibold text-foreground">Recente artikels</h2>
            <a href="/mobile/artikels" className="text-xs text-foreground underline">
              Alle artikels
            </a>
          </div>
          <div className="space-y-3">
            {articles.map((a) => (
              <a
                key={a.titel}
                href="/mobile/artikel"
                className="block border-2 border-dashed border-border rounded-lg overflow-hidden"
              >
                <div className="aspect-[16/9] bg-muted/30 border-b-2 border-dashed border-border flex items-center justify-center">
                  <span className="text-xs text-muted-foreground">Cover</span>
                </div>
                <div className="p-3">
                  <p className="text-sm font-medium text-foreground">{a.titel}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {a.auteur} · {a.datum}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Job board */}
        <section className="border-2 border-dashed border-border rounded-lg p-5">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Job board</p>
          <h2 className="text-lg font-semibold text-foreground mb-2">
            Vind je volgende marketingjob
          </h2>
          <p className="text-xs text-muted-foreground mb-4">
            Honderden vacatures bij de sterkste merken en bureaus.
          </p>
          <ul className="divide-y divide-dashed divide-border border-t-2 border-b-2 border-dashed border-border mb-3">
            {jobs.map((v) => (
              <li key={v.titel}>
                <a href="/mobile/vacature" className="block py-2.5">
                  <p className="text-sm font-medium text-foreground">{v.titel}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {v.bedrijf} · {v.locatie}
                  </p>
                </a>
              </li>
            ))}
          </ul>
          <div className="flex gap-4">
            <a href="/mobile/vacatures" className="text-xs text-foreground underline font-medium">
              Overzicht
            </a>
            <a href="/mobile/vacature" className="text-xs text-foreground underline font-medium">
              Detail
            </a>
          </div>
        </section>

        {/* Testimonial */}
        <section className="border-2 border-dashed border-border rounded-lg p-5 space-y-4">
          <div className="aspect-video border-2 border-dashed border-border rounded-lg bg-muted/30 flex items-center justify-center">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Foto / video</p>
          </div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            Member testimonial
          </p>
          <blockquote className="text-base font-medium text-foreground leading-snug">
            "BAM is voor mij dé plek waar marketeers elkaar écht ontmoeten — niet om te netwerken,
            maar om samen het vak vooruit te helpen."
          </blockquote>
          <p className="text-xs text-muted-foreground">— Naam Lid, Functie @ Bedrijf</p>
        </section>

        {/* Stats */}
        <section>
          <div className="flex items-baseline justify-between mb-3">
            <h2 className="text-lg font-semibold text-foreground">Community in cijfers</h2>
            <a href="/mobile/leden" className="text-xs text-foreground underline">
              Alle leden
            </a>
          </div>
          <div className="grid grid-cols-2 gap-3 mb-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="border-2 border-dashed border-border rounded-lg p-4 text-center"
              >
                <p className="text-2xl font-semibold text-foreground">{s.value}</p>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1.5">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
          <div className="border-2 border-dashed border-border rounded-lg p-4">
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
              Corporate members
            </p>
            <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1">
              {corporateMembers.map((m) => (
                <div
                  key={m}
                  className="shrink-0 w-24 h-14 border-2 border-dashed border-border rounded-md flex items-center justify-center"
                >
                  <span className="text-[11px] text-muted-foreground">{m}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final JOIN CTA */}
        <section className="border-2 border-dashed border-border rounded-lg p-6">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Join BAM</p>
          <h2 className="text-xl font-semibold text-foreground mb-2 leading-snug">
            Word deel van de marketingcommunity
          </h2>
          <p className="text-xs text-muted-foreground mb-4">
            Solo, bureau of corporate — er is een lidmaatschap op jouw maat.
          </p>
          <div className="grid grid-cols-2 gap-2 mb-4">
            {memberships.map((p) => (
              <a
                key={p.name}
                href="/mobile/word-lid"
                className="border-2 border-dashed border-border rounded-lg p-3 text-center flex flex-col justify-center min-h-[80px]"
              >
                <p className="text-sm font-semibold text-foreground">{p.name}</p>
                <p className="text-[10px] text-muted-foreground mt-1 leading-tight">{p.tagline}</p>
              </a>
            ))}
            <a
              href="#nieuwsbrief"
              className="border-2 border-dashed border-border rounded-lg p-3 text-center flex flex-col justify-center bg-muted min-h-[80px]"
            >
              <p className="text-sm font-semibold text-foreground">Nieuwsbrief</p>
              <p className="text-[10px] text-muted-foreground mt-1">Gratis & vrijblijvend</p>
            </a>
          </div>
          <a
            href="/mobile/word-lid"
            className="inline-flex w-full items-center justify-center px-5 py-2.5 rounded-md bg-foreground text-background text-sm font-medium"
          >
            Join BAM
          </a>
        </section>
      </div>
    </MobileShell>
  );
};

export default Mobile;
