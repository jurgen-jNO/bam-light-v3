import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  Image as ImageIcon,
  Play,
  Quote,
  Share2,
  Facebook,
  Linkedin,
  Twitter,
  Link2,
  Mail,
  Pencil,
  Trash2,
  Plus,
  Megaphone,
  ArrowRight,
} from "lucide-react";
import MainNavigation from "@/components/MainNavigation";
import Footer from "@/components/Footer";

const artikel = {
  title: "Hoe Belgische merken in 2026 hun creatieve toon hervinden",
  intro:
    "Van AI-gedreven campagnes tot een hernieuwde focus op craft: we bekijken hoe sterke merken in een verzadigde markt opnieuw onderscheidend worden. Een diepgaande analyse met inzichten van vier toonaangevende makers.",
  publishedAt: "2026-05-08",
  readingTime: "8 min lezen",
  category: "Strategie",
  cta: "Word lid van BAM",
  ctaUrl: "/word-lid",
  author: {
    name: "Eva Vandenberghe",
    role: "Editor-in-chief",
    company: "BAM",
  },
  blocks: [
    {
      type: "subtitle" as const,
      text: "1. De terugkeer van het ambacht",
    },
    {
      type: "paragraph" as const,
      text: "Na een decennium van performance-first denken zien we een duidelijke kentering. Merken investeren opnieuw in craft — typografie, illustratie, fotografie — als manier om zich te onderscheiden in een markt waarin AI-content de norm wordt.",
    },
    {
      type: "visual" as const,
      caption: "Visual — campagnebeeld of moodboard (16:9)",
    },
    {
      type: "paragraph" as const,
      text: "Bureaus rapporteren een stijging van 32% in budgetten voor handgemaakte assets. Dit wijst op een verschuiving van efficiëntie naar betekenis.",
    },
    {
      type: "subtitle" as const,
      text: "2. AI als creatieve partner, niet als vervanger",
    },
    {
      type: "paragraph" as const,
      text: "De meest succesvolle teams gebruiken AI om sneller te itereren, niet om creatief werk over te nemen. De rol van de creative director wordt belangrijker dan ooit.",
    },
    {
      type: "video" as const,
      caption: "Video — interview met creative director (16:9)",
    },
    {
      type: "testimonial" as const,
      name: "Jonas Geirnaert",
      role: "Creative Director",
      company: "Mortierbrigade",
      quote:
        "AI is een gereedschap, geen vervanger. De magie zit nog steeds in het idee — en dat blijft mensenwerk.",
    },
    {
      type: "subtitle" as const,
      text: "3. De rol van community",
    },
    {
      type: "paragraph" as const,
      text: "Merken die luisteren naar hun community bouwen sneller vertrouwen op. BAM-leden delen in 2026 vaker case studies, tools en mislukkingen — een teken van een gezonde sector.",
    },
  ],
};

