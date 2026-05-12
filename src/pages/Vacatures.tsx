import MainNavigation from "@/components/MainNavigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Vacatures = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <MainNavigation />
      <main className="flex-1 max-w-[1400px] mx-auto px-6 py-20 w-full">
        <h1 className="text-3xl font-bold mb-8">Job Board (Overzicht)</h1>
        <div className="grid gap-6">
          <Link to="/vacature/1" className="border rounded-lg p-6 hover:border-foreground/50 transition-colors">
            <h2 className="text-xl font-semibold mb-2">Senior Brand Designer</h2>
            <p className="text-muted-foreground">Onshore.be — Gent</p>
          </Link>
          <div className="border border-dashed rounded-lg p-6 text-center text-muted-foreground">
            Meer vacatures wireframe...
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Vacatures;
