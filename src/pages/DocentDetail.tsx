import { Linkedin, Play } from "lucide-react";
import MainNavigation from "@/components/MainNavigation";
import Footer from "@/components/Footer";

const docent = {
  voornaam: "Jan",
  naam: "Janssens",
  functie: "Head of Brand Strategy",
  bedrijf: "Studio Nordic",
  foto: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
  video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  linkedin: "https://www.linkedin.com/in/example",
  about:
    "Jan is een ervaren brand strateeg met meer dan 15 jaar expertise in het bouwen van merken in B2B en B2C. Hij begeleidt teams in het ontwikkelen van scherpe positioneringen en heldere merkverhalen, en deelt zijn inzichten als gastdocent bij verschillende opleidingsinstellingen.",
  expertise: [
    "Brand Strategy",
    "Positionering",
    "Storytelling",
    "Customer Journey",
    "B2B Marketing",
    "Workshop Facilitation",
    "Tone of Voice",
    "Rebranding",
  ],
};

export default function DocentDetail() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <MainNavigation />

      <main className="flex-1">
        <div className="max-w-[1100px] mx-auto px-6 py-10">
          {/* Breadcrumb */}
          <nav className="text-xs text-neutral-500 mb-6">
            <a href="/agenda" className="hover:text-neutral-900">Academy</a>
            <span className="mx-2">/</span>
            <span>Docenten</span>
            <span className="mx-2">/</span>
            <span className="text-neutral-900">{docent.voornaam} {docent.naam}</span>
          </nav>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left: photo + meta */}
            <aside className="md:col-span-1">
              <div className="aspect-[3/4] w-32 rounded-lg border-2 border-dashed border-neutral-300 bg-neutral-50 flex items-center justify-center text-xs text-neutral-400">
                Foto
              </div>

              <div className="mt-5">
                <h1 className="text-2xl font-bold text-neutral-900 leading-tight">
                  {docent.voornaam} {docent.naam}
                </h1>
                <p className="text-sm text-neutral-700 mt-1">{docent.functie}</p>
                <p className="text-sm text-neutral-500">{docent.bedrijf}</p>

                <a
                  href={docent.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 mt-4 px-3 py-2 rounded border border-neutral-300 text-sm text-neutral-800 hover:bg-neutral-50 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn profiel
                </a>
              </div>
            </aside>

            {/* Right: about + video + tags */}
            <section className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-2">
                  Over {docent.voornaam}
                </h2>
                <p className="text-base text-neutral-800 leading-relaxed">{docent.about}</p>
              </div>

              {/* Video */}
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-2">
                  Introductievideo
                </h2>
                <div className="relative aspect-video w-full rounded-lg border-2 border-dashed border-neutral-300 bg-neutral-50 flex items-center justify-center text-xs text-neutral-400">
                  Video
                </div>
              </div>

              {/* Expertise */}
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-3">
                  Expertise
                </h2>
                <div className="flex flex-wrap gap-2">
                  {docent.expertise.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-neutral-100 text-neutral-800 text-xs font-medium border border-neutral-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