const fmt = (iso: string) => {
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y.slice(2)}`;
};

const WireBox = ({
  label,
  ratio = "aspect-video",
  icon: Icon = ImageIcon,
}: {
  label: string;
  ratio?: string;
  icon?: typeof ImageIcon;
}) => (
  <div
    className={`${ratio} w-full border-2 border-dashed border-foreground/30 bg-foreground/[0.03] flex flex-col items-center justify-center gap-2 text-foreground/40`}
  >
    <Icon className="w-8 h-8" />
    <span className="text-[10px] uppercase tracking-widest font-semibold">{label}</span>
  </div>
);

const AdminToolbar = () => (
  <div className="flex items-center gap-2 flex-wrap">
    <button className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] uppercase tracking-widest font-semibold border-2 border-dashed border-foreground/40 hover:bg-foreground/5">
      <Plus className="w-3 h-3" /> Nieuw artikel
    </button>
    <button className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] uppercase tracking-widest font-semibold border-2 border-dashed border-foreground/40 hover:bg-foreground/5">
      <Pencil className="w-3 h-3" /> Editeren
    </button>
    <button className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] uppercase tracking-widest font-semibold border-2 border-dashed border-destructive/60 text-destructive hover:bg-destructive/5">
      <Trash2 className="w-3 h-3" /> Verwijderen
    </button>
  </div>
);

const ArtikelDetail = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <MainNavigation />

      <main className="flex-1 max-w-[1280px] mx-auto w-full px-6 py-10">
        {/* Wireframe header */}
        <div className="border-b-2 border-dashed border-foreground/30 pb-5 mb-8 flex items-end justify-between flex-wrap gap-4">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-foreground/50 mb-2">
              [ wireframe — artikel detail ]
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-foreground/70 hover:text-foreground"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Terug naar overzicht
            </Link>
          </div>
          <AdminToolbar />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10">
          {/* MAIN COLUMN */}
          <article className="min-w-0">
            {/* Meta */}
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest font-semibold text-foreground/60 mb-4">
              <span className="px-2 py-1 border-2 border-dashed border-foreground/40">
                {artikel.category}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-3 h-3" /> {fmt(artikel.publishedAt)}
              </span>
              <span>· {artikel.readingTime}</span>
            </div>

            {/* Titel */}
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-foreground mb-5">
              {artikel.title}
            </h1>

            {/* Introtekst */}
            <p className="text-lg text-foreground/75 leading-relaxed mb-8 border-l-2 border-dashed border-foreground/30 pl-4">
              {artikel.intro}
            </p>

            {/* Hero visual */}
            <div className="mb-10">
              <WireBox label="Hero visual — 16:9" />
            </div>

            {/* Auteur info */}
            <div className="flex items-center justify-between gap-4 flex-wrap border-y-2 border-dashed border-foreground/20 py-4 mb-10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full border-2 border-dashed border-foreground/30 bg-foreground/[0.03] flex items-center justify-center text-foreground/40">
                  <ImageIcon className="w-4 h-4" />
                </div>
                <div className="leading-tight">
                  <p className="text-sm font-semibold text-foreground">{artikel.author.name}</p>
                  <p className="text-xs text-foreground/60">
                    {artikel.author.role} · {artikel.author.company}
                  </p>
                </div>
              </div>

              {/* Social share */}
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-widest font-semibold text-foreground/50 mr-1 inline-flex items-center gap-1.5">
                  <Share2 className="w-3 h-3" /> Delen
                </span>
                {[Linkedin, Facebook, Twitter, Mail, Link2].map((Icon, i) => (
                  <button
                    key={i}
                    className="w-8 h-8 border-2 border-dashed border-foreground/30 hover:bg-foreground/5 flex items-center justify-center text-foreground/60 hover:text-foreground"
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </button>
                ))}
              </div>
            </div>

            {/* Content blocks */}
            <div className="space-y-8">
              {artikel.blocks.map((b, i) => {
                if (b.type === "subtitle") {
                  return (
                    <h2
                      key={i}
                      className="text-2xl font-bold text-foreground pt-2"
                    >
                      {b.text}
                    </h2>
                  );
                }
                if (b.type === "paragraph") {
                  return (
                    <p
                      key={i}
                      className="text-base text-foreground/80 leading-relaxed"
                    >
                      {b.text}
                    </p>
                  );
                }
                if (b.type === "visual") {
                  return (
                    <figure key={i} className="space-y-2">
                      <WireBox label={b.caption} />
                      <figcaption className="text-xs text-foreground/50 italic">
                        {b.caption}
                      </figcaption>
                    </figure>
                  );
                }
                if (b.type === "video") {
                  return (
                    <figure key={i} className="space-y-2">
                      <WireBox label={b.caption} icon={Play} />
                      <figcaption className="text-xs text-foreground/50 italic">
                        {b.caption}
                      </figcaption>
                    </figure>
                  );
                }
                if (b.type === "testimonial") {
                  return (
                    <blockquote
                      key={i}
                      className="border-2 border-dashed border-foreground/30 bg-foreground/[0.02] p-6"
                    >
                      <Quote className="w-6 h-6 text-foreground/40 mb-3" />
                      <p className="text-lg text-foreground/85 leading-snug italic mb-5">
                        "{b.quote}"
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-full border-2 border-dashed border-foreground/30 bg-foreground/[0.03] flex items-center justify-center text-foreground/40">
                          <ImageIcon className="w-4 h-4" />
                        </div>
                        <div className="leading-tight">
                          <p className="text-sm font-semibold text-foreground">{b.name}</p>
                          <p className="text-xs text-foreground/60">
                            {b.role} · {b.company}
                          </p>
                        </div>
                      </div>
                    </blockquote>
                  );
                }
                return null;
              })}
            </div>

            {/* CTA */}
            <div className="mt-12 border-2 border-dashed border-foreground/40 bg-foreground/[0.03] p-8 flex items-center justify-between gap-6 flex-wrap">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-foreground/50 mb-1">[ cta ]</p>
                <h3 className="text-xl font-bold text-foreground">
                  Wil je meer artikels zoals dit?
                </h3>
                <p className="text-sm text-foreground/60 mt-1">
                  Sluit je aan bij de community van BAM en ontvang elke week nieuwe inzichten.
                </p>
              </div>
              <Link
                to={artikel.ctaUrl}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-widest font-semibold bg-foreground text-background hover:bg-foreground/85"
              >
                {artikel.cta} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Bottom share */}
            <div className="mt-8 flex items-center gap-2 flex-wrap">
              <span className="text-[10px] uppercase tracking-widest font-semibold text-foreground/50 inline-flex items-center gap-1.5 mr-1">
                <Share2 className="w-3 h-3" /> Deel dit artikel
              </span>
              {[Linkedin, Facebook, Twitter, Mail, Link2].map((Icon, i) => (
                <button
                  key={i}
                  className="w-8 h-8 border-2 border-dashed border-foreground/30 hover:bg-foreground/5 flex items-center justify-center text-foreground/60 hover:text-foreground"
                >
                  <Icon className="w-3.5 h-3.5" />
                </button>
              ))}
            </div>
          </article>

          {/* SIDEBAR — Advertentie */}
          <aside className="lg:sticky lg:top-24 self-start space-y-4">
            <p className="text-[10px] uppercase tracking-widest font-semibold text-foreground/50">
              [ advertentie ]
            </p>
            <div className="border-2 border-dashed border-foreground/30 bg-foreground/[0.03] w-full max-w-[300px] aspect-[1/3] flex flex-col items-center justify-center gap-2 text-foreground/40">
              <Megaphone className="w-8 h-8" />
              <span className="text-[10px] uppercase tracking-widest font-semibold">
                Skyscraper — 300×900
              </span>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ArtikelDetail;
