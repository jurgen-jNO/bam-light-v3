import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Save, Briefcase } from "lucide-react";
import MainNavigation from "@/components/MainNavigation";
import Footer from "@/components/Footer";
import { inputCls, Field, Grid2 } from "@/components/inschrijven/FlowShell";
import { toast } from "sonner";

const VacatureNieuw = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    type: "Voltijds",
    location: "",
    workmode: "Hybride",
    seniority: "Medior",
    department: "",
    salary: "",
    contact: "",
    email: "",
    startDate: "",
    endDate: "",
    intro: "",
    responsibilities: "",
    profile: "",
    offer: "",
  });

  const set = <K extends keyof typeof form>(k: K, v: (typeof form)[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title.trim()) {
      toast.error("Titel is verplicht");
      return;
    }
    toast.success("Vacature aangemaakt ✓");
    setTimeout(() => navigate("/account/bedrijf"), 600);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <MainNavigation />

      <main className="flex-1 max-w-[1100px] mx-auto w-full px-6 py-12">
        <div className="border-b-2 border-dashed border-foreground/30 pb-6 mb-8">
          <p className="text-xs uppercase tracking-widest text-foreground/50 mb-2">
            [ wireframe — vacature aanmaken ]
          </p>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
                <Briefcase className="w-7 h-7" /> Nieuwe vacature
              </h1>
              <p className="text-sm text-foreground/60 mt-2 max-w-xl">
                Vul de gegevens in om een nieuwe vacature te publiceren op het BAM job board.
              </p>
            </div>
            <Link
              to="/account/bedrijf"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs uppercase tracking-widest font-semibold border-2 border-dashed border-foreground/40 text-foreground hover:bg-foreground/5"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Terug
            </Link>
          </div>
        </div>

        <form onSubmit={onSubmit} className="space-y-6">
          <section className="border-2 border-dashed border-foreground/30 bg-foreground/[0.02] p-6">
            <p className="text-[10px] uppercase tracking-widest text-foreground/50 mb-1">[ basis ]</p>
            <h2 className="text-lg font-bold text-foreground mb-5">Vacature info</h2>

            <Grid2>
              <Field label="Titel *">
                <input className={inputCls} value={form.title} onChange={(e) => set("title", e.target.value)} maxLength={120} placeholder="bv. Senior Brand Designer" />
              </Field>
              <Field label="Departement">
                <input className={inputCls} value={form.department} onChange={(e) => set("department", e.target.value)} maxLength={80} placeholder="bv. Marketing" />
              </Field>
              <Field label="Type contract">
                <select className={inputCls} value={form.type} onChange={(e) => set("type", e.target.value)}>
                  <option>Voltijds</option>
                  <option>Deeltijds</option>
                  <option>Stage</option>
                  <option>Freelance</option>
                  <option>Interim</option>
                </select>
              </Field>
              <Field label="Senioriteit">
                <select className={inputCls} value={form.seniority} onChange={(e) => set("seniority", e.target.value)}>
                  <option>Junior</option>
                  <option>Medior</option>
                  <option>Senior</option>
                  <option>Lead</option>
                </select>
              </Field>
              <Field label="Locatie">
                <input className={inputCls} value={form.location} onChange={(e) => set("location", e.target.value)} maxLength={80} placeholder="bv. Gent" />
              </Field>
              <Field label="Werkmodus">
                <select className={inputCls} value={form.workmode} onChange={(e) => set("workmode", e.target.value)}>
                  <option>On-site</option>
                  <option>Hybride</option>
                  <option>Remote</option>
                </select>
              </Field>
              <Field label="Live vanaf">
                <input type="date" className={inputCls} value={form.startDate} onChange={(e) => set("startDate", e.target.value)} />
              </Field>
              <Field label="Contactpersoon">
                <input className={inputCls} value={form.contact} onChange={(e) => set("contact", e.target.value)} maxLength={80} placeholder="Voornaam Naam" />
              </Field>
              <Field label="Sollicitatie URL">
                <input type="url" className={inputCls} value={form.applyUrl} onChange={(e) => set("applyUrl", e.target.value)} maxLength={200} placeholder="https://…" />
              </Field>
              <Field label="Sollicitatie e-mail">
                <input type="email" className={inputCls} value={form.email} onChange={(e) => set("email", e.target.value)} maxLength={120} placeholder="jobs@bedrijf.be" />
              </Field>
            </Grid2>
          </section>

          <section className="border-2 border-dashed border-foreground/30 bg-foreground/[0.02] p-6">
            <p className="text-[10px] uppercase tracking-widest text-foreground/50 mb-1">[ inhoud ]</p>
            <h2 className="text-lg font-bold text-foreground mb-5">Omschrijving</h2>

            <div className="space-y-4">
              <Field label="Korte intro">
                <textarea className={`${inputCls} min-h-[80px]`} value={form.intro} onChange={(e) => set("intro", e.target.value)} maxLength={500} placeholder="Eén alinea over de rol en het bedrijf." />
              </Field>
              <Field label="Verantwoordelijkheden">
                <textarea className={`${inputCls} min-h-[120px]`} value={form.responsibilities} onChange={(e) => set("responsibilities", e.target.value)} maxLength={2000} placeholder="• …&#10;• …" />
              </Field>
              <Field label="Profiel">
                <textarea className={`${inputCls} min-h-[120px]`} value={form.profile} onChange={(e) => set("profile", e.target.value)} maxLength={2000} placeholder="• …&#10;• …" />
              </Field>
              <Field label="Wat we bieden">
                <textarea className={`${inputCls} min-h-[120px]`} value={form.offer} onChange={(e) => set("offer", e.target.value)} maxLength={2000} placeholder="• …&#10;• …" />
              </Field>
            </div>
          </section>

          <div className="flex items-center justify-end gap-3">
            <Link
              to="/account/bedrijf"
              className="px-5 py-2.5 text-xs uppercase tracking-widest font-semibold border-2 border-dashed border-foreground/40 text-foreground hover:bg-foreground/5"
            >
              Annuleren
            </Link>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-widest font-semibold bg-foreground text-background hover:bg-foreground/85"
            >
              <Save className="w-3.5 h-3.5" /> Vacature publiceren
            </button>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  );
};

export default VacatureNieuw;
