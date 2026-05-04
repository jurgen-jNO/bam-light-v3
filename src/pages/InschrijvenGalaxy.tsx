import { FlowShell, Section, Grid2, Field, Summary, Checkbox, UploadBox, inputCls, useStep } from "@/components/inschrijven/FlowShell";

const steps = [
  { n: 1, label: "Groep" },
  { n: 2, label: "Entiteiten" },
  { n: 3, label: "Contact" },
  { n: 4, label: "Facturatie" },
  { n: 5, label: "Medewerkers" },
  { n: 6, label: "Onboarding" },
  { n: 7, label: "Bevestig" },
];

const InschrijvenGalaxy = () => {
  const { step, setStep, submitted, setSubmitted } = useStep(7);

  return (
    <FlowShell
      title="Inschrijven — Galaxy lidmaatschap"
      subtitle="Corporate (+250 mdw of meerdere entiteiten) — prijs op maat, looptijd tot 31/12"
      steps={steps}
      step={step}
      setStep={setStep}
      onSubmit={() => setSubmitted(true)}
      submitted={submitted}
      successContent={
        <p className="text-sm text-foreground/70 leading-relaxed mb-2">
          Je aanvraag voor <strong>Galaxy</strong> is ontvangen. Je dedicated account manager
          neemt binnen 2 werkdagen contact op om de groepsstructuur, prijs op maat en personal
          onboarding te bespreken.
        </p>
      }
    >
      {step === 1 && (
        <Section title="Groepsgegevens">
          <Grid2>
            <Field label="Naam moederbedrijf / groep *"><input className={inputCls} /></Field>
            <Field label="Hoofdzetel — land"><input className={inputCls} defaultValue="België" /></Field>
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
          <div className="mt-4"><UploadBox label="Logo van moederbedrijf" /></div>
        </Section>
      )}

      {step === 2 && (
        <Section title="Entiteiten in de groep">
          <p className="text-xs text-foreground/60 mb-4">
            Voeg elke entiteit (BTW-nummer) toe. Elke entiteit kan later eigen profiel, logo en
            medewerkers beheren.
          </p>
          <div className="space-y-3">
            {[1, 2].map((i) => (
              <div key={i} className="border border-dashed border-foreground/30 p-4">
                <p className="text-[10px] uppercase tracking-widest text-foreground/50 mb-3">Entiteit {i}</p>
                <Grid2>
                  <Field label="Brand name"><input className={inputCls} /></Field>
                  <Field label="BTW-nummer"><input className={inputCls} placeholder="BE..." /></Field>
                  <Field label="Land"><input className={inputCls} defaultValue="België" /></Field>
                  <Field label="Aantal medewerkers"><input type="number" className={inputCls} /></Field>
                </Grid2>
              </div>
            ))}
          </div>
          <button type="button" className="mt-4 px-4 py-2 text-[10px] uppercase tracking-widest border-2 border-dashed border-foreground/40 text-foreground hover:bg-foreground/5 transition-colors">
            + Entiteit toevoegen
          </button>
        </Section>
      )}

      {step === 3 && (
        <Section title="Centrale contactpersoon">
          <p className="text-xs text-foreground/60 mb-4 border-l border-dashed border-foreground/30 pl-3">
            Deze persoon krijgt master-login en kan toegang delegeren naar contactpersonen per entiteit.
          </p>
          <Grid2>
            <Field label="Voornaam *"><input className={inputCls} /></Field>
            <Field label="Naam *"><input className={inputCls} /></Field>
            <Field label="Functie"><input className={inputCls} placeholder="bv. CMO, HR Director" /></Field>
            <Field label="E-mail *"><input type="email" className={inputCls} /></Field>
            <Field label="GSM"><input className={inputCls} /></Field>
            <Field label="Taal *">
              <select className={inputCls}><option value="">— kies —</option><option>NL</option><option>FR</option></select>
            </Field>
          </Grid2>
        </Section>
      )}

      {step === 4 && (
        <Section title="Facturatie">
          <p className="text-xs text-foreground/60 mb-4">
            Galaxy-prijs wordt op maat berekend. Kies hoe je gefactureerd wenst te worden.
          </p>
          <div className="space-y-2">
            {["Eén centrale factuur op moederbedrijf", "Aparte factuur per entiteit"].map((opt) => (
              <Checkbox key={opt} checked={false} onChange={() => {}} label={opt} />
            ))}
          </div>
          <div className="mt-6"><Grid2>
            <Field label="Debiteur e-mail *"><input type="email" className={inputCls} /></Field>
            <Field label="PO / referentie"><input className={inputCls} /></Field>
          </Grid2></div>
          <div className="mt-6 border border-dashed border-foreground/30 p-4 bg-foreground/[0.03] text-sm text-foreground/70">
            <p className="text-[10px] uppercase tracking-widest text-foreground/50 mb-2">Indicatieve prijs</p>
            <p>Wordt berekend op basis van aantal entiteiten en medewerkers. Je dedicated account
            manager bezorgt je een offerte op maat.</p>
          </div>
        </Section>
      )}

      {step === 5 && (
        <Section title="Medewerkers per entiteit">
          <p className="text-xs text-foreground/60 mb-4">
            Upload één Excel per entiteit, of gecombineerd met een kolom 'Entiteit'. Elke medewerker
            ontvangt automatisch een uitnodiging via e-mail om zijn profiel te vervolledigen.
          </p>
          <UploadBox
            label="Excel-template uploaden"
            hint="Voornaam, Naam, E-mail, Taal, Functie, GSM, Locatie, Afdeling, LinkedIn"
          />
          <div className="mt-4 flex gap-3 flex-wrap">
            <a
              href="/templates/bam-medewerkers-template.xlsx"
              download
              className="px-4 py-2 text-[10px] uppercase tracking-widest border-2 border-dashed border-foreground/40 text-foreground hover:bg-foreground/5 transition-colors"
            >
              ↓ Download Excel template
            </a>
            <button type="button" className="px-4 py-2 text-[10px] uppercase tracking-widest border-2 border-dashed border-foreground/40 text-foreground hover:bg-foreground/5 transition-colors">
              + Medewerker handmatig toevoegen
            </button>
            <button type="button" className="px-4 py-2 text-[10px] uppercase tracking-widest border-2 border-dashed border-foreground/40 text-foreground hover:bg-foreground/5 transition-colors">
              Later toevoegen (via account manager)
            </button>
          </div>
        </Section>
      )}

      {step === 6 && (
        <Section title="Personal onboarding">
          <p className="text-xs text-foreground/60 mb-4">
            Galaxy bevat standaard een onboarding sessie met BAM. Wanneer past het best?
          </p>
          <Grid2>
            <Field label="Voorkeur datum"><input type="date" className={inputCls} /></Field>
            <Field label="Locatie">
              <select className={inputCls}>
                <option>Bij ons op kantoor</option>
                <option>Bij BAM</option>
                <option>Online (Teams)</option>
              </select>
            </Field>
          </Grid2>
          <div className="mt-4"><Field label="Specifieke wensen">
            <textarea rows={3} className={inputCls} placeholder="bv. focus op think tanks, sponsoring, CMO Club…" />
          </Field></div>
        </Section>
      )}

      {step === 7 && (
        <Section title="Bevestig & verstuur">
          <div className="space-y-4 mb-6">
            <Summary title="Groep" items={[["Naam", "—"], ["Entiteiten", "—"], ["Medewerkers", "—"]]} />
            <Summary title="Contactpersoon" items={[["Naam", "—"], ["E-mail", "—"]]} />
            <Summary title="Facturatie" items={[["Model", "—"]]} />
            <Summary title="Medewerkers" items={[["Status", "Wordt na bevestiging uitgenodigd"]]} />
            <Summary title="Onboarding" items={[["Voorkeur", "—"]]} />
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
