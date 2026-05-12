import { useState } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import MainNavigation from "@/components/MainNavigation";
import Footer from "@/components/Footer";
import { toast } from "sonner";

type Step = 1 | 2 | 3 | 4 | 5;

interface FormState {
  // Persoonsgegevens
  firstName: string;
  lastName: string;
  language: "NL" | "FR" | "";
  gender: "M" | "V" | "X" | "Andere" | "Liever niet" | "";
  genderOther: string;
  birthdate: string;
  jobTitle: string;
  company: string;
  mobile: string;
  email: string;
  // Adres
  street: string;
  number: string;
  zip: string;
  city: string;
  country: string;
  // Facturatie
  vat: string;
  invoiceEmail: string;
  // Interesses
  interests: string[];
  password?: string;
  // Opt-ins
  newsletter: boolean;
  terms: boolean;
  shareConsent: boolean;
}

const interestOptions = [
  "Digital & Technology",
  "Sustainability, Ethics & Purpose",
  "Marketing Leadership & Future Skills",
  "Brand Building",
  "Performance Marketing",
  "Community Building",
];

const steps = [
  { n: 1, label: "Persoon" },
  { n: 2, label: "Adres" },
  { n: 3, label: "Facturatie" },
  { n: 4, label: "Interesses" },
  { n: 5, label: "Bevestig" },
];

const initialForm: FormState = {
  firstName: "", lastName: "", language: "", gender: "", genderOther: "",
  birthdate: "", jobTitle: "", company: "", mobile: "", email: "",
  street: "", number: "", zip: "", city: "", country: "België",
  vat: "", invoiceEmail: "",
  interests: [], password: "", newsletter: false, terms: false, shareConsent: false,
};

