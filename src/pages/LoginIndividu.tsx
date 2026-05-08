import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, LogIn } from "lucide-react";
import MainNavigation from "@/components/MainNavigation";
import Footer from "@/components/Footer";
import { inputCls } from "@/components/inschrijven/FlowShell";

const LoginIndividu = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <MainNavigation />
      <main className="flex-1 max-w-[480px] mx-auto w-full px-6 py-12">
        <Link
          to="/login"
          className="flex items-center gap-2 text-xs uppercase tracking-widest text-foreground/60 hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Terug
        </Link>
        <p className="text-[10px] uppercase tracking-widest text-foreground/50 mb-2">[ login — individu ]</p>
        <h1 className="text-3xl font-bold text-foreground mb-8">Inloggen</h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            navigate("/account/individu");
          }}
          className="border-2 border-dashed border-foreground/40 bg-foreground/[0.02] p-6 space-y-4"
        >
          <label className="block">
            <span className="block text-[10px] uppercase tracking-widest text-foreground/50 mb-1.5">E-mail</span>
            <input type="email" className={inputCls} placeholder="naam@voorbeeld.be" />
          </label>
          <label className="block">
            <span className="block text-[10px] uppercase tracking-widest text-foreground/50 mb-1.5">Wachtwoord</span>
            <input type="password" className={inputCls} placeholder="••••••••" />
          </label>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-5 py-3 text-xs uppercase tracking-widest font-semibold bg-foreground text-background hover:bg-foreground/85 transition-colors"
          >
            <LogIn className="w-3.5 h-3.5" /> Inloggen
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default LoginIndividu;
