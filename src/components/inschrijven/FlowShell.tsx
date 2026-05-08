import { useState, ReactNode } from "react";
import { ArrowLeft, ArrowRight, Check, Upload } from "lucide-react";
import { Link } from "react-router-dom";
import MainNavigation from "@/components/MainNavigation";
import Footer from "@/components/Footer";
import { toast } from "sonner";

// =====================================================
// Shared wireframe form primitives — used by all flows
// =====================================================

export const inputCls =
  "w-full bg-background border-2 border-dashed border-foreground/30 px-3 py-2 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-foreground/70 transition-colors";

export const Section = ({ title, children }: { title: string; children: ReactNode }) => (
  <div>
    <p className="text-[10px] uppercase tracking-widest text-foreground/50 mb-1">[ stap ]</p>
    <h2 className="text-lg font-bold text-foreground mb-5">{title}</h2>
    {children}
  </div>
);

export const Grid2 = ({ children }: { children: ReactNode }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">{children}</div>
);

export const Field = ({ label, children }: { label: string; children: ReactNode }) => (
  <label className="block">
    <span className="block text-[10px] uppercase tracking-widest text-foreground/50 mb-1.5">{label}</span>
    {children}
  </label>
);

export const Summary = ({ title, items }: { title: string; items: [string, string][] }) => (
  <div className="border border-dashed border-foreground/30 p-4">
    <p className="text-[10px] uppercase tracking-widest text-foreground/50 mb-2">{title}</p>
    <dl className="space-y-1">
      {items.map(([k, v]) => (
        <div key={k} className="flex flex-col sm:flex-row sm:justify-between gap-1 text-sm">
          <dt className="text-foreground/60">{k}</dt>
          <dd className="text-foreground/90 sm:text-right">{v}</dd>
        </div>
      ))}
    </dl>
  </div>
);

export const Checkbox = ({
  checked, onChange, label,
}: { checked: boolean; onChange: (v: boolean) => void; label: ReactNode }) => (
  <label className="flex items-start gap-3 cursor-pointer text-sm text-foreground/80">
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={`shrink-0 w-4 h-4 mt-0.5 border-2 border-dashed flex items-center justify-center ${
        checked ? "bg-foreground border-foreground" : "border-foreground/40"
      }`}
    >
      {checked && <Check className="w-3 h-3 text-background" />}
    </button>
    <span>{label}</span>
  </label>
);

export const UploadBox = ({ label, hint }: { label: string; hint?: string }) => (
  <div className="border-2 border-dashed border-foreground/30 p-6 text-center bg-foreground/[0.02]">
    <Upload className="w-6 h-6 mx-auto text-foreground/50 mb-2" />
    <p className="text-sm text-foreground/80 font-medium">{label}</p>
    {hint && <p className="text-xs text-foreground/50 mt-1">{hint}</p>}
    <button type="button" className="mt-3 px-4 py-2 text-[10px] uppercase tracking-widest border-2 border-dashed border-foreground/40 text-foreground hover:bg-foreground/5 transition-colors">
      Bestand kiezen
    </button>
  </div>
);

// =====================================================
// Flow shell — header, stepper, panel, nav buttons
// =====================================================

interface FlowShellProps {
  title: string;
  subtitle: string;
  steps: { n: number; label: string }[];
  step: number;
  setStep: (n: number) => void;
  children: ReactNode;
  onSubmit: () => void;
  submitted: boolean;
  successContent: ReactNode;
  backHref?: string;
  backLabel?: string;
  successTitle?: string;
  badgeLabel?: string;
  submitLabel?: string;
}

