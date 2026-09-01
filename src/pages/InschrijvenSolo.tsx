import { useState, useRef } from "react";
import { ArrowLeft, ArrowRight, Check, Database, Mail, Upload, X } from "lucide-react";
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
  // Profiel
  password: string;
  passwordConfirm: string;
  photo: string | null;
  interests: string[];
  // Opt-ins
  newsletter: boolean;
  events: boolean;
  partners: boolean;
  thinktank: boolean;
  terms: boolean;
}


const interestOptions = [
  "Digital & Technology",
  "Sustainability, Ethics & Purpose",
  "Marketing Leadership & Future Skills",
  "Brand Building",
  "Performance Marketing",
  "Community Building",
];

const initialForm: FormState = {
  firstName: "", lastName: "", language: "",
  jobTitle: "", company: "", mobile: "", email: "",
  street: "", number: "", zip: "", city: "", country: "België",
  vat: "", invoiceEmail: "",
  password: "", passwordConfirm: "",
  photo: null, interests: [],
  newsletter: false, terms: false,
};

const InschrijvenSolo = () => {
  const [step, setStep] = useState<Step>(1);
  const [form, setForm] = useState<FormState>(initialForm);
  const [thanks, setThanks] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const update = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  const toggleInterest = (interest: string) => {
    setForm((f) => ({
      ...f,
      interests: f.interests.includes(interest)
        ? f.interests.filter((i) => i !== interest)
        : [...f.interests, interest],
    }));
  };

  // Demo mode: stappen vrij doorklikbaar zonder validatie.
  const next = () => step < 5 && setStep((s) => (s + 1) as Step);
  const prev = () => step > 1 && setStep((s) => (s - 1) as Step);

  const submitRegistration = () => {
    toast.success("Inschrijving ontvangen!");
    setThanks(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const startProfile = () => {
    setThanks(false);
    setStep(5);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const submitProfile = () => {
    setSubmitted(true);
    toast.success("Profiel opgeslagen!");
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        update("photo", reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // ============ THANK YOU SCREEN (na inschrijving, voor profiel) ============
  if (thanks) {
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
              factuur en accountgegevens.
            </p>

            <div className="border-2 border-dashed border-foreground/40 bg-foreground/[0.03] p-5 text-left mb-6">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-foreground/60 shrink-0" />
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-foreground/50 mb-1">Volgende stap</p>
                  <p className="text-sm text-foreground/80">
                    Vervolledig nu meteen je persoonlijk profiel: stel een wachtwoord in, voeg een
                    foto toe en duid je interesses aan. Zo herkennen andere leden je en ontvang je
                    relevante content.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-dashed border-foreground/30 pt-5 text-left text-xs text-foreground/60 space-y-2 mb-6">
              <p className="uppercase tracking-widest text-foreground/50 text-[10px] mb-2">Wat volgt</p>
              <p>1. Bevestigingsmail in je inbox</p>
              <p>2. Factuur via Exact Online</p>
              <p>3. Activatie van je lidmaatschap na betaling</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={startProfile}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-foreground text-background text-xs uppercase tracking-widest font-semibold hover:bg-foreground/85 transition-colors"
              >
                Vervolledig je profiel <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <Link
                to="/"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-dashed border-foreground/40 text-foreground text-xs uppercase tracking-widest font-semibold hover:bg-foreground/5 transition-colors"
              >
                Later vervolledigen
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // ============ FINAL SUCCESS (profiel opgeslagen) ============
  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <MainNavigation />
        <main className="flex-1 max-w-[700px] mx-auto w-full px-6 py-16">
          <div className="border-2 border-dashed border-foreground/40 bg-foreground/[0.02] p-10 text-center">
            <div className="w-12 h-12 mx-auto mb-5 rounded-full border-2 border-dashed border-foreground/50 flex items-center justify-center">
              <Check className="w-6 h-6 text-foreground/70" />
            </div>
            <p className="text-[10px] uppercase tracking-widest text-foreground/40 mb-2">[ klaar ]</p>
            <h1 className="text-2xl font-bold text-foreground mb-3">Je profiel is klaar</h1>
            <p className="text-sm text-foreground/70 leading-relaxed mb-6">
              Welkom bij BAM. Je profiel staat online en je kan meteen aan de slag.
            </p>
            <Link
              to="/"
              className="inline-block mt-2 px-6 py-3 bg-foreground text-background text-xs uppercase tracking-widest font-semibold hover:bg-foreground/85 transition-colors"
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
          <p className="text-xs text-foreground/60 mt-3 border-l-2 border-dashed border-foreground/30 pl-3">
            We vragen nu enkel de noodzakelijke gegevens. Na bevestiging vul je meteen je profiel aan
            zodat andere leden je kunnen ontdekken.
          </p>
        </div>

        <div className="border-2 border-dashed border-foreground/40 bg-foreground/[0.02] p-6 md:p-8">
          {/* STEP 1 — Persoonsgegevens */}
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
                <Field label="GSM *">
                  <input className={inputCls} value={form.mobile} onChange={(e) => update("mobile", e.target.value)} />
                </Field>
                <Field label="Taal *">
                  <select className={inputCls} value={form.language} onChange={(e) => update("language", e.target.value as "NL" | "FR")}>
                    <option value="">— kies —</option>
                    <option value="NL">Nederlands</option>
                    <option value="FR">Frans</option>
                  </select>
                </Field>
                <Field label="Functietitel">
                  <input className={inputCls} value={form.jobTitle} onChange={(e) => update("jobTitle", e.target.value)} />
                </Field>
                <Field label="Bedrijf">
                  <input className={inputCls} value={form.company} onChange={(e) => update("company", e.target.value)} />
                </Field>
              </Grid2>
            </Section>
          )}

          {/* STEP 2 — Adres */}
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
                  <select
                    className={inputCls}
                    value={form.country === "België" ? "België" : "Ander land"}
                    onChange={(e) => update("country", e.target.value === "België" ? "België" : "")}
                  >
                    <option value="België">België</option>
                    <option value="Ander land">Ander land</option>
                  </select>
                </Field>
                {form.country !== "België" && (
                  <Field label="Welk land?">
                    <input
                      className={inputCls}
                      placeholder="bv. Nederland"
                      value={form.country}
                      onChange={(e) => update("country", e.target.value)}
                    />
                  </Field>
                )}
              </Grid2>
            </Section>
          )}

          {/* STEP 3 — Facturatie */}
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

          {/* STEP 4 — Bevestig */}
          {step === 4 && (
            <Section title="Bevestig & verstuur">
              <div className="mb-8">
                <p className="text-[10px] uppercase tracking-widest text-foreground/50 mb-3">[ overzicht ]</p>
                <div className="space-y-4 opacity-90">
                  <Summary title="Persoon" items={[
                    ["Naam", `${form.firstName} ${form.lastName}`],
                    ["E-mail", form.email],
                    ["GSM", form.mobile || "—"],
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

              <div className="border-2 border-dashed border-foreground/50 p-5 bg-foreground/[0.02]">
                <p className="text-sm font-bold text-foreground mb-3">Voorkeuren & Voorwaarden</p>
                <div className="space-y-3">
                  <Checkbox
                    checked={form.newsletter}
                    onChange={(v) => update("newsletter", v)}
                    label="Ja, ik wil de maandelijkse BAM nieuwsbrief ontvangen."
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
            </Section>
          )}

          {/* STEP 5 — Profiel vervolledigen */}
          {step === 5 && (
            <Section title="Vervolledig je profiel">
              <p className="text-xs text-foreground/60 mb-6 border-l border-dashed border-foreground/30 pl-3">
                Stel een wachtwoord in voor je account, voeg een profielfoto toe en duid je
                interesses aan. Zo herkennen andere leden je en ontvang je relevante content.
              </p>

              {/* Login aanmaken */}
              <div className="mb-8">
                <p className="text-[10px] uppercase tracking-widest text-foreground/50 mb-3">[ login aanmaken ]</p>
                <Grid2>
                  <Field label="Wachtwoord *">
                    <input
                      type="password"
                      className={inputCls}
                      placeholder="min. 8 tekens"
                      value={form.password}
                      onChange={(e) => update("password", e.target.value)}
                    />
                  </Field>
                  <Field label="Bevestig wachtwoord *">
                    <input
                      type="password"
                      className={inputCls}
                      placeholder="herhaal wachtwoord"
                      value={form.passwordConfirm}
                      onChange={(e) => update("passwordConfirm", e.target.value)}
                    />
                  </Field>
                </Grid2>
                <p className="text-[11px] text-foreground/50 mt-2">
                  Je e-mail <strong className="text-foreground/70">{form.email || "—"}</strong> wordt je gebruikersnaam.
                </p>
              </div>

              {/* Profielfoto */}
              <div className="mb-8 pt-6 border-t border-dashed border-foreground/20">
                <p className="text-[10px] uppercase tracking-widest text-foreground/50 mb-3">[ profielfoto ]</p>
                <div className="flex items-center gap-5">
                  <div
                    className={`w-28 h-28 shrink-0 border-2 border-dashed flex items-center justify-center overflow-hidden ${
                      form.photo ? "border-foreground/50" : "border-foreground/30 bg-foreground/[0.03]"
                    }`}
                  >
                    {form.photo ? (
                      <img src={form.photo} alt="Profielfoto" className="w-full h-full object-cover" />
                    ) : (
                      <Upload className="w-7 h-7 text-foreground/30" />
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <input
                      type="file"
                      ref={fileInputRef}
                      accept="image/*"
                      onChange={handlePhotoUpload}
                      className="hidden"
                    />
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-widest font-semibold border-2 border-dashed border-foreground/40 text-foreground hover:bg-foreground/5 transition-colors"
                    >
                      <Upload className="w-3.5 h-3.5" />
                      {form.photo ? "Foto wijzigen" : "Foto uploaden"}
                    </button>
                    {form.photo && (
                      <button
                        onClick={() => update("photo", null)}
                        className="flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-widest font-semibold border-2 border-dashed border-destructive/40 text-destructive hover:bg-destructive/5 transition-colors"
                      >
                        <X className="w-3.5 h-3.5" />
                        Verwijderen
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Interesses */}
              <div className="pt-6 border-t border-dashed border-foreground/20">
                <p className="text-[10px] uppercase tracking-widest text-foreground/50 mb-3">[ interesses ]</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {interestOptions.map((interest) => (
                    <button
                      key={interest}
                      onClick={() => toggleInterest(interest)}
                      className={`flex items-center gap-3 p-3 border-2 border-dashed text-left transition-colors ${
                        form.interests.includes(interest)
                          ? "border-foreground bg-foreground/[0.05]"
                          : "border-foreground/30 hover:border-foreground/50"
                      }`}
                    >
                      <div
                        className={`shrink-0 w-4 h-4 border-2 border-dashed flex items-center justify-center ${
                          form.interests.includes(interest)
                            ? "bg-foreground border-foreground"
                            : "border-foreground/40"
                        }`}
                      >
                        {form.interests.includes(interest) && <Check className="w-3 h-3 text-background" />}
                      </div>
                      <span className="text-sm text-foreground/80">{interest}</span>
                    </button>
                  ))}
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
            {step === 4 ? (
              <button
                onClick={submitRegistration}
                className="flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-widest font-semibold bg-foreground text-background hover:bg-foreground/85 transition-colors"
              >
                Inschrijving verzenden <Check className="w-3.5 h-3.5" />
              </button>
            ) : step === 5 ? (
              <button
                onClick={submitProfile}
                className="flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-widest font-semibold bg-foreground text-background hover:bg-foreground/85 transition-colors"
              >
                Profiel opslaan <Check className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                onClick={next}
                className="flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-widest font-semibold bg-foreground text-background hover:bg-foreground/85 transition-colors"
              >
                Volgende <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

      </main>

      <div className="max-w-[1200px] mx-auto w-full px-6 pb-6 flex justify-end">
        <a href="/cms/solo" className="inline-flex items-center justify-center text-foreground/40 hover:text-foreground transition-colors" title="CMS solo-registratie beheer">
          <Database className="w-5 h-5" />
        </a>
      </div>

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

