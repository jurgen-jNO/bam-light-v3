import { FlowShell, Section, Grid2, Field, Summary, Checkbox, inputCls, useStep } from "@/components/inschrijven/FlowShell";

const steps = [
  { n: 1, label: "Profiel" },
  { n: 2, label: "Interesses" },
  { n: 3, label: "Bevestig" },
];

const interestOptions = [
  "Digital & Technology", "Sustainability, Ethics & Purpose",
  "Marketing Leadership & Future Skills", "Brand Building",
  "Performance Marketing", "Community Building",
];

const InschrijvenFriends = () => {
  const { step, setStep, submitted, setSubmitted } = useStep(3);

  return (
    <FlowShell
      title="Maak een gratis Friends profiel"
      subtitle="Gratis profiel — nieuwsbrief en publieke content. Upgrade later naar Solo, Youth of Academy."
      steps={steps}
      step={step}
      setStep={setStep}
      onSubmit={() => setSubmitted(true)}
      submitted={submitted}
      successContent={
        <p className="text-sm text-foreground/70 leading-relaxed mb-2">
          Welkom bij BAM <strong>Friends</strong>. Je profiel is aangemaakt en je ontvangt onze
          maandelijkse nieuwsbrief. Wil je toegang tot events, opleidingen en think tanks? Upgrade
          dan naar een betalend lidmaatschap.
        </p>
      }
    >
      {step === 1 && (
        <Section title="Maak je profiel aan">
          <Grid2>
            <Field label="Voornaam *"><input className={inputCls} /></Field>
            <Field label="Naam *"><input className={inputCls} /></Field>
            <Field label="E-mail *"><input type="email" className={inputCls} /></Field>
            <Field label="Taal *">
              <select className={inputCls}><option value="">— kies —</option><option>NL</option><option>FR</option></select>
            </Field>
            <Field label="Gender">
              <select className={inputCls}>
                <option value="">— kies —</option>
                <option value="M">M</option>
                <option value="V">V</option>
                <option value="X">X</option>
                <option value="Andere">Andere</option>
                <option value="Liever niet">Zeg ik liever niet</option>
              </select>
            </Field>
            <Field label="Geboortedatum"><input type="date" className={inputCls} /></Field>
            <Field label="Functie / opleiding"><input className={inputCls} /></Field>
            <Field label="Bedrijf / school"><input className={inputCls} /></Field>
          </Grid2>
        </Section>
      )}

      {step === 2 && (
        <Section title="Interessevelden">
          <p className="text-xs text-foreground/60 mb-4">
            Zo sturen we je relevante content en aankondigingen.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {interestOptions.map((o) => (
              <Checkbox key={o} checked={false} onChange={() => {}} label={o} />
            ))}
          </div>
        </Section>
      )}

      {step === 3 && (
        <Section title="Bevestig & verstuur">
          <div className="space-y-4 mb-6">
            <Summary title="Profiel" items={[["Naam", "—"], ["E-mail", "—"]]} />
          </div>
          <div className="space-y-3 border-t border-dashed border-foreground/30 pt-5">
            <Checkbox checked={false} onChange={() => {}} label="Stuur me de maandelijkse BAM nieuwsbrief." />
            <Checkbox checked={false} onChange={() => {}} label={<>Ik ga akkoord met de <a href="#terms" className="underline">algemene voorwaarden</a> en het <a href="#privacy" className="underline">privacybeleid</a>. *</>} />
          </div>
          <div className="mt-6 border border-dashed border-foreground/30 p-4 text-xs text-foreground/60">
            <p className="uppercase tracking-widest text-foreground/50 mb-2 text-[10px]">Tip</p>
            <p>Ben je jonger dan 25? Kies dan <a href="/inschrijven/youth" className="underline">Youth</a> voor gratis toegang tot 10+ events per jaar.</p>
          </div>
        </Section>
      )}
    </FlowShell>
  );
};

export default InschrijvenFriends;
