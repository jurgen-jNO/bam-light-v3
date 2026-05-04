import { FlowShell, Section, Grid2, Field, Summary, Checkbox, UploadBox, inputCls, useStep } from "@/components/inschrijven/FlowShell";

const steps = [
  { n: 1, label: "Bedrijf" },
  { n: 2, label: "Contact" },
  { n: 3, label: "Facturatie" },
  { n: 4, label: "Medewerkers" },
  { n: 5, label: "Bevestig" },
];

const InschrijvenGrowth = () => {
  const { step, setStep, submitted, setSubmitted } = useStep(5);

  return (
    <FlowShell
      title="Inschrijven — Growth lidmaatschap"
      subtitle="€ 3.115 excl. BTW / jaar — alle medewerkers, looptijd tot 31/12 (pro rata eerste jaar)"
      steps={steps}
      step={step}
      setStep={setStep}
      onSubmit={() => setSubmitted(true)}
      submitted={submitted}
      successContent={
        <>
          <p className="text-sm text-foreground/70 leading-relaxed mb-6">
            We hebben je aanvraag voor het <strong>Growth</strong> lidmaatschap goed ontvangen.
            Je ontvangt een bevestigingsmail met de pro rata factuur en een uitnodiging om je
            medewerkerslijst te uploaden. Een onboarding sessie met Fleur is mogelijk op aanvraag.
          </p>
          <div className="border-t border-dashed border-foreground/30 pt-5 text-left text-xs text-foreground/60 space-y-2">
            <p className="uppercase tracking-widest text-foreground/50 text-[10px] mb-2">Volgende stappen</p>
            <p>1. Bevestigingsmail naar de centrale contactpersoon</p>
            <p>2. Pro rata factuur via Exact Online</p>
            <p>3. Upload medewerkers via Excel-template of handmatig</p>
            <p>4. Welkomstmail naar elke medewerker</p>
          </div>
        </>
      }
    >
      {step === 1 && (
        <Section title="Bedrijfsgegevens">
          <Grid2>
            <Field label="Brand name *"><input className={inputCls} /></Field>
            <Field label="Debiteursnaam (factuur)"><input className={inputCls} /></Field>
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
            <Field label="Website URL"><input className={inputCls} placeholder="https://" /></Field>
            <Field label="Algemeen e-mailadres"><input className={inputCls} placeholder="info@bedrijf.be" /></Field>
            <Field label="Telefoon"><input className={inputCls} /></Field>
          </Grid2>
          <div className="mt-4">
            <Field label="About us (max 250 woorden)">
              <textarea rows={4} className={inputCls} />
            </Field>
          </div>
          <div className="mt-4">
            <UploadBox label="Logo (PNG / SVG)" hint="Wordt getoond op je publieke profiel" />
          </div>
        </Section>
      )}

      {step === 2 && (
        <Section title="Centrale contactpersoon">
          <p className="text-xs text-foreground/60 mb-4 border-l border-dashed border-foreground/30 pl-3">
            Deze persoon krijgt login en beheert bedrijfs- en medewerkersgegevens.
          </p>
          <Grid2>
            <Field label="Voornaam *"><input className={inputCls} /></Field>
            <Field label="Naam *"><input className={inputCls} /></Field>
            <Field label="Functie"><input className={inputCls} /></Field>
            <Field label="E-mail *"><input type="email" className={inputCls} /></Field>
            <Field label="GSM"><input className={inputCls} /></Field>
            <Field label="Taal *">
              <select className={inputCls}>
                <option value="">— kies —</option>
                <option>NL</option><option>FR</option>
              </select>
            </Field>
          </Grid2>
        </Section>
      )}

      {step === 3 && (
        <Section title="Facturatie">
          <Grid2>
            <Field label="Debiteur straat + nr"><input className={inputCls} /></Field>
            <Field label="Postcode"><input className={inputCls} /></Field>
            <Field label="Gemeente / stad"><input className={inputCls} /></Field>
            <Field label="Land"><input className={inputCls} defaultValue="België" /></Field>
            <Field label="Factuur e-mail *"><input type="email" className={inputCls} placeholder="boekhouding@..." /></Field>
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

      {step === 4 && (
        <Section title="Medewerkers toevoegen">
          <p className="text-xs text-foreground/60 mb-4">
            Je kan medewerkers nu of later toevoegen. Elke medewerker krijgt een welkomstmail om
            zijn profiel te vervolledigen.
          </p>
          <UploadBox
            label="Excel-template uploaden"
            hint="Voornaam, Naam, Taal, Functie, GSM, E-mail, Locatie tewerkstelling"
          />
          <div className="mt-4 flex gap-3 flex-wrap">
            <button type="button" className="px-4 py-2 text-[10px] uppercase tracking-widest border-2 border-dashed border-foreground/40 text-foreground hover:bg-foreground/5 transition-colors">
              Download template
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

      {step === 5 && (
        <Section title="Bevestig & verstuur">
          <div className="space-y-4 mb-6">
            <Summary title="Bedrijf" items={[["Brand", "—"], ["BTW", "—"], ["Industry", "—"]]} />
            <Summary title="Contactpersoon" items={[["Naam", "—"], ["E-mail", "—"]]} />
            <Summary title="Facturatie" items={[["Bedrag (pro rata)", "€ 1.884,58 incl. BTW"]]} />
            <Summary title="Medewerkers" items={[["Status", "Wordt na bevestiging toegevoegd"]]} />
          </div>
          <div className="space-y-3 border-t border-dashed border-foreground/30 pt-5">
            <Checkbox checked={false} onChange={() => {}} label="Ik wens een personal onboarding sessie met BAM (Fleur)." />
            <Checkbox checked={false} onChange={() => {}} label="BAM mag deelnames van onze medewerkers publiek delen ('X gaat naar…')." />
            <Checkbox checked={false} onChange={() => {}} label={<>Ik ga akkoord met de <a href="#terms" className="underline">algemene voorwaarden</a> en het <a href="#privacy" className="underline">privacybeleid</a>. *</>} />
          </div>
        </Section>
      )}
    </FlowShell>
  );
};

export default InschrijvenGrowth;
