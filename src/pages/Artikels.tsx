import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Image as ImageIcon, ChevronRight } from "lucide-react";
import MainNavigation from "@/components/MainNavigation";
import Footer from "@/components/Footer";

// Genereer 20 artikels
const articles = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  title: i === 0 
    ? "Hoe Belgische merken in 2026 hun creatieve toon hervinden in een door AI gedomineerde markt"
    : i === 1
    ? "Waarom first-party data de nieuwe olie is voor B2B marketing"
    : i === 2
    ? "De opkomst van de Chief Community Officer"
    : `Artikel headline nummer ${i + 1} met een intrigerende en nieuwswaardige titel over marketing`,
  intro: i === 0 
    ? "Van AI-gedreven campagnes tot een hernieuwde focus op craft: we bekijken hoe sterke merken in een verzadigde markt opnieuw onderscheidend worden. Een diepgaande analyse met inzichten van vier toonaangevende makers."
    : "Een korte en bondige inleiding die de lezer prikkelt om verder te lezen over dit specifieke marketing topic.",
  category: [
    "Digital & Technology",
    "Sustainability, Ethics & Purpose",
    "Marketing Leadership & Future Skills",
    "Brand Building",
    "Performance Marketing",
    "Community Building"
  ][i % 6],
  date: `2026-05-${String((i % 28) + 1).padStart(2, "0")}`,
  slug: `artikel-${i + 1}`,
}));

const fmt = (iso: string) => {
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y.slice(2)}`;
};

const WireBox = ({
  label,
  ratio = "aspect-video",
}: {
  label: string;
  ratio?: string;
}) => (
  <div
    className={`${ratio} w-full border border-dashed border-foreground/30 bg-foreground/[0.03] flex flex-col items-center justify-center gap-2 text-foreground/40 group-hover:bg-foreground/5 transition-colors duration-300`}
  >
    <ImageIcon className="w-6 h-6" />
    <span className="text-[10px] uppercase tracking-widest font-semibold">{label}</span>
  </div>
);

const Artikels = () => {
  const heroArticle = articles[0];
  const subHeroArticles = articles.slice(1, 3);
  const trendingArticles = articles.slice(3, 8);
  const gridArticles = articles.slice(8);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <MainNavigation />

      <main className="flex-1 max-w-[1400px] mx-auto w-full px-6 py-10">
        {/* Wireframe header */}
        <div className="border-b-2 border-dashed border-foreground/30 pb-5 mb-8 flex items-end justify-between flex-wrap gap-4">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-foreground/50 mb-2">
              [ wireframe — artikels overzicht ]
            </p>
          </div>
        </div>

        {/* Top Section: Hero + Trending Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8 mb-16">
          
          {/* Main Hero & Sub Hero Column */}
          <div className="space-y-8">
            {/* Main Hero */}
            <Link to={`/artikel/${heroArticle.slug}`} className="group block">
              <article className="relative">
                <WireBox label="Hero visual — 16:9" ratio="aspect-[21/9]" />
                <div className="mt-6">
                  <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest font-semibold text-foreground/60 mb-3">
                    <span className="px-2 py-1 border-2 border-dashed border-foreground/40">
                      {heroArticle.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-3 h-3" /> {fmt(heroArticle.date)}
                    </span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold leading-tight text-foreground group-hover:underline transition-all mb-4">
                    {heroArticle.title}
                  </h2>
                  <p className="text-lg text-foreground/70 leading-relaxed max-w-3xl border-l-2 border-dashed border-foreground/30 pl-4">
                    {heroArticle.intro}
                  </p>
                </div>
              </article>
            </Link>

            {/* Sub Hero Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t-2 border-dashed border-foreground/20">
              {subHeroArticles.map((article) => (
                <Link key={article.id} to={`/artikel/${article.slug}`} className="group block">
                  <article>
                    <WireBox label="Afbeelding 16:9" ratio="aspect-video" />
                    <div className="mt-4">
                      <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest font-semibold text-foreground/60 mb-2">
                        <span className="px-2 py-1 border-2 border-dashed border-foreground/40">{article.category}</span>
                        <span>·</span>
                        <span>{fmt(article.date)}</span>
                      </div>
                      <h3 className="text-2xl font-bold leading-tight text-foreground group-hover:underline transition-all mb-2">
                        {article.title}
                      </h3>
                      <p className="text-sm text-foreground/70 line-clamp-3">
                        {article.intro}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>

          {/* Trending Sidebar */}
          {/* Trending Sidebar */}
          <aside className="border-2 border-dashed border-foreground/20 bg-foreground/[0.01] p-6">
            <div className="flex items-center gap-2 mb-6 pb-4 border-b-2 border-dashed border-foreground/20">
              <div className="w-3 h-3 border-2 border-dashed border-foreground/40" />
              <h3 className="text-lg font-bold uppercase tracking-widest text-foreground/80">Trending Now</h3>
            </div>
            
            <div className="space-y-6">
              {trendingArticles.map((article, index) => (
                <Link key={article.id} to={`/artikel/${article.slug}`} className="group flex gap-4">
                  <div className="text-4xl font-bold text-foreground/20 font-serif leading-none pt-1">
                    {index + 1}
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest font-semibold text-foreground/50 mb-1 border border-dashed border-foreground/30 px-1 inline-block">
                      {article.category}
                    </div>
                    <h4 className="text-base font-bold leading-snug text-foreground group-hover:underline">
                      {article.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t-2 border-dashed border-foreground/20">
              <Link to="/bam-magazine" className="group flex items-center justify-between p-4 border-2 border-dashed border-foreground/20 hover:bg-foreground/5 transition-colors">
                <span className="font-bold uppercase tracking-widest text-sm text-foreground/80">Lees BAM Magazine</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-foreground/50" />
              </Link>
            </div>
          </aside>
        </div>

        {/* Separator */}
        <div className="w-full border-t-2 border-dashed border-foreground/20 mb-16 relative">
          <div className="absolute left-1/2 -translate-x-1/2 -top-3 bg-background px-4 text-[10px] font-bold uppercase tracking-widest text-foreground/50">
            [ Meer artikels ]
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {gridArticles.map((article) => (
            <Link key={article.id} to={`/artikel/${article.slug}`} className="group block flex flex-col h-full">
              <article className="flex-1 flex flex-col">
                <WireBox label="Thumb" ratio="aspect-[4/3]" />
                <div className="mt-4 flex-1">
                  <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest font-semibold text-foreground/60 mb-2">
                    <span className="px-2 py-1 border-2 border-dashed border-foreground/40">{article.category}</span>
                    <span>·</span>
                    <span>{fmt(article.date)}</span>
                  </div>
                  <h3 className="text-xl font-bold leading-snug text-foreground group-hover:underline transition-all mb-3">
                    {article.title}
                  </h3>
                  <p className="text-sm text-foreground/70 line-clamp-2">
                    {article.intro}
                  </p>
                </div>
                <div className="mt-4 flex items-center text-xs font-bold uppercase tracking-widest text-foreground/50 group-hover:text-foreground transition-colors">
                  Lees verder <ChevronRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Load More CTA */}
        <div className="mt-20 flex justify-center">
          <button className="px-8 py-4 border-2 border-dashed border-foreground/40 text-foreground/80 font-bold uppercase tracking-widest text-sm hover:bg-foreground/5 transition-colors">
            Laad meer artikels
          </button>
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default Artikels;
