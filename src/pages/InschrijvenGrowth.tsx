import { FlowShell, Section, Grid2, Field, Summary, Checkbox, inputCls, useStep } from "@/components/inschrijven/FlowShell";

const steps = [
  { n: 1, label: "Registratie" },
  { n: 2, label: "Facturatie" },
  { n: 3, label: "Bevestig" },
];

const InschrijvenGrowth = () => {
  const { step, setStep, submitted, setSubmitted } = useStep(3);

  return (
    <FlowShell
      title="Word lid — Growth"
      subtitle="€ 3.115 excl. BTW / jaar — alle medewerkers, looptijd tot 31/12 (pro rata eerste jaar)"
      steps={steps}
      step={step}
      setStep={setStep}
      onSubmit={() => setSubmitted(true)}
      submitted={submitted}
      successTitle="Welkom bij BAM"
      successContent={
        <>
          <p className="text-sm text-foreground/70 leading-relaxed mb-6">
            Je <strong>Growth</strong> lidmaatschap is geactiveerd. We sturen een bevestigingsmail
            met je pro rata factuur, plus een <strong>persoonlijke link naar de onboarding</strong>{" "}
            om je bedrijfsfiche en medewerkers in te stellen.
          </p>
          <div className="border-t border-dashed border-foreground/30 pt-5 text-left text-xs text-foreground/60 space-y-2">
            <p className="uppercase tracking-widest text-foreground/50 text-[10px] mb-2">Volgende stappen</p>
            <p>1. Bevestigings- en facturatiemail naar de centrale contactpersoon</p>
            <p>2. Onboarding e-mail met link om je bedrijfsfiche te vervolledigen</p>
            <p>3. Medewerkers toevoegen (Excel of handmatig)</p>
          </div>
        </>
      }
    >
      {step === 1 && (
        <Section title="Registratie">
          <p className="text-xs text-foreground/60 mb-4 border-l border-dashed border-foreground/30 pl-3">
            We hebben enkel het hoogstnodige nodig om je lidmaatschap te starten. De rest
            (about us, logo, medewerkers) regel je nadien in de onboarding.
          </p>
          <Grid2>
            <Field label="Brand name *"><input className={inputCls} /></Field>
            <Field label="BTW-nummer *"><input className={inputCls} placeholder="BE0123456789" /></Field>
            <Field label="Industry">
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
            <Field label="Website"><input className={inputCls} placeholder="https://" /></Field>
          </Grid2>
          <div className="mt-6 border-t border-dashed border-foreground/30 pt-5">
            <p className="text-[10px] uppercase tracking-widest text-foreground/50 mb-3">Centrale contactpersoon</p>
            <Grid2>
              <Field label="Voornaam *"><input className={inputCls} /></Field>
              <Field label="Naam *"><input className={inputCls} /></Field>
              <Field label="E-mail *"><input type="email" className={inputCls} /></Field>
              <Field label="Taal *">
                <select className={inputCls}>
                  <option value="">— kies —</option>
                  <option>NL</option><option>FR</option>
                </select>
              </Field>
            </Grid2>
          </div>
        </Section>
      )}

      {step === 2 && (
        <Section title="Facturatie">
          <Grid2>
            <Field label="Debiteursnaam"><input className={inputCls} /></Field>
            <Field label="Factuur e-mail *"><input type="email" className={inputCls} placeholder="boekhouding@..." /></Field>
            <Field label="Straat + nr"><input className={inputCls} /></Field>
            <Field label="Postcode"><input className={inputCls} /></Field>
            <Field label="Gemeente"><input className={inputCls} /></Field>
            <Field label="Land"><input className={inputCls} defaultValue="België" /></Field>
            <Field label="PO / referentie (optioneel)"><input className={inputCls} /></Field>
          </Grid2>
          <div className="mt-6 border border-dashed border-foreground/30 p-4 bg-foreground/[0.03]">
            <p className="text-[10px] uppercase tracking-widest text-foreground/50 mb-2">Te betalen (pro rata)</p>
            <div className="flex justify-between text-sm text-foreground/80 py-1"><span>Growth lidmaatschap (jaar)</span><span>€ 3.115,00</span></div>
            <div className="flex justify-between text-sm text-foreground/80 py-1"><span>Pro rata aandeel (vb. 6/12)</span><span>€ 1.557,50</span></div>
            <div className="flex justify-between text-sm text-foreground/80 py-1"><span>BTW (21%)</span><span>€ 327,08</span></div>
            <div className="flex justify-between text-sm font-semibold text-foreground border-t border-dashed border-foreground/30 pt-2 mt-2"><span>Totaal incl. BTW</span><span>€ 1.884,58</span></div>
          </div>
        </Section>
      )}

      {step === 3 && (
        <Section title="Bevestig & word lid">
          <div className="space-y-4 mb-6">
            <Summary title="Bedrijf" items={[["Brand", "—"], ["BTW", "—"]]} />
            <Summary title="Contactpersoon" items={[["Naam", "—"], ["E-mail", "—"]]} />
            <Summary title="Facturatie" items={[["Bedrag (pro rata)", "€ 1.884,58 incl. BTW"]]} />
          </div>
          <div className="border border-dashed border-foreground/30 p-4 bg-foreground/[0.03] mb-6">
            <p className="text-[10px] uppercase tracking-widest text-foreground/50 mb-2">Wat na bevestiging?</p>
            <p className="text-xs text-foreground/70 leading-relaxed">
              Je krijgt onmiddellijk een bevestigingsmail met je factuur en een aparte e-mail met
              een persoonlijke link naar de <strong>onboarding</strong>. Daar vul je je
              bedrijfsfiche aan (about us, logo) en upload je je medewerkerslijst.
            </p>
          </div>
          <div className="space-y-3 border-t border-dashed border-foreground/30 pt-5">
            <Checkbox checked={false} onChange={() => {}} label={<>Ik ga akkoord met de <a href="#terms" className="underline">algemene voorwaarden</a> en het <a href="#privacy" className="underline">privacybeleid</a>. *</>} />
          </div>
        </Section>
      )}
    </FlowShell>
  );
};

export default InschrijvenGrowth;
