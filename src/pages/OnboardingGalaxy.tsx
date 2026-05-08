import { FlowShell, Section, Grid2, Field, Summary, UploadBox, inputCls, useStep } from "@/components/inschrijven/FlowShell";
import { downloadMedewerkersTemplate } from "@/lib/downloadTemplate";

const steps = [
  { n: 1, label: "Bedrijfsfiches" },
  { n: 2, label: "Medewerkers" },
  { n: 3, label: "Klaar" },
];

const industries = [
  "Publisher",
  "Technology Provider",
  "Media Sales House",
  "Creative / Digital Agency",
  "Advertiser",
  "Media Agency",
  "Legal Services",
  "Market Research",
  "Mail Handler",
];

const OnboardingGalaxy = () => {
  const { step, setStep, submitted, setSubmitted } = useStep(3);

  return (
    <FlowShell
      title="Onboarding — Galaxy"
      subtitle="Vervolledig de bedrijfsfiches van je entiteiten en upload de medewerkerslijsten."
      steps={steps}
      step={step}
      setStep={setStep}
      onSubmit={() => setSubmitted(true)}
      submitted={submitted}
      backHref="/"
      backLabel="Terug naar home"
      badgeLabel="[ wireframe — onboarding ]"
      submitLabel="Onboarding afronden"
      successTitle="Je groep staat live"
      successCtaLabel="Naar mijn dashboard"
      successCtaHref="/"
      successContent={
        <p className="text-sm text-foreground/70 leading-relaxed mb-2">
          Bedankt — je entiteiten zijn aangemaakt en je medewerkers ontvangen hun welkomstmail.
          Je dedicated account manager neemt contact op om de personal onboarding sessie te
          plannen.
        </p>
      }
    >
      {step === 1 && (
        <Section title="Bedrijfsfiches per entiteit">
          <p className="text-xs text-foreground/60 mb-5 border-l border-dashed border-foreground/30 pl-3">
            Elke entiteit krijgt een eigen publiek profiel op bam.be. Vul logo, about us, website
            en industry per entiteit in.
          </p>

          <div className="space-y-4">
            {[1, 2].map((i) => (
              <div key={i} className="border border-dashed border-foreground/30 p-4">
                <p className="text-[10px] uppercase tracking-widest text-foreground/50 mb-3">
                  Entiteit {i}
                </p>

                <div className="mb-4">
                  <UploadBox label={`Logo entiteit ${i}`} hint="PNG / SVG, transparante achtergrond" />
                </div>

                <Grid2>
                  <Field label="Brand name *">
                    <input className={inputCls} />
                  </Field>
                  <Field label="Website URL *">
                    <input className={inputCls} placeholder="https://" />
                  </Field>
                  <Field label="Industry *">
                    <select className={inputCls}>
                      <option value="">— kies —</option>
                      {industries.map((ind) => <option key={ind}>{ind}</option>)}
                    </select>
                  </Field>
                </Grid2>

                <div className="mt-3">
                  <Field label="About us *">
                    <textarea
                      rows={3}
                      className={inputCls}
                      placeholder="Korte voorstelling van de entiteit…"
                    />
                  </Field>
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            className="mt-4 px-4 py-2 text-[10px] uppercase tracking-widest border-2 border-dashed border-foreground/40 text-foreground hover:bg-foreground/5 transition-colors"
          >
            + Entiteit toevoegen
          </button>
        </Section>
      )}

      {step === 2 && (
        <Section title="Medewerkers per entiteit">
          <p className="text-xs text-foreground/60 mb-4">
            Upload één Excel per entiteit, of gecombineerd met een kolom 'Entiteit'. Elke
            medewerker ontvangt automatisch een uitnodiging via e-mail.
          </p>

          <div className="border border-dashed border-foreground/30 p-4 mb-4 bg-foreground/[0.02]">
            <p className="text-[10px] uppercase tracking-widest text-foreground/50 mb-2">Stap 1 — Download template</p>
            <p className="text-xs text-foreground/70 mb-3">
              Excel-template met kolommen: Voornaam, Naam, E-mail, Taal, Functie, GSM, Locatie,
              Afdeling, LinkedIn, Entiteit.
            </p>
            <button
              type="button"
              onClick={downloadMedewerkersTemplate}
              className="px-4 py-2 text-[10px] uppercase tracking-widest border-2 border-dashed border-foreground/40 text-foreground hover:bg-foreground/5 transition-colors"
            >
              ↓ Download Excel template
            </button>
          </div>

          <p className="text-[10px] uppercase tracking-widest text-foreground/50 mb-2">Stap 2 — Upload of voeg toe</p>
          <UploadBox label="Ingevulde Excel uploaden" hint="Sleep je bestand hier of klik om te kiezen" />

          <div className="mt-4 flex gap-3 flex-wrap">
            <button type="button" className="px-4 py-2 text-[10px] uppercase tracking-widest border-2 border-dashed border-foreground/40 text-foreground hover:bg-foreground/5 transition-colors">
              + Medewerker handmatig toevoegen
            </button>
            <button type="button" className="px-4 py-2 text-[10px] uppercase tracking-widest border-2 border-dashed border-foreground/40 text-foreground hover:bg-foreground/5 transition-colors">
              Later toevoegen (via account manager)
            </button>
          </div>
        </Section>
      )}

      {step === 3 && (
        <Section title="Klaar om te lanceren">
          <p className="text-xs text-foreground/60 mb-4">
            Controleer en bevestig. Je entiteiten verschijnen onmiddellijk op de BAM-ledenpagina,
            je medewerkers ontvangen automatisch hun welkomstmail.
          </p>
          <div className="space-y-4">
            <Summary title="Bedrijfsfiches" items={[["Aantal entiteiten", "—"], ["Logo's", "—"]]} />
            <Summary title="Medewerkers" items={[["Status", "Worden uitgenodigd"]]} />
          </div>
        </Section>
      )}
    </FlowShell>
  );
};

export default OnboardingGalaxy;
