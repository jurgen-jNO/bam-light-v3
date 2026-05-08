import { Link } from "react-router-dom";
import { ArrowRight, User, Building2, ArrowLeft } from "lucide-react";
import MainNavigation from "@/components/MainNavigation";
import Footer from "@/components/Footer";

const Option = ({
  to, icon: Icon, title, desc, tag,
}: { to: string; icon: typeof User; title: string; desc: string; tag: string }) => (
  <Link
    to={to}
    className="group relative border-2 border-dashed border-foreground/30 bg-foreground/[0.02] p-8 hover:bg-foreground/[0.05] hover:border-foreground/60 transition-colors flex flex-col"
  >
    <p className="text-[10px] uppercase tracking-widest text-foreground/50 mb-4">{tag}</p>
    <div className="w-14 h-14 border-2 border-dashed border-foreground/40 flex items-center justify-center mb-5">
      <Icon className="w-6 h-6 text-foreground/70" />
    </div>
    <h2 className="text-xl font-bold text-foreground mb-2">{title}</h2>
    <p className="text-sm text-foreground/60 leading-relaxed mb-6">{desc}</p>
    <span className="mt-auto inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-foreground group-hover:gap-3 transition-all">
      Inloggen <ArrowRight className="w-3.5 h-3.5" />
    </span>
  </Link>
);

const Login = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <MainNavigation />
      <main className="flex-1 max-w-[820px] mx-auto w-full px-6 py-12">
        <div className="border-b-2 border-dashed border-foreground/30 pb-6 mb-10">
          <Link
            to="/"
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-foreground/60 hover:text-foreground mb-4 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Terug naar home
          </Link>
          <p className="text-[10px] uppercase tracking-widest text-foreground/50 mb-2">[ login ]</p>
          <h1 className="text-3xl font-bold text-foreground">Fictieve selectie pagina login-types</h1>
          <p className="text-sm text-foreground/60 mt-2">Kies hoe je wil inloggen.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Option
            to="/login/individu"
            icon={User}
            tag="[ persoonlijk ]"
            title="Individu"
            desc="Log in op je persoonlijke profiel — voor Solo, Academy, Youth en Friends leden."
          />
          <Option
            to="/login/bedrijf"
            icon={Building2}
            tag="[ zakelijk ]"
            title="Bedrijf"
            desc="Log in op je bedrijfsaccount — voor Growth en Galaxy leden met medewerkersbeheer."
          />
        </div>

        <p className="text-center text-xs text-foreground/50 mt-10">
          Nog geen account?{" "}
          <Link to="/word-lid" className="text-foreground underline underline-offset-4 hover:no-underline">
            Word lid
          </Link>
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
