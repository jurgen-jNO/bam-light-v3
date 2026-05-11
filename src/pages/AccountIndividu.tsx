import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Save, Trash2, AlertTriangle, Check } from "lucide-react";
import MainNavigation from "@/components/MainNavigation";
import Footer from "@/components/Footer";
import { inputCls, Field, Grid2 } from "@/components/inschrijven/FlowShell";
import { toast } from "sonner";

const INTERESTS = [
  "Digital & Technology",
  "Sustainability, Ethics & Purpose",
  "Marketing Leadership & Future Skills",
  "Brand Building",
  "Performance Marketing",
  "Community Building",
];

const Section = ({ title, tag, children }: { title: string; tag: string; children: React.ReactNode }) => (
  <section className="border-2 border-dashed border-foreground/30 bg-foreground/[0.02] p-6">
    <p className="text-[10px] uppercase tracking-widest text-foreground/50 mb-1">{tag}</p>
    <h2 className="text-lg font-bold text-foreground mb-5">{title}</h2>
    {children}
  </section>
);

const Toggle = ({
  checked, onChange, label, hint,
}: { checked: boolean; onChange: (v: boolean) => void; label: string; hint?: string }) => (
  <div className="flex items-start justify-between gap-4 py-3 border-t-2 border-dashed border-foreground/20 first:border-t-0 first:pt-0">
    <div>
      <p className="text-sm font-medium text-foreground">{label}</p>
      {hint && <p className="text-xs text-foreground/55 mt-0.5">{hint}</p>}
    </div>
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={`shrink-0 relative w-11 h-6 border-2 border-dashed transition-colors ${
        checked ? "bg-foreground border-foreground" : "border-foreground/40 bg-background"
      }`}
      aria-pressed={checked}
    >
      <span
        className={`absolute top-0.5 w-4 h-4 transition-all ${
          checked ? "left-[calc(100%-1.125rem)] bg-background" : "left-0.5 bg-foreground/60"
        }`}
      />
    </button>
  </div>
);

