import { FlowShell, Section, Grid2, Field, Summary, Checkbox, UploadBox, inputCls, useStep } from "@/components/inschrijven/FlowShell";
import { downloadMedewerkersTemplate } from "@/lib/downloadTemplate";

const steps = [
  { n: 1, label: "Moederbedrijf" },
  { n: 2, label: "Entiteiten" },
  { n: 3, label: "Medewerkers" },
  { n: 4, label: "Onboarding" },
  { n: 5, label: "Klaar" },
];

const OnboardingGalaxy = () => {
  const { step, setStep, submitted, setSubmitted } = useStep(5);

  return (
    <FlowShell
      title="Onboarding — Galaxy"
      subtitle="Beheer de bedrijfsfiches van je entiteiten en upload medewerkerslijsten."
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
      successContent={
        <p className="text-sm text-foreground/70 leading-relaxed mb-2">
          Bedankt — je entiteiten zijn aangemaakt en je medewerkers ontvangen hun welkomstmail.
          Je dedicated account manager neemt contact op om de personal onboarding sessie te
          plannen.
        </p>
      }
    >
      {step === 1 && (
        <Section title="Profiel moederbedrijf">
          <Grid2>
            <Field label="Hoofdzetel — adres"><input className={inputCls} /></Field>
            <Field label="Hoofdzetel — land"><input className={inputCls} defaultValue="België" /></Field>
            <Field label="Algemeen e-mailadres"><input className={inputCls} placeholder="info@..." /></Field>
            <Field label="Telefoon"><input className={inputCls} /></Field>
          </Grid2>
          <div className="mt-4">
            <Field label="About us — moederbedrijf">
              <textarea rows={4} className={inputCls} />
            </Field>
          </div>
          <div className="mt-4"><UploadBox label="Logo van moederbedrijf" /></div>
        </Section>
      )}

      {step === 2 && (
        <Section title="Entiteiten in de groep">
          <p className="text-xs text-foreground/60 mb-4">
            Voeg elke entiteit (BTW-nummer) toe met logo en beschrijving. Elke entiteit krijgt
            een eigen publiek profiel op bam.be.
          </p>
          <div className="space-y-3">
            {[1, 2].map((i) => (
              <div key={i} className="border border-dashed border-foreground/30 p-4">
                <p className="text-[10px] uppercase tracking-widest text-foreground/50 mb-3">Entiteit {i}</p>
                <Grid2>
                  <Field label="Brand name"><input className={inputCls} /></Field>
                  <Field label="BTW-nummer"><input className={inputCls} placeholder="BE..." /></Field>
                  <Field label="Aantal medewerkers"><input type="number" className={inputCls} /></Field>
                  <Field label="Website"><input className={inputCls} placeholder="https://" /></Field>
                </Grid2>
                <div className="mt-3">
                  <Field label="About us">
                    <textarea rows={2} className={inputCls} />
                  </Field>
                </div>
                <div className="mt-3"><UploadBox label="Logo entiteit" /></div>
              </div>
            ))}
          </div>
          <button type="button" className="mt-4 px-4 py-2 text-[10px] uppercase tracking-widest border-2 border-dashed border-foreground/40 text-foreground hover:bg-foreground/5 transition-colors">
            + Entiteit toevoegen
          </button>
        </Section>
      )}

      {step === 3 && (
        <Section title="Medewerkers per entiteit">
          <p className="text-xs text-foreground/60 mb-4">
            Upload één Excel per entiteit, of gecombineerd met een kolom 'Entiteit'. Elke
            medewerker ontvangt automatisch een uitnodiging via e-mail.
          </p>
          <UploadBox
            label="Excel-template uploaden"
            hint="Voornaam, Naam, E-mail, Taal, Functie, GSM, Locatie, Afdeling, LinkedIn, Entiteit"
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
              Later toevoegen (via account manager)
            </button>
          </div>
        </Section>
      )}

      {step === 4 && (
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

      {step === 5 && (
        <Section title="Klaar om te lanceren">
          <div className="space-y-4 mb-6">
            <Summary title="Moederbedrijf" items={[["About us", "—"], ["Logo", "—"]]} />
            <Summary title="Entiteiten" items={[["Aantal", "—"]]} />
            <Summary title="Medewerkers" items={[["Status", "Worden uitgenodigd"]]} />
            <Summary title="Onboarding" items={[["Voorkeur", "—"]]} />
          </div>
          <div className="space-y-3 border-t border-dashed border-foreground/30 pt-5">
            <Checkbox checked={false} onChange={() => {}} label="BAM mag deelnames van onze medewerkers publiek delen ('X gaat naar…')." />
          </div>
        </Section>
      )}
    </FlowShell>
  );
};

export default OnboardingGalaxy;
