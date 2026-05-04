import { FlowShell, Section, Grid2, Field, Summary, Checkbox, UploadBox, inputCls, useStep } from "@/components/inschrijven/FlowShell";

const steps = [
  { n: 1, label: "Persoon" },
  { n: 2, label: "Onderwijs" },
  { n: 3, label: "Facturatie" },
  { n: 4, label: "Interesses" },
  { n: 5, label: "Bevestig" },
];

const interestOptions = [
  "Digital & Technology", "Sustainability, Ethics & Purpose",
  "Marketing Leadership & Future Skills", "Brand Building",
  "Performance Marketing", "Community Building",
];

const InschrijvenAcademy = () => {
  const { step, setStep, submitted, setSubmitted } = useStep(5);

  return (
    <FlowShell
      title="Inschrijven — Academy lidmaatschap"
      subtitle="€ 160 incl. BTW / jaar — voor docenten, 12 maanden vanaf intekendatum"
      steps={steps}
      step={step}
      setStep={setStep}
      onSubmit={() => setSubmitted(true)}
      submitted={submitted}
      successContent={
        <p className="text-sm text-foreground/70 leading-relaxed mb-2">
          Bedankt voor je aanvraag voor het <strong>Academy</strong> lidmaatschap. Na verificatie
          van je onderwijsinstelling ontvang je een bevestigingsmail met factuur. Daarna ben je
          welkom op events, in onze think tanks en op marketing.be.
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
            <Field label="Gender">
              <select className={inputCls}><option value="">— kies —</option><option>M</option><option>V</option><option>X</option><option>Andere</option><option>Liever niet</option></select>
            </Field>
            <Field label="Geboortedatum"><input type="date" className={inputCls} /></Field>
          </Grid2>
        </Section>
      )}

      {step === 2 && (
        <Section title="Onderwijs">
          <p className="text-xs text-foreground/60 mb-4 border-l border-dashed border-foreground/30 pl-3">
            We vragen om je band met een onderwijsinstelling te bevestigen voor je Academy-tarief.
          </p>
          <Grid2>
            <Field label="Onderwijsinstelling *"><input className={inputCls} placeholder="bv. KU Leuven" /></Field>
            <Field label="Functie / titel"><input className={inputCls} placeholder="Docent, Professor, Lector…" /></Field>
            <Field label="Vakgebied / opleiding"><input className={inputCls} placeholder="Marketing, Communicatie…" /></Field>
            <Field label="Instellings-e-mail"><input type="email" className={inputCls} placeholder="naam@kuleuven.be" /></Field>
          </Grid2>
          <div className="mt-4">
            <UploadBox
              label="Bewijs van tewerkstelling (optioneel)"
              hint="Bv. badge, contract, schoolmail, screenshot van facultaire pagina"
            />
          </div>
        </Section>
      )}

      {step === 3 && (
        <Section title="Facturatiegegevens">
          <Grid2>
            <Field label="Straat + nr *"><input className={inputCls} /></Field>
            <Field label="Postcode *"><input className={inputCls} /></Field>
            <Field label="Gemeente *"><input className={inputCls} /></Field>
            <Field label="Land"><input className={inputCls} defaultValue="België" /></Field>
            <Field label="Factuur op naam van"><input className={inputCls} placeholder="Persoon of instelling" /></Field>
            <Field label="BTW (indien instelling)"><input className={inputCls} /></Field>
          </Grid2>
          <div className="mt-6 border border-dashed border-foreground/30 p-4 bg-foreground/[0.03]">
            <p className="text-[10px] uppercase tracking-widest text-foreground/50 mb-2">Te betalen</p>
            <div className="flex justify-between text-sm font-semibold text-foreground"><span>Academy lidmaatschap (12m)</span><span>€ 160,00 incl. BTW</span></div>
          </div>
        </Section>
      )}

      {step === 4 && (
        <Section title="Interessevelden">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {interestOptions.map((o) => (
              <Checkbox key={o} checked={false} onChange={() => {}} label={o} />
            ))}
          </div>
        </Section>
      )}

      {step === 5 && (
        <Section title="Bevestig & verstuur">
          <div className="space-y-4 mb-6">
            <Summary title="Persoon" items={[["Naam", "—"], ["E-mail", "—"]]} />
            <Summary title="Onderwijs" items={[["Instelling", "—"], ["Functie", "—"]]} />
            <Summary title="Facturatie" items={[["Bedrag", "€ 160,00 incl. BTW"]]} />
          </div>
          <div className="space-y-3 border-t border-dashed border-foreground/30 pt-5">
            <Checkbox checked={false} onChange={() => {}} label="Ja, ik wil de maandelijkse BAM nieuwsbrief ontvangen." />
            <Checkbox checked={false} onChange={() => {}} label="Ik ben geïnteresseerd om gastdocent te zijn bij BAM Academy." />
            <Checkbox checked={false} onChange={() => {}} label={<>Ik ga akkoord met de <a href="#terms" className="underline">algemene voorwaarden</a>. *</>} />
          </div>
        </Section>
      )}
    </FlowShell>
  );
};

export default InschrijvenAcademy;
