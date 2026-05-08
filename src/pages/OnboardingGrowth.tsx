import { FlowShell, Section, Grid2, Field, Summary, UploadBox, inputCls, useStep } from "@/components/inschrijven/FlowShell";
import { downloadMedewerkersTemplate } from "@/lib/downloadTemplate";

const steps = [
  { n: 1, label: "Bedrijfsfiche" },
  { n: 2, label: "Medewerkers" },
  { n: 3, label: "Klaar" },
];

const OnboardingGrowth = () => {
  const { step, setStep, submitted, setSubmitted } = useStep(3);

  return (
    <FlowShell
      title="Onboarding — Growth"
      subtitle="Vervolledig je bedrijfsfiche en medewerkerslijst. Je kan dit later altijd aanpassen vanuit je dashboard."
      steps={steps}
      step={step}
      setStep={setStep}
      onSubmit={() => setSubmitted(true)}
      submitted={submitted}
      backHref="/"
      backLabel="Terug naar home"
      badgeLabel="[ wireframe — onboarding ]"
      submitLabel="Onboarding afronden"
      successTitle="Je profiel staat live"
      successCtaLabel="Naar mijn dashboard"
      successCtaHref="/"
      successContent={
        <p className="text-sm text-foreground/70 leading-relaxed mb-4">
          Bedankt — je bedrijfsfiche is opgeslagen en je medewerkers hebben hun welkomstmail
          ontvangen. Vanaf nu krijgen zij toegang tot alle voordelen van je{" "}
          <strong>Growth</strong> lidmaatschap.
        </p>
      }
    >
      {step === 1 && (
        <Section title="Bedrijfsfiche">
          <p className="text-xs text-foreground/60 mb-5 border-l border-dashed border-foreground/30 pl-3">
            Deze info wordt getoond op je publieke ledenprofiel op bam.be.
          </p>

          <div className="mb-5">
            <UploadBox label="Logo (PNG / SVG)" hint="Vierkant of horizontaal, transparante achtergrond aanbevolen" />
          </div>

          <Grid2>
            <Field label="Website URL *">
              <input className={inputCls} placeholder="https://bedrijf.be" />
            </Field>
            <Field label="Industry *">
              <select className={inputCls}>
                <option value="">— kies —</option>
                <option>Publisher</option>
                <option>Technology Provider</option>
                <option>Media Sales House</option>
                <option>Creative / Digital Agency</option>
                <option>Advertiser</option>
                <option>Media Agency</option>
                <option>Legal Services</option>
                <option>Market Research</option>
                <option>Mail Handler</option>
              </select>
            </Field>
          </Grid2>

          <div className="mt-5">
            <Field label="About us (max 250 woorden) *">
              <textarea
                rows={6}
                className={inputCls}
                placeholder="Korte voorstelling van je bedrijf, expertise, USP's…"
              />
            </Field>
          </div>
        </Section>
      )}

      {step === 2 && (
        <Section title="Medewerkers toevoegen">
          <p className="text-xs text-foreground/60 mb-4">
            Elke medewerker krijgt een welkomstmail om zijn profiel te vervolledigen en kan
            inschrijven voor events. Je kan dit later altijd aanvullen.
          </p>

          <div className="border border-dashed border-foreground/30 p-4 mb-4 bg-foreground/[0.02]">
            <p className="text-[10px] uppercase tracking-widest text-foreground/50 mb-2">Stap 1 — Download template</p>
            <p className="text-xs text-foreground/70 mb-3">
              Excel-template met de juiste kolommen: Voornaam, Naam, Taal, Functie, GSM, E-mail,
              Locatie tewerkstelling.
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
              Later toevoegen
            </button>
          </div>
        </Section>
      )}

      {step === 3 && (
        <Section title="Klaar om te lanceren">
          <p className="text-xs text-foreground/60 mb-4">
            Controleer en bevestig. Je profiel verschijnt onmiddellijk op de BAM-ledenpagina,
            je medewerkers ontvangen automatisch hun welkomstmail.
          </p>
          <div className="space-y-4">
            <Summary title="Bedrijfsfiche" items={[["Logo", "—"], ["Website", "—"], ["Industry", "—"], ["About us", "—"]]} />
            <Summary title="Medewerkers" items={[["Aantal toegevoegd", "—"]]} />
          </div>
        </Section>
      )}
    </FlowShell>
  );
};

export default OnboardingGrowth;
