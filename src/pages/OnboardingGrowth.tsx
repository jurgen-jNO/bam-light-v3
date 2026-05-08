import { FlowShell, Section, Grid2, Field, Summary, Checkbox, UploadBox, inputCls, useStep } from "@/components/inschrijven/FlowShell";
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
      successContent={
        <>
          <p className="text-sm text-foreground/70 leading-relaxed mb-4">
            Bedankt — je bedrijfsfiche is opgeslagen en je medewerkers hebben hun welkomstmail
            ontvangen. Vanaf nu krijgen zij toegang tot alle voordelen van je{" "}
            <strong>Growth</strong> lidmaatschap.
          </p>
        </>
      }
    >
      {step === 1 && (
        <Section title="Bedrijfsfiche">
          <p className="text-xs text-foreground/60 mb-4 border-l border-dashed border-foreground/30 pl-3">
            Deze info wordt getoond op je publieke ledenprofiel op bam.be.
          </p>
          <Grid2>
            <Field label="Debiteursnaam (juridisch)"><input className={inputCls} /></Field>
            <Field label="Algemeen e-mailadres"><input className={inputCls} placeholder="info@bedrijf.be" /></Field>
            <Field label="Telefoon"><input className={inputCls} /></Field>
            <Field label="Hoofdzetel — adres"><input className={inputCls} /></Field>
          </Grid2>
          <div className="mt-4">
            <Field label="About us (max 250 woorden)">
              <textarea rows={5} className={inputCls} placeholder="Korte voorstelling van je bedrijf, expertise, USP's…" />
            </Field>
          </div>
          <div className="mt-4">
            <UploadBox label="Logo (PNG / SVG)" hint="Wordt getoond op je publieke profiel" />
          </div>
        </Section>
      )}

      {step === 2 && (
        <Section title="Medewerkers toevoegen">
          <p className="text-xs text-foreground/60 mb-4">
            Elke medewerker krijgt een welkomstmail om zijn profiel te vervolledigen en kan
            inschrijven voor events. Je kan dit later altijd aanvullen.
          </p>
          <UploadBox
            label="Excel-template uploaden"
            hint="Voornaam, Naam, Taal, Functie, GSM, E-mail, Locatie tewerkstelling"
          />
          <div className="mt-4 flex gap-3 flex-wrap">
            <button
              type="button"
              onClick={downloadMedewerkersTemplate}
              className="px-4 py-2 text-[10px] uppercase tracking-widest border-2 border-dashed border-foreground/40 text-foreground hover:bg-foreground/5 transition-colors"
            >
              ↓ Download Excel template
            </button>
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
          <div className="space-y-4 mb-6">
            <Summary title="Bedrijfsfiche" items={[["About us", "—"], ["Logo", "—"]]} />
            <Summary title="Medewerkers" items={[["Aantal", "—"]]} />
          </div>
          <div className="space-y-3 border-t border-dashed border-foreground/30 pt-5">
            <Checkbox checked={false} onChange={() => {}} label="Ik wens een personal onboarding sessie met BAM (Fleur)." />
            <Checkbox checked={false} onChange={() => {}} label="BAM mag deelnames van onze medewerkers publiek delen ('X gaat naar…')." />
          </div>
        </Section>
      )}
    </FlowShell>
  );
};

export default OnboardingGrowth;
