import { Link } from "react-router-dom";
import { ArrowLeft, Briefcase, MapPin, Clock, Users, Building2, Mail, Globe, Calendar, Send } from "lucide-react";
import MainNavigation from "@/components/MainNavigation";
import Footer from "@/components/Footer";

const vacature = {
  title: "Senior Brand Designer",
  department: "Marketing",
  type: "Voltijds",
  seniority: "Senior",
  location: "Gent",
  workmode: "Hybride",
  startDate: "2026-05-11",
  endDate: "2026-06-08",
  contact: "Mathias De Cock",
  applyUrl: "https://onshore.be/jobs/senior-brand-designer",
  email: "jobs@onshore.be",
  intro:
    "Bij Onshore.be bouwen we merken met karakter. We zoeken een senior brand designer die mee de creatieve toon zet voor ambitieuze opdrachtgevers in binnen- en buitenland.",
  responsibilities: [
    "Ontwikkelen van merkidentiteiten van strategie tot uitrol",
    "Aansturen van junior designers en samenwerken met copywriters",
    "Pitchen en presenteren bij klanten",
    "Bewaken van de creatieve kwaliteit binnen lopende projecten",
  ],
  profile: [
    "5+ jaar ervaring in branding & visuele identiteit",
    "Sterk portfolio met diverse merken en sectoren",
    "Vlot in Figma, Adobe CC en moderne typografie",
    "Vlot tweetalig NL/EN, FR is een plus",
  ],
  offer: [
    "Marktconform salaris met extralegale voordelen",
    "Hybride werken vanuit ons kantoor in Gent",
    "Opleidingsbudget en BAM-lidmaatschap",
    "Een gedreven team en internationale projecten",
  ],
  company: {
    name: "Onshore.be",
    industry: "Branding & design",
    employees: "10-50",
    address: "Vlasmarkt 12, 9000 Gent",
    website: "https://onshore.be",
  },
};

const fmt = (iso: string) => {
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y.slice(2)}`;
};

const Bullets = ({ items }: { items: string[] }) => (
  <ul className="space-y-2">
    {items.map((it, i) => (
      <li key={i} className="flex gap-3 text-sm text-foreground/80">
        <span className="text-foreground/40 mt-1.5 w-1.5 h-1.5 rounded-full bg-foreground/40 shrink-0" />
        <span>{it}</span>
      </li>
    ))}
  </ul>
);

const Block = ({ tag, title, children }: { tag: string; title: string; children: React.ReactNode }) => (
  <section className="border-2 border-dashed border-foreground/30 bg-foreground/[0.02] p-6">
    <p className="text-[10px] uppercase tracking-widest text-foreground/50 mb-1">{tag}</p>
    <h2 className="text-lg font-bold text-foreground mb-4">{title}</h2>
    {children}
  </section>
);

const Meta = ({ icon: Icon, label, value }: any) => (
  <div className="flex items-start gap-2.5 text-sm">
    <Icon className="w-4 h-4 mt-0.5 text-foreground/50 shrink-0" />
    <div>
      <p className="text-[10px] uppercase tracking-widest text-foreground/50">{label}</p>
      <p className="text-foreground/90">{value}</p>
    </div>
  </div>
);

const VacatureDetail = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <MainNavigation />

      <main className="flex-1 max-w-[1200px] mx-auto w-full px-6 py-12">
        <div className="border-b-2 border-dashed border-foreground/30 pb-6 mb-8">
          <p className="text-xs uppercase tracking-widest text-foreground/50 mb-2">[ wireframe — vacature ]</p>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
                <Briefcase className="w-7 h-7" /> {vacature.title}
              </h1>
              <p className="text-sm text-foreground/60 mt-2">
                {vacature.company.name} · {vacature.department} · {vacature.location}
              </p>
            </div>
            <Link
              to="/account/bedrijf"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs uppercase tracking-widest font-semibold border-2 border-dashed border-foreground/40 text-foreground hover:bg-foreground/5"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Terug
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* MAIN */}
          <div className="lg:col-span-2 space-y-6">
            <Block tag="[ over de rol ]" title="Intro">
              <p className="text-sm text-foreground/80 leading-relaxed">{vacature.intro}</p>
            </Block>

            <Block tag="[ takenpakket ]" title="Verantwoordelijkheden">
              <Bullets items={vacature.responsibilities} />
            </Block>

            <Block tag="[ jouw profiel ]" title="Wat we zoeken">
              <Bullets items={vacature.profile} />
            </Block>

            <Block tag="[ aanbod ]" title="Wat we bieden">
              <Bullets items={vacature.offer} />
            </Block>
          </div>

          {/* SIDEBAR */}
          <aside className="lg:col-span-1">
            <div className="sticky top-6 space-y-4">
              <div className="border-2 border-dashed border-foreground/30 bg-foreground/[0.02] p-5 space-y-5">
                {/* logo + bedrijf */}
                <div className="flex items-center gap-3 pb-5 border-b border-dashed border-foreground/20">
                  <div className="w-14 h-14 border-2 border-dashed border-foreground/40 flex items-center justify-center text-foreground/50">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-foreground/50">Bedrijf</p>
                    <p className="text-sm font-bold text-foreground">{vacature.company.name}</p>
                    <p className="text-xs text-foreground/60">{vacature.company.industry}</p>
                  </div>
                </div>

                {/* meta */}
                <div className="space-y-3">
                  <Meta icon={MapPin} label="Locatie" value={`${vacature.location} · ${vacature.workmode}`} />
                  <Meta icon={Clock} label="Type" value={`${vacature.type} · ${vacature.seniority}`} />
                  <Meta icon={Users} label="Bedrijfsgrootte" value={`${vacature.company.employees} medewerkers`} />
                  <Meta icon={Calendar} label="Live" value={`${fmt(vacature.startDate)} — ${fmt(vacature.endDate)}`} />
                  <Meta icon={Building2} label="Adres" value={vacature.company.address} />
                  <Meta
                    icon={Globe}
                    label="Website"
                    value={
                      <a href={vacature.company.website} className="underline hover:text-foreground" target="_blank" rel="noreferrer">
                        {vacature.company.website.replace(/^https?:\/\//, "")}
                      </a>
                    }
                  />
                </div>

                <div className="pt-5 border-t border-dashed border-foreground/20 space-y-3">
                  <a
                    href={vacature.applyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs uppercase tracking-widest font-semibold bg-foreground text-background hover:bg-foreground/85 transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" /> Solliciteer nu
                  </a>
                  <a
                    href={`mailto:${vacature.email}`}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs uppercase tracking-widest font-semibold border-2 border-dashed border-foreground/40 text-foreground hover:bg-foreground/5"
                  >
                    <Mail className="w-3.5 h-3.5" /> {vacature.email}
                  </a>
                  <p className="text-center text-[11px] text-foreground/50">
                    Contact: <span className="text-foreground/80">{vacature.contact}</span>
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default VacatureDetail;
