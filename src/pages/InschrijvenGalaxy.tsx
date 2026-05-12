import { FlowShell, Section, Grid2, Field, Summary, Checkbox, inputCls, useStep } from "@/components/inschrijven/FlowShell";

const steps = [
  { n: 1, label: "Registratie" },
  { n: 2, label: "Facturatie" },
  { n: 3, label: "Bevestig" },
];

const InschrijvenGalaxy = () => {
  const { step, setStep, submitted, setSubmitted } = useStep(3);

  return (
    <FlowShell
      title="Word lid — Galaxy"
      subtitle="Corporate (+250 mdw of meerdere entiteiten) — prijs op maat, looptijd tot 31/12"
      steps={steps}
      step={step}
      setStep={setStep}
      onSubmit={() => setSubmitted(true)}
      submitted={submitted}
      successTitle="Welkom bij BAM"
      successCtaLabel="Verder naar onboarding"
      successCtaHref="/onboarding/galaxy"
      successSecondaryLabel="Terug naar home"
      successSecondaryHref="/"
      successContent={
        <>
          <p className="text-sm text-foreground/70 leading-relaxed mb-6">
            Je <strong>Galaxy</strong> aanvraag is geregistreerd. Je dedicated account manager
            neemt binnen 2 werkdagen contact op om je prijs op maat en personal onboarding te
            bespreken. Je ontvangt ook een <strong>onboarding-link</strong> om de bedrijfsfiches
            van je entiteiten en de medewerkerslijsten te beheren.
          </p>
          <div className="border-t border-dashed border-foreground/30 pt-5 text-left text-xs text-foreground/60 space-y-2">
            <p className="uppercase tracking-widest text-foreground/50 text-[10px] mb-2">Volgende stappen</p>
            <p>1. Bevestigingsmail naar de centrale contactpersoon</p>
            <p>2. Account manager neemt contact op voor prijs op maat</p>
            <p>3. Onboarding e-mail om entiteiten & medewerkers in te stellen</p>
          </div>
        </>
      }
    >
      {step === 1 && (
        <Section title="Registratie">
          <p className="text-xs text-foreground/60 mb-4 border-l border-dashed border-foreground/30 pl-3">
            We hebben enkel het hoogstnodige nodig om je aanvraag te starten. Entiteiten,
            bedrijfsfiches en medewerkers regel je nadien in de onboarding.
          </p>
          <Grid2>
            <Field label="Naam moederbedrijf / groep *"><input className={inputCls} /></Field>
            <Field label="BTW-nummer hoofdentiteit *"><input className={inputCls} placeholder="BE0123456789" /></Field>
            <Field label="Aantal medewerkers totaal"><input type="number" className={inputCls} placeholder="bv. 850" /></Field>
            <Field label="Aantal entiteiten / BTW-nrs"><input type="number" className={inputCls} placeholder="bv. 4" /></Field>
            <Field label="Website"><input className={inputCls} placeholder="https://" /></Field>
            <Field label="Industry">
              <select className={inputCls}>
                <option value="">— kies —</option>
                <option>Publisher</option><option>Technology Provider</option>
                <option>Media Sales House</option><option>Creative / Digital Agency</option>
                <option>Advertiser</option><option>Media Agency</option>
                <option>Legal Services</option><option>Market Research</option>
                <option>Mail Handler</option>
              </select>
            </Field>
          </Grid2>
          <div className="mt-6 border-t border-dashed border-foreground/30 pt-5">
            <p className="text-[10px] uppercase tracking-widest text-foreground/50 mb-3">Centrale contactpersoon (master-login)</p>
            <Grid2>
              <Field label="Voornaam *"><input className={inputCls} /></Field>
              <Field label="Naam *"><input className={inputCls} /></Field>
              <Field label="Functie"><input className={inputCls} placeholder="bv. CMO, HR Director" /></Field>
              <Field label="E-mail *"><input type="email" className={inputCls} /></Field>
              <Field label="Taal *">
                <select className={inputCls}><option value="">— kies —</option><option>NL</option><option>FR</option></select>
              </Field>
            </Grid2>
          </div>
        </Section>
      )}

      {step === 2 && (
        <Section title="Facturatie">
          <p className="text-xs text-foreground/60 mb-4">
            Galaxy-prijs wordt op maat berekend. Kies hoe je gefactureerd wenst te worden.
          </p>
          <div className="space-y-2 mb-6">
            {["Eén centrale factuur op moederbedrijf", "Aparte factuur per entiteit"].map((opt) => (
              <Checkbox key={opt} checked={false} onChange={() => {}} label={opt} />
            ))}
          </div>
          <Grid2>
            <Field label="Debiteur e-mail *"><input type="email" className={inputCls} /></Field>
            <Field label="PO / referentie"><input className={inputCls} /></Field>
          </Grid2>
          <div className="mt-6 border border-dashed border-foreground/30 p-4 bg-foreground/[0.03] text-sm text-foreground/70">
            <p className="text-[10px] uppercase tracking-widest text-foreground/50 mb-2">Indicatieve prijs</p>
            <p>Wordt berekend op basis van aantal entiteiten en medewerkers. Je dedicated account
            manager bezorgt je een offerte op maat.</p>
          </div>

          <div className="mt-6 border-2 border-dashed border-destructive/50 bg-destructive/[0.03] p-6">
            <p className="text-[10px] uppercase tracking-widest text-destructive/80 mb-1">[ betaalmethode ]</p>
            <h2 className="text-lg font-bold text-foreground">Enkel via factuur of ook via online betaling?</h2>
          </div>
        </Section>
      )}

      {step === 3 && (
        <Section title="Bevestig & word lid">
          <div className="space-y-4 mb-6">
            <Summary title="Groep" items={[["Naam", "—"], ["Entiteiten", "—"], ["Medewerkers", "—"]]} />
            <Summary title="Contactpersoon" items={[["Naam", "—"], ["E-mail", "—"]]} />
            <Summary title="Facturatie" items={[["Model", "—"]]} />
          </div>
          <div className="border border-dashed border-foreground/30 p-4 bg-foreground/[0.03] mb-6">
            <p className="text-[10px] uppercase tracking-widest text-foreground/50 mb-2">Wat na bevestiging?</p>
            <p className="text-xs text-foreground/70 leading-relaxed">
              Je krijgt een bevestigingsmail én een aparte e-mail met een persoonlijke link naar
              de <strong>onboarding</strong>. Daar voeg je je entiteiten toe (logo, about us) en
              upload je per entiteit de medewerkerslijst.
            </p>
          </div>
          <div className="space-y-3 border-t border-dashed border-foreground/30 pt-5">
            <Checkbox checked={false} onChange={() => {}} label="Ik wens info te krijgen over sponsorship en CMO Club." />
            <Checkbox checked={false} onChange={() => {}} label={<>Ik ga akkoord met de <a href="#terms" className="underline">algemene voorwaarden</a>. *</>} />
          </div>
        </Section>
      )}
    </FlowShell>
  );
};

export default InschrijvenGalaxy;