export const FlowShell = ({
  title, subtitle, steps, step, setStep, children, onSubmit, submitted, successContent,
  backHref = "/word-lid",
  backLabel = "Terug naar pakketten",
  successTitle = "Bedankt voor je aanvraag",
  badgeLabel = "[ wireframe — inschrijving ]",
  submitLabel = "Inschrijving verzenden",
}: FlowShellProps) => {
  const last = steps[steps.length - 1].n;

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <MainNavigation />
        <main className="flex-1 max-w-[700px] mx-auto w-full px-6 py-16">
          <div className="border-2 border-dashed border-foreground/40 bg-foreground/[0.02] p-10 text-center">
            <div className="w-12 h-12 mx-auto mb-5 rounded-full border-2 border-dashed border-foreground/50 flex items-center justify-center">
              <Check className="w-6 h-6 text-foreground/70" />
            </div>
            <p className="text-[10px] uppercase tracking-widest text-foreground/40 mb-2">[ bedankt ]</p>
            <h1 className="text-2xl font-bold text-foreground mb-3">{successTitle}</h1>
            {successContent}
            <Link
              to="/"
              className="inline-block mt-8 px-6 py-3 bg-foreground text-background text-xs uppercase tracking-widest font-semibold hover:bg-foreground/85 transition-colors"
            >
              Terug naar home
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <MainNavigation />
      <main className="flex-1 max-w-[820px] mx-auto w-full px-6 py-12">
        <div className="border-b-2 border-dashed border-foreground/30 pb-6 mb-8">
          <Link
            to={backHref}
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-foreground/60 hover:text-foreground mb-4 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            {backLabel}
          </Link>
          <p className="text-[10px] uppercase tracking-widest text-foreground/50 mb-2">
            {badgeLabel}
          </p>
          <h1 className="text-3xl font-bold text-foreground">{title}</h1>
          <p className="text-sm text-foreground/60 mt-2">{subtitle}</p>
        </div>

        {/* Stepper */}
        <ol className="flex items-center justify-between mb-10 gap-2">
          {steps.map((s, i) => {
            const active = step === s.n;
            const done = step > s.n;
            return (
              <li key={s.n} className="flex-1 flex items-center gap-2">
                <div className="flex flex-col items-center w-full">
                  <button
                    type="button"
                    onClick={() => setStep(s.n)}
                    className={`w-8 h-8 border-2 border-dashed flex items-center justify-center text-xs font-semibold transition-colors ${
                      done
                        ? "bg-foreground text-background border-foreground"
                        : active
                        ? "border-foreground text-foreground bg-foreground/5"
                        : "border-foreground/30 text-foreground/40 hover:border-foreground/60"
                    }`}
                  >
                    {done ? <Check className="w-3.5 h-3.5" /> : s.n}
                  </button>
                  <span
                    className={`mt-2 text-[10px] uppercase tracking-widest text-center ${
                      active ? "text-foreground" : "text-foreground/40"
                    }`}
                  >
                    {s.label}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div className="flex-1 border-t-2 border-dashed border-foreground/25 -mt-5" />
                )}
              </li>
            );
          })}
        </ol>

        {/* Panel */}
        <div className="border-2 border-dashed border-foreground/40 bg-foreground/[0.02] p-6 md:p-8">
          {children}

          <div className="flex items-center justify-between mt-8 pt-6 border-t-2 border-dashed border-foreground/30">
            <button
              onClick={() => step > 1 && setStep(step - 1)}
              disabled={step === 1}
              className="flex items-center gap-2 px-4 py-2.5 text-xs uppercase tracking-widest font-semibold border-2 border-dashed border-foreground/40 text-foreground hover:bg-foreground/5 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Vorige
            </button>
            {step < last ? (
              <button
                onClick={() => setStep(step + 1)}
                className="flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-widest font-semibold bg-foreground text-background hover:bg-foreground/85 transition-colors"
              >
                Volgende <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                onClick={() => { onSubmit(); toast.success("Inschrijving ontvangen!"); }}
                className="flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-widest font-semibold bg-foreground text-background hover:bg-foreground/85 transition-colors"
              >
                Inschrijving verzenden <Check className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

// Helper hook
export const useStep = (max = 5) => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  return {
    step, setStep: (n: number) => setStep(Math.max(1, Math.min(max, n))),
    submitted, setSubmitted,
  };
};
