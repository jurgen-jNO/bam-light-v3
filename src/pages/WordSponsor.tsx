import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { toast } from "sonner";
import MainNavigation from "@/components/MainNavigation";
import Footer from "@/components/Footer";

type SponsorTier =
  | "Education"
  | "BAM Goes West"
  | "Event"
  | "Structural"
  | "Key Partner"
  | "IAB"
  | "IAB MIXX Awards"
  | "Think Tank"
  | "CMO"
  | "Students / Young Professionals"
  | "Varia";

const tiers: SponsorTier[] = [
  "Education",
  "BAM Goes West",
  "Event",
  "Structural",
  "Key Partner",
  "IAB",
  "IAB MIXX Awards",
  "Think Tank",
  "CMO",
  "Students / Young Professionals",
  "Varia",
];

const sponsorSchema = z.object({
  voornaam: z.string().trim().min(1, "Voornaam is verplicht").max(100),
  achternaam: z.string().trim().min(1, "Achternaam is verplicht").max(100),
  functie: z.string().trim().min(1, "Functie is verplicht").max(150),
  email: z.string().trim().email("Ongeldig e-mailadres").max(255),
  telefoon: z.string().trim().min(6, "Telefoonnummer is te kort").max(30),
  bedrijf: z.string().trim().min(1, "Bedrijfsnaam is verplicht").max(150),
  url: z
    .string()
    .trim()
    .min(1, "Website is verplicht")
    .max(255)
    .refine(
      (v) => /^(https?:\/\/)?[\w.-]+\.[a-z]{2,}.*$/i.test(v),
      "Ongeldige URL",
    ),
  tier: z.enum([
    "Education",
    "BAM Goes West",
    "Event",
    "Structural",
    "Key Partner",
    "IAB",
    "IAB MIXX Awards",
    "Think Tank",
    "CMO",
    "Students / Young Professionals",
    "Varia",
  ]),
  bericht: z.string().trim().max(1000).optional().or(z.literal("")),
});

type FormState = {
  voornaam: string;
  achternaam: string;
  functie: string;
  email: string;
  telefoon: string;
  bedrijf: string;
  url: string;
  tier: SponsorTier | "";
  bericht: string;
};

const initialState: FormState = {
  voornaam: "",
  achternaam: "",
  functie: "",
  email: "",
  telefoon: "",
  bedrijf: "",
  url: "",
  tier: "",
  bericht: "",
};

const inputClasses =
  "w-full bg-background border-2 border-dashed border-foreground/30 px-3 py-2 text-sm text-foreground outline-none hover:border-foreground/60 focus:border-foreground transition-colors placeholder:text-foreground/40";

const labelClasses =
  "block text-[10px] uppercase tracking-widest text-foreground/50 mb-1.5";