const InschrijvenSolo = () => {
  const [step, setStep] = useState<Step>(1);
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const update = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  const toggleInterest = (i: string) =>
    setForm((f) => ({
      ...f,
      interests: f.interests.includes(i)
        ? f.interests.filter((x) => x !== i)
        : [...f.interests, i],
    }));

  // Demo mode: stappen vrij doorklikbaar zonder validatie.
  const next = () => step < 5 && setStep((s) => (s + 1) as Step);
  const prev = () => step > 1 && setStep((s) => (s - 1) as Step);

  const submit = () => {
    setSubmitted(true);
    toast.success("Inschrijving ontvangen!");
  };

  // ============ SUCCESS SCREEN ============
  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <MainNavigation />
        <main className="flex-1 max-w-[700px] mx-auto w-full px-6 py-16">
          <div className="border-2 border-dashed border-foreground/40 bg-foreground/[0.02] p-10 text-center">
            <div className="w-12 h-12 mx-auto mb-5 rounded-full border-2 border-dashed border-foreground/50 flex items-center justify-center">
              <Check className="w-6 h-6 text-foreground/70" />
            </div>
            <p className="text-[10px] uppercase tracking-widest text-foreground/40 mb-2">[ bedankt ]</p>
            <h1 className="text-2xl font-bold text-foreground mb-3">Bedankt voor je aanvraag</h1>
            <p className="text-sm text-foreground/70 leading-relaxed mb-6">
              We hebben je inschrijving voor het <strong>Solo</strong> lidmaatschap goed ontvangen.
              Je ontvangt zo dadelijk een bevestigingsmail op <strong>{form.email}</strong> met je
              factuur. Zodra de betaling verwerkt is, ben je officieel BAM-lid en krijg je toegang
              tot al je voordelen.
            </p>
            <div className="border-t border-dashed border-foreground/30 pt-5 text-left text-xs text-foreground/60 space-y-2">
              <p className="uppercase tracking-widest text-foreground/50 text-[10px] mb-2">Volgende stappen</p>
              <p>1. Bevestigingsmail in je inbox</p>
              <p>2. Factuur via Exact Online</p>
              <p>3. Activatie van je profiel na betaling</p>
              <p>4. Welkomstmail met onboarding & voordelen</p>
            </div>
            <Link
              to="/"
              className="inline-block mt-8 px-6 py-3 bg-foreground text-background text-xs uppercase tracking-widest font-semibold hover:bg-foreground/85 transition-colors"
            >
              Terug naar home
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <MainNavigation />

      <main className="flex-1 max-w-[820px] mx-auto w-full px-6 py-12">
        {/* Header */}
        <div className="border-b-2 border-dashed border-foreground/30 pb-6 mb-8">
          <Link
            to="/word-lid"
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-foreground/60 hover:text-foreground mb-4 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Terug naar pakketten
          </Link>
          <p className="text-[10px] uppercase tracking-widest text-foreground/50 mb-2">
            [ wireframe — inschrijving Solo ]
          </p>
          <h1 className="text-3xl font-bold text-foreground">Inschrijven — Solo lidmaatschap</h1>
          <p className="text-sm text-foreground/60 mt-2">
            € 475 excl. BTW / jaar — automatische verlenging na 12 maanden (3m vooropzeg)
          </p>
        </div>

        {/* Stepper */}
        <ol className="flex items-center justify-between mb-10 gap-2">
          {steps.map((s, i) => {
            const active = step === s.n;
            const done = step > s.n;
            return (
              <li key={s.n} className="flex-1 flex items-center gap-2">
                <div className="flex flex-col items-center w-full">
                  <div
                    className={`w-8 h-8 border-2 border-dashed flex items-center justify-center text-xs font-semibold ${
                      done
                        ? "bg-foreground text-background border-foreground"
                        : active
                        ? "border-foreground text-foreground bg-foreground/5"
                        : "border-foreground/30 text-foreground/40"
                    }`}
                  >
                    {done ? <Check className="w-3.5 h-3.5" /> : s.n}
                  </div>
                  <span
                    className={`mt-2 text-[10px] uppercase tracking-widest ${
                      active ? "text-foreground" : "text-foreground/40"
                    }`}
                  >
                    {s.label}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div className="flex-1 border-t-2 border-dashed border-foreground/25 -mt-5" />
                )}
              </li>
            );
          })}
        </ol>

        {/* Form panel */}
        <div className="border-2 border-dashed border-foreground/40 bg-foreground/[0.02] p-6 md:p-8">
          {/* STEP 1 */}
          {step === 1 && (
            <Section title="Persoonsgegevens">
              <Grid2>
                <Field label="Voornaam *">
                  <input className={inputCls} value={form.firstName} onChange={(e) => update("firstName", e.target.value)} />
                </Field>
                <Field label="Achternaam *">
                  <input className={inputCls} value={form.lastName} onChange={(e) => update("lastName", e.target.value)} />
                </Field>
                <Field label="E-mail *">
                  <input type="email" className={inputCls} value={form.email} onChange={(e) => update("email", e.target.value)} />
                </Field>
                <Field label="GSM">
                  <input className={inputCls} value={form.mobile} onChange={(e) => update("mobile", e.target.value)} />
                </Field>
                <Field label="Taal *">
                  <select className={inputCls} value={form.language} onChange={(e) => update("language", e.target.value as "NL" | "FR")}>
                    <option value="">— kies —</option>
                    <option value="NL">Nederlands</option>
                    <option value="FR">Frans</option>
                  </select>
                </Field>
                <Field label="Gender">
                  <select className={inputCls} value={form.gender} onChange={(e) => update("gender", e.target.value as FormState["gender"])}>
                    <option value="">— kies —</option>
                    <option value="M">M</option>
                    <option value="V">V</option>
                    <option value="X">X</option>
                    <option value="Andere">Andere</option>
                    <option value="Liever niet">Zeg ik liever niet</option>
                  </select>
                </Field>
                {form.gender === "Andere" && (
                  <Field label="Andere (vrij tekstveld)">
                    <input className={inputCls} value={form.genderOther} onChange={(e) => update("genderOther", e.target.value)} />
                  </Field>
                )}
                <Field label="Geboortedatum">
                  <input type="date" className={inputCls} value={form.birthdate} onChange={(e) => update("birthdate", e.target.value)} />
                </Field>
                <Field label="Functietitel / opleiding">
                  <input className={inputCls} value={form.jobTitle} onChange={(e) => update("jobTitle", e.target.value)} />
                </Field>
                <Field label="Bedrijf">
                  <input className={inputCls} value={form.company} onChange={(e) => update("company", e.target.value)} />
                </Field>
              </Grid2>
            </Section>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <Section title="Adresgegevens">
              <Grid2>
                <Field label="Straat *">
                  <input className={inputCls} value={form.street} onChange={(e) => update("street", e.target.value)} />
                </Field>
                <Field label="Nummer *">
                  <input className={inputCls} value={form.number} onChange={(e) => update("number", e.target.value)} />
                </Field>
                <Field label="Postcode *">
                  <input className={inputCls} value={form.zip} onChange={(e) => update("zip", e.target.value)} />
                </Field>
                <Field label="Gemeente / stad *">
                  <input className={inputCls} value={form.city} onChange={(e) => update("city", e.target.value)} />
                </Field>
                <Field label="Land">
                  <input className={inputCls} value={form.country} onChange={(e) => update("country", e.target.value)} />
                </Field>
              </Grid2>
            </Section>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <Section title="Facturatiegegevens">
              <p className="text-xs text-foreground/60 mb-4 border-l border-dashed border-foreground/30 pl-3">
                Vul je BTW-nummer in als je een factuur op je bedrijf wenst. Laat leeg voor een
                factuur op naam.
              </p>
              <Grid2>
                <Field label="BTW-nummer">
                  <input
                    className={inputCls}
                    placeholder="BE0123456789"
                    value={form.vat}
                    onChange={(e) => update("vat", e.target.value)}
                  />
                </Field>
                <Field label="Factuur-e-mail">
                  <input
                    type="email"
                    className={inputCls}
                    placeholder="bv. boekhouding@bedrijf.be"
                    value={form.invoiceEmail}
                    onChange={(e) => update("invoiceEmail", e.target.value)}
                  />
                </Field>
              </Grid2>
              <div className="mt-6 border border-dashed border-foreground/30 p-4 bg-foreground/[0.03]">
                <p className="text-[10px] uppercase tracking-widest text-foreground/50 mb-2">Te betalen</p>
                <div className="flex justify-between text-sm text-foreground/80 py-1">
                  <span>Solo lidmaatschap (12 maanden)</span><span>€ 475,00</span>
                </div>
                <div className="flex justify-between text-sm text-foreground/80 py-1">
                  <span>BTW (21%)</span><span>€ 99,75</span>
                </div>
                <div className="flex justify-between text-sm font-semibold text-foreground border-t border-dashed border-foreground/30 pt-2 mt-2">
                  <span>Totaal incl. BTW</span><span>€ 574,75</span>
                </div>
              </div>
            </Section>
          )}

          {/* STEP 4 */}
          {step === 4 && (
            <Section title="Interessevelden">
              <p className="text-xs text-foreground/60 mb-4">
                Selecteer onderwerpen die jou interesseren — we gebruiken dit voor de personalisatie
                van de nieuwsbrief en sitecontent.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {interestOptions.map((opt) => {
                  const checked = form.interests.includes(opt);
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => toggleInterest(opt)}
                      className={`flex items-center gap-3 p-3 border-2 border-dashed text-left text-sm transition-colors ${
                        checked
                          ? "border-foreground bg-foreground/10 text-foreground"
                          : "border-foreground/30 text-foreground/70 hover:border-foreground/60"
                      }`}
                    >
                      <span
                        className={`w-4 h-4 border-2 border-dashed flex items-center justify-center ${
                          checked ? "bg-foreground border-foreground" : "border-foreground/40"
                        }`}
                      >
                        {checked && <Check className="w-3 h-3 text-background" />}
                      </span>
                      {opt}
                    </button>
                  );
                })}
              </div>
            </Section>
          )}

          {/* STEP 5 */}
          {step === 5 && (
            <Section title="Bevestig & verstuur">
              <div className="mb-10">
                <p className="text-[10px] uppercase tracking-widest text-foreground/50 mb-3">[ te bevestigen ]</p>
                <div className="space-y-4 opacity-75">
                  <Summary title="Persoon" items={[
                    ["Naam", `${form.firstName} ${form.lastName}`],
                    ["E-mail", form.email],
                    ["Taal", form.language || "—"],
                    ["Functie", form.jobTitle || "—"],
                    ["Bedrijf", form.company || "—"],
                  ]} />
                  <Summary title="Adres" items={[
                    ["Adres", `${form.street} ${form.number}, ${form.zip} ${form.city}, ${form.country}`],
                  ]} />
                  <Summary title="Facturatie" items={[
                    ["BTW", form.vat || "Op naam"],
                    ["Factuur-mail", form.invoiceEmail || form.email],
                    ["Bedrag", "€ 574,75 incl. BTW"],
                  ]} />
                </div>
              </div>

              <div className="border-t-2 border-dashed border-foreground/30 pt-8">
                <p className="text-[10px] uppercase tracking-widest text-foreground/80 font-bold mb-4">[ aan te vullen ]</p>
                
                <div className="space-y-6">
                  <div className="border-2 border-dashed border-foreground/50 p-5 bg-foreground/[0.02]">
                    <p className="text-sm font-bold text-foreground mb-1">Wachtwoord aanmaken</p>
                    <p className="text-xs text-foreground/60 mb-4">Kies een wachtwoord om later in te loggen op je account.</p>
                    <Field label="Wachtwoord *">
                      <input 
                        type="password" 
                        className={inputCls} 
                        value={form.password} 
                        onChange={(e) => update("password", e.target.value)} 
                      />
                    </Field>
                  </div>

                  <div className="border-2 border-dashed border-foreground/50 p-5 bg-foreground/[0.02]">
                    <p className="text-sm font-bold text-foreground mb-3">Voorkeuren & Voorwaarden</p>
                    <div className="space-y-3">
                      <Checkbox
                        checked={form.newsletter}
                        onChange={(v) => update("newsletter", v)}
                        label="Ja, ik wil de maandelijkse BAM nieuwsbrief ontvangen."
                      />
                      <Checkbox
                        checked={form.shareConsent}
                        onChange={(v) => update("shareConsent", v)}
                        label="BAM mag mijn deelnames aan events en opleidingen publiek delen ('ik ga naar…')."
                      />
                      <Checkbox
                        checked={form.terms}
                        onChange={(v) => update("terms", v)}
                        label={
                          <>
                            Ik ga akkoord met de <a href="#terms" className="underline">algemene voorwaarden</a> en
                            het <a href="#privacy" className="underline">privacybeleid</a>. *
                          </>
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Section>
          )}

          {/* Nav buttons */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t-2 border-dashed border-foreground/30">
            <button
              onClick={prev}
              disabled={step === 1}
              className="flex items-center gap-2 px-4 py-2.5 text-xs uppercase tracking-widest font-semibold border-2 border-dashed border-foreground/40 text-foreground hover:bg-foreground/5 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Vorige
            </button>
            {step < 5 ? (
              <button
                onClick={next}
                className="flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-widest font-semibold bg-foreground text-background hover:bg-foreground/85 transition-colors"
              >
                Volgende <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                onClick={submit}
                className="flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-widest font-semibold bg-foreground text-background hover:bg-foreground/85 transition-colors"
              >
                Inschrijving verzenden <Check className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

// ===== helpers =====
const inputCls =
  "w-full bg-background border-2 border-dashed border-foreground/30 px-3 py-2 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-foreground/70 transition-colors";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div>
    <p className="text-[10px] uppercase tracking-widest text-foreground/50 mb-1">[ stap ]</p>
    <h2 className="text-lg font-bold text-foreground mb-5">{title}</h2>
    {children}
  </div>
);

const Grid2 = ({ children }: { children: React.ReactNode }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">{children}</div>
);

const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <label className="block">
    <span className="block text-[10px] uppercase tracking-widest text-foreground/50 mb-1.5">{label}</span>
    {children}
  </label>
);

const Summary = ({ title, items }: { title: string; items: [string, string][] }) => (
  <div className="border border-dashed border-foreground/30 p-4">
    <p className="text-[10px] uppercase tracking-widest text-foreground/50 mb-2">{title}</p>
    <dl className="space-y-1">
      {items.map(([k, v]) => (
        <div key={k} className="flex flex-col sm:flex-row sm:justify-between gap-1 text-sm">
          <dt className="text-foreground/60">{k}</dt>
          <dd className="text-foreground/90 sm:text-right">{v}</dd>
        </div>
      ))}
    </dl>
  </div>
);

const Checkbox = ({
  checked, onChange, label,
}: { checked: boolean; onChange: (v: boolean) => void; label: React.ReactNode }) => (
  <label className="flex items-start gap-3 cursor-pointer text-sm text-foreground/80">
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={`shrink-0 w-4 h-4 mt-0.5 border-2 border-dashed flex items-center justify-center ${
        checked ? "bg-foreground border-foreground" : "border-foreground/40"
      }`}
    >
      {checked && <Check className="w-3 h-3 text-background" />}
    </button>
    <span>{label}</span>
  </label>
);

export default InschrijvenSolo;
