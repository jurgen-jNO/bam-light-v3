import { ArrowRight, Mail } from "lucide-react";
import MainNavigation from "@/components/MainNavigation";
import Footer from "@/components/Footer";

interface ThinkTank {
  id: string;
  title: string;
  description: string;
  cta: string;
  email: string;
}

const thinkTanks: ThinkTank[] = [
  {
    id: "sustainability",
    title: "Sustainability",
    description:
      "De Think Tank Sustainability wilt de duurzame ontwikkeling van de activiteiten van marketeers bevorderen, met aandacht voor de fundamentele rol van marketeers binnen product- en servicemarketing.",
    cta: "Engageer je in de Think Tank Sustainability",
    email: "sarah.vyverman@marketing.be",
  },
  {
    id: "martech-data",
    title: "MarTech & Data with IAB",
    description:
      "De technologische ontwikkelingen gebeuren aan een razendsnel tempo. De Think Tank MarTech & Data with IAB helpt marketeers en bedrijven bij het maken van goede keuzes.",
    cta: "Engageer je in de Think Tank MarTech & Data with IAB",
    email: "sarah.vyverman@marketing.be",
  },
  {
    id: "diversity-inclusion",
    title: "Diversity & Inclusion",
    description:
      "Hoe maak je marketing vandaag de dag meer inclusief? Het is een vraag die de Think Tank Diversity & Inclusion zich elke dag opnieuw stelt en waarop het antwoord niet eenvoudig blijkt. Net daarom streeft de Think Tank ernaar om de concepten 'diversiteit' en 'inclusie' in de marketingstrategie van bedrijven te integreren.",
    cta: "Engageer je in de Think Tank Diversity & Inclusion",
    email: "sarah.vyverman@marketing.be",
  },
  {
    id: "ethics",
    title: "Ethics",
    description:
      "Ethiek gaat vaak over het bewandelen van een fijne lijn. De Think Tank Ethics koestert de ambitie om marketing en ethiek met elkaar te verweven, over de wettelijke aanpak heen.",
    cta: "Engageer je in de Think Tank Ethics",
    email: "sarah.vyverman@marketing.be",
  },
  {
    id: "health-wellbeing",
    title: "Health & Wellbeing",
    description:
      "De Think Tank Health & Wellbeing focust op de gezondheid en het welzijn van individuen. Ze wilt marketeers helpen om een positieve maatschappelijke, ecologische en economische impact te hebben, waarbij de Think Tank marketeers over sectoren heen met elkaar in contact brengt. Bovendien wilt de Think Tank marketeers bijstaan in het integreren van health & wellbeing in hun business op een ethische en correcte manier.",
    cta: "Engageer je in de Think Tank Health & Wellbeing",
    email: "sarah.vyverman@marketing.be",
  },
];

const ThinkTanks = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <MainNavigation />

      <main className="flex-1 max-w-[1100px] mx-auto w-full px-6 py-12">
        {/* Wireframe header */}
        <div className="border-b-2 border-dashed border-foreground/30 pb-6 mb-10">
          <p className="text-[10px] uppercase tracking-widest text-foreground/50 mb-2">
            [ wireframe — bam think tanks ]
          </p>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Think Tanks</h1>
              <p className="text-sm text-foreground/60 mt-2 max-w-xl">
                Onze Think Tanks brengen marketeers samen rond specifieke thema's
                om kennis te delen en de sector vooruit te helpen.
              </p>
            </div>
          </div>
        </div>

        {/* Think Tanks grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {thinkTanks.map((tt) => (
            <div
              key={tt.id}
              className="flex flex-col border-2 border-dashed border-foreground/40 bg-foreground/[0.02] hover:bg-foreground/[0.06] hover:border-foreground/70 transition-colors p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 shrink-0 border-2 border-dashed border-foreground/40 flex items-center justify-center bg-background">
                  <span className="text-lg font-bold text-foreground/60">
                    {tt.title.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground leading-tight">
                  {tt.title}
                </h3>
              </div>

              <p className="text-sm text-foreground/75 leading-relaxed mb-6 flex-1">
                {tt.description}
              </p>

              <a
                href={`mailto:${tt.email}?subject=${encodeURIComponent(tt.cta)}`}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-foreground/80 hover:text-foreground transition-colors group"
              >
                <span className="border-b-2 border-dashed border-foreground/40 pb-0.5 group-hover:border-foreground/70">
                  {tt.cta}
                </span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        {/* Contact block */}
        <div className="border-2 border-dashed border-foreground/40 bg-foreground/[0.02] p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-foreground/50 mb-2">
                [ contacteer ons ]
              </p>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Wil je mee ideeën uitwisselen?
              </h2>
              <p className="text-sm text-foreground/70 max-w-lg">
                Voel jij je aangesproken door één van deze topics en wil je mee ideeën uitwisselen? Sluit je aan bij een Think Tank door een mailtje te sturen naar Sarah Vyverman.
              </p>
            </div>
            <a
              href="mailto:sarah.vyverman@marketing.be?subject=Interesse%20in%20een%20BAM%20Think%20Tank"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background text-xs uppercase tracking-widest font-semibold hover:bg-foreground/85 transition-colors shrink-0"
            >
              <Mail className="w-4 h-4" />
              Contacteer ons
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ThinkTanks;