const WordSponsor = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = sponsorSchema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors: Partial<Record<keyof FormState, string>> = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0] as keyof FormState;
        if (!fieldErrors[k]) fieldErrors[k] = issue.message;
      }
      setErrors(fieldErrors);
      toast.error("Vul alle verplichte velden correct in.");
      return;
    }
    setSubmitting(true);
    // Frontend-only: geen backend / geen e-mailverzending
    setTimeout(() => {
      toast.success("Bedankt! Je sponsoraanvraag werd geregistreerd.");
      setSubmitting(false);
      navigate("/sponsors");
    }, 400);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <MainNavigation />

      <main className="flex-1 max-w-[900px] mx-auto w-full px-6 py-12">
        {/* Wireframe header */}
        <div className="border-b-2 border-dashed border-foreground/30 pb-6 mb-10">
          <p className="text-xs uppercase tracking-widest text-foreground/50 mb-2">
            [ wireframe — word sponsor ]
          </p>
          <h1 className="text-3xl font-bold text-foreground">Word sponsor</h1>
          <p className="text-sm text-foreground/60 mt-2 max-w-xl">
            Steun de Belgische marketing community. Vul onderstaand formulier
            in en het BAM-team neemt contact met je op.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8" noValidate>
          {/* Persoonsgegevens */}
          <section className="border-2 border-dashed border-foreground/40 bg-foreground/[0.02] p-5">
            <p className="text-[10px] uppercase tracking-widest text-foreground/50 mb-4">
              [ sectie — persoonsgegevens ]
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClasses}>Voornaam *</label>
                <input
                  className={inputClasses}
                  value={form.voornaam}
                  onChange={(e) => update("voornaam", e.target.value)}
                  maxLength={100}
                />
                {errors.voornaam && (
                  <p className="text-[11px] text-destructive mt-1">{errors.voornaam}</p>
                )}
              </div>
              <div>
                <label className={labelClasses}>Achternaam *</label>
                <input
                  className={inputClasses}
                  value={form.achternaam}
                  onChange={(e) => update("achternaam", e.target.value)}
                  maxLength={100}
                />
                {errors.achternaam && (
                  <p className="text-[11px] text-destructive mt-1">{errors.achternaam}</p>
                )}
              </div>
              <div className="sm:col-span-2">
                <label className={labelClasses}>Functie *</label>
                <input
                  className={inputClasses}
                  value={form.functie}
                  onChange={(e) => update("functie", e.target.value)}
                  maxLength={150}
                  placeholder="bv. Marketing Director"
                />
                {errors.functie && (
                  <p className="text-[11px] text-destructive mt-1">{errors.functie}</p>
                )}
              </div>
              <div>
                <label className={labelClasses}>E-mail *</label>
                <input
                  type="email"
                  className={inputClasses}
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  maxLength={255}
                />
                {errors.email && (
                  <p className="text-[11px] text-destructive mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <label className={labelClasses}>Telefoon *</label>
                <input
                  type="tel"
                  className={inputClasses}
                  value={form.telefoon}
                  onChange={(e) => update("telefoon", e.target.value)}
                  maxLength={30}
                  placeholder="+32 ..."
                />
                {errors.telefoon && (
                  <p className="text-[11px] text-destructive mt-1">{errors.telefoon}</p>
                )}
              </div>
            </div>
          </section>

          {/* Bedrijfsgegevens */}
          <section className="border-2 border-dashed border-foreground/40 bg-foreground/[0.02] p-5">
            <p className="text-[10px] uppercase tracking-widest text-foreground/50 mb-4">
              [ sectie — bedrijf ]
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClasses}>Bedrijfsnaam *</label>
                <input
                  className={inputClasses}
                  value={form.bedrijf}
                  onChange={(e) => update("bedrijf", e.target.value)}
                  maxLength={150}
                />
                {errors.bedrijf && (
                  <p className="text-[11px] text-destructive mt-1">{errors.bedrijf}</p>
                )}
              </div>
              <div>
                <label className={labelClasses}>Website (URL) *</label>
                <input
                  type="url"
                  className={inputClasses}
                  value={form.url}
                  onChange={(e) => update("url", e.target.value)}
                  maxLength={255}
                  placeholder="https://..."
                />
                {errors.url && (
                  <p className="text-[11px] text-destructive mt-1">{errors.url}</p>
                )}
              </div>
              <div className="sm:col-span-2">
                <label className={labelClasses}>Bericht (optioneel)</label>
                <textarea
                  rows={4}
                  className={`${inputClasses} resize-none`}
                  value={form.bericht}
                  onChange={(e) => update("bericht", e.target.value)}
                  maxLength={1000}
                  placeholder="Vertel ons kort wat je interesseert in een sponsorship..."
                />
                {errors.bericht && (
                  <p className="text-[11px] text-destructive mt-1">{errors.bericht}</p>
                )}
              </div>
            </div>
          </section>

          {/* Submit */}
          <div className="flex items-center justify-between flex-wrap gap-4 border-t-2 border-dashed border-foreground/30 pt-6">
            <p className="text-[11px] uppercase tracking-widest text-foreground/40">
              [ aanvraag wordt naar BAM verstuurd ]
            </p>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => navigate("/sponsors")}
                className="px-5 py-3 border-2 border-dashed border-foreground/40 text-foreground text-xs uppercase tracking-widest font-semibold hover:border-foreground transition-colors"
              >
                ← Terug
              </button>
              <button
                type="submit"
                disabled={submitting}
                className="px-6 py-3 bg-foreground text-background text-xs uppercase tracking-widest font-semibold hover:bg-foreground/85 transition-colors disabled:opacity-50"
              >
                {submitting ? "Versturen..." : "Verstuur aanvraag →"}
              </button>
            </div>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  );
};

export default WordSponsor;
