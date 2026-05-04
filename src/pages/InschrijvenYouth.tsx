import { FlowShell, Section, Grid2, Field, Summary, Checkbox, UploadBox, inputCls, useStep } from "@/components/inschrijven/FlowShell";

const steps = [
  { n: 1, label: "Persoon" },
  { n: 2, label: "Bewijs -25" },
  { n: 3, label: "Interesses" },
  { n: 4, label: "Bevestig" },
];

const interestOptions = [
  "Digital & Technology", "Sustainability, Ethics & Purpose",
  "Marketing Leadership & Future Skills", "Brand Building",
  "Performance Marketing", "Community Building",
];

const InschrijvenYouth = () => {
  const { step, setStep, submitted, setSubmitted } = useStep(4);

  return (
    <FlowShell
      title="Inschrijven — Youth lidmaatschap"
      subtitle="Gratis voor -25 jarigen — verlengbaar mits geldig bewijs"
      steps={steps}
      step={step}
      setStep={setStep}
      onSubmit={() => setSubmitted(true)}
      submitted={submitted}
      successContent={
        <p className="text-sm text-foreground/70 leading-relaxed mb-2">
          Bedankt! We controleren je leeftijdsbewijs en activeren je <strong>Youth</strong> profiel
          binnen 1 werkdag. Tot zolang krijg je al een <strong>Friends</strong> profiel met toegang
          tot de nieuwsbrief. Welkom bij de Future Marketeers community!
        </p>
      }
    >
      {step === 1 && (
        <Section title="Persoonsgegevens">
          <Grid2>
            <Field label="Voornaam *"><input className={inputCls} /></Field>
            <Field label="Naam *"><input className={inputCls} /></Field>
            <Field label="E-mail *"><input type="email" className={inputCls} /></Field>
            <Field label="GSM"><input className={inputCls} /></Field>
            <Field label="Taal *">
              <select className={inputCls}><option value="">— kies —</option><option>NL</option><option>FR</option></select>
            </Field>
            <Field label="Geboortedatum *"><input type="date" className={inputCls} /></Field>
            <Field label="Opleiding / hogeschool"><input className={inputCls} placeholder="bv. Marketing, Solvay" /></Field>
            <Field label="School / werkgever"><input className={inputCls} /></Field>
          </Grid2>
        </Section>
      )}

      {step === 2 && (
        <Section title="Bewijs van leeftijd">
          <p className="text-xs text-foreground/60 mb-4 border-l border-dashed border-foreground/30 pl-3">
            Upload een foto van je identiteitskaart of studentenkaart waarop je geboortedatum
            zichtbaar is. Andere gegevens (rijksregisternummer, foto) mag je afdekken.
          </p>
          <UploadBox
            label="Foto-ID uploaden"
            hint="JPG, PNG of PDF — max 5MB. Gegevens worden enkel gebruikt voor leeftijdsverificatie."
          />
          <div className="mt-4 border border-dashed border-foreground/30 p-4 text-xs text-foreground/60">
            <p className="uppercase tracking-widest text-foreground/50 mb-2 text-[10px]">Privacy</p>
            <p>Het bewijs wordt enkel gebruikt voor verificatie en daarna verwijderd. Tot
            verificatie krijg je een Friends profiel met beperkte toegang.</p>
          </div>
        </Section>
      )}

      {step === 3 && (
        <Section title="Interessevelden">
          <p className="text-xs text-foreground/60 mb-4">
            Zo personaliseren we events, opleidingen en nieuwsbrief naar wat jou interesseert.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {interestOptions.map((o) => (
              <Checkbox key={o} checked={false} onChange={() => {}} label={o} />
            ))}
          </div>
        </Section>
      )}

      {step === 4 && (
        <Section title="Bevestig & verstuur">
          <div className="space-y-4 mb-6">
            <Summary title="Persoon" items={[["Naam", "—"], ["E-mail", "—"], ["Geboortedatum", "—"]]} />
            <Summary title="Bewijs -25" items={[["Status", "Wordt geverifieerd binnen 1 werkdag"]]} />
            <Summary title="Lidmaatschap" items={[["Type", "Youth — gratis"]]} />
          </div>
          <div className="space-y-3 border-t border-dashed border-foreground/30 pt-5">
            <Checkbox checked={false} onChange={() => {}} label="Stuur me de nieuwsbrief voor studenten & young marketers." />
            <Checkbox checked={false} onChange={() => {}} label="Ik wil deel uitmaken van de Future Marketeers community." />
            <Checkbox checked={false} onChange={() => {}} label={<>Ik ga akkoord met de <a href="#terms" className="underline">algemene voorwaarden</a>. *</>} />
          </div>
        </Section>
      )}
    </FlowShell>
  );
};

export default InschrijvenYouth;
