import { Mail, Phone } from "lucide-react";
import MainNavigation from "@/components/MainNavigation";
import Footer from "@/components/Footer";

const contact = {
  voornaam: "Nathalie",
  naam: "Prieto",
  functie: "Contactpersoon opleidingen",
  bedrijf: "BAM",
  gsm: "+32 478 00 00 00",
  email: "nathalie@bam.be",
  about:
    "Nathalie is je aanspreekpunt voor alle vragen rond opleidingen en events bij BAM. Ze begeleidt deelnemers van inschrijving tot afronding en helpt je graag met praktische info, facturatie en op maat gemaakte trajecten.",
  expertise: [
    "Opleidingen",
    "Events",
    "Inschrijvingen",
    "Klantenrelaties",
    "Facturatie",
    "Planning",
  ],
};

export default function ContactDetail() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <MainNavigation />

      <main className="flex-1">
        <div className="max-w-[1100px] mx-auto px-6 py-10">
          {/* Breadcrumb */}
          <nav className="text-xs text-neutral-500 mb-6">
            <a href="/agenda" className="hover:text-neutral-900">Academy</a>
            <span className="mx-2">/</span>
            <span>Contact</span>
            <span className="mx-2">/</span>
            <span className="text-neutral-900">{contact.voornaam} {contact.naam}</span>
          </nav>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left: photo + meta */}
            <aside className="md:col-span-1">
              <div className="aspect-[3/4] w-48 rounded-lg border-2 border-dashed border-neutral-300 bg-neutral-50 flex items-center justify-center text-xs text-neutral-400">
                Foto
              </div>

              <div className="mt-5">
                <h1 className="text-2xl font-bold text-neutral-900 leading-tight">
                  {contact.voornaam} {contact.naam}
                </h1>
                <p className="text-sm text-neutral-700 mt-1">{contact.functie}</p>
                <p className="text-sm text-neutral-500">{contact.bedrijf}</p>

                <div className="mt-4 space-y-2 text-sm">
                  <a
                    href={`tel:${contact.gsm.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 text-neutral-800 hover:text-neutral-900"
                  >
                    <Phone className="w-4 h-4" />
                    {contact.gsm}
                  </a>
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center gap-2 text-neutral-800 hover:text-neutral-900"
                  >
                    <Mail className="w-4 h-4" />
                    {contact.email}
                  </a>
                </div>
              </div>
            </aside>

            {/* Right: about + video + tags */}
            <section className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-2">
                  Over {contact.voornaam}
                </h2>
                <p className="text-base text-neutral-800 leading-relaxed">{contact.about}</p>
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
                  {contact.expertise.map((tag) => (
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
