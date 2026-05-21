import { Mail, Phone, ArrowRight } from "lucide-react";
import MainNavigation from "@/components/MainNavigation";
import Footer from "@/components/Footer";
import teamPhoto from "@/assets/team-photo.png";
import fleurPhoto from "@/assets/team-fleur.png";
import nathaliePhoto from "@/assets/team-nathalie.png";
import sarahPhoto from "@/assets/team-sarah.png";

const team = [
  {
    voornaam: "Fleur",
    naam: "Parnet",
    functie: "CEO",
    gsm: "0476 86 32 80",
    email: "fleur.parnet@marketing.be",
    href: "/contact",
    foto: fleurPhoto,
  },
  {
    voornaam: "Nathalie",
    naam: "Prieto",
    functie: "Head of Activities & Sponsoring",
    gsm: "0472 10 20 85",
    email: "nathalie@marketing.be",
    href: "/contact",
    foto: nathaliePhoto,
  },
  {
    voornaam: "Sarah",
    naam: "Vyverman",
    functie: "Head of Communication",
    gsm: "0472 51 66 76",
    email: "sarah@marketing.be",
    href: "/contact",
    foto: sarahPhoto,
  },
  {
    voornaam: "Joke",
    naam: "De Nul",
    functie: "Community Manager",
    gsm: "0471 42 14 24",
    email: "joke.denul@marketing.be",
    href: "/contact",
    foto: null,
  },
];


export default function Team() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <MainNavigation />

      <main className="flex-1">
        <div className="max-w-[1100px] mx-auto px-6 py-10">
          {/* Breadcrumb */}
          <nav className="text-xs text-neutral-500 mb-6">
            <a href="/" className="hover:text-neutral-900">Home</a>
            <span className="mx-2">/</span>
            <span className="text-neutral-900">Team</span>
          </nav>

          <header className="mb-8">
            <h1 className="text-3xl font-bold text-neutral-900">Het BAM team</h1>
            <p className="text-base text-neutral-700 mt-2 max-w-2xl">
              Maak kennis met de mensen achter BAM. Wij staan dagelijks klaar om de marketingcommunity in België te versterken, te inspireren en te verbinden.
            </p>
          </header>

          {/* Team photo */}
          <div className="aspect-[21/9] w-full rounded-lg overflow-hidden bg-neutral-50 mb-12">
            <img src={teamPhoto} alt="BAM teamfoto" className="w-full h-full object-cover" />
          </div>

          {/* Members */}
          <section>
            <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-6">
              Onze teamleden
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {team.map((m) => (
                <li
                  key={m.email}
                  className="border border-neutral-200 rounded-lg p-5 hover:border-neutral-400 transition-colors flex flex-col"
                >
                  <div className="aspect-[3/4] w-28 rounded-md border-2 border-dashed border-neutral-300 bg-neutral-50 flex items-center justify-center text-[10px] text-neutral-400 mb-4">
                    Foto
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 leading-tight">
                    {m.voornaam} {m.naam}
                  </h3>
                  <p className="text-sm text-neutral-700 mt-0.5">{m.functie}</p>

                  <div className="mt-3 space-y-1.5 text-sm">
                    <a
                      href={`tel:${m.gsm.replace(/\s/g, "")}`}
                      className="flex items-center gap-2 text-neutral-800 hover:text-neutral-900"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      {m.gsm}
                    </a>
                    <a
                      href={`mailto:${m.email}`}
                      className="flex items-center gap-2 text-neutral-800 hover:text-neutral-900"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      {m.email}
                    </a>
                  </div>

                  <a
                    href={m.href}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-neutral-900 hover:underline"
                  >
                    Bekijk profiel
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* Exco */}
          <section className="mt-16">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-6">
              Executive Committee
            </h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {["Koen Van Impe", "Annie Courbet", "Burt Riské", "Dominique Vercraeye", "Kris Michiels"].map((naam) => (
                <li key={naam} className="flex flex-col">
                  <div className="aspect-[3/4] w-full rounded-md border-2 border-dashed border-neutral-300 bg-neutral-50 flex items-center justify-center text-[10px] text-neutral-400 mb-3">
                    Foto
                  </div>
                  <h3 className="text-sm font-bold text-neutral-900 leading-tight">{naam}</h3>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