const AccountIndividu = () => {
  const [profile, setProfile] = useState({
    firstName: "Lieselot",
    lastName: "Janssens",
    email: "lieselot@voorbeeld.be",
    phone: "+32 470 12 34 56",
    company: "Onshore.be",
    role: "Content strateeg",
  });

  const [newsletter, setNewsletter] = useState({
    weekly: true,
    events: true,
    trainings: false,
    partners: false,
  });

  const [interests, setInterests] = useState<string[]>([
    "Brand Building", "Marketing Leadership & Future Skills", "Community Building",
  ]);

  const [confirmDelete, setConfirmDelete] = useState(false);
  const [activeTab, setActiveTab] = useState<"gegevens" | "opleidingen">("gegevens");

  const TABS = [
    { id: "gegevens" as const, label: "Mijn gegevens" },
    { id: "opleidingen" as const, label: "Mijn opleidingen en events" },
  ];

  const toggleInterest = (i: string) =>
    setInterests((cur) => (cur.includes(i) ? cur.filter((x) => x !== i) : [...cur, i]));

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <MainNavigation />
      <main className="flex-1 max-w-[820px] mx-auto w-full px-6 py-12">
        <div className="border-b-2 border-dashed border-foreground/30 pb-6 mb-8">
          <Link
            to="/"
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-foreground/60 hover:text-foreground mb-4 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Terug naar home
          </Link>
          <p className="text-[10px] uppercase tracking-widest text-foreground/50 mb-2">[ account — individu ]</p>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Mijn account</h1>
              <p className="text-sm text-foreground/60 mt-2">
                Beheer je profiel, voorkeuren en lidmaatschap.
              </p>
            </div>
            <div className="border-2 border-dashed border-foreground/40 px-4 py-2.5">
              <p className="text-[10px] uppercase tracking-widest text-foreground/50">Lidmaatschap</p>
              <p className="text-sm font-bold text-foreground flex items-center gap-2">
                <Check className="w-3.5 h-3.5" /> Solo · actief
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Gegevens */}
          <Section title="Persoonlijke gegevens" tag="[ profiel ]">
            <Grid2>
              <Field label="Voornaam">
                <input className={inputCls} value={profile.firstName} onChange={(e) => setProfile({ ...profile, firstName: e.target.value })} />
              </Field>
              <Field label="Naam">
                <input className={inputCls} value={profile.lastName} onChange={(e) => setProfile({ ...profile, lastName: e.target.value })} />
              </Field>
              <Field label="E-mail">
                <input type="email" className={inputCls} value={profile.email} onChange={(e) => setProfile({ ...profile, email: e.target.value })} />
              </Field>
              <Field label="Telefoon">
                <input className={inputCls} value={profile.phone} onChange={(e) => setProfile({ ...profile, phone: e.target.value })} />
              </Field>
              <Field label="Bedrijf">
                <input className={inputCls} value={profile.company} onChange={(e) => setProfile({ ...profile, company: e.target.value })} />
              </Field>
              <Field label="Functie">
                <input className={inputCls} value={profile.role} onChange={(e) => setProfile({ ...profile, role: e.target.value })} />
              </Field>
            </Grid2>
            <button
              type="button"
              onClick={() => toast.success("Gegevens opgeslagen ✓")}
              className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-widest font-semibold bg-foreground text-background hover:bg-foreground/85 transition-colors"
            >
              <Save className="w-3.5 h-3.5" /> Opslaan
            </button>
          </Section>

          {/* Newsletter opt-ins */}
          <Section title="Newsletter & communicatie" tag="[ opt-ins ]">
            <Toggle
              checked={newsletter.weekly}
              onChange={(v) => setNewsletter({ ...newsletter, weekly: v })}
              label="Wekelijkse BAM newsletter"
              hint="Iedere donderdag het belangrijkste uit de Belgische marketingwereld."
            />
            <Toggle
              checked={newsletter.events}
              onChange={(v) => setNewsletter({ ...newsletter, events: v })}
              label="Event-aankondigingen"
              hint="Updates over BAM events, congressen en awards."
            />
            <Toggle
              checked={newsletter.trainings}
              onChange={(v) => setNewsletter({ ...newsletter, trainings: v })}
              label="Opleidingen aankondigingen"
              hint="Updates over nieuwe BAM Academy opleidingen, workshops en masterclasses."
            />
            <Toggle
              checked={newsletter.partners}
              onChange={(v) => setNewsletter({ ...newsletter, partners: v })}
              label="Communicatie van partners"
              hint="Geselecteerde aanbiedingen en updates van BAM partners."
            />
          </Section>

          {/* Interests */}
          <Section title="Interesses" tag="[ personalisatie ]">
            <p className="text-xs text-foreground/55 mb-4">
              Vink de thema's aan die je interesseren — we stemmen onze content hierop af.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {INTERESTS.map((i) => {
                const on = interests.includes(i);
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => toggleInterest(i)}
                    className={`flex items-start gap-3 text-left px-4 py-3 border-2 border-dashed transition-colors ${
                      on
                        ? "bg-foreground text-background border-foreground"
                        : "border-foreground/30 text-foreground/80 hover:border-foreground/60 hover:text-foreground"
                    }`}
                  >
                    <span
                      className={`shrink-0 mt-0.5 w-4 h-4 border-2 border-dashed flex items-center justify-center ${
                        on ? "bg-background border-background" : "border-foreground/40"
                      }`}
                    >
                      {on && <Check className="w-3 h-3 text-foreground" />}
                    </span>
                    <span className="text-sm font-medium leading-tight">{i}</span>
                  </button>
                );
              })}
            </div>
          </Section>

          {/* Danger zone */}
          <section className="border-2 border-dashed border-destructive/50 bg-destructive/[0.03] p-6">
            <p className="text-[10px] uppercase tracking-widest text-destructive/80 mb-1">[ danger zone ]</p>
            <h2 className="text-lg font-bold text-foreground mb-2">Account verwijderen</h2>
            <p className="text-sm text-foreground/65 mb-4">
              Verwijder je account en alle gekoppelde data permanent. Dit kan niet ongedaan worden gemaakt.
            </p>
            <button
              type="button"
              onClick={() => setConfirmDelete(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-widest font-semibold border-2 border-dashed border-destructive/60 text-destructive hover:bg-destructive/10 transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" /> Account verwijderen
            </button>
          </section>
        </div>
      </main>
      <Footer />

      {/* Delete confirmation modal */}
      {confirmDelete && (
        <div className="fixed inset-0 z-50 bg-foreground/40 backdrop-blur-sm flex items-center justify-center px-6">
          <div className="bg-background border-2 border-dashed border-destructive/60 max-w-md w-full p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="shrink-0 w-10 h-10 border-2 border-dashed border-destructive/60 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-destructive" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-destructive/80 mb-1">[ bevestig verwijdering ]</p>
                <h3 className="text-lg font-bold text-foreground">Ben je zeker?</h3>
              </div>
            </div>
            <p className="text-sm text-foreground/70 mb-6 leading-relaxed">
              Als je je account verwijdert worden <strong>al je gegevens</strong>, voorkeuren, interesses,
              event-inschrijvingen en lidmaatschapshistoriek <strong>permanent gewist</strong>. Deze actie
              kan niet ongedaan worden gemaakt.
            </p>
            <div className="flex flex-wrap gap-3 justify-end">
              <button
                type="button"
                onClick={() => setConfirmDelete(false)}
                className="px-5 py-2.5 text-xs uppercase tracking-widest font-semibold border-2 border-dashed border-foreground/40 text-foreground hover:bg-foreground/5 transition-colors"
              >
                Annuleer
              </button>
              <button
                type="button"
                onClick={() => {
                  setConfirmDelete(false);
                  toast.success("Account verwijderd ✓");
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-widest font-semibold bg-destructive text-destructive-foreground hover:bg-destructive/85 transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" /> Ja, verwijder
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountIndividu;
